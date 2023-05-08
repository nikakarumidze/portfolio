import koiPrincess from '../assets/KoiPrincess.png';
import TeleportRunner from '../assets/TeleportRunner.png';
import spinwheel from '../assets/spinWheel.png';
import auth from '../assets/auth.jpg';
import hex2048 from '../assets/hex_2048.png';
import spaceTourism from '../assets/Space_Tourism.png';
import weatherApp from '../assets/Weather_App.png';
import userForm from '../assets/User_Form.png';
import restaurantMenu from '../assets/Restaurant_Menu.png';
import jsJqueryComponents from '../assets/Javascript_jQuery_Components.png';

interface contentObject {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  githubLink?: string;
  date: string;
  skills: string[];
}

export const content: contentObject[] = [
  {
    id: 9,
    name: 'Koi Princess',
    description:
      'Slot Koi Princess is a web-based game with 20 bet lines, where players can adjust their bets to their preference and level of risk.The game offers a range of features to enhance the player experience, including an auto play function, a max bet button, and the ability to increment and decrement coin values. The game is fully responsive. One of the standout features of Slot Koi Princess is its use of advanced tweening and easing functions, which result in smooth transitions while the wheel is spinning. This creates an immersive and engaging experience for players.',
    image: koiPrincess,
    link: 'https://koiprincess.surge.sh/',
    githubLink: 'https://github.com/nikakarumidze/Koi-Princess',
    date: 'April 2023',
    skills: ['React', 'Typescript', 'PixiJS', 'ReactPixi', 'Redux', 'Redux Toolkit'],
  },
  {
    id: 8,
    name: 'Teleport Runner Demo',
    description:
      'This game demo created with Babylon.js allows players to explore a virtual world with a range of movement options. Players can move using the W A S D keys, and can teleport to a new location by holding down the Space key for 2 seconds. The left Shift key can be used to temporarily rotate the camera, while NumpadSubtract and NumpadAdd can be used to zoom in and out. Players can pick up boxes to gain a running skill for a limited time. The game demo is designed to provide an engaging and challenging experience for players who enjoy exploring virtual environments.',
    image: TeleportRunner,
    link: 'http://3d-maze-world.surge.sh/',
    date: 'March 2023',
    skills: ['BabylonJS', 'Typescript', 'Webpack'],
  },
  {
    id: 7,
    name: 'Spinning wheel',
    description:
      'The spinning wheel created by PixiJS and TypeScript is a project that features a carousel-like animation with smooth acceleration and rotation. The wheel consists of a circular array of items that rotate around a central point. Users can interact with the wheel by clicking and dragging, causing it to accelerate and rotate. Customization options include changing the number of items, adjusting speed and easing functions.',
    image: spinwheel,
    link: 'https://spinthewheel.surge.sh/',
    date: 'March 2023',
    skills: ['Typescript', 'PixiJS', 'Webpack'],
  },
  {
    id: 6,
    name: 'User Authorization Page',
    description:
      'This website project includes various features such as user registration and login functionality, protected routes, and token storage in local storage. The website uses REST API with Axios for backend communication, Material UI for design, React Router DOM for routing, and Validator for user input validation. We have also incorporated React lazy function to minimize unnecessary renderings and improve performance. Overall, this website offers a seamless and secure user experience.',
    image: auth,
    link: 'https://auth-nest.surge.sh/',
    githubLink: 'https://github.com/nikakarumidze/Auth',
    date: 'February 2023',
    skills: [
      'Typescript',
      'React',
      'Material UI',
      'React Router',
      'axios',
      'Rest API',
      'Redux',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 5,
    name: 'Hexagon 2048',
    description:
      'This website features a unique twist on the classic game 2048 - a three-dimensional version that requires advanced math and geometry skills to master. With six types of movement and challenging game logic, players will enjoy a new level of difficulty. The website also showcases state-of-the-art technology such as Context API for state management, as well as multiple game levels and animations for added excitement. Rigorous testing using Jest & RTL ensures a seamless user experience.',
    image: hex2048,
    link: 'https://ezdnaormous-kneelxd.surge.sh/',
    date: 'December 2022',
    skills: [
      'Typescript',
      'React',
      'Material UI',
      'React Router',
      'axios',
      'Rest API',
      'Context API',
      'RTL & Jest',
      'Javascript',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 4,
    name: 'Space Tourism page',
    description:
      'This mobile-first website boasts a fully responsive design and simple navigation with four page types. The custom Material UI theme and component modifications provide a sleek and modern aesthetic. Built to ensure optimal usability on all devices, this website offers an exceptional user experience. Designed to be informative and intuitive.',
    image: spaceTourism,
    link: 'https://nikakarumidze.github.io/Space_Tourism/',
    githubLink: 'https://github.com/nikakarumidze/Space_Tourism',
    date: 'December 2022',
    skills: ['React', 'Material UI', 'React Router', 'Context API', 'Javascript', 'HTML', 'CSS'],
  },
  {
    id: 3,
    name: 'User Form Project',
    description:
      'This website showcases one of my first projects built with React - a user form application that includes modals. While it may be a basic project, it served as a valuable introduction to React and allowed me to hone my skills with this popular framework.',
    image: userForm,
    link: 'https://nikakarumidze.github.io/User-form-project-React/',
    githubLink: 'https://github.com/nikakarumidze/User-form-project-React',
    date: 'May 2022',
    skills: ['React', 'Javascript', 'HTML', 'CSS Modules'],
  },
  {
    id: 2,
    name: 'Weather App',
    description:
      'This user-friendly weather app offers practical features like light/dark modes, celsius/fahrenheit conversion, and local storage saving. It automatically retrieves location information, using either permission or another API, and users can add or remove locations as needed. Built using advanced techniques and APIs like Cities JSON and AccuWeather, this app is a reliable resource for staying informed and prepared.',
    image: weatherApp,
    link: 'https://darling-melba-a7021c.netlify.app/',
    githubLink: 'https://github.com/nikakarumidze/Weather_App',
    date: 'March 2022',
    skills: ['Javascript', 'Bootstrap', 'HTML', 'SCSS', 'Rest API', 'fetch', 'JSON'],
  },
  {
    id: 1,
    name: 'Javascript & jQuery components',
    description:
      'This website demonstrates how to build essential front-end components using JavaScript and jQuery, including interactive buttons, accordions.',
    image: jsJqueryComponents,
    link: 'https://nikakarumidze.github.io/Javascript-jQuery/',
    githubLink: 'https://github.com/nikakarumidze/Javascript-jQuery',
    date: 'December 2021',
    skills: ['Javascript', 'jQuery', 'HTML', 'CSS', 'JSON'],
  },
  {
    id: 0,
    name: 'Restaurant Website',
    description:
      'This responsive restaurant menu website uses FlexBox and Grid technologies to create an elegant and user-friendly layout across multiple pages.',
    image: restaurantMenu,
    link: 'https://nikakarumidze.github.io/Site-Menu/',
    githubLink: 'https://github.com/nikakarumidze/Site-Menu',
    date: 'November 2021',
    skills: ['HTML', 'Bootstrap', 'SCSS', 'CSS'],
  },
];
