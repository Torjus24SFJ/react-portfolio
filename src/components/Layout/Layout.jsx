import { Navbar } from "../Navbar/Navbar";
import PropTypes from "prop-types";

export function Layout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is provided
};
