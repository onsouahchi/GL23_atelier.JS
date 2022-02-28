
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
    newEl.innerHTML=getField() + "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash-fill' viewBox='0 0 16 16'>
  <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z'/>
</svg>";
    fields.forEach(el => el.value="");

    newEl.lastChild.addEventListener("click",
        ()=>{
            newEl.parentNode.removeChild(newEl);
        }
    )

    document.querySelector("ul").append(newEl);

})

