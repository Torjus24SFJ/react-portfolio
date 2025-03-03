import { Navbar } from "../Navbar/Navbar";

export function Layout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
}

