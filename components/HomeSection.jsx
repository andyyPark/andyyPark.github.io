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
        <div className="image">
          <span className="frame">
            <Image src="/ParkAndy.jpg" width={400} height={400} alt="sadasd" />
          </span>
        </div>

        <h1 id="name">Andy Park</h1>

        <hr id="inner-divider" />

        <p id="title">Ph.D. Candidate @ Carnegie Mellon University</p>
        <hr id="outer-divider" />
      </section>
    </>
  );
};

export default HomeSection;
