import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
      id: 1,
      title: "Grade Vision AI: Student Performance Predictor",
      description: "",
      image: "/projects/GradeVision.png",
      githubUrl: "https://github.com/FaizaBenzir/gradeVisionAI",  
    },

    {
      id: 2,
      title: "Automated Land Assessment Program (ALAP)",
      description: "",
      image: "/projects/Satellite.png",
      githubUrl: "https://github.com/FaizaBenzir/Automated-Land-Assessment-Program-ALAP-",  
    },

    {
      id: 3,
      title: "Automated YouTube Benchmarking System using Natural Language Processing (NLP)",
      description: "",
      image: "/projects/youtube.png",
      githubUrl: "https://github.com/FahmidaNourin/CSE_299",  
    },

    {
      id: 4,
      title: "Towards Practical AI for Agriculture: A Self-Supervised Attention Framework for Spinach Leaf Disease Detection",
      description: "",
      image: "/projects/spinach.png",
      githubUrl: "https://github.com/SAIFULLAH-SHARAFAT/A-Self-Supervised-Deep-Learning-Framework-for-Malabar-Spinach-Leaf-Disease-Classification",  
    },

    {
      id: 5,
      title: "Tea Leaf Classification Using Self-Distillation and Ensemble Learning with State-of-the-Art Deep Learning Techniques",
      description: "",
      image: "/projects/tea leaf.png",
      githubUrl: "https://github.com/SAIFULLAH-SHARAFAT/Tea_leaf_classification",  
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                 Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
               Here are some of my noteworthy projects, which were carefully planned and implemented along with the contribution of my teammates. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100"/>
                        </div>

                        <h3 className="text-l font-semibold mb-1"> {project.title}</h3>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                              <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github size={20}/>
                              </a>
                            </div>
                        </div>       
                    </div>    
                ))}
            </div>

            <div className="text-center mt-12">
               <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/mehrabopee">
                Check My GitHub <ArrowRight size={16}/>
               </a>
            </div>
        </div>
    </section>;
};