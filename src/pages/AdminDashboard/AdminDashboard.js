import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Items from "./Items/Items";
import Users from "./Users/Users";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  let { url } = useRouteMatch();
  return (
    <div className="admin-dashboard-container">
      <Switch>
        <Route path={`${url}/users`} component={Users} />
        <Route path={`${url}/items`} component={Items} />
      </Switch>
    </div>
  );
};

export default AdminDashboard;
