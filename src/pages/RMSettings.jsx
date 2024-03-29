import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DummyData } from "../assets/json/RoleManagementData";
import RoleManagement from "../components/settings/roleManagement/roleManagement";
import { getRoles } from "../services/userApi";
import { tableHeaderReplace } from "../utils/tableHeaderReplace";

function RMSettings() {
  let [roles, setRoles] = useState([]);
  const [isChange, setIsChange] = useState(false)

  const init = async () => {
    let data = await getRoles();

    setRoles(data.result);
    console.log(data.result);
  };

  useEffect(() => {
    init();
  }, [isChange]);

  const tableHeader = [
    "Role name",
    "Created on",
    "Access Type",
    "Role Description",
    "Status",
  ];

  const AllRoleData = tableHeaderReplace(
    roles,
    ["roleName", "createdOn", "accessType", "description", "status"],
    tableHeader
  );

  return (
    <Box>
      <RoleManagement headers={tableHeader} data={AllRoleData} setIsChange={setIsChange} isChange={isChange}/>
    </Box>
  );
}

export default RMSettings;
