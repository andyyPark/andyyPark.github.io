import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <main>{children}</main>
    </div>
  );
}
