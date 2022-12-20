let humburgerBtn=document.querySelector("#humburger-btn")
let xBtn=document.querySelector("#x-btn")
let navHidden=document.querySelector('#hiddenNav')

humburgerBtn.addEventListener('click',function(event){
    humburgerBtn.classList.toggle('hidden')
    xBtn.classList.toggle('hidden')
    navHidden.classList.toggle('displayhiddenNav')
    event.stopPropagation()
})
xBtn.addEventListener('click',function(event){
    humburgerBtn.classList.toggle('hidden')
    xBtn.classList.toggle('hidden')
    navHidden.classList.toggle('displayhiddenNav')
    event.stopPropagation()
})

document.addEventListener('click',function(event){
    if(navHidden.classList.contains('displayhiddenNav')){
        humburgerBtn.classList.remove('hidden')
        xBtn.classList.add('hidden')
        navHidden.classList.remove('displayhiddenNav')
    }
})

