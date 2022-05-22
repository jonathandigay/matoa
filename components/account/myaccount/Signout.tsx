import React from "react";
import { useAuthContext } from "../../../Context/Authcontext";
const Signout = ({ currentUser }: any) => {
  const { Signout }: any = useAuthContext();

  const onSignOut = () => {
    alert("are you sure to sign out");
    Signout();
  };

  return (
    <div className="signout-main">
      <div className="signout">
        <button onClick={onSignOut}>Sign out as {currentUser.name}</button>
      </div>
    </div>
  );
};

export default Signout;
