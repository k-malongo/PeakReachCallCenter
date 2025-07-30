import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 250;

const navItems = [
  { text: "home", link: "/", hash: ["header"] },
  { text: "services", link: "/#services", hash: ["services"] },
  { text: "about us", link: "/#about", hash: ["about", "start", "testimonials"] },
  { text: "faqs", link: "/#faq", hash: ["faq"] },
  { text: "our team", link: "/#team", hash: ["team"] },
  { text: "contact", link: "/#contact", hash: ["contact"] },
  { text: "careers", link: "/careers", hash: [] },
];

const drawerItems = (open, activeLink, handleDrawerClose, currentPath) => (
  <Box sx={{ background: "#233d4d", height: "100%", textTransform: "uppercase" }}>
    <List>
      {navItems.map((item, index) => {
        const isActive =
          item.hash.includes(activeLink) || (item.hash.length === 0 && item.link === currentPath);

        return (
          <ListItem
            key={index}
            disablePadding
            sx={{
              display: "block",
              ":hover": { backgroundColor: "#008035" },
              ...(isActive && { background: "#008035" }),
            }}
          >
            <Link
              to={item.link}
              onClick={handleDrawerClose}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>
        );
      })}
    </List>
  </Box>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeLink, setActiveLink] = useState("header");
  const [navTop, setNavTop] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        const headerRect = header.getBoundingClientRect();
        setNavTop(headerRect.bottom >= 0.9 * window.innerHeight);
      }

      const elements = [
        "header",
        "services",
        "about",
        "start",
        "testimonials",
        "faq",
        "team",
        "contact",
      ];

      const positions = elements.map((id) => {
        const el = document.getElementById(id);
        return el ? { id, rect: el.getBoundingClientRect() } : null;
      }).filter(Boolean);

      const visibleSections = positions.filter(({ rect }) =>
        rect.top < window.innerHeight / 2 && rect.bottom >= 0
      );

      if (visibleSections.length > 0) {
        setActiveLink(visibleSections[visibleSections.length - 1].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) setOpen(!open);
  };

  const handleDrawerTransitionEnd = () => setIsClosing(false);

  return (
    <div id="navbar" className={navTop ? "nav_top" : "nav_scrolled"}>
      <div className="content">
        <div className="brand">
          <img className="logo" src="/images/logo1.png" alt="logo" />
          <h1>Peak Reach</h1>
        </div>

        <div className="desktop_links">
          {navItems.map((item, index) => {
            const isActive =
              item.hash.includes(activeLink) ||
              (item.hash.length === 0 && item.link === location.pathname);
            return (
              <Link
                key={index}
                to={item.link}
                className={isActive ? "active link" : "link"}
              >
                {item.text.charAt(0).toUpperCase() + item.text.slice(1)}
              </Link>
            );
          })}
        </div>

        <div className="menu_icon">
          <IconButton color="inherit" aria-label="open mobile nav" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </div>

        <Drawer
          variant="temporary"
          open={open}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            disableScrollLock: true,
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: "10vh",
            },
          }}
        >
          {drawerItems(open, activeLink, handleDrawerClose, location.pathname)}
        </Drawer>
      </div>
    </div>
  );
}
