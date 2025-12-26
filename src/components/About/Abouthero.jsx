import React from "react";
import { FaCircle } from "react-icons/fa"; // Import the circle icon
import { Link } from "react-router-dom";

const Abouthero = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>I'm Srihari Byreddy</h1>

      <ul style={styles.list}>
        <li style={styles.listItem}>
          <FaCircle style={{ ...styles.icon, color: "red" }} />
          <span style={styles.listText}>
            3+ years of experience in developing and maintaining both web and
            mobile applications, delivering high-quality solutions across
            multiple platforms.
          </span>
        </li>
        <li style={styles.listItem}>
          <FaCircle style={{ ...styles.icon, color: "#FFD700" }} />
          <span style={styles.listText}>
            Proficient in building Single Page Applications (SPAs) and static
            websites using React, leveraging component-based architecture for
            reusable UI elements.
          </span>
        </li>
        <li style={styles.listItem}>
          <FaCircle style={{ ...styles.icon, color: "#32CD32" }} />
          <span style={styles.listText}>
            Extensive experience in integrating databases, including MySQL for
            relational data and MongoDB for NoSQL solutions, ensuring efficient
            data management and query performance.
          </span>
        </li>
        <li style={styles.listItem}>
          <FaCircle style={{ ...styles.icon, color: "#1E90FF" }} />
          <span style={styles.listText}>
            Skilled in developing and deploying full-stack applications, using
            the MERN stack (MongoDB, Express, React, Node.js) to build
            responsive, dynamic, and scalable web applications.
          </span>
        </li>
        <li style={styles.listItem}>
          <FaCircle style={{ ...styles.icon, color: "#8A2BE2" }} />
          <span style={styles.listText}>
            Hands-on experience with mobile application development, using
            frameworks like React Native to create cross-platform apps with
            seamless user experiences on both iOS and Android.
          </span>
        </li>
        <li style={styles.listItem}>
          <FaCircle style={{ ...styles.icon, color: "#FFD700" }} />
          <span style={styles.listText}>
            Deep understanding of RESTful API development, integrating backend
            services with frontend applications using Node.js and Express,
            ensuring smooth data flow and high-performance interactions.
          </span>
        </li>
        <li style={styles.listItem}>
          <FaCircle style={{ ...styles.icon, color: "#32CD32" }} />
          <span style={styles.listText}>
            Experience with version control systems (Git), deploying
            applications to cloud platforms like AWS, Heroku, and DigitalOcean,
            and utilizing CI/CD pipelines for automated deployments.
          </span>
        </li>
        <li style={styles.listItem}>
          <FaCircle style={{ ...styles.icon, color: "#1E90FF" }} />
          <span style={styles.listText}>
            Passionate about continuous learning, staying updated with the
            latest technologies, frameworks, and best practices to consistently
            improve application performance and development workflows.
          </span>
        </li>
      </ul>

      <button>
      <Link to={"/hire-me"} style={styles.button}>Hire Me</Link>
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    textAlign: "center",
    margin: "50px",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "30px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    marginBottom: "10px",
    textAlign: "left",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.2rem",
    marginBottom: "15px",
  },
  icon: {
    fontSize: "18px", // Set the size of the circle icon
    marginRight: "15px", // Space between the icon and the text
  },
  button: {
    padding: "12px 25px",
    fontSize: "1.2rem",
    backgroundColor: "#414877",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white",
    textTransform: "uppercase",
    boxShadow: "0 0 10px #414877",
    transition: "background-color 0.3s, box-shadow 0.3s",
  },
};

export default Abouthero;
