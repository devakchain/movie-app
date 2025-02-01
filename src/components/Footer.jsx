import React from "react";

function Footer() {
  const getDate = new Date().getFullYear();
  return (
    <div className="container-fluid bg-dark p-2 text-white text-center">
      <div className="container">
        <h4>shmuel.co.il {getDate}</h4>
      </div>
    </div>
  );
}

export default Footer;
