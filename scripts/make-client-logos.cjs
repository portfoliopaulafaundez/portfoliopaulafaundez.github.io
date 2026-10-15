// Logos de clientes a 4x, con los tonos muy oscuros pasados a blanco para que se lean sobre el fondo oscuro: los que traen transparencia se usan tal cual; los de fondo blanco
// pasan por "color to alpha" (quita el blanco sin dejar halo). Tamaño normalizado por área.
const sharp=require('sharp');const U='/root/.claude/uploads/ccdef723-80f2-5ab0-8ed0-8b7688a84ae9/';
const L=[['bayer','fbe5ce34-Logo_Bayer.svg'],['iberdrola','d4b71b3e-fotonoticia_20230524105440_9999.webp'],['best-arctic','8c2907fd-images.jpeg'],['ikea','e29f204e-Ikea_logo.svg.webp'],['mastercard','42d8ac31-Mastercard-logo.svg.webp'],['burger-king','2800b22b-Burger_King_2020.svg'],['sanofi','e0d8a58d-sanofi-logo-16.png'],['novartis','c3294601-Novartis-Logo.svg.webp'],['honeywell','ff3d8236-Honeywell_logo.svg.webp'],['novocure','20cd2a27-novocure-logo-vector.png'],['santen','8555b2d6-Santen_Pharmaceutical_company_logo.svg.webp'],['pharmamar','1b1c09e9-pharmamar.jpg'],['minor-hotels','5c31bae4-Minor_Hotels_Logo_New.png'],['dermalogica','aa8c3d96-Dermalogica_Logo.png']];
const AREA=2600,MAXW=150,MAXH=46,X=4,out={};
(async()=>{for(const [n,f] of L){
 const meta=await sharp(U+f).metadata();
 let rgba=await sharp(U+f,{density:600}).ensureAlpha().raw().toBuffer({resolveWithObject:true});
 let {data,info}=rgba;
 // ¿tiene transparencia real?
 let transparent=0;for(let i=3;i<data.length;i+=4) if(data[i]<250) transparent++;
 const hasAlpha=transparent>info.width*info.height*0.05;
 if(!hasAlpha){ for(let i=0;i<data.length;i+=4){const r=data[i],g=data[i+1],b=data[i+2];
   const a=Math.min(1,Math.max(255-r,255-g,255-b)/35); if(a<=0.15){data[i+3]=0;continue;}
   const k=v=>Math.max(0,Math.min(255,Math.round((v-255*(1-a))/a)));data[i]=k(r);data[i+1]=k(g);data[i+2]=k(b);data[i+3]=Math.round(a*255);} }
 // Versión "invertida" para fondo oscuro: los tonos casi negros o azul marino pasan a blanco, como en las versiones oficiales sobre fondo oscuro.
 for(let i=0;i<data.length;i+=4){ if(!data[i+3]) continue; const r=data[i],g=data[i+1],b=data[i+2];
   const lum=0.2126*r+0.7152*g+0.0722*b; if(lum<80 && (Math.max(r,g,b)-Math.min(r,g,b)<150 || (lum<60 && r<40 && b>r && b>g))){ data[i]=data[i+1]=data[i+2]=245; } }
 const clean=await sharp(data,{raw:{width:info.width,height:info.height,channels:4}}).png().toBuffer();
 const trimmed=await sharp(clean).trim({threshold:1}).png().toBuffer();
 const tm=await sharp(trimmed).metadata();const r=tm.width/tm.height;
 let w=Math.sqrt(AREA*r),h=w/r;if(w>MAXW){w=MAXW;h=w/r}if(h>MAXH){h=MAXH;w=h*r}
 w=Math.round(w);h=Math.round(h);
 await sharp(trimmed).resize(w*X,h*X,{kernel:'lanczos3',fit:'fill'}).png({compressionLevel:9,palette:false}).toFile(process.argv[2]+'/'+n+'.png');
 out[n]=[w,h,hasAlpha?'alpha':'c2a',tm.width+'x'+tm.height];}
 console.log(JSON.stringify(out));})();
