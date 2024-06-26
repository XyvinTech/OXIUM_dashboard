import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Stack } from "@mui/material";
import StyledSelectField from "../../ui/styledSelectField";
import StyledButton from "../../ui/styledButton";
import LastSynced from "../../layout/LastSynced";
import { useForm, Controller } from "react-hook-form";
import CalendarInput from "../../ui/CalendarInput";
import StyledInput from "../../ui/styledInput";
import { getChargingPointsListOfStation, getListOfChargingStation } from "../../services/stationAPI";
import { getReportForChargePoint } from "../../services/evMachineAPI";
import { generateExcel } from "../../utils/excelReport";
import { getAccountTransactionReport, getWalletReport } from "../../services/walletAPI";
import { getAlarmReport, getChargingSummaryReport } from "../../services/ocppAPI";
import moment from "moment"; // Import moment for date formatting
import { getFeedbackReport } from "../../services/reviewApi";
import { getUserRegistationReport } from "../../services/userApi";

export default function DownloadReport() {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm();

  const reportApiFunctions = {
    "Charge points": (params) => getReportForChargePoint(params),
    "Account Transaction": (params) => getAccountTransactionReport(params),
    "Alarms": (params) => getAlarmReport(params),
    "Charging Summary": (params) => getChargingSummaryReport(params),
    "User Registration": (params) => getUserRegistationReport(params),
    "Feedback": (params) => getFeedbackReport(params),
  };

  const onSubmit = async (data) => {
    let locationName = data.location?.label;
    data = { ...data, report: selectedOption };
    if (data.startDate && !data.endDate) {
      setError("endDate", { type: "custom", message: "select End Date" });
      return;
    }
    if (
      (data.report !== "Account Transaction" ||
        data.report !== "User Registration") &&
      !data.location
    ) {
      setError("location", { type: "custom", message: "select location" });
      return;
    } else {
      data.location = data.location.value;
    }

    if (data.report === "Alarms" && !data.cpid) {
      setError("cpid", { type: "custom", message: "select location" });
      return;
    } else {
      data.cpid = data.cpid?.label;
    }

    const selectedReportFunction = reportApiFunctions[data.report];

    if (selectedReportFunction) {
      try {
        const reportData = await selectedReportFunction(data);
        const excelData = reportData.result;
        if (excelData) {
          generateExcel(excelData.headers, excelData.body);
        }
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    } else {
      console.error("Selected report function is not defined:", data.report);
    }
  };

  const handleDateChangeInParent = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    setValue("startDate", formattedDate);
    clearErrors("startDate");
  };
  const startDate = watch("startDate", ""); // Watching the value for 'startDate'

  const handleEndDateChangeInParent = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    setValue("endDate", formattedDate);
    clearErrors("endDate");
  };
  const endDate = watch("endDate", ""); // Watching the value for 'endDate'

  const options = [
    { value: "option1", label: "Account Transaction" },
    { value: "option2", label: "Feedback" },
    { value: "option3", label: "Charging Summary" },
    { value: "option4", label: "User Registration" },
    { value: "option5", label: "Alarms" },
    { value: "option6", label: "Charge points" },
  ];

  let [selectedOption, setSelectedOption] = useState("");
  let [locationList, setLocationList] = useState([]);
  const [machineList, setMachineList] = useState([]);

  useEffect(() => {
    getListOfChargingStation().then((res) => {
      if (res.status) {
        setLocationList(
          res.result.map((dt) => ({ label: dt.name, value: dt._id }))
        );
      }
    });
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.label);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LastSynced heading="Reports" />

        <TableContainer>
          <Stack direction={"column"} spacing={2}>
            <FormContainer>
              <Heading variant="h1">Download Report</Heading>

              <Label>Report</Label>
              <StyledSelectField
                placeholder={"Select Report"}
                options={options}
                value={selectedOption}
                onChange={handleSelectChange}
              />
            </FormContainer>
            <FormContainer>
              <Label>Start date</Label>
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput
                      {...field}
                      iconright={
                        <CalendarInput
                          onDateChange={handleDateChangeInParent}
                        />
                      }
                      placeholder={"mm/dd/yyyy"}
                      value={startDate}
                      readOnly
                    />
                    {errors.startDate && (
                      <span style={errorMessageStyle}>
                        {errors.startDate.message}
                      </span>
                    )}
                  </>
                )}
              />

              <Label>End date</Label>
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <>
                    <StyledInput
                      {...field}
                      iconright={
                        <CalendarInput
                          onDateChange={handleEndDateChangeInParent}
                        />
                      }
                      placeholder={"mm/dd/yyyy"}
                      value={endDate}
                      readOnly
                    />
                    {errors.endDate && (
                      <span style={errorMessageStyle}>
                        {errors.endDate.message}
                      </span>
                    )}
                  </>
                )}
              />

              {selectedOption !== "Account Transaction" &&
                selectedOption !== "User Registration" && (
                  <>
                    <Label>Location</Label>

                    <Controller
                      name="location"
                      control={control}
                      render={({ field }) => (
                        <>
                          <StyledSelectField
                            placeholder={"Select Location"}
                            {...field}
                            options={locationList}
                            onChange={(e) => {
                              setMachineList([]);
                              setValue("location", e);
                              getChargingPointsListOfStation(e.value).then(
                                (res) => {
                                  if (res.result) {
                                    setMachineList(
                                      res.result.map((dt) => ({
                                        label: dt.evMachines.CPID,
                                        value: dt.evMachines.CPID,
                                      }))
                                    );
                                  }
                                }
                              );
                            }}
                          />
                          {errors.location && (
                            <span style={errorMessageStyle}>
                              {errors.location.message}
                            </span>
                          )}
                        </>
                      )}
                    />
                  </>
                )}

              {selectedOption === "Alarms" && (
                <>
                  <Label>CPID</Label>

                  <Controller
                    name="cpid"
                    control={control}
                    render={({ field }) => (
                      <>
                        <StyledSelectField
                          {...field}
                          placeholder={"Select CPID"}
                          options={machineList}
                        />
                        {errors.cpid && (
                          <span style={errorMessageStyle}>
                            {errors.cpid.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </>
              )}

              <StyledButton variant="primary" fontSize="14" type="submit">
                Download
              </StyledButton>
            </FormContainer>
          </Stack>
        </TableContainer>
      </form>
    </>
  );
}

export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 8px;
  margin: 20px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: inline-flex;
  padding: 30px 20px;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
  background: #1c1d22;
`;

export const Heading = styled.h1`
  color: var(--Grey, #b5b8c5);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.3px;
`;

export const Label = styled.label`
  color: var(--white, #f7f8fc);
  text-align: start;
  width: 100%;
  height: 16px;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.3px;
  text-transform: capitalize;
`;

const errorMessageStyle = {
  color: "red",
  // margin: '1px 0',
};
