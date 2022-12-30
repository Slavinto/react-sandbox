import { useRef } from "react";

const UserefExample = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "hello!";
    inputRef.current.style.backgroundColor = "red";
    paraRef.current.style.color = "blue";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        ref={inputRef}
        id="name"
        className="form-control mb-2"
      ></input>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <p onClick={() => inputRef.current.focus()} ref={paraRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        consequuntur dignissimos iste rem commodi culpa incidunt amet ea, soluta
        a hic odio repellendus eveniet repudiandae optio, tempore nam placeat
        quae!
      </p>
    </form>
  );
};

export default UserefExample;
