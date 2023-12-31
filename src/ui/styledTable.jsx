import styled from "styled-components";
import React, { useState } from "react";
import StyledPagination from "./styledPagination";
import StyledStopButton from "./styledStopButton";
import StyledActionCell from "./styledActionCell";
import StyledStatusChip from "./styledStatusChip";
import StyledPayloadTableCell from "./styledPayloadTableCell";
// StyledTable component

const StyledTable = ({ headers, data,onActionClick, showActionCell=true,actions=['Edit','View','Delete'] }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const paginatedData = data.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );
  const pageCount = Math.ceil(data.length / rowsPerPage);

  const handleChangePage = (newPage) => {
    console.log("Current page:", page);
    console.log("New page:", newPage);
    setPage(newPage); // Assuming newPage is 1-indexed
  };

  const handleStopClick = (id) => {
    alert(`Terminate session for id: `);
  };

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <tr>
            {headers.map((header) => (
              <HeaderCell key={header}>{header}</HeaderCell>
            ))}
            {showActionCell &&<HeaderCell></HeaderCell>}
          </tr>
        </TableHeader>

        <TableBody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, cellIndex) => {
                const isStatusColumn = header.toLowerCase() === "status";
                const isPayload = header.toLowerCase() === "payload data";
                const isTerminateSession =
                  header.toLowerCase() === "terminate session";
                return (
                  <TableCell
                    key={`${rowIndex}-${header}`}
                    $isfirstcolumn={cellIndex === 0}
                  >
                    {isStatusColumn ? (
                      <StyledStatusChip $status={row[header]}>
                        {row[header]}
                      </StyledStatusChip>
                    ) : isTerminateSession ? (
                      <StyledStopButton onClick={() => handleStopClick(row.id)}>
                        Stop
                      </StyledStopButton>
                    ) : isPayload ? <StyledPayloadTableCell value={row[header]}/> 
                     : (
                      row[header]
                    )}
                  </TableCell>
                );
              })}

              {showActionCell && (
                <td>
                  <StyledActionCell
                  actions={actions}
                    id={row.id} // Assuming your row data has an 'id' property
                    onCliked={ (e)=>{onActionClick && onActionClick({data:row, ...e}) }}
                  />
                </td>
              )}
            </tr>
          ))}
        </TableBody>
      </Table>
      <StyledPagination
        page={page}
        pageCount={pageCount}
        onChange={handleChangePage}
      />
    </TableContainer>
  );
};

export default StyledTable;

//! STYLINGS

// Styled table container
export const TableContainer = styled.div`
  background: #121212; // Dark background for the table
  overflow-x: auto; // Allows table to be scrollable horizontally
  border-radius: 8px; // Rounded corners
  margin: 16px 0; // Margin for spacing, adjust as needed
`;

// Styled table
export const Table = styled.table`
  width: 100%; // Full-width table
  border-collapse: collapse; // Collapses table borders
  color: #fff; // White text color
`;

// Styled table header
export const TableHeader = styled.thead`
  background: #1e1e1e; // Slightly lighter dark background for header
  text-align: left;
  padding: 10px 10px;
`;

// Styled table header cell
export const HeaderCell = styled.th`
  color: var(--greyish, #b5b8c5);
  font-family: Inter;
  font-size: 14px;

  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.2px;
  white-space: nowrap; // Prevent text wrapping
  overflow: hidden; // Hide overflowed content
  text-overflow: ellipsis; // Show ellipsis for overflowed content
  min-width: 100px; // Minimum width for each header cell, adjust as needed
  // Optionally, if using flexbox in your table:
  flex-grow: 1; // Allows the cell to grow to fit available space
  padding: 20px 90px 20px 10px;
  &::first-letter {
    text-transform: uppercase;
  }
`;

// Styled table body
export const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #333; // Border color for row separation

    &:nth-child(even) {
      background: #242424; // Alternating row background
    }
  }
`;

// Styled table cell
export const TableCell = styled.td`
  padding: 16px; // Padding inside cells, adjust as needed
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  color: ${(props) =>
    props.$isfirstcolumn // Use $ prefix for transient prop
      ? "#2D9CDB"
      : "rgba(181, 184, 197, 1)"}; // Blue text color for the first column, white for others
`;
