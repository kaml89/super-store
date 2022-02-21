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
import TableToolbar from "../../../components/TableToolbar/TableToolbar";
import itemService from "../../../services/item.service";
import useItems from "../../../queries/item/useItems";
import useDeleteItem from "../../../queries/item/useDeleteItem";
import CustomButton from "../../../components/Button/Button";

const ItemsTable = () => {
  const { status, data, error, isLoading } = useItems();
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const deleteItem = useDeleteItem();

  const handleClose = () => {
    setCurrentItem({});
    setIsOpen(false);
  };

  const handleOpen = (item = {}) => {
    setCurrentItem(item);
    setIsOpen(true);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <TableToolbar handleClick={handleOpen} />
          <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
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
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow
                    hover
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={() => handleOpen(item)}
                      sx={{ cursor: "pointer" }}
                    >
                      {item.name}
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.stockCount}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          maxWidth: "500px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.description}
                      </Box>
                    </TableCell>
                    <TableCell>{String(item.isOnSale)}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleOpen(item)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => deleteItem.mutate(item.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ItemFormDialog
            open={isOpen}
            handleClose={handleClose}
            item={currentItem}
          />
        </>
      )}
    </>
  );
};

export default ItemsTable;
