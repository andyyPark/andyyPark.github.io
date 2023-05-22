import Layout from "@/components/Layout";
import NavBar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <NavBar />
      <hr id="outer-divider" />

      <section id="home-section" className="active">
        <div className="image">
          <span className="frame">
            <img src="/ParkAndy.jpg"/>
          </span>
        </div>
      </section>
    </Layout>
  );
}
