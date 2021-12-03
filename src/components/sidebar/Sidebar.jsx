import React, { useState, useEffect } from "react";
import Body from "../body/Body";
import {
  Drawer,
  List,
  Toolbar,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  CssBaseline,
  AppBar,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Routes, Route } from "react-router-dom";
import Relation from "../realation/Relation";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar(props) {
  const { window } = props;

  let inputObj = [];
  let inputValue = localStorage.getItem("inputValue");
  function fresh() {
    if (inputValue == null) {
      inputObj = [];
    } else {
      inputObj = JSON.parse(inputValue);
    }
  }
  fresh();
  useEffect(() => {
    fresh();
  }, [inputValue]);

  const clear = () => {
    localStorage.clear();
    window.location.reload();
  };

  console.log(inputObj);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ backgroundColor: "black" ,justifyContent:"center",}}>
        <Typography variant="h5" color="white" >
          Users
        </Typography>
      </Toolbar>
      <Divider />

      {inputObj.map((element, index) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <ListItem sx={{py:{sm:0 },px:{sm:1}}} button key={index}>
              <ListItemText primary={index + 1} />
              <Typography>{element}</Typography>
            </ListItem>
          </AccordionSummary>
          <AccordionDetails sx={{padding:1}}>
            <Link to="/relation" style={{ textDecoration: "none" ,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"cneter"}}>
              <Button  variant="contained">Add relation</Button>
            </Link>
          </AccordionDetails>
          {console.log(inputObj)}
        </Accordion>
      ))}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexBasis: "100%", height: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mr: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{ backgroundColor: "black", justifyContent: "space-between" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Relations.
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ textAlign: "right" }}
          >
            <Link
              to="/"
              onClick={clear}
              style={{ textDecoration: "none", color: "white" }}
            >
              Clear Data
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          p: 3,
          width: "100%",
        }}
      >
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/relation" element={<Relation />} />
        </Routes>
      </Box>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
          anchor="right"
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
