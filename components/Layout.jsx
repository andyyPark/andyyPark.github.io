import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <title>Andy Park</title>
      <meta name="description" content="My homepage"/>
      <div id="wrapper">
        <div id="main">
          <div className="inner">{children}</div>
        </div>
      </div>
    </div>
  );
}
