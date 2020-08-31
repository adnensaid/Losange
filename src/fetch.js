import "./style.css";
import "./loader.css";

const startTime = new Date().getTime();
const timer = document.querySelector('.timer');
const timerId = setInterval(()=>refrechTimer(), 0);
function refrechTimer(){
    timer.innerHTML = `En cours depuis : ${new Date().getTime() - startTime} millisecondes`;
}

function clearTimer(){
    clearInterval(timerId);
    timer.remove();
}
function toggleLoader() {
    const loader = document.querySelector("div.loader");
    loader.style.display = loader.display === "none" ? "" : "none";
  }

const tbody = document.querySelector(".technicien table tbody");

const afficherLeResultat =(data, index)=>{
    const listTechniciens = data.map(tech => {
        return createTech(tech, index);
    });
tbody.innerHTML = "";
tbody.append(...listTechniciens);
    

}
const createTech = (t, i)=>{
    const tr = document.createElement('tr');
    const tdname = document.createElement('td');
    tdname.innerHTML = t.name;
    const tdsurname = document.createElement('td');
    tdsurname.innerHTML = t.username;
    const tdadresse = document.createElement('td');
    tdadresse.innerHTML = t.phone;
    const tdemail = document.createElement('td');
    tdemail.innerHTML = t.email;
    tr.append(tdname, tdsurname, tdemail, tdadresse);
    return tr;  
}
const addTechForm = document.querySelector('.technicien form');
const name = addTechForm.querySelector('input#nom');
const adresse = addTechForm.querySelector('input#adresse');
const tel = addTechForm.querySelector('input#tel');
const vehicule = addTechForm.querySelector('input#vehicule');
addTechForm.addEventListener('submit', async e=>{
    e.preventDefault();
    const formData = new FormData(addTechForm);
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users',{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: formData
        });
     if(res.ok){
         const data = await res.json();
         //console.log(data);
         afficherLeResultat(data);
         //data.map(d=>afficherLeResultat(d));
     }
    }catch(err){
        console.log(err);
    }
    
})

async function envoyerRequette(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users',{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(response)
        });
        const json = await response.json();
        afficherLeResultat(json);
    }catch(err){
        console.log(err);
    }finally{
        clearTimer();
        toggleLoader();
    }
}
envoyerRequette();











/* promesse.then(async response=>{
    try{
        const users = await response.json();
        afficherResultat('promesse', users);
    }catch (err){
        console.log(err);

    }finally{
        toggleLoader();
    }
    

})
.catch(err=>console.log(err)); */
/* new Promise((resolve, reject)=>setTimeout(() => resolve(44), 2000)).then((res)=>{
    const div = document.createElement('div');
    div.innerHTML = "le num magic est : " + res;
    document.querySelector('.fetch').append(div);
}).finally(toggleLoader);
function toggleLoader(){
    const loader = document.querySelector('.loader');
    loader.style.display = loader.display === "none" ? "" : "none";
}
toggleLoader();


function afficherResultat(promesse, resultat){
    resultat.map((res, index)=>{
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerHTML = res.name ;
        const td2 = document.createElement('td');
        td2.innerHTML = res.username;
        const td3 = document.createElement('td');
        td3.innerHTML = res.email;
        const td4 = document.createElement('td');
        td4.innerHTML = res.adresse ;
        tr.append(td1, td2, td3, td4 );
        document.querySelector('#promesse tbody').append(tr);
    })
    
} */