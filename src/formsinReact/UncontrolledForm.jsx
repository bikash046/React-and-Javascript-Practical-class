import { useRef } from "react";

const UncontrolledForm = () => {
  const fileRef = useRef(null);
  const divRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("file picked:", fileRef.current.files);
  };
  const handleOnClickDiv = () => {
    console.log("div color:", divRef.current.style.backgroundColor);
    if (divRef.current.style.backgroundColor == "red") {
      divRef.current.style.backgroundColor = "blue";
    } else {
      divRef.current.style.backgroundColor = "red";
    }
    divRef.current.style.borderRadius = "50px";
  };
  return (
    <div ref={divRef} onClick={handleOnClickDiv}>
      <h1>Uncontrolled Form </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter you name" />
        <input type="file" ref={fileRef} multiple={true} />
        <input type="submit" value={"Add Task"} />
      </form>
    </div>
  );
};
export default UncontrolledForm;
