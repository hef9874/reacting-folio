import React from "react";

const styles = {
  card: {
    boxShadow: "5px 5px 10px #222",
  },
};

const About = () => {
  return (
    <div className="section">
      <img
        className="max-w-md rounded-lg overflow-hidden"
        alt="Hannah Ferrell"
        style={styles.card}
      />
      <p className="text-xl mt-5">
        BOUT ME 
      </p>
    </div>
  );
};

export default About;