import { useState, useEffect, useRef, useMemo } from "react";

const UsememoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  //   const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    renders.current += 1;
  }, [renders.current]);

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />

      <h2 className="my-3">
        The square root of {number} is: {sqrt}
      </h2>

      <button className="btn btn-primary" onClick={onClick}>
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
};

function getSqrt(n) {
  console.log("expensive function called");
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
  return Math.sqrt(n);
}

export default UsememoExample;
