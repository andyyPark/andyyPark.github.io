import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div id="wrapper">
        <div id="main">
        <div className="inner">{children}</div>
        </div>
    </div>
  );
}
