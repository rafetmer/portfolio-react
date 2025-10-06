import { Briefcase, Code, User, Download } from "lucide-react";


const downloadCvFile = () => {
  const link = document.createElement("a");
  link.href = "/rafetmer_cv_photo.pdf"; // PDF file path
  link.download = "rafetmercimek_cv.pdf"; // Desired file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-glow">About </span> <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Computer Engineer
            </h3>

            <p className="text-muted-foreground">
              With a strong foundation in computer engineering and a love for
              coding, I specialize in building solutions to complex problems. 
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex relative flex-row sm:flex-row gap-4 pt-4 justify-center text-font-">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <div className="btnDiv">
                <button
                  id= "downloadCvBtn"
                  href=""
                  className="glass-effect cosmic-button"
                  value="download"
                  onClick={downloadCvFile}
                >
                  <span className="flex items-center gap-2">Download CV <Download /> </span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Full-Stack Development </h4>
                  <p className="text-muted-foreground">
                    Creating full-stack applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data & AI Enthusiast</h4>
                  <p className="text-muted-foreground">
                    Exploring the intersection of data science and software
                    development to create intelligent applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with
                    a focus on collaboration and communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
