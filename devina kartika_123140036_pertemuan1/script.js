const STORAGE_KEY='tasks',el=id=>document.getElementById(id)
let tasks=load()
const [list,form,title,course,deadline,idEl]=['tasksList','taskForm','title','course','deadline','taskId'].map(el)

function load(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||[]}catch{return []}}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(tasks));render()}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}
function fmt(d){return new Date(d).toLocaleDateString()}
function isToday(d){const x=new Date(d),n=new Date();return x.toDateString()==n.toDateString()}

function render(){
  const q=el('searchInput').value.toLowerCase(),st=el('statusFilter').value,cf=el('courseFilter').value
  const courses=[...new Set(tasks.map(t=>t.course))].sort()
  el('courseFilter').innerHTML='<option value="all">Semua mata kuliah</option>'+courses.map(c=>`<option>${c}</option>`).join('')
  const filtered=tasks.filter(t=>
    (st==='complete'?t.completed:st==='incomplete'?!t.completed:true)&&
    (cf==='all'||t.course===cf)&&
    (!q||t.title.toLowerCase().includes(q)||t.course.toLowerCase().includes(q))
  ).sort((a,b)=>new Date(a.deadline)-new Date(b.deadline))

  list.innerHTML=filtered.length?filtered.map(t=>`
    <div class="task">
      <div><h3 class="${t.completed?'completed':''}">${t.title}</h3>
      <div class="meta">${t.course} • deadline: ${fmt(t.deadline)}</div></div>
      <div class="actions">
        <button class="btn-ghost" data-a="toggle" data-id="${t.id}">${t.completed?'Batal':'Selesai'}</button>
        <button class="btn-ghost" data-a="edit" data-id="${t.id}">Edit</button>
        <button class="btn-ghost" data-a="del" data-id="${t.id}">Hapus</button>
      </div></div>`).join(''):'<div class="muted">Tidak ada tugas.</div>'
  
  el('incompleteCount').textContent=tasks.filter(t=>!t.completed).length
  el('totalCount').textContent=tasks.length
  el('todayCount').textContent=tasks.filter(t=>isToday(t.deadline)&&!t.completed).length
}

form.onsubmit=e=>{
  e.preventDefault()
  const t=title.value.trim(),c=course.value.trim(),d=deadline.value
  clearErr()
  const err=validate({t,c,d});if(Object.keys(err).length)return showErr(err)
  if(idEl.value){tasks=tasks.map(x=>x.id===idEl.value?{...x,title:t,course:c,deadline:d}:x)}
  else tasks.push({id:uid(),title:t,course:c,deadline:d,completed:false,createdAt:new Date().toISOString()})
  save();form.reset();idEl.value=''
}

list.onclick=e=>{
  const b=e.target.closest('button');if(!b)return
  const id=b.dataset.id,a=b.dataset.a
  if(a==='toggle')tasks=tasks.map(x=>x.id===id?{...x,completed:!x.completed}:x)
  else if(a==='edit'){const t=tasks.find(x=>x.id===id);Object.assign(title,{value:t.title}),Object.assign(course,{value:t.course}),Object.assign(deadline,{value:t.deadline}),idEl.value=t.id;window.scrollTo({top:0,behavior:'smooth'})}
  else if(a==='del'&&confirm('Hapus tugas ini?'))tasks=tasks.filter(x=>x.id!==id)
  save()
}

function validate({t,c,d}){
  const e={};const td=new Date();td.setHours(0,0,0,0)
  if(!t)e.t='Nama tugas wajib.'
  if(!c)e.c='Mata kuliah wajib.'
  if(!d)e.d='Deadline wajib.';else{const dd=new Date(d);if(dd<td)e.d='Deadline minimal hari ini.'}
  return e
}
function showErr(e){if(e.t){s('titleError',e.t)}if(e.c){s('courseError',e.c)}if(e.d){s('deadlineError',e.d)}}
function clearErr(){['titleError','courseError','deadlineError'].forEach(i=>s(i,''))}
function s(id,txt){el(id).style.display=txt?'block':'none';el(id).textContent=txt}

['searchInput','statusFilter','courseFilter'].forEach(i=>el(i).addEventListener('input',()=>render()))
el('clearFilters').onclick=()=>{el('searchInput').value='';el('statusFilter').value='all';el('courseFilter').value='all';render()}
el('cancelEdit').onclick=()=>{form.reset();idEl.value='';clearErr()}

if(!localStorage.getItem(STORAGE_KEY)){
  tasks=[{id:uid(),title:'Laporan Praktikum Jaringan',course:'Jaringan Komputer',deadline:new Date(Date.now()+864e5).toISOString().slice(0,10),completed:false,createdAt:new Date().toISOString()}]
  save()
}
render()
