import React from 'react';

import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
    <div className="container px-5 py-10 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
        <i class="fa-solid fa-puzzle-piece"></i><br></br>
          Skills &amp; Technologies
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        In the rapidly evolving landscape of technology, staying equipped with the right skills and mastering cutting-edge technologies is essential. Here's a glimpse into my skillset and the technologies I'm proficient in:
        </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill}  className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              
              <i class="fa-solid fa-check text-green-400 w-6 h-6 flex-shrink-0 mr-4"></i>
              <span className="title-font font-medium text-white">
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
