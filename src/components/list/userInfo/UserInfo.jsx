import "./userInfo.css";

const Userinfo = () => {
  return (
    <div className="userinfo">
      <div className="users">
        <img src="./avatar.png" alt="" />
        <h2>John Doe</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default Userinfo;
