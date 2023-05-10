import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
import PostOrder from "./PostOrder";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy('created', 'desc')
        .onSnapshot((snapShot) =>
          setOrders(
            snapShot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
        <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order, i) => {
          return <PostOrder key={i} order={order} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
