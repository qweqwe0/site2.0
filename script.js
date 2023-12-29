const arrowBtns = document.querySelectorAll('.partButton')
const teamContent = document.querySelectorAll('.partContent')
const galleryEl = document.querySelectorAll('.pmElement')
const part = document.createElement('span')
const header = document.querySelector('header')
const nav = document.querySelector('nav')
const navLinks = document.querySelectorAll('.navLink')
const phoneImg = document.querySelector('.telImg')
const logoImg = document.querySelector('.logo')
const telText = document.querySelector('.tel')
const container = document.querySelector('.container')
const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const modalForm = document.querySelector('.modalForm')
const application = document.querySelector('.application')
const  wrapper = document.createElement('div')

part.classList.add('pmElementBorder')


function toggleTeamContent (btn,content){
    if(content.classList.contains('show')){
        content.classList.remove('show')
        content.classList.add('hide')
       // btn.textContent = ''
    }else if(content.classList.contains('hide')){
        content.classList.remove('hide')
        content.classList.add('show')
       // btn.textContent = 'U+02198'
    }
}
arrowBtns[0].addEventListener('click',function(){
    toggleTeamContent(arrowBtns[0],teamContent[0])
})
arrowBtns[1].addEventListener('click',function(){
    toggleTeamContent(arrowBtns[1],teamContent[1])
})
arrowBtns[2].addEventListener('click',function(){
    toggleTeamContent(arrowBtns[2],teamContent[2])
})
arrowBtns[3].addEventListener('click',function(){
    toggleTeamContent(arrowBtns[3],teamContent[3])
})
arrowBtns[4].addEventListener('click',function(){
    toggleTeamContent(arrowBtns[4],teamContent[4])
})
//  for(const item of galleryEl){
//     item.addEventListener('click',function(){
//     galleryEl.forEach(element =>console.log(element))
//     part.classList.add('active')
//     item.append(part)
//     })
   
//  }
document.addEventListener('scroll',function(){ 
 if( window.pageYOffset>800){
     nav.style.backgroundColor = 'white'
     telText.style.color= '#777777'
     phoneImg.setAttribute('src','./img/darkTel.png')
     logoImg.setAttribute('src','./img/darkLogo.png')
    for(item of navLinks){
        item.style.color = 'black'
    }
 }
})

document.addEventListener('scroll',function(){ 
    if( window.pageYOffset<800){
        nav.style.backgroundColor = 'rgba(0,0,0,0)'
        telText.style.color= 'white'
        phoneImg.setAttribute('src','./img/Vectorn.png')
        logoImg.setAttribute('src','./img/logo.png')
       for(item of navLinks){
           item.style.color = 'white'
       }
    }
   })

//    galleryEl[0].addEventListener('click',function(){
//       galleryEl[0].append(part)
//      part.classList.add('active')
  
//    })

application.addEventListener('click',function(){
    modal.classList.add('active')
    body.style.overflow = 'hidden'
    
    wrapper.classList.add('modalWrapper')
    body.appendChild(wrapper)
})

modalForm.addEventListener('submit',function(event){
    event.preventDefault()
    modal.classList.remove('active')
    body.style.overflow = ''
    body.removeChild(wrapper)
})


