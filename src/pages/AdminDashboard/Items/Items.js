import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ItemFormDialog from "../../../components/ItemFormDialog/ItemFormDialog";
import itemService from "../../../services/item.service";
import useItems from "../../../queries/item/useItems";
import useDeleteItem from "../../../queries/item/useDeleteItem";
import CustomButton from "../../../components/Button/Button";

const ItemsTable = () => {
  const { status, data, error, isLoading } = useItems();
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const deleteItem = useDeleteItem();

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Stock Count</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>On Sale</TableCell>
                  <TableCell>Modify</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.stockCount}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{String(item.isOnSale)}</TableCell>
                    <TableCell>
                      <Button onClick={() => deleteItem.mutate(item.id)}>
                        {deleteItem.isLoading ? "Loading.." : "Delete"}
                      </Button>
                      <CustomButton
                        onClick={() => deleteItem.mutate(item.id)}
                        label="Delete"
                        isLoading={deleteItem.isLoading}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button onClick={() => setIsOpen(true)}>Add Item</Button>
          <ItemFormDialog open={isOpen} handleClose={() => setIsOpen(false)} />
        </>
      )}
    </>
  );
};

export default ItemsTable;
