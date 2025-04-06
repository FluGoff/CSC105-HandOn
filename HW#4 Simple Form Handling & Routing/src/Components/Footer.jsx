import React from "react";

function Footer() {
  return (
    <footer className="bg-black px-8 py-4 text-center font-mono text-white">
      &copy; {new Date().getFullYear()} Route Form
    </footer>
  );
}

export default Footer;