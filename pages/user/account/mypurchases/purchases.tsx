import React, { useEffect, useState } from "react";
import Completed from "../../../../components/account/mypurchases/Purchases/Completed";
import Toreceive from "../../../../components/account/mypurchases/Purchases/Toreceive";
import { Accountlayout } from "../../../../components/layout/Accountlayout";

import { useAuthContext } from "../../../../Context/Authcontext";
import { Private } from "../../../../Routes/privateroute";

// firebase
import { db } from "../../../../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
const Puchases = (orders: any) => {
  const { currentUser }: any = useAuthContext();
  const [currentNav, setCurrentNav] = useState(" ");

  const onPurchaseNav = (payload: any) => {
    window.localStorage.setItem("purchasesnav", payload);
    const nav: any = window.localStorage.getItem("purchasesnav");
    setCurrentNav(nav);
  };

  useEffect(() => {
    const nav: any = window.localStorage.getItem("purchasesnav");
    setCurrentNav(nav);
  }, [setCurrentNav, currentNav, onPurchaseNav]);

  return (
    <>
      <Private auth={currentUser}>
        {currentUser && (
          <Accountlayout currentUser={currentUser}>
            <div className="main-purchases">
              <div className="purchases-nav">
                <div
                  className={`${currentNav === "toreceive" && "active"}`}
                  onClick={() => onPurchaseNav("toreceive")}
                >
                  <h3>To Receive</h3>
                </div>
                <div
                  className={`${currentNav === "completed" && "active"}`}
                  onClick={() => onPurchaseNav("completed")}
                >
                  <h3>Completed</h3>{" "}
                </div>
              </div>
              {currentNav === "toreceive" && (
                <Toreceive orders={orders.data.toreceive} />
              )}
              {currentNav === "completed" && (
                <Completed orders={orders.data.completed} />
              )}
            </div>
          </Accountlayout>
        )}
      </Private>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const toreceive: any = [];
  const completed: any = [];

  const user = JSON.parse(context.req.cookies.user);

  try {
    const qtoreceive = query(
      collection(db, "order", user.email, "items"),
      where("status", "==", "toreceive")
    );
    const querySnapshottoreceive = await getDocs(qtoreceive);
    querySnapshottoreceive.forEach((doc) => {
      const data = {
        id: doc.id,
        data: doc.data(),
      };
      toreceive.push(data);
    });
    const qcompleted = query(
      collection(db, "order", user.email, "items"),
      where("status", "==", "competed")
    );
    const querySnapshotcompleted = await getDocs(qcompleted);
    querySnapshotcompleted.forEach((doc) => {
      const data = {
        id: doc.id,
        data: doc.data(),
      };
      completed.push(data);
    });
  } catch (e) {
    console.log(e);
  }
  return {
    props: { data: { toreceive, completed } },
  };
}

export default Puchases;
