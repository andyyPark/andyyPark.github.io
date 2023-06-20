import Image from "next/image";

const HomeSection = ({ active }) => {
  return (
    <>
      <section
        id="about-section"
        className={`${active ? "active" : "inactive"}`}
        style={{ display: active ? "block" : "none" }}
      >
        <p id="section__title">About</p>
        <p id="section__text">
          <span className="p">
            Hello! I am a second year Ph.D. candidate in Physics at McWilliams
            Center for Cosmology, Carnegie Mellon University, where I am
            advisded by Rachel Mandelbaum studying observational cosmology.
          </span>
          <span className="p">
            Prior to graduate school, I recieved my B.S. in Mathematics and
            Physics (specialization in Astrophysics) at the Univeristy of
            California, Irvine.
          </span>
        </p>
      </section>
    </>
  );
};

export default HomeSection;
