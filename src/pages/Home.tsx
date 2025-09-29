// Library imports
import { useContext } from "react";
import { motion, stagger } from "motion/react";
import { Link } from "react-router";

// Component imports
import { Highlight } from "../components/Highlight";
import { Experience } from "../components/Experience";
import { Project } from "../components/Project";
import { Footer } from "../components/Footer";

// Image imports
import typescript from "../assets/images/typescript.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import motionLogo from "../assets/images/motion.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import postgresql from "../assets/images/postgresql.png";
import vite from "../assets/images/vite.png";
import java from "../assets/images/java.png";
import spring from "../assets/images/spring.png";
import maven from "../assets/images/maven.png";
import chemtekScreenshot from "../assets/images/chemtek-screenshot.png";
import personalWebsiteV2Screenshot from "../assets/images/personal-website-v2-screenshot.png";
import brewNBubbleScreenshot from "../assets/images/brew-n-bubble-screenshot.png";
import fithausScreenshot from "../assets/images/fithaus-screenshot.png";
import personalWebsiteV1Screenshot from "../assets/images/personal-website-v1-screenshot.png";

// Video imports
import chemtekVideo from "../assets/videos/chemtek-video.mp4";
import brewNBubbleVideo from "../assets/videos/brew-n-bubble-video.mp4";
import fithausVideo from "../assets/videos/fit-haus-video.mp4";
import personalWebsiteV1Video from "../assets/videos/personal-website-video.mp4";

// Context imports
import { LightThemeContext } from "../contexts/LightThemeContext";
import { FadeInContext } from "../contexts/FadeInContext";

