
document.querySelector("ol").addEventListener("click",
    (e)=> {
    e.target.style.color=e.target.style.color='#'+Math.floor(Math.random()*16777215).toString(16);
}
    )