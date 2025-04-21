"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Pfp() {
  // Maybe in the future?
  //
  // const [flipped, setFlipped] = useState(false);
  // const [scope, animate] = useAnimate();
  //
  // const onMouseEnterHelper = async () => {
  //   await animate(scope.current, { transform: "rotateY(190deg)" });
  //   setFlipped(true);
  //   await animate(scope.current, { transform: "rotateY(180deg)" });
  // };
  //
  // const onMouseExitHelper = async () => {
  //   await animate(scope.current, { transform: "rotateY(-90deg)" });
  //   setFlipped(false);
  //   await animate(scope.current, { transform: "rotateY(-90deg)" });
  // };

  return (
    <motion.div initial={false}>
      <Image
        className="m-0 max-h-[70px] rounded-full p-0"
        src="/profile_picture_human.png"
        alt="Profile picture"
        width={70}
        height={70}
        id="dog"
      />
    </motion.div>
  );
}
