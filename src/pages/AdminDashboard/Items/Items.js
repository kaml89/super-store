import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import ItemFormDialog from "../../../components/ItemFormDialog/ItemFormDialog";
import Header from "../../../components/Header/Header";
import itemService from "../../../services/item.service";
import useItems from "../../../queries/item/useItems";
import useDeleteItem from "../../../queries/item/useDeleteItem";
import CustomButton from "../../../components/Button/Button";
import ItemsList from "../../../components/AdminDashboard/ItemsList/ItemsList";

const Items = () => {
  return (
    <div>
      <ItemsList />
    </div>
  );
};

export default Items;
