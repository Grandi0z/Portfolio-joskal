import tailwind from'../assets/images/tailwind.svg'
import html from '../assets/images/html5-svgrepo-com.svg'
import css from '../assets/images/css3-svgrepo-com (2).svg'
import javascript from '../assets/images/javascript-1-svgrepo-com.svg'
import sql from '../assets/images/database-svgrepo-com.svg'
import ruby from '../assets/images/ruby-svgrepo-com (2).svg'
import react from '../assets/images/react-svgrepo-com.svg'
import redux from '../assets/images/redux-fill-svgrepo-com.svg'
import rails from '../assets/images/rails-svgrepo-com.svg'
import sass from '../assets/images/sass-svgrepo-com.svg'
import bootstrap from '../assets/images/bootstrap-fill-svgrepo-com.svg'
import php from '../assets/images/php-elephant-svgrepo-com.svg'
import git from '../assets/images/git-icon-svgrepo-com.svg'
import vscode from '../assets/images/vscode-insiders-svgrepo-com.svg'
import mysql from '../assets/images/mysql-svgrepo-com (1).svg'
import postgresql from '../assets/images/postgresql-svgrepo-com.svg'
import jest from '../assets/images/jest-svgrepo-com.svg'
import msoffice from '../assets/images/microsoftoffice-svgrepo-com.svg'
import rspec from '../assets/images/rspec-svgrepo-com.svg'

export class MyModal {
    static setIsModalOpen = false

     static closeModal = () => {
       this.setIsModalOpen = !this.setIsModalOpen;
     }

     static openModal = () => {
       this.setIsModalOpen = !this.setIsModalOpen;
     }
}

export const aboutInfo = {
  profileImage:
      'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704546836/josephIo/Images/Profile/Picsart_22-11-28_13-42-04-893_j5u4hl.jpg',
  bioInfo: {
    name: 'Joseph Lwanzo Kausi',
    intro:
        "Hello, my name is Joseph! I'm a motivated software developer working in Goma.",
    studyInfo:
        "I'm currently working on my website, where you'll find everything I want to show the world. I did 3 years of university studies in computer science, which I supplemented with distance learning at a very selective school where I spent months working remotely with talented developers from different continents.",
    experienceInfo:
        'Take a look at the projects page for an overview of my work on open source software.',
    contributionInfo:
        "I'm active on my social media, or by email, so if you want to get in touch, don't hesitate, it's always a pleasure to meet new people.",
    skillsInfo: 'skills infos',
    contactInfo: {
      facebook: 'https://fr-fr.facebook.com/joseph.khausilj/',
      instagram: 'https://www.instagram.com/joseph_l_khausi/',
      linkedin: 'https://linkedin.com/in/joskal',
      twitter: 'https://twitter.com/Joseph_LSK',
      medium: 'https://medium.com/@josephlkausi',
      tiktok: 'https://tiktok.com/@grandioseh.fr',
      github: 'https://github.com/Grandi0z',
      email: 'josephlkausi@gmail.com',
      resume:
          'https://docs.google.com/document/d/10NTVw12Jqzel3yX_4unJrOhg0_kLIhjWLl-Xi3sZf4Q/edit?usp=sharing',
    },
  },
  location: 'Nord Kivu Goma',
  website: 'hola.com',
};

export const XIcon = (props) => (
  <svg
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400 hover:text-red-300 focus:animate-pulse"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const technologies = {
  languages: {
    fontEnd: [
      {
        name: 'HTML',
        photo:{svg: html, filter: 'filter-html', color:'#eb9d02' },
      },
      {
        name: 'CSS',
        photo: {svg: css, filter: 'filter-css', color:'#0241B8' },
      },
      {
        name: 'JavaScript',
        photo: {svg: javascript, filter: 'filter-js', color:'#e0dd07' },
      },
    ],
    backEnd: [
      {
        name: 'Sass',
        photo: {svg: sass, filter: 'filter-sass', color: '#A32A91' },
      },
      {
        name: 'Bootstrap',
        photo: {svg: bootstrap, filter: 'filter-bootstrap', color: '#690899' },
      },
      {
        name: 'TailwindCSS',
        photo: {svg: tailwind, filter: 'filter-tailwind', color: '#29f2f2' },
      },
      {
        name: 'Rials',
        photo: {svg: rails, filter: 'filter-rails', color: '#FF0000' },
      },
      {
        name: 'Mysql',
        photo: {svg: mysql, filter: 'filter-mysql', color: '#7d9df0' },
      },
      {
        name: 'Postgresql',
        photo: {svg: postgresql, filter: 'filter-react', color: '#4f589c' },
      },
      {
        name: 'Ms-Office',
        photo: {svg: msoffice, filter: 'filter-office', color: '#c74c1c' },
        },
    ],
  },
  frameWorks: {
    fontEnd: [
      {
        name: 'Ruby',
        photo: {svg: ruby, filter: 'filter-ruby', color:'#E02F07' },
      },
      {
        name: 'PHP',
        photo: {svg: php, filter: 'filter-php', color: '#522e6b' },
      },
      {
        name: 'SQL',
        photo: {svg: sql, filter: 'filter-sql', color: '#F0D362' },
      },
      {
        name: 'React',
        photo: {svg: react, filter: 'filter-react', color: '#3e04bd' },
      },
      {
        name: 'Redux',
        photo: {svg: redux, filter: 'filter-redux', color: '#7E47DE' },
      }
    ],
    backEnd: [
      {
        name: 'Jest',
        photo: {svg: jest, filter: 'filter-jest', color: '#570D18' },
      },
      {
        name: 'Rspec',
        photo: {svg: rspec , filter: 'filter-rspec', color: '#a30870' },
      },
      {
        name: 'Git',
        photo: {svg: git, filter: 'filter-git', color: '#FF0000' },
      },
      {
        name: 'VSCode',
        photo: {svg: vscode, filter: 'filter-rails', color: '#e0dd07' },
      },
    ],
  },
};

