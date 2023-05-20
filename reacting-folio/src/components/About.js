import React from "react";

const styles = {
  card: {
    boxShadow: "5px 5px 10px #222",
  },
};

const About = () => {
  return (
    <div name="about" className="w-full h-screen Pastel bg-gradient-to-tl gradient-to-bl from-blue-400 to-emerald-400">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-width-[100px] w-full pr-10 grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 px-4">
                    <p className="text-4xl font-bold inline border-b-4 border-white text-white">About</p>
                </div>
                <div>

                </div>
                <div className="max-v-[100px] w-full grid sm:grid-cols-2 gap-8">
                    <div>
                        <p className="sm:text-right text-3xl font-bold text-white pl-4">Hi I am Hannah. Thanks for visiting! </p>
                    </div>
                    <div>
                        <p className="text-white px-4">This is a portfolio to show how much I have learned in the UNC bootcamp course. Please take a look around and don't hesistate to reach out if you have any questions or would like to collaborate.</p>
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  );
};

export default About;