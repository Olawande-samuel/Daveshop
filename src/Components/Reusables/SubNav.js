import React , {useContext}from "react";
import { useHistory } from "react-router-dom";
import { IoChevronBack, IoCloseSharp } from "react-icons/io5";
import UserContext from "../../Context/User/userContext";

function SubNav({ title }) {
  const history = useHistory();
  const [user, FetchedUser] = useContext(UserContext);

  return (
    <div className="interactive-nav-wrapper">
      <div className="interactive-nav ">
        <div className="back">
          <IoChevronBack
            className="icon"
            style={{ fontSize: "24px", color: "rgba(14, 73, 152, 1)"}}
            onClick={() => {
              history.goBack();
            }}
          />
        </div>

        <p>{title}</p>

        <div className="cancel">
          <IoCloseSharp
            className="icon"
            style={{ fontSize: "24px", color: "rgba(14, 73, 152, 1)"}}
            onClick={() => {
              FetchedUser('new page')
              history.push("/");
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default SubNav;
