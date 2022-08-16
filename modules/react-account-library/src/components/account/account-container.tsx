import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import AccountTab from "./account-tab";
import AddressTab from "./address-tab";
import OrderTab from "./order-tab";

const AccountContainer = () => {
  const [accountTab, setAccountTab] = useState(0);
  const getTabContent = () => {
    switch (accountTab) {
      case 0:
      default:
        return <OrderTab />;
      case 1:
        return <AddressTab />;
      case 2:
        return <AccountTab />;
    }
  };
  return (
    <Box mx={"25%"} pt={"30px"}>
      <Tabs value={accountTab} onChange={(_el, value) => setAccountTab(value)}>
        <Tab label="Order Tab" />
        <Tab label="Address Tab" />
        <Tab label="Account Tab" />
      </Tabs>
      {getTabContent()}
    </Box>
  );
};

export default AccountContainer;
