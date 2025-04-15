import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<[number, number]>([]);
  useEffect(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  });
}
