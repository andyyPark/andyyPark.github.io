import Image from "next/image";

const HomeSection = ({ active }) => {
  return (
    <>
      <section
        id="home-section"
        className={`${active ? "active" : "inactive"}`}
        style={{ display: active ? "block" : "none" }}
      >
        <div className="image">
          <span className="frame">
            <Image
              src="/ParkAndy1.jpg"
              width={400}
              height={400}
              alt="Picture of me"
            />
          </span>
        </div>

        <h1 id="name">Andy Park</h1>

        <hr id="inner-divider" />

        <p id="title">Ph.D. Candidate @ Carnegie Mellon University</p>
      </section>
    </>
  );
};

export default HomeSection;
