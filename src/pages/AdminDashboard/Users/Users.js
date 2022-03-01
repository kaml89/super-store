import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../../../components/Header/Header";
import useUsers from "../../../queries/user/useUsers";
import UsersList from "../../../components/AdminDashboard/UsersList/UsersList";

const Users = () => {
  return (
    <div>
      <UsersList />
    </div>
  );
};
export default Users;
