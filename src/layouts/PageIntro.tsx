import Emoji from "../assets/AlexEmoji.png";

export function PageIntro() {
  return (
    <>
      <div className="flex flex-col justify-center align-center text-center">
        <div className="flex justify-center">
         
          <img src={Emoji} className="h-[300px] w-[300px]" alt="alex emoji" />
        </div>

        <h1>
          My name is Alex Hall, I am a full stack web developer who is a
          graduate from the University of Washington's Full Stack Web
          Development Bootcamp. <br /> Please feel free to browse around and
          view my work below.
        </h1>
      </div>
    </>
  );
}
