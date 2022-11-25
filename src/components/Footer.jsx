import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <p style={{ letterSpacing: 1.5 }}>
        &copy; {year} Ethan Ge @ University of Melbourne
      </p>
    </div>
  );
}
