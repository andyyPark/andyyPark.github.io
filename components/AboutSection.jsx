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
        
        <hr id="outer-divider"/>
      </section>
    </>
  );
};

export default HomeSection;