// Animated section header component
const SectionHeader = ({ children }: { children: string }) => {
  // Get LightThemeContext
  const { lightTheme } = useContext(LightThemeContext);

  // Get FadeInContext
  const FadeInVariants = useContext(FadeInContext);

  return (
    <motion.h2
      className="text-xl font-bold w-fit"
      initial={{
        color: "var(--color-xanthous)",
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={lightTheme ? { color: "var(--color-tekhelet)" } : undefined}
      variants={FadeInVariants}
    >
      {children}
    </motion.h2>
  );
};

/**
 * TODO: implement Home page
 */
export const Home = () => {
  // Animation variants for fade in animation
  const FadeInVariants = useContext(FadeInContext);

  return (
    <>
      <motion.main
        initial="initial"
        whileInView="animateFadeIn"
        viewport={{ once: true }}
        variants={{
          animateFadeIn: { transition: { delayChildren: stagger(0.2) } },
        }}
      >
        {/* Home header */}
        <h1 className="text-4xl font-bold">Andrew Aquino</h1>

        {/* About me section */}
        <section aria-label="About me" className="mt-4 flex flex-col gap-4">
          <SectionHeader>Hello and nice to meet you!</SectionHeader>

          <motion.div
            className="flex flex-col items-center"
            variants={FadeInVariants}
          >
            <p>
              My name is Andrew Aquino and I'm a full stack developer who enjoys
              developing aesthetically pleasing and accessible websites. Here is
              the tech stack I like to use:
            </p>

            {/* Skills highlight list */}
            <ul
              className="mt-4 inline-flex flex-wrap gap-1"
              aria-label="Technologies I like to use"
            >
              <Highlight src={typescript} alt="TypeScript">
                TypeScript
              </Highlight>
              <Highlight src={react} alt="React">
                React
              </Highlight>
              <Highlight src={tailwind} alt="Tailwind">
                Tailwind
              </Highlight>
              <Highlight src={motionLogo} alt="Motion (formerly Framer Motion)">
                Motion
              </Highlight>
              <Highlight src={node} alt="Node">
                Node
              </Highlight>
              <Highlight src={express} alt="Express">
                Express
              </Highlight>
              <Highlight src={postgresql} alt="PostreSQL">
                PostreSQL
              </Highlight>
              <Highlight src={vite} alt="Vite">
                Vite
              </Highlight>
            </ul>
          </motion.div>

          <motion.p variants={FadeInVariants}>
            As the sole Founding Full Stack Engineer at ChemTek, I lead design,
            architecture, and infrastructure decisions, leveraging free and
            cost-effective technologies that allow for scalability as the
            company grows. As a freelance full stack developer, I collaborate
            with local businesses and entrepreneurs to deliver modern,
            responsive, and SEO optimized websites for free as community
            service, helping small businesses thrive in the digital space.
          </motion.p>
        </section>

        {/* Experience section */}
        <section aria-label="Work experience" className="my-12">
          <SectionHeader>Work experience</SectionHeader>

          {/* Experience container */}
          <div className="mt-12 flex flex-col gap-8">
            <Experience
              start="Jul 2025"
              end="Present"
              title="Founding Full Stack Engineer"
              company="ChemTek LLC"
              skills={[
                { src: typescript, alt: "TypeScript", children: "TypeScript" },
                { src: react, alt: "React", children: "React" },
                { src: tailwind, alt: "Tailwind", children: "Tailwind" },
                { src: motionLogo, alt: "Motion", children: "Motion" },
                { src: node, alt: "Node", children: "Node" },
                { src: express, alt: "Express", children: "Express" },
                { src: postgresql, alt: "PostgreSQL", children: "PostgreSQL" },
                { src: vite, alt: "Vite", children: "Vite" },
                { alt: "Netlify", children: "Netlify" },
                { alt: "Render", children: "Render" },
              ]}
            >
              Serve as Founding Full Stack Engineer, independently leading
              end-to-end development of a full-stack web application using
              TypeScript, React.js, Tailwind CSS, Node.js, Express.js,
              PostgreSQL, and AWS Lambda. Develop a MVP with MailChimp API
              integration via AWS Lambda and Netlify Functions, streamlining and
              automating customer sign-ups. Design and implement a user
              authenticated admin dashboard, allowing business owners to
              independently manage blog posts. Strategize continuous integration
              and deployment in addition to cloud infrastructure, utilizing
              Netlify and Render in addition to webhooks to ensure scalability,
              performance, reliability, and no overhead cost.
            </Experience>

            <Experience
              start="Mar 2025"
              end="Present"
              title="Freelance Full Stack Developer"
              company="Self Employed"
              skills={[
                { src: typescript, alt: "TypeScript", children: "TypeScript" },
                { src: react, alt: "React", children: "React" },
                { src: tailwind, alt: "Tailwind", children: "Tailwind" },
                { src: motionLogo, alt: "Motion", children: "Motion" },
                { src: node, alt: "Node", children: "Node" },
                { src: express, alt: "Express", children: "Express" },
                { src: postgresql, alt: "PostgreSQL", children: "PostgreSQL" },
                { src: vite, alt: "Vite", children: "Vite" },
                { alt: "Netlify", children: "Netlify" },
                { alt: "Render", children: "Render" },
              ]}
            >
              Design and develop responsive websites for local businesses using
              TypeScript, React.js, Tailwind CSS, Node.js, and Express.js.
              Collaborate directly with clients to define requirements and
              consult on design decisions that best align with their brand and
              audience. Deliver user-focused designs that comply with
              accessibility guidelines (WCAG) and follow SEO best practices.
              Deploy web applications leveraging Cloudflare DNS, Netlify, and
              Render to deliver secure, low cost, and scalable hosting for
              clients.
            </Experience>

            <Experience
              start="Dec 2024"
              end="Mar 2025"
              title="Software Engineer"
              company="Revature"
              skills={[
                { src: java, alt: "Java", children: "Java" },
                { src: spring, alt: "Spring", children: "Spring" },
                { src: maven, alt: "Maven", children: "Maven" },
              ]}
            >
              Participated in an immersive backend development training
              reinforcing Java concepts, Spring Boot, and SQL. Designed,
              developed, and tested Spring based projects, strengthening
              understanding of RDBMS industry practices. Passed rigorous
              technical assessments, validating a deep understanding of Java,
              Spring, and SQL concepts. Structured training on client-specific
              tech stacks, demonstrating seamless transition into development
              teams and production environments.
            </Experience>
          </div>
        </section>

        {/* Project section */}
        <section aria-label="Projects" className="my-12">
          <SectionHeader>Projects</SectionHeader>

          {/* Project container */}
          <div className="mt-12 flex flex-col gap-8">
            <Project
              video
              href="https://www.chemtek.services/"
              title="ChemTek LLC Website"
              src={chemtekVideo}
              poster={chemtekScreenshot}
            >
              End-to-end development to showcase ChemTek LLC’s services and
              drive customer acquisition. Ensure website aesthetics meet
              specifications and gather feedback on important selling points for
              SEO. Create a secure admin dashboard that authenticates the admin
              using Auth0 authentication. Build CI/CD pipelines with Netlify and
              Render, leveraging webhooks to trigger automated frontend rebuilds
              on backend updates.
            </Project>

            <Project
              href="https://andrewglennaquino.github.io/personal-website-v2/"
              title="Personal Website v2"
              src={personalWebsiteV2Screenshot}
            >
              Develop an improved personal website, focusing on scalability and
              backend integration. Strengthen proficiency in TypeScript to
              improve code readability, maintainability, and scalability.
              Implement a blog management system with PostgreSQL and Express.js
              to enable dynamic content publishing. Plan deployment architecture
              via Netlify, Render, and Cloudflare DNS to minimize cost, ensure
              security, and support scalability.
            </Project>

            <Project
              video
              href="https://andrewglennaquino.github.io/brew-n-bubble-website/"
              title="Brew 'n Bubble Website"
              src={brewNBubbleVideo}
              poster={brewNBubbleScreenshot}
            >
              Produced an accessible responsive website for Brew 'n Bubble, a
              local coffee and bubble tea store. Aimed to match the store’s cozy
              aesthetic, drawing themes from the store's interior as inspiration
              for component design. Adhere to Web Content Accessibility
              Guidelines (WCAG) and design laws of UX/UI for optimized user
              experience and SEO.
            </Project>

            <Project
              video
              href="https://andrewglennaquino.github.io/fit-haus-website/"
              title="Fithaus Website"
              src={fithausVideo}
              poster={fithausScreenshot}
            >
              Focus on bold fonts, flat edges, and fast animations for a sporty
              aesthetic, inspired by websites from sport apparel brands.
              Collaborated closely with the business owner for stylistic
              decisions that aligned with their Spanish-speaking target
              audience. Adhere to Web Content Accessibility Guidelines (WCAG)
              and design laws of UX/UI for optimized user experience and SEO.
            </Project>

            <Project
              video
              href="https://andrewglennaquino.github.io/personal-website/"
              title="Personal Website v1"
              src={personalWebsiteV1Video}
              poster={personalWebsiteV1Screenshot}
            >
              Built a fully responsive, single-page website that as my personal
              portfolio to showcase my skills. Built using React, Vanilla CSS,
              Motion, and React Three Fiber.
            </Project>
          </div>
        </section>

        {/* Blog section */}
        <section aria-label="Blog" className="my-12">
          <SectionHeader>Writing</SectionHeader>

          {/* Blog container */}
          <motion.div className="mt-8" variants={FadeInVariants}>
            <p className="mb-2">
              I'm by no means an author or poet, nor am I profound or
              enlightened in anyway 😭, but hey, fake it 'till you make it. If
              you would like to take a read into my spaghetti code of poems,
              please feel free!
            </p>

            <Link to="/blog">
              <motion.div
                className="w-fit"
                initial={{ opacity: 0.5 }}
                whileHover="animateHover"
                variants={{ animateHover: { opacity: 1 } }}
              >
                Link to writing
                <motion.div
                  className="inline-block ml-1"
                  variants={{ animateHover: { transform: "translateX(4px)" } }}
                >
                  →
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        </section>
      </motion.main>

      {/* Persistent footer */}
      <Footer />
    </>
  );
};
