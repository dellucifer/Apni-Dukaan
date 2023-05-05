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

function App() {
  // eslint-disable-next-line
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    // Puts Listener initially
    auth.onAuthStateChanged((authUser) => {
      // console.log("user is >>> ", authUser);

      if (authUser) {
        // User just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
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
