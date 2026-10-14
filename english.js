'use strict';
const lessons = [
  {title:'Street Art in London',items:[
    {prompt:'How has Shoreditch changed over time?',answer:'Shoreditch was once a neighborhood for poor workers, but today it is one of the trendiest parts of London, filled with impressive street art.',translation:'질문: 쇼디치는 시간이 지나면서 어떻게 변했나요?\n답변: 쇼디치는 한때 가난한 노동자들이 살던 동네였지만, 오늘날에는 인상적인 거리 예술로 가득한 런던에서 가장 유행을 선도하는 지역 중 하나입니다.'},
    {prompt:"Why is STIK's artwork meaningful?",answer:"STIK's paintings encourage people to think about the changes in Shoreditch over time.",translation:'질문: STIK의 작품은 왜 의미가 있나요?\n답변: STIK의 그림은 사람들이 시간이 지나면서 쇼디치에 일어난 변화에 대해 생각하도록 장려합니다.'},
    {prompt:'What clues does STIK give viewers to help them understand his painting?',answer:'STIK asks viewers to focus on the eyes of the three figures. They may look like nothing more than dots, but they help us tell which figure symbolizes Shoreditch\'s past, present, or future.',translation:'질문: STIK은 관람객들이 그의 그림을 이해하도록 어떤 단서를 주나요?\n답변: STIK은 관람객들에게 세 인물의 눈에 집중하라고 합니다. 눈은 그저 점처럼 보일 수 있지만, 어떤 인물이 쇼디치의 과거, 현재 또는 미래를 상징하는지 구별하는 데 도움을 줍니다.'},
    {prompt:'4번 · 문장 암기 (제시된 질문 없음)',answer:'Street art is not limited to walls. In Muswell Hill, visitors can spot paintings on pieces of chewing gum by looking down. This shows that street art can appear in unexpected places.',translation:'거리 예술은 벽에만 한정되지 않습니다. 머스웰 힐에서는 방문객들이 아래를 내려다보면 껌 조각 위의 그림을 발견할 수 있습니다. 이는 거리 예술이 예상치 못한 장소에 나타날 수 있음을 보여 줍니다.'},
    {prompt:"How do Ben Wilson's gum paintings create a connection with people?",answer:"Ben Wilson's gum paintings often include personal messages from the people he meets on the street. Among the paintings, one painting is a birthday greeting for someone special.",translation:'질문: 벤 윌슨의 껌 그림은 어떻게 사람들과 유대감을 형성하나요?\n답변: 벤 윌슨의 껌 그림에는 그가 거리에서 만나는 사람들의 개인적인 메시지가 자주 담깁니다. 그중 한 그림은 특별한 사람을 위한 생일 축하 메시지입니다.'}
  ]},
  {title:'Dr. Schofield & Korea',items:[
    {prompt:'nation, celebrate, annual, announce',answer:'The National Liberation Day of Korea is a public holiday celebrated annually on 15 August. It marks the anniversary of the announcement that Japan would unconditionally surrender.',translation:'제시 단어: 국가, 축하하다, 매년의, 발표하다\n대한민국의 광복절은 매년 8월 15일에 기념하는 공휴일입니다. 일본이 무조건 항복할 것이라는 발표를 기념하는 날입니다.'},
    {prompt:'Why was Schofield fond of his Korean name?',answer:'Schofield cherished his Korean name since it resembled his real name and carried a good meaning.',translation:'질문: 스코필드는 왜 자신의 한국 이름을 좋아했나요?\n답변: 스코필드는 자신의 한국 이름이 실제 이름과 비슷하고 좋은 뜻을 담고 있었기 때문에 소중히 여겼습니다.'},
    {prompt:'3번 · 문장 암기 (제시된 질문 없음)',answer:'Since his goal was to teach medicine in Korean, Dr. Schofield immediately began to learn the language on arriving in Korea.',translation:'그의 목표는 한국어로 의학을 가르치는 것이었기 때문에, 스코필드 박사는 한국에 도착하자마자 한국어를 배우기 시작했습니다.'},
    {prompt:'What did Dr. Schofield do during the March 1st Movement?',answer:'He photographed the March 1st Movement, wrote an article describing the historic event, and submitted both the article and the photographs to newspapers abroad.',translation:'질문: 스코필드 박사는 3·1 운동 당시 무엇을 했나요?\n답변: 그는 3·1 운동을 촬영하고, 그 역사적인 사건을 설명하는 기사를 썼으며, 기사와 사진을 모두 해외 신문사에 보냈습니다.'},
    {prompt:'Why did Dr. Schofield have to return to Canada in 1920?',answer:'He was forced to return to Canada because the Japanese police closely monitored him due to his support for the Korean independence movement.',translation:'질문: 스코필드 박사는 왜 1920년에 캐나다로 돌아가야 했나요?\n답변: 한국 독립운동을 지지했기 때문에 일본 경찰이 그를 면밀히 감시했고, 그는 캐나다로 돌아갈 수밖에 없었습니다.'},
    {prompt:'What did Dr. Schofield do after he returned to Korea in 1958?',answer:'He continued to work hard to help Koreans, particularly poor students throughout the rest of his life.',translation:'질문: 스코필드 박사는 1958년에 한국으로 돌아온 후 무엇을 했나요?\n답변: 그는 여생 동안 한국인들, 특히 가난한 학생들을 돕기 위해 계속 힘써 일했습니다.'}
  ]}
];
const $=s=>document.querySelector(s),KEY='english-memory-v1';
let state={lesson:0,item:0,mode:'read',hints:false,translation:false,done:{},drafts:{}};
try{const saved=JSON.parse(localStorage.getItem(KEY));if(saved&&typeof saved==='object'){if(Number.isInteger(saved.lesson)&&lessons[saved.lesson])state.lesson=saved.lesson;if(Number.isInteger(saved.item)&&lessons[state.lesson].items[saved.item])state.item=saved.item;if(['read','blank','write'].includes(saved.mode))state.mode=saved.mode;for(const k of ['hints','translation'])if(typeof saved[k]==='boolean')state[k]=saved[k];for(const k of ['done','drafts'])if(saved[k]&&typeof saved[k]==='object'&&!Array.isArray(saved[k]))state[k]=saved[k];}}catch{}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{$('#storage').textContent='브라우저 저장이 제한돼요. 현재 화면에서는 계속 연습할 수 있어요.';}}
function el(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
function button(text,action,cls){const n=el('button',text,cls);n.onclick=action;return n;}
const id=()=>`${state.lesson}-${state.item}`;
const norm=s=>s.normalize('NFC').toLowerCase().replace(/[\s\p{P}]/gu,'');
function firstLetterHint(text){return text.replace(/[A-Za-z0-9]+/g,word=>word[0]+'○'.repeat(word.length-1));}
function tokens(text){return text.match(/[A-Za-z0-9]+(?:['’][A-Za-z0-9]+)*|[^A-Za-z0-9]+/g)||[];}
function editDistance(a,b){let row=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){const next=[i];for(let j=1;j<=b.length;j++)next[j]=Math.min(next[j-1]+1,row[j]+1,row[j-1]+(a[i-1]===b[j-1]?0:1));row=next;}return row[b.length];}
function render(){
 const lesson=lessons[state.lesson],item=lesson.items[state.item];
 $('#books').replaceChildren(...lessons.map((l,i)=>{const n=button(l.title,()=>{state.lesson=i;state.item=0;save();render();},i===state.lesson?'active':'');n.setAttribute('aria-pressed',i===state.lesson);return n;}));
 $('#parts').replaceChildren(...lesson.items.map((_,i)=>{const n=button('',()=>{state.item=i;save();render();},i===state.item?'active':'');n.append(el('span',String(i+1).padStart(2,'0'),'part-number'),el('span',state.done[`${state.lesson}-${i}`]===true?'완료':'연습','part-status'));n.setAttribute('aria-label',`${i+1}번 문항`);if(i===state.item)n.setAttribute('aria-current','step');return n;}));
 const count=lessons.reduce((sum,l,i)=>sum+l.items.filter((_,j)=>state.done[`${i}-${j}`]===true).length,0);$('#progress').textContent=`암기 완료 ${count} / 11`;$('#bar').value=count;
 $('#title').textContent=lesson.title;$('#count').textContent=`${state.item+1} / ${lesson.items.length}`;
 $('#modes').replaceChildren(...[['read','① 읽기'],['blank','② 빈칸 연습'],['write','③ 안 보고 쓰기']].map(([mode,label])=>{const n=button(label,()=>{state.mode=mode;save();render();},mode===state.mode?'active':'');n.setAttribute('aria-pressed',mode===state.mode);return n;}));
 $('#prompt').textContent=item.prompt;$('#translation').textContent=item.translation;$('#translation').hidden=!state.translation;$('#translation-toggle').checked=state.translation;$('#hint-toggle').checked=state.hints;$('#done').checked=state.done[id()]===true;$('#prev').disabled=state.item===0;$('#next').disabled=state.item===lesson.items.length-1;
 $('#content').replaceChildren();$('#feedback').replaceChildren();
 const hint=el('div',firstLetterHint(item.answer),'hint');hint.lang='en';hint.hidden=!state.hints;hint.setAttribute('aria-label','답변 첫 글자 힌트');$('#content').append(hint);
 $('#hint-toggle').onchange=e=>{state.hints=e.target.checked;hint.hidden=!state.hints;save();};
 if(state.mode==='read'){$('#instruction').textContent='답변을 소리 내어 읽고, 한 문장씩 익혀 보세요.';const passage=el('div',item.answer,'passage');passage.lang='en';$('#content').append(passage,button('빈칸으로 확인하기 →',()=>{state.mode='blank';save();render();},'primary'));}
 else if(state.mode==='blank')renderBlanks(item);else renderWriting(item);
}
function renderBlanks(item){
 $('#instruction').textContent='답변의 빈칸을 채워 보세요. 질문과 제시 단어는 암기 대상에 포함되지 않아요.';
 const passage=el('div',undefined,'passage'),inputs=[],saved=state.drafts[`${id()}-blank`];let wordIndex=0;
 tokens(item.answer).forEach(piece=>{if(/^[A-Za-z0-9]/.test(piece)){const index=wordIndex++;if(index%2===0){const input=el('input',undefined,'blank');input.type='text';input.autocomplete='off';input.spellcheck=false;input.dataset.answer=piece;input.style.width=`${Math.max(56,piece.length*11+26)}px`;input.setAttribute('aria-label',`${inputs.length+1}번째 빈칸`);input.placeholder=String(inputs.length+1);input.value=Array.isArray(saved)&&typeof saved[inputs.length]==='string'?saved[inputs.length]:'';input.oninput=()=>{state.drafts[`${id()}-blank`]=inputs.map(n=>n.value);save();$('#feedback').replaceChildren();};inputs.push(input);passage.append(input);}else passage.append(document.createTextNode(piece));}else passage.append(document.createTextNode(piece));});
 const actions=el('div',undefined,'actions');actions.append(button('답 확인',()=>{let count=0;inputs.forEach(n=>{const ok=norm(n.value)===norm(n.dataset.answer);n.classList.toggle('correct',ok);n.classList.toggle('wrong',!ok);if(ok)count++;});$('#feedback').textContent=`${inputs.length}개 중 ${count}개 정답이에요.`;},'primary'),button('정답 보기',()=>{inputs.forEach(n=>{n.value=n.dataset.answer;n.classList.remove('wrong','correct');});$('#feedback').textContent='정답을 확인했어요. 다시 연습해 기억을 확인하세요.';}),button('다시 연습',()=>{delete state.drafts[`${id()}-blank`];save();render();}),button('안 보고 쓰기 →',()=>{state.mode='write';save();render();}));$('#content').append(passage,actions);
}
function renderWriting(item){
 $('#instruction').textContent='질문 또는 제시 단어를 보고, 답변만 영어로 써 보세요.';
 const area=el('textarea');area.lang='en';area.spellcheck=false;area.maxLength=4000;area.placeholder='기억나는 답변을 영어로 써 보세요…';area.setAttribute('aria-label','영어 암기 답안');area.value=typeof state.drafts[`${id()}-write`]==='string'?state.drafts[`${id()}-write`]:'';area.oninput=()=>{state.drafts[`${id()}-write`]=area.value;save();$('#feedback').replaceChildren();};
 const actions=el('div',undefined,'actions');actions.append(button('원문과 비교',()=>{const expected=norm(item.answer),actual=norm(area.value);if(!actual){$('#feedback').textContent='먼저 답변을 입력해 주세요.';return;}const distance=editDistance(expected,actual);$('#feedback').replaceChildren(el('p',distance===0?'정확해요! 답변이 원문과 일치해요.':`원문 일치도 ${Math.max(0,Math.round((1-distance/Math.max(expected.length,actual.length))*100))}%`));if(distance)$('#feedback').append(el('div',`원문: ${item.answer}`,'answer-preview'));},'primary'),button('첫 글자 힌트',()=>{state.hints=!state.hints;$('#hint-toggle').checked=state.hints;$('#content .hint').hidden=!state.hints;save();}),button('정답 보기',()=>{$('#feedback').replaceChildren(el('div',item.answer,'answer-preview'));}),button('답안 지우기',()=>{if(area.value&&!confirm('이 문항의 답안을 지울까요?'))return;area.value='';delete state.drafts[`${id()}-write`];save();$('#feedback').replaceChildren();area.focus();}));$('#content').append(area,actions);
}
$('#translation-toggle').onchange=e=>{state.translation=e.target.checked;$('#translation').hidden=!state.translation;save();};
$('#done').onchange=e=>{state.done[id()]=e.target.checked;save();render();};
$('#prev').onclick=()=>{if(state.item>0){state.item--;save();render();}};
$('#next').onclick=()=>{if(state.item<lessons[state.lesson].items.length-1){state.item++;save();render();}};
$('#reset').onclick=()=>{if(!confirm('영어 연습의 진도와 답안을 모두 초기화할까요?'))return;state={lesson:0,item:0,mode:'read',hints:false,translation:false,done:{},drafts:{}};save();render();};
render();
