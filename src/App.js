import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase"; 
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51N95JZSHCFnLnDY6Nron3nNE43oz2VJBZLcPxJLOwIPyjoUe1xv0DhQNDixMWzVi5Lmib2iJsRcVQ4A43AYiHTVB00pQEtxWml");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads....

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route exact path="/login" element={<Login/> }>
        </Route>
        <Route exact path="/" element={<>          <Header />
        <Home />
        </> } >
        </Route>
        <Route exact path="/payment" element={<>          <Header />
        <Elements stripe={promise} >
        <Payment />
        </Elements>

        </> } >
        </Route>
        <Route exact path="/checkout" element={<>          <Header />
        <Checkout />
        </> } >
        </Route>
      </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
