import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/homepage">Homepage</Link>
        </li>
        <li>
          <Link to="/aboutus">Aboutus</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/contactus">Contactus</Link>
        </li>
        <li>
          <Link to="/dashboardone">DashboardOne</Link>
        </li>
        <li>
          <Link to="/dashboardthree">DashboardThree</Link>
        </li>
        <li>
          <Link to="/transactionsone">TransactionsOne</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/dashboardtwo">DashboardTwo</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
