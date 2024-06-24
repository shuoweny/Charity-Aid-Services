//App.js
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

// import { RequireAuth } from './RequireAuth';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  LoginPage, StockPage, RequisitionPage, DonationPage, SelectDepotPage,
  RecipientPage, DonorPage, DashboardPage, AboutUs, AddRecipientPage, 
  AddDonorPage, AddIndividualDonor, AddOrganizationDonor, AddRequisitionPage

} from './pages';
import { DepotLayout } from './components';

import './App.css';

import { useEffect, useState } from "react";
import { fetchDepots } from "./utils/apiUtils";

function MyRoutes() {
  const [depots, setDepots] = useState([]);
  const [curDepot, setCurDepot] = useState("")
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetchDepots((depots) => setDepots((oldDepots) => {
      if (depots.length > oldDepots) return depots;
      else return oldDepots;
    }));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("depots", JSON.stringify(depots));
  }, [depots]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LoginPage setCurDepot={setCurDepot} setIsAdmin={setIsAdmin} />} />
        <Route index path="/login/selectDepot" element={<SelectDepotPage setCurDepot={setCurDepot} />} />
        <Route index path="/aboutUs" element={<AboutUs isAdmin={isAdmin} setCurDepot={setCurDepot} />} />
        <Route path="/depot" element={<DepotLayout depots={depots} curDepot={curDepot} setCurDepot={setCurDepot} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}>
          <Route index path="" element={<Navigate to={isAdmin ? "dashboard" : "stock"} />}/>
          <Route path="stock" element={<StockPage curDepot={curDepot} />} />
          <Route path="requisitions" element={<RequisitionPage curDepot={curDepot} />} />
          <Route path="donations" element={<DonationPage />} />
          <Route path="requisitions/addRequisitionPage" element={<AddRequisitionPage />} />
          <Route path="donations" element={<DonationPage />} />
          <Route path="recipients" element={<RecipientPage />} />
          <Route path="donors" element={<DonorPage />} />
          <Route path="recipients/addRecipientPage" element={<AddRecipientPage />} />
          <Route path="donors/addDonorPage" element={<AddDonorPage />} />
          <Route path="donors/addDonorPage/addIndividualDonor" element={<AddIndividualDonor />} />
          <Route path="donors/addDonorPage/addOrganisationDonor" element={<AddOrganizationDonor />} />
          <Route path="dashboard" element={<DashboardPage setCurDepot={setCurDepot} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default withAuthenticator(App);