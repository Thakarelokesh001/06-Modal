'use strict';

const modal = document.querySelector('.modal');
//console.log(modal)
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

const openModel = function(){
    console.log('Button Clicked')
    modal.classList.remove('hidden')    //document.querySelector('.modal').classList.remove('hidden')
    overlay.classList.remove('hidden')
}

//console.log(btnsOpenModal);

for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',openModel)
}
btnCloseModal.addEventListener('click',function()
{
    task(modal);    // modal.classList.add('hidden')
    task(overlay)   // overlay.classList.add('hidden')   
})

overlay.addEventListener('click',function(){
    
    task(modal);    //modal.classList.add('hidden')
    task(overlay)    //overlay.classList.add('hidden')  
})

function task(message)
{
    message.classList.add('hidden')
}

document.addEventListener('keydown',function(e){
    // console.log("key Pressed",e.key)
    if(e.key==='Escape'){
        if(!modal.classList.contains('hidden')){
        task(modal);    //modal.classList.add('hidden')
        task(overlay)    //overlay.classList.add('hidden') 
        }
        
    }
   
})