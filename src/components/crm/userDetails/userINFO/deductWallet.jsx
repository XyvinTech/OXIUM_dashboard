import { Box, Dialog, Stack, Typography } from '@mui/material'
import React from 'react'
import StyledInput from '../../../../ui/styledInput'
import StyledWarning from '../../../../ui/styledWarning'
import { ReactComponent as Close } from "../../../../assets/icons/close-icon-large.svg";
import { ErrorOutlineOutlined, WarehouseOutlined, Warning } from '@mui/icons-material'
import StyledDivider from '../../../../ui/styledDivider';
import StyledButton from '../../../../ui/styledButton';
import { useForm, Controller } from "react-hook-form";


export default function DeductWallet({ open, onClose, ...props }) {

    const {
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        clearErrors,
      } = useForm({
        defaultValues: {
          published: false, // Set the default value for "activate"
        },
      });
      const onSubmit = (data) => {
        // Handle form submission with data
        console.log("Form data submitted:", data);
        // Close your form or perform other actions
      };
    
    return (
        <Dialog open={open} maxWidth={'sm'} fullWidth>
            <Box sx={{ backgroundColor: 'primary.main' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction={'row'} sx={{ justifyContent: 'space-between', px: 2, py: 2, alignItems: 'center' }}>
                    <Typography color={'secondary.contrastText'} variant='h6'>Deduct Wallet Balance</Typography>
                    <Close style={{ cursor: 'pointer' }} onClick={() => { onClose && onClose() }} />
                </Stack>
                <StyledDivider />
                <Stack sx={{ p: 4 }} spacing={1}>
          <Stack direction={"column"} spacing={2}>
            <Typography
              variant="subtitle2"
              sx={{ color: "secondary.contrastText" }}
            >
              Previous Balance
            </Typography>

            <Controller
              name="previousBalance"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput placeholder={"Previous Balance"} value={250} />
                  {errors.previousBalance && (
                    <StyledWarning
                      icon={
                        <ErrorOutlineOutlined sx={{ color: "error.main" }} />
                      }
                      value={errors.previousBalance.message}
                    />
                  )}
                </>
              )}
              rules={{ required: "Please enter the Amount" }}
            />
          </Stack>

          <Stack direction={"column"} spacing={2}>
            <Typography
              variant="subtitle2"
              sx={{ color: "secondary.contrastText" }}
            >
              Add Amount <span style={{ color: "#D14343" }}>*</span>
            </Typography>

            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput placeholder={"Add amount"} />

                  {errors.amount && (
                    <StyledWarning
                      icon={
                        <ErrorOutlineOutlined sx={{ color: "error.main" }} />
                      }
                      value={errors.amount.message}
                    />
                  )}
                </>
              )}
              rules={{ required: "Please enter the Amount" }}
            />
          </Stack>

          <Stack direction={"column"} spacing={2}>
            <Typography
              variant="subtitle2"
              sx={{ color: "secondary.contrastText" }}
            >
              Updated Balance
            </Typography>

            <Controller
              name="updatedBalance"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput placeholder={"updated Balance"} value={250} />
                  {errors.updatedBalance && (
                    <StyledWarning
                      icon={
                        <ErrorOutlineOutlined sx={{ color: "error.main" }} />
                      }
                      value={errors.updatedBalance.message}
                    />
                  )}
                </>
              )}
              rules={{ required: "Please enter the Amount" }}
            />
          </Stack>

          <Stack direction={"column"} spacing={2}>
            <Typography
              variant="subtitle2"
              sx={{ color: "secondary.contrastText" }}
            >
              Reference <span style={{ color: "#D14343" }}>*</span>
            </Typography>

            <Controller
              name="reference"
              control={control}
              render={({ field }) => (
                <>
                  <StyledInput placeholder={"Name"} />
                  {errors.reference && (
                    <StyledWarning
                      icon={
                        <ErrorOutlineOutlined sx={{ color: "error.main" }} />
                      }
                      value={errors.reference.message}
                    />
                  )}
                </>
              )}
              rules={{ required: "Please enter the Amount" }}
            />
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          sx={{ backgroundColor: "secondary.main", px: 3, py: 2 }}
          spacing={2}
          justifyContent={"end"}
        >
          <StyledButton
            variant={"secondary"}
            style={{ width: "130px", height: "48px" }}
            onClick={() => {
              onClose && onClose();
            }}
          >
            Cancel
          </StyledButton>
          <StyledButton
            variant={"primary"}
            style={{ width: "180px", height: "48px" }}
            type="submit"
          >
            Add
          </StyledButton>
        </Stack>
        </form>
            </Box>
        </Dialog>
    )
}
