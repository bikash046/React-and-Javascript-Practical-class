import "./App.css"

function DisplayProfile() {
  const name = "Bikash";
  return (
    //fragment
    <>
      <div>
        <h1
        id="heading"
        style={{
          color: "red",
          fontSize: "100px",
        }}> Profile Details </h1>
        <p>Name : {name} </p>
        <div className="box">
          <a href="https://google.com"
          target ="_blank">Go to Google </a>
          <p>Inside Box </p>
          <p>Inside Box 2 </p>
          <div>
            <p>Inside Box 3 Indirect
              child</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayProfile;

export const PostPage = () => {
  return (
    <h1>
      post page
    </h1>
  );
};
