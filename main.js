let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let button = document.querySelector("button")
let select = document.querySelector("select")
let textarea = document.querySelector("textarea");


const savereview = (e) =>{
    e.preventDefault();
 
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");

    h2.className = "display-5"
    h3.className = "display-6 text-secondary"
    
    h2.innerHTML = "Rating :" + select.value;
    h3.innerHTML = "Feedback :" + textarea.value;

    let delbtn = document.createElement("Delete")
    delbtn.innerHTML = "Delete"
    delbtn.className = "btn btn-danger btn-sm rounded-0 float-end"

    let li = document.createElement("li")
    li.className = "list-group-item"
    li.appendChild(h2);
    li.appendChild(h3);
    li.appendChild(delbtn)
    ul.appendChild(li)
    console.log(li)
    form.reset();
}

form.addEventListener("submit",savereview)

const delreview = (e) =>{

    if(e.target.className.includes("btn btn-danger")){
        let li = e.target.parentElement;
        if(window.confirm("Are you sure??")){
            ul.removeChild(li);
        }
    }
    console.log(res);
    console.log("clicked");
}
ul.addEventListener("click",delreview)




