import {interventions, typeInterventions} from "./data.js" ;
const tr = document.querySelector('tr');
const tbody = document.querySelector('tbody');
const input = document.querySelector('input');
const form = document.querySelector('form');
const select = document.querySelector(".mySelect");
const checkbox = document.querySelector(".checkbox");

/* navigation */

const l1 = document.querySelector('#lien');
const l2 = document.querySelectorAll('#lien');
const articles = document.querySelector('#articles');
const l3 = articles.querySelectorAll("#lien");
const article = document.querySelectorAll(".contenu");
const cc = document.querySelector(".article1");
function logClick(){
  console.log('click !!!');
}
l2.forEach((el)=>{
  el.addEventListener('click', (e)=>{
    
  });
})
l1.addEventListener('click', logClick);
//console.log(articles);
l3.forEach((l, index)=>{
  l.addEventListener('click', (e)=>{
    e.preventDefault();
    //console.log(article[i]);
    const articleNoeud = l.parentNode;
    const attrArticle = articleNoeud.getAttribute('class');
    const data = document.querySelectorAll("."+attrArticle+ " .contenu");
    const attribute1 = data[0].getAttribute('class');
    const attribute2 = data[1].getAttribute('class');
    console.log(attribute1.length);
    console.log(attribute2.length);
    
    if(attribute1.length < attribute2.length){
      const attr = attribute2.split(' ');
      attr.pop();
      console.log(attr); 
      const [c, d] = attr;
        const att = c + " " + d;
        const n = document.querySelector("."+attrArticle+" #contenu1");
        n.setAttribute('class', attr);
        console.log('###');
        console.log(n);
       data[1].setAttribute('class', att);
       console.log(data[1]);
       data[0].setAttribute('class','hidden');
       console.log(data[0]);

    }

    let a = attribute1.split(' ');
    let b = attribute2.split(' ');
    console.log(a[a.length-1]);
    console.log(b[b.length-1]);
    if(a[a.length-1] === 'hidden' && b[b.length-1] !== 'hidden'){
      console.log('cc@')      
    }else{
      console.log('bb')
    }
    if((data[0].hasAttribute('class', 'hidden')) || (data[1].hasAttribute('class', 'hidden'))){
      console.log('tu te cache conard');
    }else{
      console.log('coucouccoucoucoucoc');
    }
    for (let i = 0; i < data.length; i++) {
      console.log(data[0].innerHTML+" et &&&&&& "+data[1].innerHTML);
      if(data[i].hasAttribute('class', 'hidden')){
        const attribute = data[i].getAttribute('class');
        //console.log(attribute);
        let a = attribute.split(' ');
        console.log(a);
        a.pop();
        console.log(a);
        const [c, d] = a;
        const att = c + " " + d;  
       data[i].setAttribute('class', att);
       data[i+1].setAttribute('class',attribute);

      }else{
        console.log('cc');
      }
      
    }
    /* data.forEach((elem, i) => {
      console.log(i);
      if(elem[i].hasAttribute('class', 'hidden')){
        const attribute = elem.getAttribute('class');
        //console.log(attribute);
        let a = attribute.split(' ');
        a.pop();
        const [c, d] = a;
        const att = c + " " + d;  
       elem.setAttribute('class', att);
      }
    }); */
    data.forEach((d, i)=>{
      console.log(d.getAttribute('class'));
/*       if(d.hasAttribute('class', 'hidden')){
        console.log('oui');
      }else{
        console.log('non');
      } */
    })
/*     if(data.hasAttribute('class', 'hidden')){

    }
 */    
    console.log(data);
    displayContent1(attrArticle);
  
  })
  return l;
})
const displayContent1 = (attr)=>{
  //const elem = tab[i];
  //const elemSuivant = tab[i+1];
  console.log(attr);
  const elem = document.querySelector("."+attr);
  console.log(elem);
  if(elem.hasAttribute('class', 'hidden')){
    const attribute = elem.getAttribute('class');
    //console.log(attribute);
    let a = attribute.split(' ');
    a.pop();
    const [c, d] = a;
    const att = c + " " + d;  
    elem.setAttribute('class', att);
    console.log(elem);
    //elemSuivant.setAttribute('class', attribute);
  }else{
    elem.setAttribute('class', attribute);
    
  }
  //console.log(elem.getAttribute('class'));
  //debugger;
}

