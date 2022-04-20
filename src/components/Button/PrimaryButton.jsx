import React from "react";
import styles from "./PrimaryButton.module.css";

// ways of writing css
// inline css

// internal css
// external css
// module css
// const styles = {
//   buttonStyles: {
//     backgroundColor: "blue",
//     color: "#fff",
//     marginLeft: "0.5rem",
//     border: "none",
//     padding: "0.5rem 0.75rem",
//   },
// };
// style={styles.buttonStyles}
// class attribute in html
//class keyword in javascript
function PrimaryButton({ text }) {
  return <button className={styles.btn_primary}> {text} </button>;
}

export default PrimaryButton;
