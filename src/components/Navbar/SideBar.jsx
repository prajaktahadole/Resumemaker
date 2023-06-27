import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate} from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FeedbackIcon from '@mui/icons-material/Feedback';
import {GroupAddRounded} from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
//import InitialsAvatar from 'react-initials-avatar';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <Typography variant="h3" color={colors.grey[100]}>
                               HumanCloud
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                        )}
                    </MenuItem>

                    {/* USER INFO */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            {/* <Box display="flex" justifyContent="center" alignItems="center">
                                <InitialsAvatar
                                 className="InitialsAvatarinner"
                                 style={{
                                    width: "100px",
                                    height: '100px', 
                                    cursor: "pointer", 
                                    borderRadius: "50%" }}
                                 name={
                                "Prajakta Hadole"
                                 }
                                ></InitialsAvatar>
                               
                            </Box> */}
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                Prajakta Hadole
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                Software Engineer
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* MENU ITEMS */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            onClick={() => navigate("/resumemakerui/interview-details")}
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        
                        <Item
                            title="Resume"
                            onClick={() => navigate("/resumemakerui/resume-dashboard")}
                            icon={<DashboardIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        
                        <Item
                            title="Search Resource"
                            onClick={() => navigate("/resumemakerui/filter")}
                            icon={<ScreenSearchDesktopIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>
                        <Item
                            title="Interview"
                            onClick={() => navigate("/resumemakerui/interview-details")}
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Feedback"
                            onClick={() => navigate("/resumemakerui/feedback")}
                            icon={<FeedbackIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                         <Item
                            title="Schedule Interview"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />


                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Master
                        </Typography>
                        <Item
                            title="User"
                            onClick={() => navigate("/resumemakerui/users")}
                            icon={ <GroupAddRounded />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                       
                        <Item
                            title="Tech Stack"
                            onClick={() => navigate("/resumemakerui/tech-stacks")}
                            icon={<SchoolIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Support
                        </Typography>
                        <Item
                            title="Raise Ticket"
                            to="/bar"
                            icon={<HelpOutlineOutlinedIcon  />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Review Ticket"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;