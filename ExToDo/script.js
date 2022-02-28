
fields=document.querySelectorAll("input");
button=document.querySelector("button");

fields.forEach(
    (item)=>{
        item.addEventListener("input",()=>checkFields());

    }
)

function checkFields() {
    let inputArray = [...fields];
    button.disabled = inputArray.filter(inp => inp.value.length == 0).length > 0;
}

function getField(){
    let text="";
    fields.forEach(
        (item, idx)=>{
            text+=item.value+" ";
            if (idx!=fields.length-1) text+=": ";
        }
    )
    return text;
}

button.addEventListener("click",
    ()=>{
    button.disabled=true;
    let newEl=document.createElement("li");
    newEl.className="list-group-item";
    newEl.innerHTML=getField() + " <i class='bi bi-trash-fill'></i>";
    fields.forEach(el => el.value="");

    newEl.lastChild.addEventListener("click",
        ()=>{
            newEl.parentNode.removeChild(newEl);
        }
    )

    document.querySelector("ul").append(newEl);

})