export const projects = [
  {
    title: 'TripTrek',
    photo: 'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704969516/josephIo/Images/Works/Screenshot_2024-01-11_123611_ehioug.jpg',
    description:
                `TripTrek is an innovative car booking application designed to elevate your travel 
                experience. With TripTrek, effortlessly reserve a vehicle for your journeys, whether 
                it's a quick city escape or a scenic road trip. Our user-friendly platform ensures a 
                seamless and convenient booking process, allowing you to choose from a diverse fleet 
                of reliable vehicles. Experience the freedom of the open road as TripTrek takes care of 
                the details, making your travel adventures memorable and stress-free. Embrace the joy of 
                exploration with TripTrek – your trusted companion for every road ahead.`,
    demoLive: 'https://final-capstone-project-frontend.onrender.com/',
    code: 'https://github.com/devalibello/final-capstone-project',
    technologies: [{ name: 'Ruby on Rails', color: '#ed6873' }, { name: 'Postgresql', color: '#68ceed' }, { name: 'React', color: '#05999c' }],
  },
  {
    title: 'Cents Sense',
    photo: 'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704565747/josephIo/Images/Works/jbu9oqyfx7eifsxy7vos.jpg',
    description:
                `Cents sense is a mobile web application that helps you manage your budget and track 
                  your transactions. You can register and log in with your full name, email and 
                  password, and access your personal data securely. 
                  You can add new transactions associated with a category, such as food, 
                  entertainment, or rent. You can also see the total amount of money spent on 
                  each category, and compare your expenses with your income. Cents Sense is a 
                  simple and smart way to make sense of your money and save more.`,
    demoLive: 'https://cents-sense.onrender.com/',
    code: 'https://github.com/Grandi0z/cents_sense',
    technologies: [{ name: 'Ruby', color: '#ed6873' }, { name: 'Rails', color: '#fc0317' }, { name: 'Postgresql', color: '#68ceed' }, { name: 'Bootstrap', color: '#9123eb' }],
  },
  // {
  //   title: 'Blog App',
  //   photo: 'https://pixelmechanics.com.sg/wp-content/uploads/2019/04/css.jpg',
  //   description: `
  //              Blog app is a web application that allows users to create and share their own
  //              blogs with the world. Users can sign up for a free account, create a profile
  //              with their name, photo, and bio, and start posting their thoughts, opinions,
  //              stories, or anything else they want to share. Users can also comment on other
  //              users’ posts, like them, and follow their favorite bloggers. Blog app is a
  //              platform for expressing yourself, connecting with others, and discovering new
  //              perspectives. Blog app is easy to use, secure, and fun. Whether you are a
  //              beginner or a seasoned blogger, Blog app is the app for you.`,
  //   demoLive: '',
  //   code: 'https://github.com/Grandi0z/blog_rails',
  //   technologies: [
  //         { name: 'Ruby', color: '#ed6873' }, { name: 'Rails', color: '#fc0317' },
  //       { name: 'Postgresql', color: '#68ceed' }, { name: 'Bootstrap', color: '#9123eb' }],
  // },
  // {
  //   title: 'Recipe App',
  //   photo: '
  //    https://talks.freelancerepublik.com/wp-content/uploads/2021/12/banner_js.png',
  //   description: `Recipe app application that allows users to create,
  //          share, and discover recipes. It has the following features:

  //     Users can sign up and log in with Devise, a gem that provides
  //     user authentication functionality. Users can create their own recipes with
  //     a name, description, ingredients, steps, and a public or private status.
  //     They can also edit or delete their recipes if they are the owners.
  //     Users can view a list of their own recipes or a list of all public
  //     recipes created by other users. They can also search for recipes by
  //     name or filter them by date.
  //     Users can view the details of a selected recipe, including the ingredients,
  //     steps, and a toggle button that allows them to make the recipe public or private.
  //     They can also see the name and email of the recipe owner if the recipe is public.
  //     Users can create a food list with the name, quantity, and price of the food items
  //     they have.
  //     They can also edit or delete their food items.
  //     Users can view a general shopping list that shows the food items that are missing for
  //     all their recipes. They can also see the total number of items and the total price
  //     of the missing food.`,
  //   demoLive: '',
  //   code: 'https://github.com/Grandi0z/Recipe_app',
  //   technologies: [
  //   { name: 'Ruby on Rails', color: '#ed6873' },
  //    { name: 'Postgresql', color: '#68ceed' }, { name: 'Bootstrap', color: '#9123eb' }],
  // },
  {
    title: 'Companies metrics',
    photo: 'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704565748/josephIo/Images/Works/zewoozhbuxk9hsdai9q5.jpg',
    description: `This application takes companies as input and gives you financial data 
                  about them. You receive results such as market capitalization, growth rate, 
                  dividend yield, and more. This application is easy to use, fast, and reliable. 
                  It is a great tool for investors, analysts, students, and anyone who is interested 
                  in the financial world.`,
    demoLive: 'https://companies-metrics-xscn.onrender.com',
    code: 'https://github.com/Grandi0z/financial_metrics',
    technologies: [{ name: 'JavaScript', color: '#d6cd1a' }, { name: 'React', color: '#05999c' }, { name: 'Redux', color: '#6c059c' }],
  },
  // {
  //   title: "Space Traveler's hub",
  //   photo: '
  //   https://res.cloudinary.com/dhko6cdgf/image/upload/v1704565748/josephIo/Images/Works/vwg1vkozzaxfag8r98lv.jpg',
  //   description: `Space Travelers is a web application that allows users to learn about and
  //         participate in space exploration. The application retrieves missions and rockets
  //         from SpaceX and allows users to join missions and reserve rockets. Users can also
  //         create their own profiles and track their progress as they work towards
  //         becoming space travelers.`,
  //   demoLive: '',
  //   code: 'https://github.com/Grandi0z/Space_travelers_hub',
  //   technologies: [
  //             { name: 'JavaScript', color: '#d6cd1a' }, { name: 'React', color: '#05999c' },
  //             { name: 'Redux', color: '#6c059c' }, { name: 'SpaceX API', color: '#042cbd' }],
  // },
  {
    title: 'Math Magicians',
    photo: 'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704565748/josephIo/Images/Works/dbeyeynhendy2zwhw5mb.jpg',
    description: `Math Magicians Calculator" is a web application that seamlessly combines the functionality of a 
                  basic calculator with a touch of inspiration. Beyond the conventional arithmetic 
                  operations, this app also boasts a unique feature that sets it apart – the ability to 
                  generate random motivational and thought-provoking quotes. Whether you're crunching 
                  numbers for work, studies, or everyday calculations, Math Magicians Calculator transforms 
                  the mundane into an uplifting experience, making math a bit more magical with every 
                  calculation. Embrace the power of numbers while enjoying a daily dose of motivation with 
                  this innovative and user-friendly calculator app`,
    demoLive: 'https://math-magicians-simple-app-5ekj.onrender.com/',
    code: 'https://github.com/Grandi0z/Math_magicians',
    technologies: [{ name: 'JavaScript', color: '#d6cd1a' }, { name: 'React', color: '#05999c' }, { name: 'CSS', color: '#d17d08' }],
  },
  {
    title: 'Pokedex',
    photo: 'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704565747/josephIo/Images/Works/rtvhadmypreji41vgkc0.jpg',
    description: `Pokedex is your app for exploring the enchanting world of Pokémon. Immerse yourself in a 
                comprehensive catalog of diverse Pokémon species, each with its unique traits, types, 
                and evolutions. The app provides a user-friendly interface that allows you to browse 
                through an extensive collection of Pokémon, gaining insights into their abilities, 
                habitats, and evolutions.

                What sets Pokedex apart is its interactive and community-driven features. Users can express 
                their admiration for their favorite Pokémon by 'liking' them and engage in lively 
                discussions through comments. Whether you're a seasoned Pokémon Trainer or just starting 
                your journey, Pokedex enhances the experience by fostering a community where users can 
                share their knowledge, strategies, and fond memories related to each Pokémon. 
                Dive into the captivating world of Pokémon with Pokedex, where exploration and community 
                collaboration redefine the way you connect with these beloved creatures.`,
    demoLive: 'https://gleeful-kitsune-465a87.netlify.app/',
    code: 'https://github.com/rudicarrilloypr/kanban-capstone-js-module2',
    technologies: [{ name: 'HTML', color: '#202891' }, { name: 'JavaScript', color: '#d6cd1a' }, { name: 'CSS', color: '#d17d08' }],
  },
];
