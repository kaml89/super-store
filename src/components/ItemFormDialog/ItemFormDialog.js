import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, FormControlLabel } from "@mui/material";
import useCreateItem from "../../queries/item/useCreateItem";
import useUpdateItem from "../../queries/item/useUpdateItem";
import { useForm, Controller } from "react-hook-form";
import CustomButton from "../Button/Button";

const ItemSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  price: yup

    .number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be positive number"),

  description: yup
    .string()
    .required("Description is required")
    .min(5, "Description must contain at least 5 characters"),
  imgUrl: yup
    .string()
    .url("Must be valid URL")
    .required("Image URL is required."),
  isOnSale: yup.boolean(),
  stockCount: yup
    .number()
    .typeError("Stock count must be a number")
    .integer("Stock count must be a integer")
    .positive("Stock count must be postive number")
    .required("Stock count is required"),
});

const ItemFormDialog = ({ open, handleClose, editItem, item }) => {
  // const [item, setItem] = useState(item);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ItemSchema),
    // defaultValues: { ...item },
  });
  const createItem = useCreateItem();
  const updateItem = useUpdateItem();

  const onSubmit = async (formData) => {
    Object.keys(item).length > 0
      ? updateItem.mutate({ ...formData })
      : createItem.mutate(formData);

    handleClose();
  };

  useEffect(() => {
    // item ? reset(item) : reset({});
    reset(item);
    console.log(item);
  }, [open]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <DialogTitle>Add new item to the store</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              justifyContent="space-between"
              spacing={2}
              columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  id="name"
                  label="Name"
                  fullWidth
                  variant="outlined"
                  helperText={errors.name && errors.name.message}
                  error={Boolean(errors.name)}
                  {...register("name")}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="description"
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  helperText={errors.description && errors.description.message}
                  error={Boolean(errors.description)}
                  {...register("description")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="price"
                  label="Price"
                  variant="outlined"
                  helperText={errors.price && errors.price.message}
                  error={Boolean(errors.name)}
                  {...register("price")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="stockCount"
                  label="Stock Count"
                  variant="outlined"
                  helperText={errors.stockCount && errors.stockCount.message}
                  error={Boolean(errors.stockCount)}
                  {...register("stockCount")}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  id="imgUrl"
                  label="Image URL"
                  variant="outlined"
                  fullWidth
                  helperText={errors.imgUrl && errors.imgUrl.message}
                  error={Boolean(errors.imgUrl)}
                  {...register("imgUrl")}
                />
              </Grid>

              <Grid item>
                <Controller
                  name="isOnSale"
                  control={control}
                  id="isOnSale"
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                          checked={field.value}
                          // onChange={field.onChange}
                        />
                      }
                      label="On Sale"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)}>
            {Object.keys(item).length > 0 ? "Edit Item" : "Add Item"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ItemFormDialog;
