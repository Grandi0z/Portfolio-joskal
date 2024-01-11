import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import WorkItem from './WorkItem';

const Works = () => {
  const projects = [
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
    //   description: `Blog app is a web application that allows users to create and share their own 
    //                   blogs with the world. Users can sign up for a free account, create a profile 
    //                   with their name, photo, and bio, and start posting their thoughts, opinions, 
    //                   stories, or anything else they want to share. Users can also comment on other 
    //                   users’ posts, like them, and follow their favorite bloggers. Blog app is a 
    //                   platform for expressing yourself, connecting with others, and discovering new 
    //                   perspectives. Blog app is easy to use, secure, and fun. Whether you are a 
    //                   beginner or a seasoned blogger, Blog app is the app for you.`,
    //   demoLive: '',
    //   code: 'https://github.com/Grandi0z/blog_rails',
    //   technologies: [{ name: 'Ruby', color: '#ed6873' }, { name: 'Rails', color: '#fc0317' }, { name: 'Postgresql', color: '#68ceed' }, { name: 'Bootstrap', color: '#9123eb' }],
    // },
    // {
    //   title: 'Recipe App',
    //   photo: 'https://talks.freelancerepublik.com/wp-content/uploads/2021/12/banner_js.png',
    //   description: `Recipe app application that allows users to create, share, and discover recipes. It has the following features:

    //     Users can sign up and log in with Devise, a gem that provides user authentication functionality. Users can create their own recipes with a name, description, ingredients, steps, and a public or private status. They can also edit or delete their recipes if they are the owners.
    //     Users can view a list of their own recipes or a list of all public recipes created by other users. They can also search for recipes by name or filter them by date.
    //     Users can view the details of a selected recipe, including the ingredients, steps, and a toggle button that allows them to make the recipe public or private. They can also see the name and email of the recipe owner if the recipe is public.
    //     Users can create a food list with the name, quantity, and price of the food items they have. They can also edit or delete their food items.
    //     Users can view a general shopping list that shows the food items that are missing for all their recipes. They can also see the total number of items and the total price of the missing food.`,
    //   demoLive: '',
    //   code: 'https://github.com/Grandi0z/Recipe_app',
    //   technologies: [{ name: 'Ruby on Rails', color: '#ed6873' }, { name: 'Postgresql', color: '#68ceed' }, { name: 'Bootstrap', color: '#9123eb' }],
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
    //   photo: 'https://res.cloudinary.com/dhko6cdgf/image/upload/v1704565748/josephIo/Images/Works/vwg1vkozzaxfag8r98lv.jpg',
    //   description: `Space Travelers is a web application that allows users to learn about and 
    //         participate in space exploration. The application retrieves missions and rockets 
    //         from SpaceX and allows users to join missions and reserve rockets. Users can also 
    //         create their own profiles and track their progress as they work towards becoming space 
    //         travelers.`,
    //   demoLive: '',
    //   code: 'https://github.com/Grandi0z/Space_travelers_hub',
    //   technologies: [{ name: 'JavaScript', color: '#d6cd1a' }, { name: 'React', color: '#05999c' }, { name: 'Redux', color: '#6c059c' }, { name: 'SpaceX API', color: '#042cbd' }],
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

  const content = (
    <section className="full-container section-works" data-modal-target="default-modal" data-modal-toggle="default-modal">
      <h2>Projects</h2>
      <div className="">
        <ul className="rounded-md hover:bg-blend-darken flex flex-wrap items-center justify-center ul-works">
          {projects.map((project) => (
            <li key={uuidv4()}><WorkItem project={project} /></li>
          ))}
        </ul>
      </div>
    </section>
  );
  return content;
};

export default Works;
