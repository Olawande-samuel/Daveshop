import React, { useContext, useEffect, useState } from "react";
import Hero from "./Hero";
import TodoSection from "./TodoSection";
import About from "./About";
import Qualities from "./Qualities";
import Footer from "./Footer";
import Navv from "./NavBar";
import UserContext from "../../Context/User/userContext";
import AccDetails from "../AccDetails";
import BankDetail from "../BankDetail";
function Homepage() {
  const [reveal, setReveal] = useState(false)
  const [showBankDetailModal, setBankDetailModal] = useState(false)
  const Close = () => {
    setReveal(false)
  }
  const closeBankDetailModal = () => {
    setBankDetailModal(false);
  }
  const [user, FetchedUser] = useContext(UserContext);

  console.log(user)

  useEffect(() => {
    const userData = localStorage.getItem("log");
    if (userData !== null) {
      const user = JSON.parse(userData);
      FetchedUser(user);
    }
  }, []);
  return (
    <div className="homepage">
      <div className="container">
        <Navv setBankDetailModal={setBankDetailModal} setReveal={setReveal} />
      </div>
        <Hero />
      <TodoSection />
      <About />
      <Qualities />
      <Footer />
      <AccDetails reveal={reveal} Close={Close} />
      <BankDetail showBankDetailModal={showBankDetailModal} closeBankDetailModal={closeBankDetailModal} />
    </div>
  );
}

export default Homepage;
