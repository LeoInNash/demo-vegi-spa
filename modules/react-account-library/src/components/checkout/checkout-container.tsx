import { Divider, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import CustomerInfo from "./customer-info";
import OrderDetail from "./order-detail";

const CheckoutContainer = () => {
  const customerInfoRef = useRef<any>(null)
  const onSubmit=()=>{
    if(customerInfoRef){
      customerInfoRef.current.handleSubmit()
    }
  }
  return (

      <Grid container padding={"20px 30px"}>
        <Typography component={"h4"} fontWeight={"700"} fontSize={"24px"}>
          Your Order
        </Typography>
        <Divider sx={{ width: "inherit", marginY: "20px" }} />
        <Grid xs={8}>
          <CustomerInfo ref={customerInfoRef}/>
        </Grid>
        <Grid xs={4}>
        <OrderDetail submit={onSubmit}/>
          </Grid>
      </Grid>
  );
};

export default CheckoutContainer;
