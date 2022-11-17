import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListSubheader from "@mui/material/ListSubheader";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import ActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AddCardSharpIcon from "@mui/icons-material/AddCardSharp";
import RoomSharpIcon from "@mui/icons-material/RoomSharp";
import ContactPageSharpIcon from "@mui/icons-material/ContactPageSharp";
import { Link } from "react-router-dom";

import Informacion from "../Productos/Crear/Informacion";

import AccountMenu from "./AccountMenu/AccountMenu";
import Purchase from "../Badges/Purchase";
import Checkout from "../Productos/Crear/CrearProducto";

import Cards from "../Productos/Computo/Cards";
import products from "../../assets/productos.json";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  console.log(products[0]);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openD, setOpenD] = React.useState(true);

  const handleClick = () => {
    setOpenD(!openD);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // return (
  //   <Box sx={{ display: "flex" }}>
  //     <CssBaseline />
  //     <AppBar position="fixed" open={open}>
  //       <Toolbar>
  //         <IconButton
  //           color="inherit"
  //           aria-label="open drawer"
  //           onClick={handleDrawerOpen}
  //           edge="start"
  //           sx={{
  //             marginRight: 5,
  //             ...(open && { display: "none" }),
  //           }}
  //         >
  //           <MenuIcon />
  //         </IconButton>
  //         <Typography variant="h6" noWrap component="div">
  //           The Developer's e-commerce
  //         </Typography>
  //         <Box sx={{ flexGrow: 1 }} />
  //         <Purchase />
  //         <AccountMenu />
  //         <Box />
  //       </Toolbar>
  //     </AppBar>
  //     <Drawer variant="permanent" open={open}>
  //       <DrawerHeader>
  //         <IconButton onClick={handleDrawerClose}>
  //           {theme.direction === "rtl" ? (
  //             <ChevronRightIcon />
  //           ) : (
  //             <ChevronLeftIcon />
  //           )}
  //         </IconButton>
  //       </DrawerHeader>
  //       <Divider />
  //       <List
  //         sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
  //         component="nav"
  //         aria-labelledby="nested-list-subheader"
  //         // subheader={
  //         //   <ListSubheader component="div" id="nested-list-subheader">
  //         //     Nested List Items
  //         //   </ListSubheader>
  //         // }
  //       >
  //         <ListItemButton>
  //           <ListItemIcon>
  //             <ActiveIcon />
  //           </ListItemIcon>
  //           <ListItemText primary="Sent mail" />
  //         </ListItemButton>
  //         <ListItemButton>
  //           <ListItemIcon>
  //             <DraftsIcon />
  //           </ListItemIcon>
  //           <ListItemText primary="Drafts" />
  //         </ListItemButton>
  // <ListItemButton onClick={handleClick}>
  //   <ListItemIcon>
  //     <InboxIcon />
  //   </ListItemIcon>
  //   <ListItemText primary="Inbox" />
  //   {openD ? <ExpandLess /> : <ExpandMore />}
  // </ListItemButton>
  // <Collapse in={openD} timeout="auto" unmountOnExit>
  //   <List component="div" disablePadding>
  //     <ListItemButton sx={{ pl: 4 }}>
  //       <ListItemIcon>
  //         <StarBorder />
  //       </ListItemIcon>

  //       <ListItemText primary="Starred" />
  //     </ListItemButton>
  //   </List>
  // </Collapse>
  //       </List>
  //       <Divider />
  //       <List>
  //         {["All mail", "Trash", "Spam"].map((text, index) => (
  //           <ListItem key={text} disablePadding sx={{ display: "block" }}>
  //             <ListItemButton
  //               sx={{
  //                 minHeight: 48,
  //                 justifyContent: open ? "initial" : "center",
  //                 px: 2.5,
  //               }}
  //             >
  //               <ListItemIcon
  //                 sx={{
  //                   minWidth: 0,
  //                   mr: open ? 3 : "auto",
  //                   justifyContent: "center",
  //                 }}
  //               >
  //                 ICONO AQUI

  //               </ListItemIcon>
  //               <ListItemText primary={"Lugares"} sx={{ opacity: open ? 1 : 0 }} />
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //       </List>
  //     </Drawer>

  //     <Box component="" sx={{ flexGrow: 1, p: 3 }}>
  //       <DrawerHeader />
  //       <Cards producto={products[0]} />
  //       <Informacion />
  //     </Box>

  //     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  //       <DrawerHeader />
  //       <Checkout />
  //     </Box>
  //   </Box>
  // );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Developer's e-commerce
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Purchase />
          <AccountMenu />
          <Box />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     Nested List Items
          //   </ListSubheader>
          // }
        >
          <Link to={"/"}>
            <ListItemButton>
              <ListItemIcon>
                <AddCardSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Productos" />
            </ListItemButton>
          </Link>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {openD ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openD} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <List>
          <ListItem key={"Lugares"} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <RoomSharpIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Lugares"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Contacto"} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ContactPageSharpIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Contacto"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Checkout />
      </Box>
         
    </Box>
  );
}
