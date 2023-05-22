import Image from "next/image";

const HomeSection = ({ active }) => {
  return (
    <>
      <section
        id="home-section"
        className={`${active ? "active" : "inactive"}`}
        style={{ display: active ? "block" : "none" }}
      >
        <hr id="outer-divider" />

        <p id="about">About</p>
        <p id="about__text">
          <span className="p">
            Hello! I am a second year Ph.D. candidate in Physics at McWilliams
            Center for Cosmology, Carnegie Mellon University, where I am
            advisded by Rachel Mandelbaum studying observational cosmology.
          </span>
          <span className="p">
            Prior to graduate school, I recieved my B.S. in Mathematics and Physics
            (specialization in Astrophysics) at the Univeristy of California, Irvine.
          </span>
        </p>

        <hr id="outer-divider" />
      </section>
    </>
  );
};

export default HomeSection;
