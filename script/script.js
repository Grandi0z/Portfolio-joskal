let humburgerBtn=document.querySelector("#humburger-btn")
let xBtn=document.querySelector("#x-btn")
let navHidden=document.querySelector('#hiddenNav')
let welcomeMsg=document.querySelector('#welcome')

humburgerBtn.addEventListener('click',function(event){
    humburgerBtn.classList.toggle('hidden')
    xBtn.classList.toggle('hidden')
    navHidden.classList.toggle('displayhiddenNav')
    welcomeMsg.classList.toggle('hidden')
    event.stopPropagation()
})
xBtn.addEventListener('click',function(event){
    humburgerBtn.classList.toggle('hidden')
    xBtn.classList.toggle('hidden')
    navHidden.classList.toggle('displayhiddenNav')
    welcomeMsg.classList.toggle('hidden')
    event.stopPropagation()
})

document.addEventListener('click',function(event){
    if(navHidden.classList.contains('displayhiddenNav')){
        humburgerBtn.classList.remove('hidden')
        xBtn.classList.add('hidden')
        welcomeMsg.classList.remove('hidden')
        navHidden.classList.remove('displayhiddenNav')
    }
})

//POPUP DETAILS PROJECT
//object project
let objProject={title:"Keeping track of hundreds of components",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
                image:"image/SnapshootProject.svg",
                technologie:["Ruby on Rails","css","JavaScript","html"],
                linkSource:"https//www....",
                linkLive:"https//www...."
          }
let objProject1={title:"Project 2",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
                image:"image/projet2.jpg",
                technologie:["Ruby on Rails","JavaScript"],
                linkSource:"https//www.githubrepo",
                linkLive:"https//www.gitpages"
          }
let objProject2={title:"Project 3",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
          image:"image/projet1.png",
          technologie:["Ruby on Rails","JavaScript"],
          linkSource:"https//www.githubrepo",
          linkLive:"https//www.gitpages"
    }
let objProject3={title:"Project 4",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image:"image/projet6.png",
    technologie:["Sql","Java",],
    linkSource:"https//www.githubrepo",
    linkLive:"https//www.gitpages"
}
let objProject4={title:"Project 5",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
                image:"image/projet5.png",
                technologie:["Ruby on Rails","JavaScript",'Php'],
                linkSource:"https//www.githubrepo",
                linkLive:"https//www.gitpages"
}
let objProject5={title:"Project 6",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
                image:"image/projet4.png",
                technologie:["sql","JavaScript",'css',"php",'html'],
                linkSource:"https//www.githubrepo",
                linkLive:"https//www.gitpages"
}
//variable creation and initialization
let arrProjects=[objProject,objProject1,objProject2,objProject3,objProject4,objProject5]//store project in an array
let contenainer=document.querySelector("#contentProject")
let box=document.querySelector("#projectDetail")
let xButton=document.createElement("i")
    xButton.className="bi bi-x-lg"
    xButton.id='xDisplayProject'
let imageProject=document.createElement('img')
    imageProject.className="imageDetail"
    imageProject.alt="project details"
let titleProject=document.createElement("h3")
    titleProject.className="titleDetail"
let descriptionProject=document.createElement("p")
    descriptionProject.className="paragrph descritionDetail"
let listTechnologie=document.createElement('ul')
    listTechnologie.className="btn-language1 in-list"
let listLiveSource=document.createElement('ul')
    listLiveSource.className="btn-liveSource"
let btnSource=document.createElement("button")
let btnLive=document.createElement("button")
let liElt=[]//arr of bigbuttons
    btnSource.id="btn_source"
    btnLive.id="btn_live"
    btnSource.className="btn-big in-btn"
    btnLive.className="btn-big in-btn"
    btnSource.type="submit"
    btnLive.type="submit"
    btnSource.textContent='See live'
    btnLive.textContent='See source'

//creation list of big buttons
for(let i=0;i<2;i++){
    liElt[i]=document.createElement('li')
}
//click on x bouton     
xButton.addEventListener('click',function(event){
    box.classList.add("popupProjectDetail")
    contenainer.textContent=''//erase containts in the container
    listTechnologie.textContent=''//erase avery bottons in the list
})
//clik see detail
let projectSection=document.querySelector(".box-articles")
projectSection.addEventListener('click',function(event){
    let index=event.target.id
    showDetails(index)   
})

function showDetails(index){
        box.classList.remove("popupProjectDetail")
        //add values to element
        imageProject.src=arrProjects[index].image
        titleProject.textContent=arrProjects[index].title
        descriptionProject.textContent=arrProjects[index].description
        for(let i=0;i<arrProjects[index].technologie.length;i++) {
            listTechnologie.innerHTML+=`<li><button type="button">${arrProjects[index].technologie[i]}</button></li>`
        }
        btnLive.formaction=arrProjects[index].linkLive
        btnSource.formaction=arrProjects[index].linkSource
        //add to body
        liElt[0].appendChild(btnSource)
        liElt[1].appendChild(btnLive)
        listLiveSource.append(liElt[0])
        listLiveSource.append(liElt[1])
        //add elt to parent
        let arrChild=[xButton,imageProject,titleProject,listTechnologie,descriptionProject,listLiveSource]
        for(let element in arrChild) {
           contenainer.appendChild(arrChild[element]) 
        }   
    
}
const projectSection2 = document.querySelector('.box-articles');
projectSection.addEventListener('click', (event) => {
  const index = event.target.id;
  buildDetails(index);
});
