

import {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import UniversityList from '../components/nonpersonalized_list';
import { AiFillHome } from 'react-icons/ai';
import { IoPersonCircleSharp } from 'react-icons/io5';
import '../components/index.css'
import ViewProfileComponent from './UserProfile';
import { FaClipboardList } from 'react-icons/fa';
import ViewShortlist from '../components/shortlisted_university';
import {MdForum} from 'react-icons/md';
import Forum from '../components/forum';
import AmbitiousUniversityList from '../components/ambitious_university_list';
import ProbableUniversityList from '../components/probable_university_list';
import SafeUniversityList from '../components/safe_university_list';
import { useParams } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const { userID } = useParams();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menudata, setMenudata] =useState("safeHome");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
  <>
    <Box sx={{ display: 'flex' , color: 'success.dark' }} >
      <CssBaseline />
      <AppBar position="fixed" sx={{backgroundColor:"#578039"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>{setOpen(!open)}}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Beyond The Seas
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List component="nav">
         
          <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>setMenudata("Home")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <AiFillHome />
              </ListItemIcon>
              <ListItemText primary={open ? "Home" : ""} />
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>setMenudata("viewProfile")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <IoPersonCircleSharp />
              </ListItemIcon>
              <ListItemText primary={open ? "View Profile" : ""} />
            </ListItemButton>
          </ListItem>


          <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>setMenudata("shortList")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <FaClipboardList />
              </ListItemIcon>
              <ListItemText primary={open ? "View ShortList" : ""} />
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding sx={{ display: 'block' }} onClick={() => window.location.href = `/api/user/view-forum/${userID}`}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <MdForum />
              </ListItemIcon>
              <ListItemText primary={open ? "Forum" : ""} />
            </ListItemButton>
          </ListItem>
          
        </List>
        <Divider />
        
      </Drawer>
      <Box className="background-box" component="main"  sx={{ flexGrow: 1, p: 3 }}>
        <drawerHeader />
                  {menudata==="safeHome" && <SafeUniversityList/>}
                  {menudata==="Home" && <UniversityList/>}
                  {menudata==="viewProfile" && <ViewProfileComponent/>}
                  {menudata==="shortList" && <ViewShortlist/>}
                  {/* {menudata==="forum" && <Forum />} */}
      </Box>
    </Box>
  </>
  );
}





