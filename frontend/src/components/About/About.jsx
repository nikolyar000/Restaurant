import React from 'react';
import BgPolygon from "../../assets/polygon.png";
import Vector from "../../assets/vector-wave.png";

const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
};
const About = ({ HandlePopup }) => {
  return (
    <div style={bgStyle} className="py-14">
        <div className="container min-h-[500px] relative z-10">
            <h1 className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
                About Us
            </h1>

            {/* card section */}
            <div className="bg-white/80 p-10 my-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro itaque ut est ipsa sequi? Nesciunt, eum asperiores vero, fugit nisi illo, nulla corporis suscipit debitis dolorem ut iste. Mollitia officiis perspiciatis ab, laboriosam rerum consequatur? Minima odio, quo odit quos nemo alias unde eveniet voluptatem, autem, reiciendis qui minus eos.
                <div className="pt-10 flex justify-center">
                    <button 
                      onClick={HandlePopup}
                      className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                        <FaUser />
                        My Account
                    </button>
                </div>
            </div>
        </div>

        {/* wave vector */}
        <div className="absolute top-0 right-0 w-full">
            <img src={Vector} alt="" className="mx-auto"/>
        </div>
    </div>
  )
}

export default About