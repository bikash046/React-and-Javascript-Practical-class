/* eslint-disable react/prop-types */
export default function PropsExample() {
  const details = {
    id: 3,
    name: "Bikash",
    age: 22,
    address: "kathmandu",
  };
  return (
    <>
      <ListUsers name="John" age={20} />
      {/* using spread operator  */}
      <ListUsers {...details} />
      <ProfilesDetails {... (details) }/>
    </>
  );
}

// destructuring props :{}
function ProfilesDetails({name ,age}){
    return (
        //Fragment (<> </>)
        <>
          <h1>Profiles Details </h1>
          <p> Name : {name}</p>
          <p> Age : {age} </p>
        </>
      );

}

//normal props (functional component parameters)

function ListUsers(user) {
  console.log("User :", user);
  return (
    //Fragment (<> </>)
    <>
      <h1>User Details </h1>
      <p> Name : {user.name}</p>
      <p> Age : {user.age} </p>
    </>
  );
}
