import "./App.css";
import { useState } from "react";
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
import Orders from "./Components/Orders/Orders";
import { SyncLoader } from "react-spinners";
import Iframe from "./Components/Checkout/Iframe";

function App() {
  const promise = loadStripe(process.env.REACT_APP_stripe_pk);
  const [loading, setLoading] = useState(true);

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

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {loading ? (
                  <div className="app__spinner"><SyncLoader color="#eb5200" height={8} width={125} /></div>        
                ) : (
                  <>
                    <Header />
                    <Home />
                  </>
                )}
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
                <Orders />
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
        <Route
            path="/iframe"
            element={
              <>
                <Iframe />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
