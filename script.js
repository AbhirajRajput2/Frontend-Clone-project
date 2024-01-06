
let cont=document.querySelector('.center3box')
let box=document.querySelector('.fixed-image')


function imagepopup(){
    cont.addEventListener('mouseenter',function(){
        box.style.display='block'
    })

    cont.addEventListener('mouseleave',()=>{
        box.style.display='none'
    })

    let elems=document.querySelectorAll('.ele')
    elems.forEach((el) => {
        el.addEventListener('mouseenter',()=>{
            var image=el.getAttribute('data-img')
            box.style.backgroundImage=`url(${image})`
        })
    });
}
imagepopup()

var par="";
var img=""
function changeColor(element) {
    let para=par
    let imga=img
    if(para==""&& img==""){
    }
    else{
        document.getElementById(`${para}`).style.display='none'
        document.getElementById(`${img}`).style.display='none'

    }
    // Remove the 'selected' class from all h1 elements
    document.querySelectorAll('.head4 h1').forEach(function (el) {
        el.classList.remove('selected');

    });
    
    // Add the 'selected' class to the clicked h1 element
    par=element.getAttribute('para');
    img=element.getAttribute('img')
    element.classList.add('selected');
    document.getElementById(`${par}`).style.display='block'
    document.getElementById(`${img}`).style.display='block'
  }
  

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


let ham=document.querySelector('.ham-menu')
let ham_menu=document.querySelector('.full-scr')
let img4=document.querySelector('.logo img')
var flag=0
var ham_anime=document.querySelector('.ham-anim')
var line1=document.querySelector('.line1')
var line2=document.querySelector('.line2')
var line3=document.querySelector('.line3')
const body=document.body
ham.addEventListener('click',()=>{
    if(flag==0){
    ham_menu.style.top='0%'
    img4.style.opacity='0'
    ham_anime.style.gap='0'
    line1.style.transform='rotate(45deg)'
    line2.style.display='none'
    line3.style.transform='rotate(-45deg)'
    flag=1
    body.style.overflow = 'hidden';
    body.style.height = '100%';
    }
    else{
        ham_menu.style.top='-150%'
    img4.style.opacity='1'
    ham_anime.style.gap='5px'
    line1.style.transform='rotate(0deg)'
    line2.style.display="block"
    line3.style.transform='rotate(0deg)'
    flag=0
    body.style.overflow = 'auto';
    body.style.height = 'auto';


    }
})

var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');
var blue = document.getElementById("blue");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  blue.classList.toggle('slide');
});