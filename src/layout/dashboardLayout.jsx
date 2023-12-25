import { styled } from "@mui/material";
import Sidebar from "./sidebar";
import { DashboardNavbar } from "./navbar";
import { Box } from '@mui/material';
import { useState } from "react";
import { Outlet } from "react-router-dom";


const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 128,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 260,
        marginLeft:48,
        marginRight:48
    }
}));


const DashboardLayout = ({children}) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    return (
        <>
            <DashboardLayoutRoot>
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    {children? children : <Outlet/>}
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onSideBarOpen={()=>{setDrawerOpen(true)}}/>
            <Sidebar onClose={() => setDrawerOpen(false)} open={isDrawerOpen}/>
        </>
    )
}
export default DashboardLayout;