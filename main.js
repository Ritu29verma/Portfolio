const object = new IntersectionObserver( (e) =>{  
    e.forEach((elem) =>{
        if(elem.isIntersecting){
            elem.target.classList.add('animate');                      
        }

        else{
            elem.target.classList.remove('animate');
        }
    })
}

)

const hidden_left = document.querySelectorAll('.hidden_l');
hidden_left.forEach( (e)=>{
    object.observe(e);
});

const hidden_right = document.querySelectorAll('.hidden_r');
hidden_right.forEach( (e)=>{
    object.observe(e);
});

const hidden = document.querySelectorAll('.hidden');
hidden.forEach( (e)=>{
    object.observe(e);
});