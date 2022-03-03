import img from "./imgs/app logo.png";
import "./index.css";

let logo = document.getElementById('logo');
logo.src = img;
logo.classList.add("logo");

let data = JSON.parse(localStorage.getItem("data")) || []; 
let box = document.getElementById('box');


let add = document.getElementById('add');
add.addEventListener('click', addData);
function showData() {
    box.innerHTML = null;
     let count = 1;
    data.forEach((el, index) => {
        let div = document.createElement("div");

        let number = document.createElement("h3");
        number.innerHTML = count++;

        
        let txt = document.createElement("h3");
        txt.innerHTML = el;

        let remove = document.createElement("button");
        remove.innerHTML = "Delete";
        remove.addEventListener('click', () => {
            removeItem(el, index);
        });

        div.append(number, txt, remove);
        div.classList.add("flexBox");
        box.append(div);
    })
}
showData();
function removeItem(el, index){
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    showData();
}

function  addData() {
    let value = document.getElementById('in').value;


    if(value != ""){
        data.push(value);
        localStorage.setItem("data", JSON.stringify(data));
        showData();
    }else{
        alert("please enter the task in input box..")
    }
}


