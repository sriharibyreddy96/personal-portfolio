// import React, { useEffect } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import projects from "./ProjectsData"; // Import the projects data

// const ProjectDetails = () => {
//     const location = useLocation();

//     useEffect(() => {
//       window.scrollTo(0, 0); // Scroll to top whenever the route changes
//     }, [location]);
//   // Get the 'id' from the URL params
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Find the project by id
//   const project = projects.find((p) => p.id === parseInt(id));

//   // If the project is not found, navigate back to the homepage
//   if (!project) {
//     navigate("/");
//     return null; // Optional: You could also display a "Project not found" message here
//   }

//   // Styles for the page
//   const styles = {
//     container: {
//       padding: "30px",
//       maxWidth: "1200px",
//       margin: "0 auto",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     title: {
//       fontSize: "2.5rem",
//       fontWeight: "bold",
//       marginBottom: "20px",
//       textAlign: "center",
//     },
//     gallery: {
//       display: "flex",
//       justifyContent: "space-between",
//       marginBottom: "30px",
//       flexWrap: "wrap", // Allow the images to wrap on smaller screens
//     },
//     mainImage: {
//       width: "60%",
//       marginBottom: "20px", // Add margin to create space between the main image and sub images
//     },
//     mainImageImg: {
//       width: "100%",
//       maxHeight: "600px",
//       objectFit: "cover",
//     },
//     subImages: {
//       width: "35%",
//     },
//     subImage: {
//       width: "100%",
//       height: "150px",
//       marginBottom: "15px",
//       objectFit: "cover",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     buttonsContainer: {
//       display: "flex",
//       justifyContent: "start",
//       marginBottom: "30px",
//       gap: "10px",
//     },
//     button: {
//       backgroundColor: "#414877",
//       color: "white",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       padding: "12px 24px",
//       fontSize: "1rem",
//       transition: "background-color 0.3s ease",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//     sectionTitle: {
//       fontSize: "1.8rem",
//       marginBottom: "10px",
//     },
//     text: {
//       fontSize: "1.1rem",
//     },
//     list: {
//       listStyleType: "disc",
//       marginLeft: "20px",
//     },
//     listItem: {
//       fontSize: "1.1rem",
//       marginBottom: "8px",
//     },
//     // Responsive styles
//     responsiveGallery: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//     },
//     responsiveMainImage: {
//       width: "100%",
//     },
//     responsiveSubImages: {
//       width: "100%",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {/* Project Title */}
//       <h2 style={styles.title}>{project.title}</h2>

//       {/* Image Gallery */}
//       <div style={window.innerWidth < 1200 ? styles.responsiveGallery : styles.gallery}>
//         {/* Left Side - Main Image */}
//         <div style={window.innerWidth < 1200 ? styles.responsiveMainImage : styles.mainImage}>
//           <img
//             style={styles.mainImageImg}
//             src={project.imageUrl}
//             alt={project.title}
//           />
//         </div>

//         {/* Right Side - Sub Images */}
//         <div style={window.innerWidth < 1200 ? styles.responsiveSubImages : styles.subImages}>
//           {project.subImages.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Feature ${index + 1} of the project`} // More descriptive
//               style={styles.subImage}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Buttons Section */}
//       <div style={styles.buttonsContainer}>
//         {project.buttons.map((button, index) => (
//           <button
//             key={index}
//             style={styles.button}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.buttonHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = styles.button.backgroundColor)
//             }
//           >
//             {button}
//           </button>
//         ))}
//       </div>

//       {/* Project Details Section */}
//       <div style={{ marginBottom: "30px" }}>
//         <h3 style={styles.sectionTitle}>Project Details</h3>
//         <p style={styles.text}>{project.details}</p>
//       </div>

//       {/* Project Description Section */}
//       <div style={{ marginBottom: "30px" }}>
//         <h3 style={styles.sectionTitle}>Project Description</h3>
//         <p style={styles.text}>{project.description}</p>
//       </div>

