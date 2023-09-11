
import React, { useState } from "react";
import Logo from "../images/Logo3.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import "./home.css";
import Link from "@mui/material/Link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Function to handle anchor link clicks
  const handleAnchorLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpenMenu(false);
  };

  const menuOptions = [
    {
      text: "Home",
    //   to: "/#home-section",
    sectionId: "home-section",
      icon: <HomeIcon />,
    },
    {
      text: "About",
    //   to: "/#about-section",
    sectionId: "about-section",
      icon: <InfoIcon />,
    },
    {
      text: "Contact",
    //   to: "/#contact-section",
    sectionId: "contact-section",
      icon: <PhoneRoundedIcon />,
    },
  ];

  return (
    <nav className="home-nav">
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <a
            href={`#${item.sectionId}`}
            key={item.text}
            onClick={() => handleAnchorLinkClick(item.sectionId)}
          >
            {item.text}
          </a>
        ))}
        <Link href="/api/user/login" underline="none">
        <button className="primary-button">Log In</button>
        </Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
