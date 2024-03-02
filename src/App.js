import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeSection from "./pages/HomeSection";
import LoginScreen from "./pages/LoginScreen";
import ProfileScreen from "./pages/ProfileScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged Out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      ) : (
        <Navigate to="/login" />
      )}
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;
