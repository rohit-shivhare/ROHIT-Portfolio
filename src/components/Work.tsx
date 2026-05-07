import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function getTranslateX() {
      const workFlex = document.querySelector(".work-flex") as HTMLElement;
      if (!workFlex) return 0;
      
      // Calculate how far we need to translate the flex container
      // so its right edge reaches the right edge of the viewport.
      // We add some extra padding to ensure the last item is fully visible and not flush with the edge.
      const scrollWidth = workFlex.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      // Calculate the initial left position of the work-flex relative to the viewport
      const rectLeft = workFlex.getBoundingClientRect().left;
      
      let amount = scrollWidth - viewportWidth + rectLeft + 100; // 100px extra buffer
      return amount > 0 ? amount : 0;
    }

    translateX = getTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`, // Use dynamic getter for resize support
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true, // Recalculate on resize
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "AI Resume Analyzer & ATS Optimizer",
              category: "Full-Stack AI App",
              tools: "React 18, Node.js, PostgreSQL, Gemini Flash",
            },
            {
              name: "Mini-SOC",
              category: "Security Simulator",
              tools: "Python, Flask, SQLite, Scapy, Cryptography",
            },
            {
              name: "Resume Builder",
              category: "Web Application",
              tools: "HTML5, CSS3, JavaScript, Bootstrap 4",
            },
            {
              name: "YOGASAN",
              category: "Wellness Platform",
              tools: "HTML5, CSS3, JavaScript, ScrollReveal.js",
            },
            {
              name: "GitHub Profile Search",
              category: "API Tool",
              tools: "HTML5, CSS3, JavaScript, Axios, GitHub API",
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
