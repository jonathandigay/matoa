import React from "react";
import { useAuthContext } from "../../../../Context/Authcontext";
import { Accountlayout } from "../../../../components/layout/Accountlayout";
import { Private } from "../../../../Routes/privateroute";
const Signout = () => {
  const { Signout, currentUser }: any = useAuthContext();

  const onSignOut = () => {
    alert("are you sure to sign out");
    Signout();
  };

  return (
    <>
      <Private auth={currentUser}>
        {currentUser && (
          <Accountlayout currentUser={currentUser}>
            <div className="signout-main">
              <div className="signout">
                <button onClick={onSignOut}>
                  Sign out as {currentUser && currentUser.name}
                </button>
              </div>
            </div>
          </Accountlayout>
        )}
      </Private>
    </>
  );
};

export default Signout;
