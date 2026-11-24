/* Normalize numbered headings after rendering or language changes.
   This changes presentation only, never answer values, IDs or event handlers. */
(()=>{
 const selector='.question > h3,.task > h3,.quiz-q > h4,.quiz-q > h3';
 function upgrade(root){
  for(const el of root.querySelectorAll(selector)){
   if(el.querySelector(':scope > .lesson-number'))continue;
   const text=el.textContent;
   const match=text.match(/^\s*(\d+)[.)]\s+([\s\S]+)$/)||text.match(/^\s*((?:مهمة|تدريب|Task|Exercise)\s+)(\d+)\s*[·:.\-]\s*([\s\S]+)$/i);
   if(!match)continue;
   const numbered=match.length===3;const num=numbered?match[1]:match[2];const body=numbered?match[2]:match[1]+match[3];
   const badge=document.createElement('span');badge.className='lesson-number';badge.textContent=num;
   const content=document.createElement('span');content.className='lesson-number-text';content.textContent=body;
   el.classList.add('lesson-number-heading');el.replaceChildren(badge,content);
  }
 }
 let queued=false;
 const observer=new MutationObserver(()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;upgrade(document)})});
 upgrade(document);observer.observe(document.body,{childList:true,subtree:true,characterData:true});
})();