const displayContent = (tab)=>{
  tab.forEach((lien, index)=>{
    console.log(lien);
    executerCode(lien, index);

  })
}
const p = document.querySelectorAll('.contenu');
/* p.map((tab, index)=>{

}) */
const executerCode = (lien, index)=>{
  console.log(index);
  lien.addEventListener('click', (e)=>{
    e.  preventDefault();
    console.log(lien)
    const pere = lien.closest('article1');
    console.log(pere);


    //tab.slice(index, index+1);
    //console.log(tab);
    //console.log(index);
    let i = index;
    p.forEach((data, index)=>{
      console.log(data);
    });
    const c = p[index];
    console.log(c);
    const attr = c.getAttribute('id');
    console.log("attr" + c)
    const c2 = p[index+1];
    let attribute = c2.getAttribute('class');
    //let attribute = c.getAttribute('class');
    if(c.hasAttribute('class','hidden') && c2.hasAttribute('class', 'show')){
      attribute += " hidden";
      //console.log(attribute);
      c.setAttribute('class', attribute + "hidden");
      c2.setAttribute('class', attribute + "show");
      console.log(c);
      console.log(c2);
    }else{
      c.setAttribute('class', attribute + "show");
      c2.setAttribute('class', attribute + "hidden");
      console.log(c);
      console.log(c2)
    }
    attribute ="";
    /* const c2 =p[index+1];
    if(c.hasAttribute('class', 'hidden')){
      c.removeAttribute('','hidden');
      c.addAttribute('class', 'show');
      c2.addAttribute('class','hidden')
    } */

    //const c2 = p[index+1];


      //setDom(lien, c1, c2, index);

    //console.log(p[0]);
    //console.log(p[1]);
    //const p2 = document.querySelectorAll('#contenu2');
    //console.log(p[index]);
    //console.log(index);
    //p1[index].setAttribute('hidden','');
    //p2[index].removeAttribute('hidden');
  })
  RemoveEvenement(lien);
}
const RemoveEvenement = (lien)=>{
  lien.removeEventListener('click', executerCode);
}
//displayContent(l1);


/* nav.addEventListener('click', (e)=>{
  e.preventDefault();
  const p1 = document.querySelector('#nav1');
  const p2 = document.querySelector('#nav2');
  p1.setAttribute('hidden','');
  p2.removeAttribute('hidden');
})
nav2.addEventListener('click', (e)=>{
  e.preventDefault();
  const p1 = document.querySelector('#nav1');
  const p2 = document.querySelector('#nav2');
  p2.setAttribute('hidden','');
  p1.removeAttribute('hidden');
})
 */



form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const numInter = input.value;
  const typeInter = select.value;
  const compInter = checkbox.checked?"oui":"non";
  addIntervention(numInter, typeInter, compInter);
});
const addIntervention = (numInter, typeInter, compInter)=>{
  interventions.push({
    num:numInter,
    type:typeInter,
    complexiter:compInter
  });
  displayInterventions();
}
const deleteIntervention = (i)=>{
  interventions.splice(i, 1);
  displayInterventions();
}

