import { useParams } from "react-router-dom";

function ProfileEdit() {
  const params = useParams();

  console.log(params); // { profileId: '123' }
  return (
    <>
      <p>Hello world Profile { params.profileId }</p>
    </>
  )
}

export default ProfileEdit;
