p=document.querySelector("p")

document.querySelector("#color").addEventListener("input",
    function (){
    p.style.color=this.value;
    })

document.querySelector("#size").addEventListener("change",
    function (){
        p.style.fontSize=this.value.toString()+"px";
    })

document.querySelector("#font").addEventListener("change",
    function (){
        p.style.fontFamily=this.value;
    })
