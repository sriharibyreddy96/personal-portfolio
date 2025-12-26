import React from "react";

// Inline styles for the component
const styles = {
  skillContainer: {
    margin: '50px',
  },
  heading: {
    textAlign: 'start',
    margin: '50px 0px',
  },
  skillWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '50px',
  },
  allSkills: {
    padding: '10px',
    border: '1px solid #414877',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '48%', // Default width is 100%
    minWidth: '300px', // Minimum width to keep it responsive
    boxSizing: 'border-box', // Ensure padding doesn't affect width calculation
    // By default, the `allSkills` container will take full width
  },
  skillSet: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px 0px',
    width: '100%',
  },
  skillItem: {
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: '#414877',
    cursor: 'pointer',
    textAlign: 'center', // Center the text within the item
  },
  // Media query for screen sizes below 1200px
  mediaQueries: {
    '@media (min-width: 1200px)': {
      allSkills: {
        width: '20%',
        margin: '0 auto', // Center the container
      },
    },
  },
};

// Combined Skills component
const Skills = () => {
  const data = [
    {
      id: 1,
      heading: "Front-End",
      children: [
        { id: 11, heading: "HTML" },
        { id: 12, heading: "CSS" },
        { id: 13, heading: "JavaScript" },
        { id: 14, heading: "React.js" },
        { id: 15, heading: "Angular.js" },
        { id: 16, heading: "Redux" },
      ],
    },
    {
      id: 2,
      heading: "Back-End",
      children: [
        { id: 21, heading: "Node.js" },
        { id: 22, heading: "Express.js" },
        { id: 23, heading: "PHP" },
        { id: 24, heading: "Laravel" },
      ],
    },
    {
      id: 3,
      heading: "Database",
      children: [
        { id: 31, heading: "SQL" },
        { id: 32, heading: "MySQL" },
        { id: 33, heading: "No-SQL" },
        { id: 34, heading: "MongoDB" },
      ],
    },
    {
      id: 4,
      heading: "Mobile Development",
      children: [
        { id: 41, heading: "ReactNative" },
        { id: 42, heading: "Flutter" },
        { id: 43, heading: "Android" },
        { id: 44, heading: "iOS" },
      ],
    },
    {
      id: 5,
      heading: "Design and Testing",
      children: [
        { id: 51, heading: "Figma" },
        { id: 52, heading: "Adobe" },
        { id: 53, heading: "Unit Testing" },
      ],
    },
    {
      id: 6,
      heading: "Deployment",
      children: [
        { id: 61, heading: "LINUX" },
        { id: 62, heading: "AWS" },
        { id: 63, heading: "NETLIFY" },
        { id: 63, heading: "GitHub" },
      ],
    },
  ];

  return (
    <div style={styles.skillContainer}>
      <h1 style={styles.heading}>Technical Skills</h1>
      <div style={styles.skillWrapper}>
        {data.map((parent) => (
          <div key={parent.id} style={styles.allSkills}>
            <h2>{parent.heading}</h2>
            <div style={styles.skillSet}>
              {parent.children.map((child) => (
                <p key={child.id} style={styles.skillItem}>
                  {child.heading}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