const displayInterventions = ()=>{
  const listeInterventions = interventions.map((intervention, index)=>{
    if(intervention.editMode){
      return editElementInterv(intervention, index);
    }else{
      return createIntervention(intervention, index);

    }
  });
  const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(listeInterventions);
      //throw new Error;
      
      //reject(listeInterventions);
    },1000);
  }).then((resulat)=>{
    afficherLeResultat(resulat, true);
  }).catch((err)=>{
    console.log(err);
  }).finally(toggleLoader);

};
const createIntervention = (intervention, index)=>{
  const tr = document.createElement('tr');
  const tdSuppEditer = document.createElement('td');

  const btEditer = document.createElement('a');
  btEditer.setAttribute('href', '#');
  const iconEditer = document.createElement('i');
  iconEditer.setAttribute('class', 'small material-icons');
  iconEditer.style.color = "#3e4444"
  iconEditer.innerHTML = "create";;
  btEditer.innerHTML = "";
  btEditer.append(iconEditer);
  

  const btnSupp = document.createElement('a');
  btnSupp.setAttribute('href', '#');
  const iconSupp = document.createElement('i');
  iconSupp.style.color = "#c94c4c";
  iconSupp.style.padding = "0px 20px 0px 0px";
  iconSupp.setAttribute('class', 'small material-icons');

  iconSupp.innerHTML = "delete";
  btnSupp.append(iconSupp);
  tdSuppEditer.append(btnSupp, btEditer);
  
  const tdNum = document.createElement('td');
  tdNum.append(intervention.num);
  const tdType = document.createElement('td');
  tdType.append(intervention.type);

  const tdComp = document.createElement('td');
  tdComp.setAttribute('class', 'complexiter')
  tdComp.append(intervention.complexiter);
  tr.append(tdNum, tdType, tdComp);
  tr.append(tdSuppEditer);

  btnSupp.addEventListener('click', (e)=>{
    e.stopPropagation();
    deleteIntervention(index);
  });

  btEditer.addEventListener('click', (e)=>{
    e.stopPropagation();
    editMode(index);
  })
  return tr;

};
function afficherLeResultat(resultat, tenue) {
  //console.log(resultat);
  //resultat.classList.add(tenue ? "succes" : "echec");
  const tbodySelector = document.querySelector("tbody");
  tbodySelector.classList.add(tenue ? "succes" : "echec");
  tbody.innerHTML = "";
  tbodySelector.append(...resultat);
}
function toggleLoader() {
  const loader = document.querySelector(".loader");
  loader.style.display = loader.display === "none" ? "" : "none";
}

const editMode = (index)=>{
  interventions[index].editMode = !interventions[index].editMode;

  displayInterventions();
}
const generateInput = (v)=>{
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('value', v);
  return input;
}

const createBtn = (type, color)=>{
  
  const btn= document.createElement('a');
  const href = btn.setAttribute('href', '#');
  const icon = document.createElement('i');
  icon.setAttribute('class', 'small material-icons');
  icon.style.color = color;//"#405d27"
  icon.style.padding = "0px 20px 0px 0px";
  icon.innerHTML = type;
  btn.append(icon);
  return btn;
}

const generateSelect = (type, index)=>{
  const select = document.createElement('select');
  select.setAttribute('class', 'browser-default mySelectCom');
  const option = document.createElement('option');
  option.innerHTML = type;
  select.append(option);
  const [...rest] = typeInterventions;
  rest.forEach((option)=>{
    if(option.nom !== type){
      const option1 = document.createElement('option');
      option1.innerHTML = option.nom;
      select.append(option1);
    }
  })
  return select;

};
const generateSelectCom = (value, index)=>{
  const select = document.createElement('select');
  select.setAttribute('class', 'browser-default mySelectCom');
  const option = document.createElement('option');
  option.value = value;
  option.innerHTML =value;
  select.append(option);
  const tab =['oui', 'non'];
  tab.forEach((el)=>{
    if(el!=value){
      const option2 = document.createElement('option');
      option2.value = el;
      option2.innerHTML =el;
      select.append(option2);
    }
  })
  return select;
}
const editElementInterv = (intervention, index)=>{

  const btnSave = createBtn('add', '#405d27');
  const btnCancel = createBtn('cancel', '#c94c4c');
  const tr = document.createElement('tr');
  tr.innerHTML = ``

  // input Num Intervention
  const numInput = intervention.num;
  const inputNum = generateInput(numInput);
  const tdNum = document.createElement('td');
  tdNum.append(inputNum);

  // select type intervention

  const tdType = document.createElement('td');
  const typeSelect = generateSelect(intervention.type, index);
  tdType.append(typeSelect);

  //select complexe
  const selectComplexiter = intervention.complexiter;
  const select = generateSelectCom(selectComplexiter, index);


  const tdComp = document.createElement('td');
  tdComp.append(select);
  
  const tdBtnSaveCancel = document.createElement('td');
  tdBtnSaveCancel.append(btnSave, btnCancel);

  tr.append(tdNum, tdType, tdComp, tdBtnSaveCancel);
  //console.log(tr);
  btnSave.addEventListener('click', (e)=>{
    e.stopPropagation();
    editIntervention(inputNum, typeSelect, select, index);
  })
  return tr;
}
const editIntervention = (a, b, c,  index)=>{
  //console.log("adnen "+c.value);
  interventions[index].num = a.value;
  interventions[index].type = b.value;
  interventions[index].complexiter = c.value;
  interventions[index].editMode =!interventions[index].editMode;
  displayInterventions();
}

displayInterventions();
