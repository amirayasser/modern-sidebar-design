// add active class in selected list item

let list = document.querySelectorAll('.list')

for (let i=0; i< list.length; i++){
   list[i].onclick = function(){

    // removes 'active' class from all elements with class 'list'
    let j = 0;
    while (j < list.length){
        list[j++].className = 'list'
        console.log(j , i)
    }
       console.log(j, i)
    list[i].classList.add('active')
   }
}


let menutoggle = document.querySelector('.toggle')

menutoggle.onclick = function(){
    menutoggle.classList.toggle('active')
}


let nav = document.querySelector('.navigation')

  menutoggle.onclick = function(){
    menutoggle.classList.toggle('active')
    nav.classList.toggle('active')
}  

