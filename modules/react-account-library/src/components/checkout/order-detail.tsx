import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
export interface OrderDetailProps {
  submit?: () => void;
}
const OrderDetail = ({ submit }: OrderDetailProps) => {
  return (
    <Box
      sx={{
        padding: "40px 30px",
        background: "#f5f5f5",
      }}
    >
      <Grid container>
        <Typography component={"h4"} fontWeight={"700"} fontSize={"24px"}>
          Your Order
        </Typography>
        <Divider sx={{ width: "inherit", marginY: "20px" }} />
        <Grid item xs={6} textAlign={"left"}>
          <Typography fontWeight={"700"} fontSize={"20px"}>
            Product
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign={"right"}>
          <Typography fontWeight={"700"} fontSize={"20px"}>
            Total
          </Typography>
        </Grid>
        <Divider sx={{ width: "inherit", marginY: "20px" }} />
        <Grid item xs={6} textAlign={"left"}>
          <Typography fontWeight={"700"} fontSize={"20px"}>
            Subtotal
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign={"right"}>
          <Typography fontWeight={"700"} fontSize={"20px"}>
            $239
          </Typography>
        </Grid>
        <Divider sx={{ width: "inherit", marginY: "20px" }} />
        <Grid item xs={6} textAlign={"left"}>
          <Typography fontWeight={"700"} fontSize={"20px"}>
            Total
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign={"right"}>
          <Typography fontWeight={"700"} fontSize={"20px"}>
            $239
          </Typography>
        </Grid>
        <Divider sx={{ width: "inherit", marginY: "20px" }} />
        <Box
          onClick={submit}
          sx={{
            background: "#833030",
            padding: "13px 30px 12px",
            color: "white",
            width: "inherit",
            textAlign: "center",
            fontWeight: "700",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Place Order
        </Box>
      </Grid>
    </Box>
  );
};

export default OrderDetail;
