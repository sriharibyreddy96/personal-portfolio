import image1 from '../../Assets/netflix.jpg';
import image2 from '../../Assets/E-Commerce.avif';
import image3 from '../../Assets/Hospital_management.avif';
import image4 from '../../Assets/news.avif';
import image5 from '../../Assets/Furniture.avif';
import image6 from '../../Assets/School_management2.avif';

// Example additional images for subImages
import subImage1 from '../../Assets/Furniture.avif';
import subImage2 from '../../Assets/Furniture.avif';
import subImage3 from '../../Assets/Furniture.avif';
import subImage4 from '../../Assets/Furniture.avif';

const projects = [
  {
    id: 1,
    title: 'Social Media',
    imageUrl: image1,
    buttons: ['Button 1', 'Button 2', 'Button 3'],
    details: 'This is a detailed description for Project One.',
    description: 'Project One is a comprehensive project involving a variety of technologies and integrations.',
    listItems: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    category: 'Web Development',
    subImages: [subImage1, subImage2, subImage3],
  },
  {
    id: 2,
    title: 'E-Commerce',
    imageUrl: image2,
    buttons: ['Button 1', 'Button 2'],
    details: 'This is a detailed description for Project Two.',
    description: 'Project Two focuses on building an e-commerce platform with secure transactions.',
    listItems: ['Shopping Cart', 'Payment Gateway', 'Product Catalog'],
    category: 'E-Commerce',
    subImages: [subImage2, subImage3, subImage4],
  },
  {
    id: 3,
    title: 'Hospital Management',
    imageUrl: image3,
    buttons: ['Button 1', 'Button 2', 'Button 3'],
    details: 'This is a detailed description for Project Three.',
    description: 'Project Three is a healthcare management system designed to streamline hospital workflows.',
    listItems: ['Patient Management', 'Appointment Scheduling', 'Medical Records'],
    category: 'Healthcare',
    subImages: [subImage1, subImage3],
  },
  {
    id: 4,
    title: 'News Application',
    imageUrl: image4,
    buttons: ['Button 1', 'Button 2'],
    details: 'This is a detailed description for Project Four.',
    description: 'Project Four is a news aggregation website with real-time updates and a clean UI.',
    listItems: ['Real-Time News', 'Article Search', 'User Comments'],
    category: 'News',
    subImages: [subImage2, subImage4],
  },
  {
    id: 5,
    title: 'Furniture Application',
    imageUrl: image5,
    buttons: ['Button 1', 'Button 2', 'Button 3'],
    details: 'This is a detailed description for Project Five.',
    description: 'Project Five focuses on building a furniture marketplace for users to browse and buy products.',
    listItems: ['Product Listings', 'User Reviews', 'Category Filters'],
    category: 'E-Commerce',
    subImages: [subImage3, subImage4],
  },
  {
    id: 6,
    title: 'School Management',
    imageUrl: image6,
    buttons: ['Button 1', 'Button 2'],
    details: 'This is a detailed description for Project Six.',
    description: 'Project Six is a school management system aimed at enhancing administrative operations.',
    listItems: ['Student Information', 'Class Schedules', 'Attendance Tracking'],
    category: 'Education',
    subImages: [subImage1, subImage2, subImage4],
  },
];

export default projects;
