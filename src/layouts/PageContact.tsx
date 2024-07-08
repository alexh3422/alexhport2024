import { Button } from "../components/Button";

import GitHub from "../assets/icons8-github.svg";
import Instagram from "../assets/icons8-instagram.svg";


export function PageContact() {
  const linkGithub = () => {
    window.open("https://github.com/alexh3422", "_blank");
  };
  const linkInstagram = () => {
    window.open("https://www.instagram.com/alexanderhallofficial", "_blank");
  };


  return (
    <>
      <div
        id="contact"
        className="flex flex-col justify-center align-center text-center mt-20 p-8 mb-20"
      >
        <div className="title text-3xl mb-10">
          <h1>CONTACT</h1>
        </div>
        <div className="content flex flex-col justify-center align-center text-center text-2xl mt-14">
          <a href="mailto:alex@alexhallcoding.com">alex@alexhallcoding.com</a>
        </div>
        <div className="flex justify-center align-center text-center mt-10 mb-40 p-6">
          <Button variant="ghost" size="default" onClick={linkGithub}>
            {" "}
            <img src={GitHub} alt="Github Logo" className="m-5" />
          </Button>
          <Button variant="ghost" size="default" onClick={linkInstagram}>
            <img src={Instagram} alt="Instagram Logo" className="m-5" />
          </Button>
       
        </div>
      </div>
    </>
  );
}
