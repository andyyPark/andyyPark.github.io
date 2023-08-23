import Image from "next/image";
import { papers } from "../data/papers";

const ResearchSection = ({ active }) => {
  return (
    <>
      <section
        id="research-section"
        className={`${active ? "active" : "inactive"}`}
        style={{ display: active ? "block" : "none" }}
      >
        <p id="section__title">Research</p>
        <p id="research__text">
          My primary research area is weak gravitational lensing with a
          particular interest in utilizing statistical and machine learning
          methods to perform cosmological analysis on large survey dataset, such
          as the Vera R. Observatory&#39;s Legacy Survey of Space and Time
          (LSST), the Subaru Telescope&#39;s Hyper Suprime-Cam (HSC), and the
          Roman Space Telescope. My research focuses on 1) turning large dataset
          into inferences on cosmological models using statistical analysis and
          2) analytical estimation for weak lensing distortion from a large
          ensemble of galaxy images.
        </p>
        <div id="research">
          {papers.map((paper) => (
            <div key={paper.id} className="research-card">
              <div>
                <Image
                  src={paper.thumbnail}
                  alt="Thumbnail"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h3>
                  <span className="research__bold">Title:</span>
                  {paper.title}
                </h3>
                <p>
                  <span className="research__bold">Authors:</span>
                  {paper.author}
                </p>
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research__link"
                >
                  View Paper
                </a>
              </div>
            </div>
          ))}
        </div>
        <p id="section__text">Under Construction!</p>
      </section>
    </>
  );
};

export default ResearchSection;
