import React from "react";
import Card from "../components/Card/Card";
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <div className="wrapper">
      <h1>Profile</h1>
      <Card>
        <div id="info">
          <h2>Info</h2>
          <div className="editcontent">
            <p>Name: John Doe</p>
            <p>Age: 25</p>
            <p>
              Email:
              <a
                href="mailto:
                            mail@mail.se
                            "
              ></a>
            </p>
          </div>

          <b onClick={editPage}> edit</b>
        </div>
        <div id="edit">
          <h2>Edit</h2>
          <form className="editcontent">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Age:
              <input type="text" name="age" />
            </label>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <b onClick={profilePage}> cancel</b>
        </div>
      </Card>
    </div>
  );
};

function editPage() {
  //Hide info and show edit form
  const info = document.getElementById("info");
  const edit = document.getElementById("edit");

  if (info && edit) {
    info.style.display = "none";
    edit.style.display = "flex";
  }
}

function profilePage() {
  //Hide edit form and show info
  const info = document.getElementById("info");
  const edit = document.getElementById("edit");

  if (info && edit) {
    info.style.display = "flex";
    edit.style.display = "none";
  }
}

export default Profile;
