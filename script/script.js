const humburgerBtn = document.querySelector('#humburger-btn');
const xBtn = document.querySelector('#x-btn');
const navHidden = document.querySelector('#hiddenNav');
const welcomeMsg = document.querySelector('#welcome');

humburgerBtn.addEventListener('click', (event) => {
  humburgerBtn.classList.toggle('hidden');
  xBtn.classList.toggle('hidden');
  navHidden.classList.toggle('displayhiddenNav');
  welcomeMsg.classList.toggle('hidden');
  event.stopPropagation();
});
xBtn.addEventListener('click', (event) => {
  humburgerBtn.classList.toggle('hidden');
  xBtn.classList.toggle('hidden');
  navHidden.classList.toggle('displayhiddenNav');
  welcomeMsg.classList.toggle('hidden');
  event.stopPropagation();
});

document.addEventListener('click', () => {
  if (navHidden.classList.contains('displayhiddenNav')) {
    humburgerBtn.classList.remove('hidden');
    xBtn.classList.add('hidden');
    welcomeMsg.classList.remove('hidden');
    navHidden.classList.remove('displayhiddenNav');
  }
});

// POPUP DETAILS PROJECT
// object project
const objProject = {
  title: 'Keeping track of hundreds of components',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: 'image/projet1.png',
  technologie: ['Ruby on Rails', 'css', 'JavaScript', 'html'],
  linkSource: 'https//www....',
  linkLive: 'https//www....',
};
const objProject1 = {
  title: 'Project 2',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: 'image/projet3.png',
  technologie: ['Ruby on Rails', 'JavaScript'],
  linkSource: 'https//www.githubrepo',
  linkLive: 'https//www.gitpages',
};
const objProject2 = {
  title: 'Project 3',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: 'image/projet6.png',
  technologie: ['Ruby on Rails', 'JavaScript'],
  linkSource: 'https//www.githubrepo',
  linkLive: 'https//www.gitpages',
};
const objProject3 = {
  title: 'Project 4',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: 'image/projet2.jpg',
  technologie: ['Sql', 'Java'],
  linkSource: 'https//www.githubrepo',
  linkLive: 'https//www.gitpages',
};
const objProject4 = {
  title: 'Project 5',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: 'image/projet5.png',
  technologie: ['Ruby on Rails', 'JavaScript', 'Php'],
  linkSource: 'https//www.githubrepo',
  linkLive: 'https//www.gitpages',
};
const objProject5 = {
  title: 'Project 6',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  image: 'image/projet4.png',
  technologie: ['sql', 'JavaScript', 'css', 'php', 'html'],
  linkSource: 'https//www.githubrepo',
  linkLive: 'https//www.gitpages',
};
// add project detail in in-box section
// variable creation and initialization
const arrProjects = [objProject, objProject1, objProject2,
  objProject3, objProject4, objProject5];// store project in an array
const contenainer = document.querySelector('#contentProject');
const box = document.querySelector('#projectDetail');
const xButton = document.createElement('i');
xButton.className = 'bi bi-x-lg';
xButton.id = 'xDisplayProject';
const imageProject = document.createElement('img');
imageProject.className = 'imageDetail';
imageProject.alt = 'project details';
const titleProject = document.createElement('h3');
titleProject.className = 'titleDetail';
const descriptionProject = document.createElement('p');
descriptionProject.className = 'paragrph descritionDetail';
const listTechnologie = document.createElement('ul');
listTechnologie.className = 'btn-language1 in-list';
const listLiveSource = document.createElement('ul');
listLiveSource.className = 'btn-liveSource';
const btnSource = document.createElement('button');
const btnLive = document.createElement('button');
const liElt = [];// arr of bigbuttons
btnSource.id = 'btn_source';
btnLive.id = 'btn_live';
btnSource.className = 'btn-big in-btn';
btnLive.className = 'btn-big in-btn';
btnSource.type = 'submit';
btnLive.type = 'submit';
btnSource.innerHTML = 'See live <img src="image/Iconlive.svg"></img>';
btnLive.innerHTML = 'See source <img src="image/IconGitHub.svg">';

// creation list of big buttons
for (let i = 0; i < 2; i += 1) {
  liElt[i] = document.createElement('li');
}
// click on x bouton
xButton.addEventListener('click', () => {
  box.classList.add('popupProjectDetail');
  contenainer.textContent = '';// erase containts in the container
  listTechnologie.textContent = '';// erase avery bottons in the list
});

// build detail box
function buildDetails(index) {
  box.classList.remove('popupProjectDetail');
  // add values to element
  imageProject.src = arrProjects[index].image;
  titleProject.textContent = arrProjects[index].title;
  descriptionProject.textContent = arrProjects[index].description;
  for (let i = 0; i < arrProjects[index].technologie.length; i += 1) {
    listTechnologie.innerHTML += `<li><button type="button">${arrProjects[index].technologie[i]}</button></li>`;
  }
  btnLive.formaction = arrProjects[index].linkLive;
  btnSource.formaction = arrProjects[index].linkSource;
  // add to body
  liElt[0].appendChild(btnSource);
  liElt[1].appendChild(btnLive);
  listLiveSource.append(liElt[0]);
  listLiveSource.append(liElt[1]);
  // add elt to parent
  const arrChild = [xButton, imageProject, titleProject,
    listTechnologie, descriptionProject, listLiveSource];
  for (let i = 0; i < arrChild.length; i += 1) {
    contenainer.appendChild(arrChild[i]);
  }
}
// put project section in a variable to add a listener
const projectSection = document.querySelector('.box-articles');
projectSection.addEventListener('click', (event) => {
  const index = event.target.id;
  buildDetails(index);
});
