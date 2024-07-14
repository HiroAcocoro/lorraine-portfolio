import styles from "./featured-projects-section.module.css";
import featuredProjects from "@/constants/featured-projects";
import ProjectCard from "./porject-card/ProjectCard";

const FeatureProjectsSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <p>Featured Projects</p>
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
