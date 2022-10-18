import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className=" text-xl tracking-widest uppercase text-[#ffef0f]">
          Skills
        </p>
        <h2 className=" py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/Skills/html.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/Skills/CSS.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/Skills/javascript.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/Skills/nextjs.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/Skills/react.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/Skills/tailwind.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/Skills/AWS.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/Skills/Github1.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;