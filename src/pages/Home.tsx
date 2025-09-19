// Library imports
import { type Variants, motion, stagger } from "motion/react";

/**
 * TODO: implement Home page
 */
export const Home = () => {
  // Animation variants for fade in animation
  const FadeInVariants: Variants = {
    animateFadeIn: {
      opacity: 1,
      transform: "translateY(0)",
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.main
      whileInView="animateFadeIn"
      viewport={{ once: true }}
      variants={{
        animateFadeIn: { transition: { delayChildren: stagger(0.1) } },
      }}
    >
      {/* Home header */}
      <h1 className="text-4xl font-bold">Andrew Aquino</h1>

      {/* TODO: implement about me section */}
      <section aria-label="About me" className="mt-4 flex flex-col gap-4">
        <motion.p
          initial={{ opacity: 0, transform: "translateY(8px)" }}
          variants={FadeInVariants}
        >
          Hello and nice to meet you!
        </motion.p>

        {/* TODO: implement icon cards with logos */}
        <motion.p
          initial={{ opacity: 0, transform: "translateY(8px)" }}
          variants={FadeInVariants}
        >
          My name is Andrew Aquino and I'm a full stack developer who enjoys
          creating accessible, aesthetically pleasing websites. I specialize in
          TypeScript, React, Tailwind, Node, Express, PostreSQL, and Vite. I
          focus on clean design, responsiveness, accessibility, and robust
          architecture.
        </motion.p>

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

      {/* TODO: implement work experience section */}
      <section aria-label="Work experience">
        <motion.p
          initial={{ opacity: 0, transform: "translateY(8px)" }}
          variants={FadeInVariants}
        >
          Work experience
        </motion.p>
      </section>

      {/* TODO: implement projects section */}
      <section aria-label="Projects">
        <motion.p
          initial={{ opacity: 0, transform: "translateY(8px)" }}
          variants={FadeInVariants}
        >
          projects
        </motion.p>
      </section>
    </motion.main>
  );
};