//       {/* List of Items Section */}
//       <div style={{ marginBottom: "30px" }}>
//         <h3 style={styles.sectionTitle}>Project Features</h3>
//         <ul style={styles.list}>
//           {project.listItems.map((item, index) => (
//             <li key={index} style={styles.listItem}>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//             <button
//             style={styles.button}
//              >{project.live}
//              </button>
//     </div>
//   );
// };

// export default ProjectDetails;

import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import projects from "./ProjectsData"; // Import the projects data

const ProjectDetails = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location]);

  // Get the 'id' from the URL params
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the project by id
  const project = projects.find((p) => p.id === parseInt(id));

  // If the project is not found, navigate back to the homepage
  if (!project) {
    navigate("/");
    return null; // Optional: You could also display a "Project not found" message here
  }

  // Styles for the page
  const styles = {
    container: {
      padding: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
    },
    gallery: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "30px",
      flexWrap: "wrap", // Allow the images to wrap on smaller screens
    },
    mainImage: {
      width: "60%",
      marginBottom: "20px", // Add margin to create space between the main image and sub images
    },
    mainImageImg: {
      width: "100%",
      maxHeight: "600px",
      objectFit: "cover",
    },
    subImages: {
      width: "35%",
    },
    subImage: {
      width: "100%",
      height: "150px",
      marginBottom: "15px",
      objectFit: "cover",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "start",
      marginBottom: "30px",
      gap: "10px",
    },
    button: {
      backgroundColor: "#414877",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      padding: "12px 24px",
      fontSize: "1rem",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    sectionTitle: {
      fontSize: "1.8rem",
      marginBottom: "10px",
    },
    text: {
      fontSize: "1.1rem",
    },
    list: {
      listStyleType: "disc",
      marginLeft: "20px",
    },
    listItem: {
      fontSize: "1.1rem",
      marginBottom: "8px",
    },
    // Responsive styles
    responsiveGallery: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    responsiveMainImage: {
      width: "100%",
    },
    responsiveSubImages: {
      width: "100%",
    },
  };

  // Handle live button click to navigate to the live link
  // const handleLiveClick = () => {
  //   window.location.href = project.link; // Redirect to the project's live link
  // };

  const handleLiveClick = () => {
    if (!project?.link) return;
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={styles.container}>
      {/* Project Title */}
      <h2 style={styles.title}>{project.title}</h2>

      {/* Image Gallery */}
      <div
        style={
          window.innerWidth < 1200 ? styles.responsiveGallery : styles.gallery
        }
      >
        {/* Left Side - Main Image */}
        <div
          style={
            window.innerWidth < 1200
              ? styles.responsiveMainImage
              : styles.mainImage
          }
        >
          <img
            style={styles.mainImageImg}
            src={project.imageUrl}
            alt={project.title}
          />
        </div>

        {/* Right Side - Sub Images */}
        <div
          style={
            window.innerWidth < 1200
              ? styles.responsiveSubImages
              : styles.subImages
          }
        >
          {project.subImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Feature ${index + 1} of the project`} // More descriptive
              style={styles.subImage}
            />
          ))}
        </div>
      </div>

      {/* Buttons Section */}
      <div style={styles.buttonsContainer}>
        {project.buttons.map((button, index) => (
          <button
            key={index}
            style={styles.button}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
          >
            {button}
          </button>
        ))}
      </div>

      {/* Project Details Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={styles.sectionTitle}>Project Details</h3>
        <p style={styles.text}>{project.details}</p>
      </div>

      {/* Project Description Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={styles.sectionTitle}>Project Description</h3>
        <p style={styles.text}>{project.description}</p>
      </div>

      {/* List of Items Section */}
      <div style={{ marginBottom: "30px" }}>
        <h3 style={styles.sectionTitle}>Project Features</h3>
        <ul style={styles.list}>
          {project.listItems.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Live Button */}
      <button
        style={styles.button}
        onClick={handleLiveClick} // Handle live button click
      >
        {project.live}
      </button>
    </div>
  );
};

export default ProjectDetails;
