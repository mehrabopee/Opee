import { Briefcase, Code, Database, User } from "lucide-react"

export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Computer Science Graduate & Passionate AI Enthusiast</h3>

                <p className="text-muted-foreground">
                  I am a Computer Science Graduate, recently graduating from North South University. I hail from an English Medium background, completing my IGCSE and IAL from Academia.
                </p>

                <p className="text-muted-foreground">
                  I am a tech savvy person and honed my skills in several aspects of computer science, especially in the field of artificial intelligence through several project and research works, while also showing my expertise in the field of software engineering and database. I would love to work in any field that is concerned with Computer Science, and Information and Technology (IT).  
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                      Contact Me 
                    </a>

                    <a href="/projects/Opee_CV.pdf" download="Opee_CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                      Download CV  
                    </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                 <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                       <div className="p-3 rounded-full bg-primary/10">
                         <Code className="h-6 w-6 text-primary"/>
                       </div>
                       <div className="text-left">
                        <h4 className="font-semibold text-lg"> Web Development</h4>
                        <p className="text-muted-foreground">
                            Creating responsive websites and web applications with modern frameworks
                        </p>
                       </div>
                    </div>
                 </div>
                 <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                       <div className="p-3 rounded-full bg-primary/10">
                         <Database className="h-6 w-6 text-primary"/>
                       </div>
                       <div className="text-left">
                        <h4 className="font-semibold text-lg"> Artificial Intelligence</h4>
                        <p className="text-muted-foreground">
                            Training & deploying cutting-edge AI models with intuitive user interfaces
                        </p>
                       </div>
                    </div>
                 </div>
                 <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                       <div className="p-3 rounded-full bg-primary/10">
                         <Briefcase className="h-6 w-6 text-primary"/>
                       </div>
                       <div className="text-left">
                        <h4 className="font-semibold text-lg"> Project Management</h4>
                        <p className="text-muted-foreground">
                            Handling projects from concept to completion
                        </p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    </section>
}