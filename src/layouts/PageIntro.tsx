import Emoji from "../assets/AlexEmoji.png";
import { motion } from "framer-motion";

export function PageIntro() {
  return (
    <>
      <div className="flex flex-col justify-center align-center text-center mb-10 mt-[100px]">
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.2 }}>
            <img src={Emoji} className="h-[300px] w-[300px]" alt="alex emoji" />
          </motion.div>
        </div>
        <div className="flex justify-center align-center ">
          <h1 className=" content border-double border-4 border-black text-lg text-white max-w-lg p-8 bg-[#1D263B]">
            My name is Alex Hall, I am a full stack web developer who is a
            graduate from the University of Washington's Full Stack Web
            Development Program. <br /> <br />
            My goal is to craft efficient code that produces visually appealing
            and intuitive products.
            <br /> <br /> Please feel free to browse around and view my work
            below.
          </h1>
        </div>
      </div>
    </>
  );
}
