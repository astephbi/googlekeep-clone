import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> Nous sommes en {year} </p>
    </footer>
  );
};

export default Footer;
