import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, FormControlLabel } from "@mui/material";
import useCreateItem from "../../queries/item/useCreateItem";
import { useForm } from "react-hook-form";
import CustomButton from "../Button/Button";

const ItemSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  price: yup.number().positive().required("Price is required"),
  description: yup
    .string()
    .required("Description is required")
    .min(5, "Description must contain at least 5 characters"),
  imgURL: yup.string().url().required("Image URL is required."),
  isOnSale: yup.boolean(),
  stockCount: yup
    .number()
    .integer()
    .positive()
    .required("Stock count is required"),
});

const ItemFormDialog = ({ open, handleClose, item }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ItemSchema) });
  const { data, isLoading, mutate } = useCreateItem();

  const onSubmit = (formData) => {
    mutate(formData);
    handleClose();
    //const { data, isLoading } = useCreateItem();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <FormControl>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              {...register("name")}
            />
            <TextField
              id="price"
              label="Price"
              variant="outlined"
              {...register("price")}
            />
            <TextField
              id="description"
              label="Description"
              multiline
              rows={4}
              variant="outlined"
              {...register("description")}
            />
            <TextField
              id="imgUrl"
              label="Image URL"
              variant="outlined"
              {...register("imgUrl")}
            />
            <TextField
              id="stockCount"
              label="Stock Count"
              variant="outlined"
              {...register("stockCount")}
            />
            <FormControlLabel
              control={<Checkbox id="isOnSale" {...register("isOnSale")} />}
              label="On sale"
            ></FormControlLabel>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <CustomButton
            onClick={handleSubmit(onSubmit)}
            label="add item"
            isLoading={isLoading}
          />
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)}>Add Item</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ItemFormDialog;
