import{a as d,S as m,i as a}from"./assets/vendor-BMHzDZyJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(i){const t="50815044-d1b29e7254804b3149c32accf",o="https://pixabay.com/api/",n=new URLSearchParams({key:t,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return d(`${o}?${n}`).then(e=>e.data).catch(e=>{console.log(e)})}const u=document.querySelector(".loader"),p=document.querySelector(".gallery");function y(i){return i.map(t=>` <li class="gallery-item">
        <a class="image-item" href = "${t.largeImageURL}">
        <img src = "${t.webformatURL}" alt = "${t.tags}" />
        <ul class ="description">
        <li>
        <p><b>Likes</b> ${t.likes}</p>
        </li>
        <li> 
        <p> <b>Views</b> ${t.views}</p>
        </li>
        <li>
         <p> <b>Comments</b> ${t.comments}</p>
        </li>
        <li>
         <p> <b>Downloads</b> ${t.downloads}</p>
        </li>
        </ul>
        </a>
    </li>
`).join("")}function h(){u.classList.remove("hidden")}function l(){u.classList.add("hidden")}function g(){p.innerHTML=""}const b=new m(".image-item",{captionsData:"alt",captionDelay:250}),L=document.querySelector(".form"),c=document.querySelector(".input-field");document.querySelector(".loader");const S=document.querySelector(".gallery");L.addEventListener("submit",w);function w(i){i.preventDefault(),g(),h();const t=c.value.trim();if(t===""){a.warning({message:"Please enter a search query.",position:"topRight"}),l();return}f(t).then(o=>{if(l(),o.hits.length===0)return a.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const n=y(o.hits);S.insertAdjacentHTML("beforeend",n),b.refresh()}).catch(o=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.log(o)}).finally(()=>{l(),c.value=""})}
//# sourceMappingURL=index.js.map
