import React from "react";
import { useAuthContext } from "../../../../Context/Authcontext";
import { Accountlayout } from "../../../../components/layout/Accountlayout";
import { Private } from "../../../../Routes/privateroute";
import Cancels from "../../../../components/account/mypurchases/Purchases/Cancels/Cancels";
const Puchases = () => {
  const { currentUser }: any = useAuthContext();
  return (
    <>
      <Private auth={currentUser}>
        {currentUser && (
          <Accountlayout currentUser={currentUser}>
            <div className="main-cancel-orders">
              <Cancels />
            </div>
          </Accountlayout>
        )}
      </Private>
    </>
  );
};

export default Puchases;
