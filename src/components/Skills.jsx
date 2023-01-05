import React from "react";
import {
  SiJavascript,
  SiPython,
  SiJava,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMaterialui,
  SiGit,
  SiLinux,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="mt-20">
      <h1 className="text-3xl pt-4">Skills</h1>
      <div className="flex flex-col py-10">
        <div className="flex flex-wrap justify-evenly py-10">
          <SiJavascript size={40} color="#E5D14B" />
          <SiPython size={40} color="#295170" />
          <SiJava size={40} color="#216e88" />
          <SiHtml5 size={40} color="#DE4B26" />
        </div>
        <div className="flex flex-wrap justify-evenly py-10">
          <SiCss3 size={40} color="#2965f1" />
          <SiTailwindcss size={40} color="#04cdeb" />
          <SiMysql size={40} color="#005c84" />
          <SiMongodb size={40} color="#4ba23e" />
        </div>
        <div className="flex flex-wrap justify-evenly py-10">
          <SiReact size={40} color="#5cd0f0" />
          <SiExpress size={40} color="#343434" />
          <SiNodedotjs size={40} color="#7cc428" />
          <SiMaterialui size={40} color="#02a9f3" />
        </div>
        <div className="flex flex-wrap justify-evenly py-10">
          <SiGit size={40} color="#e64c30" />
          <SiLinux size={40} color="#ecb60d" />
          <SiDocker size={40} color="#1097d1" />
          <SiAmazonaws size={40} color="#f38c01" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
