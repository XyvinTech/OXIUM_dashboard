import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LastSynced from "../../../layout/LastSynced";
import StyledTable from "../../../ui/styledTable";
import { chargingTransactionData } from "../../../assets/json/crm";
import { getChargingHistory } from "../../../services/ocppAPI";
import { useParams } from "react-router-dom";
import { tableHeaderReplace } from "../../../utils/tableHeaderReplace";

const tableHeader = [
  "Transaction ID",
  "Units Consumed",
  "Location Name",
  "Duration(hh:mm:ss)",
  "chargepoint ID",
  "Connector ID",
  "Total Amount",
  "Close by",
];

export default function UserChargingTransaction() {
  const { id } = useParams();

  const [chargingTransaction, setChargingTransaction] = useState([])

  const getData = async () => {
    const postData = {};
    const res = await getChargingHistory(id, postData);
    setChargingTransaction(res.result);
  };

  useEffect(() => {
    getData();
  }, [id]);

  const transData = tableHeaderReplace(chargingTransaction, ["transactionId","unitConsumed", "stationAddress", "duration", "chargingPoint", "connectorId", "amount", "closeBy"], tableHeader);


  return (
    <Box>
      <LastSynced heading={"Charging Transactions"} showSearchField={true} />
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <StyledTable
          headers={tableHeader}
          data={transData}
          showActionCell={true}
          actions={["view"]}
          onActionClick={(e) => {
            console.log(e);
          }}
        />
      </Box>
    </Box>
  );
}
