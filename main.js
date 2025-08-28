/* ====== Typed Effect ====== */
const roles = ["Aspiring AI & ML Engineer","C & Python Developer","Problem Solver","Hackathon Enthusiast"];
let i = 0, j = 0, deleting = false;
const typedEl = document.getElementById("typed"), cursor = document.querySelector(".cursor");
function typeLoop(){
  const current = roles[i % roles.length];
  if(!deleting){ typedEl.textContent = current.slice(0, ++j); if(j===current.length){ deleting=true; setTimeout(typeLoop,1000); return;} }
  else{ typedEl.textContent=current.slice(0,--j); if(j===0){ deleting=false; i++; } }
  setTimeout(typeLoop,deleting?40:70);
}
typeLoop(); setInterval(()=>cursor.classList.toggle("hide"),500);

/* ====== Mobile Nav ====== */
document.getElementById("hamburger").addEventListener("click",()=>{ 
  const nav=document.getElementById("navLinks"); 
  nav.style.display=nav.style.display==="flex"?"none":"flex"; 
});

/* ====== Theme Toggle ====== */
const themeToggle=document.getElementById("themeToggle");
themeToggle.addEventListener("click",()=>{document.body.classList.toggle("light"); themeToggle.textContent=document.body.classList.contains("light")?"☀️":"🌙";});

/* ====== Reveal on Scroll ====== */
const observer=new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("visible"); });},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

/* ====== Counters ====== */
function animateCounters(){ document.querySelectorAll(".stat-num").forEach(el=>{ const target=+el.dataset.count; let c=0; const step=Math.max(1,Math.ceil(target/50)); const t=setInterval(()=>{ c+=step; if(c>=target){c=target;clearInterval(t);} el.textContent=c;},25); });}
window.addEventListener("load",animateCounters);

/* ====== Year ====== */
document.getElementById("year").textContent=new Date().getFullYear();

/* ====== Projects ====== */
const projects=[{title:"Library Management System",desc:"Console/GUI app to manage books & students (C).",stack:["C","File I/O"],tag:"C"},
{title:"Quiz Game",desc:"Python console quiz with MCQs and scoring.",stack:["Python","CLI"],tag:"Python"},
{title:"Contact Management System",desc:"Add, search, update & delete contacts (C).",stack:["C","Strings","Arrays"],tag:"C"}];
const projectGrid=document.getElementById("projectGrid");
projects.forEach(p=>{ const card=document.createElement("div"); card.className="card glass project reveal visible"; card.innerHTML=`<span class="badge">${p.tag}</span><h4>${p.title}</h4><p>${p.desc}</p><div class="stack">${p.stack.map(s=>`<span class="chip">${s}</span>`).join("")}</div>`; projectGrid.appendChild(card);});
const certs = [
 
  { 
    title: "System Thinking", 
    org: "LinkedIn Learning", 
    img: "certs/system-thinking.jpg", 
    link: "certs/system-thinking.jpg" 
  },
  { 
    title: "Find Motivation to Learn What Matters", 
    org: "LinkedIn Learning", 
    img: "certs/motivation.jpg", 
    link: "certs/motivation.jpg" 
  },
  { 
    title: "Google Ads for Beginners", 
    org: "Coursera", 
    img: "certs/google-ads.jpg", 
    link: "certs/google-ads.jpg" 
  },
  { 
    title: "How to Create a Jira SCRUM Project", 
    org: "Coursera", 
    img: "certs/jira.jpg", 
    link: "certs/jira.jpg" 
  },
  { 
    title: "Decoding Data: Insights & Impact through Analytics (2025-26)", 
    org: "IBM SkillsBuild", 
    img: "certs/ibm.jpg", 
    link: "certs/ibm.jpg" 
  }
];


const certGrid=document.getElementById("certGrid");
certs.forEach(c=>{ const card=document.createElement("div"); card.className="card glass cert-card reveal visible"; card.innerHTML=`<img src="${c.img}" alt="${c.title}" class="cert-thumb"/><div class="cert-info"><h4>${c.title}</h4><p>${c.org}</p><a href="${c.link}" target="_blank" class="btn outline">View Certificate</a></div>`; certGrid.appendChild(card);});

/* ====== Contact Form ====== */
function handleSubmit(e){e.preventDefault();const d=Object.fromEntries(new FormData(e.target).entries());document.getElementById("formMsg").textContent=`Thanks, ${d.name}! I’ll reply at ${d.email}.`;e.target.reset();return false;}
window.handleSubmit=handleSubmit;
