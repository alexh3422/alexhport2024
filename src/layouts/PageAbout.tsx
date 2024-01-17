import Camano from "../assets/Camano.webp";

export function PageAbout() {
  return (
    <>
      <div
        id="about"
        className="flex flex-col justify-center align-center text-center mt-20"
      >
        <div className="text-3xl mb-10">
          <h1>ABOUT</h1>
        </div>
        <div className="flex flex-row justify-center align-center text-center mt-5">
          <div className="flex flex-col justify-center align-center items-center text-center w-[50%]">
            <img
              src={Camano}
              alt="bay view from camano island"
              className="h-auto w-[50%]"
            />
          </div>
          <div className="flex flex-col justify-center align-center text-center w-[50%]">
            <div className="flex w-[50%] text-xl">
              I grew up in Seattle's Magnolia neighborhood and always admired
              the tech scene around me. Now, I'm excited to make my love for
              tech a part of my career. <br /> <br />
              Outside of work, I enjoy hanging out with family, watching or
              playing soccer, taking photos, and, of course, coding. <br />
              <br />
              What I find amazing about coding is the constant evolution. It
              feels like there's always something new to learn, and the idea
              that I'll keep growing excites me. My goal is to craft efficient
              code that produces visually appealing and intuitive products.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
