import React, { useState } from "react";

import MapContainer from "../components/dashboard/liveStatus/MapContainer";
// import { getChargingStationList } from "../services/stationAPI";
import { ChargeStationData } from "../assets/json/chargestations";
import { Box, IconButton, Stack } from "@mui/material";
import { Map, TableRowsRounded } from "@mui/icons-material";
import TableContainer from "../components/dashboard/liveStatus/tableContainer";
import LastSynced from "../layout/LastSynced";



export default function LiveStatus() {
  const [mapViewActive, setMapView] = useState(true)
  //   const [chargingStations, setChargingStations] = useState([]);


  //   useEffect(() => {
  //     const fetchEvMachines = async () => {
  //       try {
  //         const data = await getChargingStationList();
  //         setChargingStations(data);
  //         setLoading(false);
  //       } catch (error) {
  //         setError(error);
  //         setLoading(false);
  //       }
  //     };

  //     fetchEvMachines();
  //   }, []);
  const iconClickHandle = () => {
    setMapView(!mapViewActive)
  }

  return (
    <><LastSynced heading={'Live Status'} /><Box sx={{ p: 2 }}>
      <Stack justifyContent={"end"} direction={"row"} spacing={2} mb={2}>
        <IconButton onClick={iconClickHandle} sx={{ border: '1px solid #fff6', borderRadius: '4px', backgroundColor: mapViewActive && 'secondary.button' }}>
          <Map sx={{ color: mapViewActive && '#fff' }} />
        </IconButton>
        <IconButton onClick={iconClickHandle} sx={{ border: '1px solid #fff6', borderRadius: '4px', backgroundColor: !mapViewActive && 'secondary.button' }}>
          <TableRowsRounded sx={{ color: !mapViewActive && '#fff' }} />
        </IconButton>
      </Stack>
      {mapViewActive ? <MapContainer chargingStations={ChargeStationData} /> :
        <TableContainer data={ChargeStationData} />}
    </Box></>
  );
}
