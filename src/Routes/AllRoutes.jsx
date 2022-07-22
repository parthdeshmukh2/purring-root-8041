import React from "react";
import { Routes, Route } from "react-router-dom";
import { CheckoutPage } from "../Pages/CheckoutPage";
import { FilterPage } from "../Pages/FilterPage";
import HomePage from "../Pages/HomePage";
import Hosts from "../Pages/Hosts";
import Location from "../Pages/Location";
import PickUpPage from "../Pages/PickUpPage";
import Zms from "../Pages/Zms";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/location" element={<Location />} />
      <Route path="/pickup" element={<PickUpPage />} />
      <Route path="/filterpage" element={<FilterPage />}></Route>
      <Route path="/filterpage/checkoutpage" element={<CheckoutPage />}></Route>
      <Route path="/zms" element={<Zms />}></Route>
      <Route path="/hosts" element={<Hosts />}></Route>
    </Routes>
  );
};

export default AllRoutes;
