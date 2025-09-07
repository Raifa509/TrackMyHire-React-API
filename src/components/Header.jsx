import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import { FaUserCircle } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
           { text: "Home", icon: <HomeIcon />,path:'/' },
          { text: "Dashboard", icon: <DashboardIcon /> ,path:'/dashboard'},
          { text: "Applications", icon: <WorkIcon /> ,path:'/applications'},
          { text: "Add", icon: <AddCircleIcon />,path:'/add' },
        ].map(({ text, icon ,path}) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={path}>
              <ListItemIcon style={{ color: 'black' }}>{icon}</ListItemIcon>
              <ListItemText primary={text} style={{ color: 'black' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <img src="./logo.png" alt="" width={35} className="me-1" />
          <Typography id="logo-text" variant="h6" component="div" sx={{ flexGrow: 1, fontSize: { xs: '16px', md: '20px' } }}>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>TrackMyHire</Link>
          </Typography>

          {/* Full menu for desktop */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <ul className="list-unstyled d-flex mb-0">
              <li className="li-style"><Link to="/">Home</Link></li>
              <li className="li-style"><Link to="/dashboard">Dashboard</Link></li>
              <li className="li-style"><Link to="/applications">Applications</Link></li>
              <li className="li-style"><Link to="/add">Add</Link></li>
            </ul>

          </Box>

          {/* Drawer toggle for mobile */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton color="inherit" onClick={toggleDrawer(true)} >
              <MenuIcon style={{ fontSize: '30px' }} />
            </IconButton>
          </Box>

          {/* Drawer */}
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>

          <FaUserCircle style={{ fontSize: "30px", cursor: "pointer" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
