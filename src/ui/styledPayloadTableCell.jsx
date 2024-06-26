import { Box, Button, Dialog, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import StyledDivider from "./styledDivider";
import { Transition } from "../utils/DialogAnimation";

export default function StyledPayloadTableCell({ value, command, sourceData }) {
  const [open, setOpen] = useState(false);

  if (value == null) {
    return null;
  }
  let StringValue = "";

  if (typeof value === "object") {
    StringValue = JSON.stringify(value, null, 2);
  }

  return (
    <Box>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
      >
        <Box
          sx={{
            backgroundColor: "secondary.main",
          }}
        >
          <Box sx={{ p: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: "secondary.contrastText",
                p: 2,
              }}
            >
              {command}
            </Typography>
          </Box>
          <StyledDivider />
          <Typography
            variant="body1"
            color={
              sourceData === "CMS"
                ? "#EB5757"
                : sourceData === "CP"
                ? "#219653"
                : "secondary.contrastText"
            }
            sx={{
              p: 2,
            }}
          >
            <pre>{StringValue}</pre>
          </Typography>
        </Box>
      </Dialog>
      <Stack direction={"column"}>
        {`${StringValue.substring(0, 25)}........`}
        <Button
          sx={{ color: "#2D9CDB", justifyContent: "start" }}
          onClick={() => {
            setOpen(true);
          }}
        >
          Show more
        </Button>
      </Stack>
    </Box>
  );
}
