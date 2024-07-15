import styles from "./featured-projects-section.module.css";
import featuredProjects from "@/constants/featured-projects";
import ProjectCard from "./project-card/ProjectCard";
import AnimatedTextComponent from "@/components/common/animated-text/AnimatedTextComponent";

const FeatureProjectsSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <AnimatedTextComponent text="Featured Projects" />
      </div>

      <div className={styles.featuredProjectsContainer}>
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            content={project}
            artAsset={project.cardImgAsset}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureProjectsSection;
