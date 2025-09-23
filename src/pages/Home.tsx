// Library imports
import { useContext } from "react";
import { motion, stagger } from "motion/react";

// Component imports
import { Highlight } from "../components/Highlight";
import { Experience } from "../components/Experience";

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

// Context imports
import { LightThemeContext } from "../contexts/LightThemeContext";
import { FadeInContext } from "../contexts/FadeInContext";

// Animated section header component
const SectionHeader = ({ children }: { children: string }) => {
  // Get LightThemeContext
  const { lightTheme } = useContext(LightThemeContext);
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
    <motion.main
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
          initial={{ opacity: 0, transform: "translateY(8px)" }}
          variants={FadeInVariants}
        >
          <p>
            My name is Andrew Aquino and I'm a full stack developer who enjoys
            developing aesthetically pleasing and accessible websites. I like to
            use:
          </p>

          {/* Skills highlight list */}
          <ul className="mt-4 inline-flex flex-wrap gap-1">
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

        <motion.p
          initial={{ opacity: 0, transform: "translateY(8px)" }}
          variants={FadeInVariants}
        >
          As the sole Founding Full Stack Engineer at ChemTek, I lead design,
          architecture, and infrastructure decisions, leveraging free and
          cost-effective technologies that allow for scalability as the company
          grows. As a freelance full stack developer, I collaborate with local
          businesses and entrepreneurs to deliver modern, responsive, and SEO
          optimized websites for free as community service, helping small
          businesses thrive in the digital space.
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
            company="Chemtek LLC"
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
            TypeScript, React.js, Tailwind CSS, Node.js, Express.js, PostgreSQL,
            and AWS Lambda. Develop a MVP with MailChimp API integration via AWS
            Lambda and Netlify Functions, streamlining and automating customer
            sign-ups. Design and implement a user authenticated admin dashboard,
            allowing business owners to independently manage blog posts.
            Strategize continuous integration and deployment in addition to
            cloud infrastructure, utilizing Netlify and Render in addition to
            webhooks to ensure scalability, performance, reliability, and no
            overhead cost.
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
            Collaborate directly with clients to define requirements and consult
            on design decisions that best align with their brand and audience.
            Deliver user-focused designs that comply with accessibility
            guidelines (WCAG) and follow SEO best practices. Deploy web
            applications leveraging Cloudflare DNS, Netlify, and Render to
            deliver secure, low cost, and scalable hosting for clients.
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
            understanding of RDBMS industry practices. Passed rigorous technical
            assessments, validating a deep understanding of Java, Spring, and
            SQL concepts. Structured training on client-specific tech stacks,
            demonstrating seamless transition into development teams and
            production environments.
          </Experience>
        </div>
      </section>

      {/* TODO: implement projects section */}
      <section aria-label="Projects">
        <SectionHeader>Projects</SectionHeader>
      </section>

      {/* TODO: implement blog section */}
      <section>
        <SectionHeader>Blog</SectionHeader>
      </section>
    </motion.main>
  );
};
