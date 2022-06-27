import Box from "@mui/material/Box";
import {Outlet } from "react-router";
import Sidebar from './sidebar/Sidebar';
import { DrawerHeader } from './sidebar/Drawheader';
export const AdminLayout = () => (
  <Box sx={{ display: "flex" }}>
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <DrawerHeader />
    <Outlet />
    </Box>
  </Box>
);
