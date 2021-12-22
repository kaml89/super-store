import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "./Items/Items";
import Users from "./Users/Users";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <Router>
        <Switch>
          <Route path="/admin/users" component={Users} />
          <Route path="/admin/items" component={Items} />
        </Switch>
      </Router>
    </div>
  );
};

export default AdminDashboard;
