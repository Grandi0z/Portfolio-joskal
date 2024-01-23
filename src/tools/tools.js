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
