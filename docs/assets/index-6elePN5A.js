(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const g=(e=["C","D","H","S"],r=["A","J","Q","K"])=>{if(e.length===0||r.length===0)throw"No se han proporcionado los tipos de carta";let t=[];for(let n=2;n<=10;n++)for(let o of e)t.push(n+o);for(let n of e)for(let o of r)t.push(o+n);return t.sort(()=>Math.random()-.5)},p=e=>{if(e.length===0)throw"No hay cartas en el deck";return e.pop()},b=e=>{const r=e.substring(0,e.length-1);return isNaN(r)?r==="A"?11:10:r*1},d=(e,r,t)=>{if(!e)throw new Error("No se han proporcionado los puntos mínimos");if(!r)throw new Error("No se ha proporcionado el deck");let n=0;do{const o=p(r);n=m(t,o,t.length-1),h(o,t.length-1)}while(n<e&&e<=21);L(t)},u=document.querySelector.bind(document),l=document.querySelectorAll.bind(document),v=l("small"),m=(e,r,t)=>(e[t]+=b(r),v[t].innerText=e[t],e[t]),y=l(".divCartas"),h=(e,r)=>{const t=document.createElement("img");t.src=`assets/cartas/${e}.png`,t.classList.add("carta"),y[r].append(t)},L=e=>{const[r,t]=e;setTimeout(()=>{t===r?alert("Nadie gana :("):r>21?alert("Computadora gana"):t>21?alert("Jugador Gana"):alert("Computadora Gana")},100)};(()=>{let e=[],r=[];const t=u("#btnPedir"),n=u("#btnDetener"),o=u("#btnNuevo"),a=l("small"),i=l(".divCartas"),f=(c=2)=>{e=g(),r=[];for(let s=0;s<c;s++)r.push(0);a.forEach(s=>s.innerText=0),i.forEach(s=>s.innerHTML=""),t.disabled=!1,n.disabled=!1};return t.addEventListener("click",()=>{const c=p(e),s=m(r,c,0);h(c,0),s>21?(console.warn("Lo siento mucho, perdiste"),t.disabled=!0,n.disabled=!0,d(s,e)):s===21&&(console.warn("21, genial!"),t.disabled=!0,n.disabled=!0,d(s,e))}),n.addEventListener("click",()=>{t.disabled=!0,n.disabled=!0,d(r[0],e,r)}),o.addEventListener("click",()=>f(2)),{nuevoJuego:f}})();
