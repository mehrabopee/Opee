import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // programming languages
    { name: "C", category: "programming languages"},
    { name: "C++", category: "programming languages"},
    { name: "Java", category: "programming languages"},
    { name: "JavaScript", category: "programming languages"},
    { name: "Python", category: "programming languages"},
    { name: "PHP", category: "programming languages"},

    // web technologies
    { name: "HTML5", category: "web technologies"},
    { name: "CSS3", category: "web technologies"},
    { name: "React", category: "web technologies"},
    { name: "Node", category: "web technologies"},
    { name: "Django", category: "web technologies"},
    { name: "Rest", category: "web technologies"},
    { name: "Fast", category: "web technologies"},
    { name: "PyTorch", category: "web technologies"},
    { name: "TensorFlow", category: "web technologies"},

    // database
    { name: "MySQL", category: "database"},
    { name: "MongoDB", category: "database"},
    { name: "Postman", category: "database"},

    //tools
    { name: "Git", category: "tools"},
    { name: "GitHub", category: "tools"},
    { name: "Docker", category: "tools"},
    { name: "VS Code", category: "tools"},
    { name: "Google Colaboratory", category: "tools"},
    { name: "Roboflow", category: "tools"},
    { name: "Kaggle", category: "tools"},
    { name: "Overleaf", category: "tools"},
    { name: "MS Office", category: "tools"},

    //OS
    { name: "Windows", category: "OS"},
    { name: "Linux", category: "OS"},

    //Soft Skills
    { name: "Problem Solving", category: "soft skills"},
    { name: "Communication", category: "soft skills"},
    { name: "Teamwork", category: "soft skills"},
];

const categories = ["all", "programming languages", "web technologies", "database", "tools", "OS", "soft skills"];


export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
       <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary"> Skills</span>
       </h2>
       <div className="flex flex-wrap justify-center gap-4 mb-12">
           {categories.map((category, key) => (
            <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary")}>
                {category}
            </button>
           ))}
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) =>(
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
               <div className="mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
               </div> 
            </div>    
          ))}
       </div>
    </div>
  </section>;
};