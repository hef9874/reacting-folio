import React from "react";

const styles = {
    card: {
      boxShadow: "5px 5px 10px #222",
    },
  };

  const Resume = () => {
    return (
      <div className="section">
        <img
          className="max-w-md rounded-lg overflow-hidden"
          alt="Hannah Ferrell's Resume"
          style={styles.card}
        />
        <p className="text-xl mt-5">
          A aspiring software engineer. Here is my past experience.
        </p>
      </div>
    );
  };
  
  export default Resume;