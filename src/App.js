import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Privacy from "./Components/PrivacyPolicy/Privacy";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const promise = loadStripe(
    "pk_test_51N4PN6SFoHmNIl3oY1O5mQhsY2xz6490zQ1Xe8cS8judggqIfw2lHuODduwxZUBDJc4yQPS1KtvEzKawkFAMbH3k00yxOx7Mw0"
  );

  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    // Puts Listener initially
    auth.onAuthStateChanged((authUser) => {
      // console.log("user is >>> ", authUser);

      if (authUser) {
        // User just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <h1>ORders</h1>
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <Privacy />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
