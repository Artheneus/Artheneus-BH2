import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cart = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return <div>Cart</div>;
};

export default Cart;
