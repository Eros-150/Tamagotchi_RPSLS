import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


let date =new Date();
let year=date.getFullYear();
const Footer = () => (
  <footer
    className="text-center text-lg-start"
    style={{ backgroundColor: "#db6930" }}
  >
    <div className="container d-flex justify-content-center py-5">
      <button
        type="button"
        className="btn btn-success"
      >
        <img class="w-25 p-3" src="../../../assets/tamagotchi.png" alt="tamagotchi" />
        <img class="w-25 p-3" src="../../../assets/rpsls.png" alt="rpsls" />
      </button>


    </div>

    <div
      className="text-center text-white p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      ©{year}Copyright: Eros Ruiz Ramirez
    </div>
  </footer>
);

export default Footer;
