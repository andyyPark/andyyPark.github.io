import Image from "next/image";

const ResearchSection = ({ active }) => {
  return (
    <>
      <section
        id="research-section"
        className={`${active ? "active" : "inactive"}`}
        style={{ display: active ? "block" : "none" }}
      >
        <p id="section__title">Research</p>
        <p id="section__text">
          Under Construction!
        </p>
      </section>
    </>
  );
};

export default ResearchSection;
