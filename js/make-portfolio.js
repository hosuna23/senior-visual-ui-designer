(function(){
'use strict';
const canvas=document.getElementById('make-canvas');if(!canvas)return;
const projects={
 adi:{title:'Distinct brands.\nOne shared framework.',category:'WEB DESIGN SYSTEMS',description:'Responsive Figma components bring consistency to ADI’s vendor brand pages, while keeping each brand’s personality intact.',name:'ADI / Resideo',image:'assets/adi-bosch-desktop.webp',alt:'ADI responsive vendor brand page',href:'adi-resideo.html',tags:['Figma','Responsive UI','Components'],color:'#e9dfff'},
 ws:{title:'One idea.\nAn entire brand ecosystem.',category:'BRAND + DIGITAL',description:'A new visual identity extends across the website, collateral, presentations and an internal Brand Center designed to help teams use it.',name:'Working Solutions',image:'assets/ws-new-collateral.webp',alt:'Working Solutions brand identity and stationery',href:'working-solutions.html',tags:['Identity','Web','Brand systems'],color:'#ffe0c5'},
 cs:{title:'Three audiences.\nA clearer way forward.',category:'WEBSITE EXPERIENCE',description:'Research, audience-based navigation and responsive design create a clearer path for clinicians, employers and corporate job seekers.',name:'CareerStaff',image:'assets/cs-new-clinicians.webp',alt:'CareerStaff audience-focused website design',href:'careerstaff.html',tags:['Research','Navigation','Performance'],color:'#d5ecff'}
};
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{
 const p=projects[button.dataset.project];
 document.querySelectorAll('[data-project]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 document.getElementById('make-title').textContent=p.title;
 document.getElementById('make-category').textContent=p.category;
 document.getElementById('make-description').textContent=p.description;
 document.getElementById('make-window-name').textContent=p.name;
 const im=document.getElementById('make-project-image');im.src=p.image;im.alt=p.alt;
 document.getElementById('make-open').href=p.href;
 const tags=document.getElementById('make-tags');tags.replaceChildren(...p.tags.map(t=>{const el=document.createElement('span');el.textContent=t;return el;}));
 canvas.style.background=p.color;
}));
})();
