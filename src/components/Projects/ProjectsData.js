import image1 from '../../Assets/netflix.jpg';
import image2 from '../../Assets/petfolk/home.png';
import image3 from '../../Assets/hospital/Restaurant1.jpg';
import image4 from '../../Assets/news.avif';
import image5 from '../../Assets/Furniture.avif';
import image6 from '../../Assets/School_management2.avif';
import image7 from '../../Assets/portfolio/portfolio.png';
import image8 from '../../Assets/sports/sports.png';

// Example additional images for subImages
import subImage1 from '../../Assets/Furniture.avif';
import subImage2 from '../../Assets/Furniture.avif';
import subImage4 from '../../Assets/Furniture.avif';

// Netflix Clone Images

import subImageN1 from '../../Assets/netflix/netflix1.png';
import subImageN2 from '../../Assets/netflix/netflix2.png';
import subImageN3 from '../../Assets/netflix/netflix3.png';
import subImageN4 from '../../Assets/netflix/netflix4.png';


// Petfolk Images

import subImagep1 from '../../Assets/petfolk/hair.webp';
import subImagep2 from '../../Assets/petfolk/wash.webp';
import subImagep3 from '../../Assets/petfolk/nail.webp';
import subImagep4 from '../../Assets/petfolk/dry.webp';


// Restaurant Management Images

import subImageh1 from '../../Assets/hospital/Restaurant1.jpg';
import subImageh2 from '../../Assets/hospital/Restaurant2.jpg';
import subImageh3 from '../../Assets/hospital/Restaurant3.jpg';
import subImageh4 from '../../Assets/hospital/Restaurant4.jpg';


// News Application Images

import subImagen1 from '../../Assets/news/news1.webp';
import subImagen2 from '../../Assets/news/news2.webp';
import subImagen3 from '../../Assets/news/news3.webp';
import subImagen4 from '../../Assets/news/news4.webp';


// Furniture Application Images

import subImageF1 from '../../Assets/furniture/furniture1.png';
import subImageF2 from '../../Assets/furniture/furniture2.png';
import subImageF3 from '../../Assets/furniture/furniture3.png';
import subImageF4 from '../../Assets/furniture/furniture4.png';


// School management Images

import subImageS1 from '../../Assets/school/school1.jpg';
import subImageS2 from '../../Assets/school/school2.jpg';
import subImageS3 from '../../Assets/school/school3.jpg';
import subImageS4 from '../../Assets/school/school4.jpg';


// Personal portfolio Images

import subImageP1 from '../../Assets/portfolio/portfolio1.jpg';
import subImageP2 from '../../Assets/portfolio/Portfolio2.jpg';
import subImageP3 from '../../Assets/portfolio/portfolio3.jpg';

// Sports Application Images
import subImageG1 from '../../Assets/sports/sports.png';
import subImageG2 from '../../Assets/sports/sports1.png';
import subImageG3 from '../../Assets/sports/sports2.webp';
import subImageG4 from '../../Assets/sports/sports3.webp';


const projects = [
  {
    id: 1,
    title: 'Video Streaming',
    imageUrl: image1,
    buttons: ['HTML', 'CSS', 'React.js',],
    details: 'This is a detailed description for Project One.',
    description: 'Project One is a comprehensive project involving a variety of technologies and integrations.',
    listItems: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    category: 'Web Development',
    subImages: [subImageN1, subImageN2, subImageN3, subImageN4],
    live: "Live this Application",
    link: "https://sriharibyreddy96.github.io/netflix-clone/",
  },
  {
    id: 2,
    title: 'E-Commerce',
    imageUrl: image2,
    buttons: ['MERN', 'REACT', 'Node.js'],
    details: 'This is a detailed description for Project Two.',
    description: 'Project Two focuses on building an e-commerce platform with secure transactions.',
    listItems: ['Shopping Cart', 'Payment Gateway', 'Product Catalog'],
    category: 'E-Commerce',
    subImages: [subImagep1, subImagep2, subImagep3, subImagep4],
    live: "Live this Application",
    link: "https://petfolk.in/",

  },
  {
    id: 3,
    title: 'Restaurant Management',
    imageUrl: image3,
    buttons: ['MERN', 'REACT'],
    details: 'This is a detailed description for Project Three.',
    description: 'Restaurant management application with dynamic menus, order flow, and responsive user interface.',
    listItems: ['Restaurant Management', 'Food Availability', 'Responsiveness', 'List of Food Items.'],
    category: 'Food',
    subImages: [subImageh1, subImageh2, subImageh3, subImageh4],
    live: "Live this Application",
    link: "https://sriharibyreddy96.github.io/restaurant-application/"

  },
  {
    id: 4,
    title: 'News Application',
    imageUrl: image4,
    buttons: ['React.js', 'ReactNative'],
    details: 'This is a detailed description for Project Four.',
    description: 'Project Four is a news aggregation website with real-time updates and a clean UI.',
    listItems: ['Real-Time News', 'Article Search', 'User Comments'],
    category: 'News',
    subImages: [subImagen1, subImagen2, subImagen3, subImagen4],
    live: "Live this Application",
    link: "https://play.google.com/store/apps/details?id=com.mundadugu.news&hl=en",

  },
  {
    id: 5,
    title: 'Furniture Application',
    imageUrl: image5,
    buttons: ['HTML', 'CSS', 'React.js'],
    details: 'This is a detailed description for Project Five.',
    description: 'Project Five focuses on building a furniture marketplace for users to browse and buy products.',
    listItems: ['Product Listings', 'User Reviews', 'Category Filters'],
    category: 'E-Commerce',
    subImages: [subImageF1, subImageF2, subImageF3, subImageF4],
    live: "Live this Application",
    link: "https://sriharibyreddy96.github.io/royal-furn/",

  },
  {
    id: 6,
    title: 'School Management',
    imageUrl: image6,
    buttons: ['MERN', 'React.js'],
    details: 'This is a detailed description for Project Six.',
    description: 'Project Six is a school management system aimed at enhancing administrative operations.',
    listItems: ['Student Information', 'Class Schedules', 'Attendance Tracking'],
    category: 'Education',
    subImages: [subImageS1, subImageS2, subImageS3, subImageS4],
    live: "Live this Application",
    link: "https://sriharibyreddy96.github.io/school-web-application",

  },
  {
    id: 7,
    title: 'Personal Portfolio',
    imageUrl: image7,
    buttons: ['MERN', 'REACT'],
    details: 'This is a detailed description for Project Seven.',
    description: 'Project Seven is a Personal Portfolio system aimed at enhancing administrative operations.',
    listItems: ['Student Information', 'Class Schedules', 'Attendance Tracking'],
    category: 'Education',
    subImages: [subImageP1, subImageP2, subImageP3],
    live: "Live this Application",
    link: "https://sriharibyreddy96.github.io/personal-portfolio/",

  },
  {
    id: 8,
    title: 'Sports Application',
    imageUrl: image8,
    buttons: ['HTML', 'CSS', 'JAVASCRIPT'],
    details: 'This is a detailed description for Project Seven.',
    description: 'Project Seven is a Personal Portfolio system aimed at enhancing administrative operations.',
    listItems: ['Student Information', 'Class Schedules', 'Attendance Tracking'],
    category: 'Education',
    subImages: [subImageG1, subImageG2, subImageG3, subImageG4],
    live: "Live this Application",
    link: "https://sriharibyreddy96.github.io/cricket-app/index.html",

  },
];

export default projects;
