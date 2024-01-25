import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const DashboardTwo = React.lazy(() => import("pages/DashboardTwo"));
const Transactions = React.lazy(() => import("pages/Transactions"));
const TransactionsOne = React.lazy(() => import("pages/TransactionsOne"));
const DashboardThree = React.lazy(() => import("pages/DashboardThree"));
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const Contactus = React.lazy(() => import("pages/Contactus"));
const Pricing = React.lazy(() => import("pages/Pricing"));
const Features = React.lazy(() => import("pages/Features"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/dashboardone" element={<DashboardOne />} />
          <Route path="/dashboardthree" element={<DashboardThree />} />
          <Route path="/transactionsone" element={<TransactionsOne />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/dashboardtwo" element={<DashboardTwo />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
