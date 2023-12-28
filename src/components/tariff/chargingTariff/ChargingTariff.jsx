import React from "react";
import { Box } from "@mui/material";
import StyledTable from "../../../ui/styledTable";
import LastSynced from "../../../layout/LastSynced";
function ChargingTariff({ data, headers }) {

  return (
    <>
      <LastSynced heading="Charge Tariff" />
      <Box sx={{ p: 3 }}>
        <StyledTable headers={headers} data={data} />
      </Box>
    </>
  );
}

export default ChargingTariff;
