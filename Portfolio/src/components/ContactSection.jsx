import { Facebook, GithubIcon, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
   return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
     <div className="container mx-auto max-w-5xl">
       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary"> Me</span>
       </h2>

       <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        For any queries or collaboration, feel free to get in contact.
       </p>

       <div>
          <div className="space-y-8">
             <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

             <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex items-center space-x-4">
                   <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary"/>
                   </div>
                   <div className="text-center">
                    <h4 className="font-medium"> Email</h4>
                    <a href="mailto:mehrab.opee@northsouth.edu" className="text-muted-foreground hover:text-primary transition-colors">
                       mehrab.opee@northsouth.edu
                    </a>
                   </div>
                </div>
                <div className="flex items-center space-x-4">
                   <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary"/>
                   </div>
                   <div className="text-center">
                    <h4 className="font-medium"> WhatsApp</h4>
                    <a href="tel:+8801980101394" className="text-muted-foreground hover:text-primary transition-colors">
                       +880 1980101394
                    </a>
                   </div>
                </div>
             </div>

             <div className="pt-8">
                <h4 className="font-medium mb-4"> Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                    <a href="https://www.linkedin.com/in/mehrab-karim-opee-7a9082360/">
                        <Linkedin className="text-primary"/>
                    </a>
                    <a href="https://www.facebook.com/mehrab.karim.opee.mko/">
                        <Facebook className="text-primary"/>
                    </a>
                    <a href="https://www.instagram.com/opeekarim99?igsh=MTU5eXdhdjhmamwzNg==">
                        <Instagram className="text-primary"/>
                    </a>
                    <a href="https://github.com/mehrabopee">
                        <GithubIcon className="text-primary"/>
                    </a>
                </div>
             </div>
          </div>
       </div>
     </div>
   </section>;
};