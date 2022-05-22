import React from "react";

const Completed = ({ orders }: any) => {
  console.log(orders);
  return (
    <div className="completed">
      {!orders.length && (
        <div className="empty">
          <h1>No completes item</h1>
        </div>
      )}
    </div>
  );
};

export default Completed;
