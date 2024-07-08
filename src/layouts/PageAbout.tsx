import Camano from "../assets/Camano.webp";

export function PageAbout() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center text-center mb-20"
    >
      <div className="title text-3xl mb-10">
        <h1>ABOUT</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-center w-full max-w-[75%] mx-auto mt-5">
        <div className="flex flex-col justify-center items-center text-center w-full mb-14 md:w-1/2 md:order-1 md:mr-14">
          {/* Image section */}
          <img
            src={Camano}
            alt="Bay view from Camano Island"
            className="h-auto w-[80%] md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center w-full md:w-1/2 md:order-2  md:ml-4">
          {/* Text section */}
          <div className="content text-xl">
            <p>
              I grew up in Seattle's Magnolia neighborhood and always admired
              the tech scene around me. Now, I'm excited to make my love for
              tech a part of my career.
            </p>
            <br />
            <p>
              Outside of work, I enjoy hanging out with family, watching or
              playing soccer, photography, and of course, coding.
            </p>
            <br />
            <p>
              What I find amazing about coding is the constant evolution. It
              feels like there's always something new to learn, and the idea
              that I'll keep growing excites me. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
