let btn = document.getElementsByClassName('content__button');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}


/*function read(){

    if(more.style.display === "none"){
        more.style.display = "block";
        arrow.style.transform = "rotate(90deg)"
    }
    else {
        more.style.display = "none";
        arrow.style.transform = "rotate(-90deg)"
    }
}*/