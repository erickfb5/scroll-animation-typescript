import { FC, useRef, useEffect } from "react";
import "./App.css";

const App: FC = () => {
  const boxes = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;
      boxes.current.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        boxTop < triggerBottom
          ? box.classList.add("show")
          : box.classList.remove("show");
      });
    };

    window.addEventListener("scroll", checkBoxes);
    checkBoxes();

    return () => window.removeEventListener("scroll", checkBoxes);
  }, []);

  const renderBox = (index: number) => {
    return (
      <div
        className="box"
        key={index}
        ref={(el) => (boxes.current[index] = el as HTMLDivElement)}
      >
        <h2>Content</h2>
      </div>
    );
  };

  return (
    <>
      <h1>Scroll to see the animation</h1>
      {Array.from({ length: 12 }, (_, i) => renderBox(i))}
    </>
  );
};

export default App;
