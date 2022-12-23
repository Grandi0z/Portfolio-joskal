// HIDDEN NAV
const humburgerBtn = document.querySelector('#humburger-btn');
const xBtn = document.querySelector('#x-btn');
const navHidden = document.querySelector('#hiddenNav');
const welcomeMsg = document.querySelector('#welcome');
const humBtn = document.querySelector('#humburgerContainer');

humBtn.addEventListener('click', (event) => {
  humburgerBtn.classList.toggle('hidden');
  xBtn.classList.toggle('hidden');
  navHidden.classList.toggle('displayhiddenNav');
  event.stopPropagation();
});

document.addEventListener('click', () => {
  if (navHidden.classList.contains('displayhiddenNav')) {
    humburgerBtn.classList.remove('hidden');
    xBtn.classList.add('hidden');
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
// store project in an array
const arrProjects = [objProject, objProject1, objProject2,
  objProject3, objProject4, objProject5];
// container creation
const contenainer = document.createElement('div');
contenainer.id = 'contentProject';
contenainer.className = 'contentProject';
const divCotainer = document.createElement('div');
divCotainer.id = 'popupContainer';
const articleContainer = document.createElement('article');
articleContainer.id = 'projectDetail';
articleContainer.className = 'projectDetail';
const sectionRecentWork = document.getElementById('recent-works');
// variable creation and initialization
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
  articleContainer.classList.add('destroyPopup');
  contenainer.textContent = '';// erase containts in the container
  listTechnologie.textContent = '';// erase avery bottons in the list
});

// build detail box
function buildPopup(index) {
  articleContainer.classList.remove('destroyPopup');
  // add values to element
  imageProject.src = arrProjects[index].image;
  titleProject.textContent = arrProjects[index].title;
  descriptionProject.textContent = arrProjects[index].description;
  for (let i = 0; i < arrProjects[index].technologie.length; i += 1) {
    listTechnologie.innerHTML += `<li><button type="button">${arrProjects[index].technologie[i]}</button></li>`;
  }

  btnLive.formaction = arrProjects[index].linkLive;
  btnSource.formaction = arrProjects[index].linkSource;
  liElt[0].appendChild(btnSource);// add big-btn in li element
  liElt[1].appendChild(btnLive);
  listLiveSource.append(liElt[0]);// add li element in ul
  listLiveSource.append(liElt[1]);
  // add elt to parent
  const arrChild = [xButton, imageProject, titleProject,
    listTechnologie, descriptionProject, listLiveSource];

  for (let i = 0; i < arrChild.length; i += 1) {
    contenainer.appendChild(arrChild[i]);
  }

  articleContainer.appendChild(contenainer);
  divCotainer.appendChild(articleContainer);
  sectionRecentWork.appendChild(divCotainer);
}
// add an EventListener to project section
const projectSection = document.querySelector('.box-articles');
projectSection.addEventListener('click', (event) => {
  const index = event.target.id;
  buildPopup(index);
});

// FORM VALIDATION
const email = document.getElementById('email');
const form = document.getElementById('form-contact');
const errorScreen = document.getElementById('errorMsg');

function isEmailValid(email) {
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return regex.test(String(email));
}

function emailValidation() {
  const userEmail = email.value.trim();
  if (!isEmailValid(userEmail)) {
    errorScreen.textContent = 'Please Email must be all in lowercase';
    email.classList.add('error');
    email.classList.remove('success');
  } 
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  emailValidation();
});
