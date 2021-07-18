import { useEffect, useRef, useState } from "react";
import { Clock } from "./components/clock";
import "./styles.css";

export default function App() {
  const containerRef = useRef(null);
  const [dimens, setDimens] = useState({ width: 0, height: 0 });

  const viewBox = [0, 0, dimens.w, dimens.h].join(" ");

  useEffect(() => {
    setDimens({
      w: containerRef.current.getBoundingClientRect().width,
      h: containerRef.current.getBoundingClientRect().height
    });
  }, [containerRef]);

  return (
    <div className="App" ref={containerRef}>
      <Clock dimens={dimens} viewBox={viewBox} />
    </div>
  );
}
