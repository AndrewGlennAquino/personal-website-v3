// Library imports
import { useContext } from "react";
import { motion } from "motion/react";

// Image imports
import externalLinkLight from "../assets/icons/external-link-light.svg";
import externalLinkDark from "../assets/icons/external-link-dark.svg";

// Context imports
import { LightThemeContext } from "../contexts/LightThemeContext";
import { FadeInContext } from "../contexts/FadeInContext";

/**
 * Project component that links to live/demo with screenshot and description.
 *
 * @param href URL to project
 * @param title title of project
 * @param src image source for project screenshot
 * @param children description of project
 */
export const Project = ({
  video,
  poster,
  href,
  title,
  src,
  children,
}: {
  video?: boolean;
  poster?: string;
  href: string;
  title: string;
  src: string;
  children: React.ReactNode;
}) => {
  // Get LightThemeContext
  const { lightTheme } = useContext(LightThemeContext);

  // Animation variants for fade in animation
  const FadeInVariants = useContext(FadeInContext);

  return (
    <motion.a
      className="rounded"
      href={href}
      target="_blank"
      variants={FadeInVariants}
    >
      {/* Content container */}
      <motion.div
        className="flex flex-col sm:grid sm:grid-cols-4 sm:items-center gap-4 relative"
        whileHover="animateHover"
      >
        {/* Animated background on hover */}
        <motion.div
          className={`${
            lightTheme ? "bg-xanthous" : "bg-tekhelet"
          } w-full h-full rounded absolute inset-0 -z-10`}
          initial={{ opacity: 0 }}
          variants={{ animateHover: { opacity: 1 } }}
        />

        {/* Text container */}
        <div className="col-start-2 -col-end-1">
          {/* Title and external link icon */}
          <div className="mb-2 flex items-center gap-2">
            <h3 className="font-bold">{title}</h3>
            <motion.img
              className="w-4 h-auto"
              src={lightTheme ? externalLinkDark : externalLinkLight}
              alt="External link"
              loading="lazy"
              initial={{ opacity: 0.5 }}
              variants={{ animateHover: { opacity: 1 } }}
            />
          </div>

          {/* Body */}
          <motion.p
            className="text-sm"
            initial={{ opacity: 0.75 }}
            variants={{ animateHover: { opacity: 1 } }}
          >
            {children}
          </motion.p>
        </div>

        {/* Screenshot or video */}
        {video ? (
          <video
            aria-label={title}
            className="aspect-video w-full h-auto rounded row-start-1 col-start-1 col-end-2 object-cover"
            src={src}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            className="aspect-video w-full h-auto rounded row-start-1 col-start-1 col-end-2 object-cover"
            src={src}
            alt={title}
            loading="lazy"
          />
        )}
      </motion.div>
    </motion.a>
  );
};
