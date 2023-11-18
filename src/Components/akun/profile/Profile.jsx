import "./profile.css";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="image_wrapper">
          <img
            src="/profile_picture.png"
            className="profile_image"
            alt="profile"
            srcSet=""
          />
        </div>
        <div className="profile_details">
          <h1>John Doe</h1>
          <p>Music is a powerfull</p>
        </div>
      </div>
      {/* <Biodata /> */}
    </>
  );
};

export default Profile;
