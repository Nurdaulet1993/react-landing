import {Link} from "react-router-dom";

function Profile() {
  const list = [1,2,3,4];
  return (
    <>
      <div>Profile page</div>
      {list.map((item) => (
        <Link key={item} to={`/profile/${item}`}>Item {item}</Link>
      ))}
    </>
  )
}

export default Profile;
