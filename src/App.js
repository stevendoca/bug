import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@material-ui/icons/Inbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ResponsiveDrawer from "./demo";
import Check from "./check";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  test: {
    backgroundColor: "yellow",
  },
}));
const theme = createTheme();
function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Check />
    </ThemeProvider>
  );
}

export default App;
