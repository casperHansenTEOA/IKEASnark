import React from "react";
import Card from "../components/Card/Card";
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <div className="wrapper">
      <h1>Profile</h1>
      <Card>
        <h2>Info</h2>
        <div className="inside-card">
          <div id="info">
            <div className="editcontent">
              <p>Name: </p>
              <p>Age:</p>
              <p>
                Email:
                <a
                  href="mailto:
                                mail@mail.se
                                "
                ></a>
              </p>
              <p> </p>
            </div>

            {/* <b onClick={editPage}> edit</b> */}
          </div>
          <div id="edit" className="hidden">
            <form className="editcontent" id="editform">
              <input type="text" name="name" />

              <input type="text" name="age" />

              <input type="text" name="email" />

              <input className="submit-button" type="submit" value="Submit" />
            </form>

            {/* <b onClick={profilePage}> cancel</b> */}
          </div>

          <div className="editcontent" id="uneditable">
            <p>John</p>
            <p>25</p>
            <p>
              <a
                href="mailto:
                                mail.mail.se
                                "
              >
                mail.mail.se
              </a>
            </p>
            <p>
              <b onClick={editPage}>edit</b>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

function editPage() {
  //Hide info and show edit form
  const edit = document.getElementById("edit");
  const info = document.getElementById("uneditable");
  if (edit) {
    edit.classList.toggle("hidden");
  }
  if (info) {
    info.classList.toggle("hidden");
  }
}

export default Profile;
