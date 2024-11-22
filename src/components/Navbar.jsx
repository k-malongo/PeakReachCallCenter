import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// MUI
import {
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  // Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 250;

const drawerItems = (open, activeLink) => {
  return (
    <Box
      sx={{
        background: "#233d4d",
        height: "100%",
        textTransform: "uppercase",
      }}
    >
      <List>
        {[
          {
            text: "home",
            link: "/",
            hash: ["header"],
          },
          {
            text: "services",
            link: "/#services",
            hash: ["services"],
          },
          {
            text: "about us",
            link: "/#about",
            hash: ["about", "start", "testimonials"],
          },
          {
            text: "faqs",
            link: "/#faq",
            hash: ["faq"],
          },
          {
            text: "our team",
            link: "/#team",
            hash: ["team"],
          },
          {
            text: "contact",
            link: "/#contact",
            hash: ["contact"],
          },
        ].map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              display: "block",
              ":hover": { backgroundColor: "#008035" },
              ...(item.hash.includes(activeLink) && {
                background: "#008035",
              }),
            }}
          >
            <Link
              to={item.link}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState();
  const [activeLink, setActiveLink] = useState("header");
  const [navTop, setNavTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const header_rect = header.getBoundingClientRect();

      if (header_rect.bottom < 0.9 * window.innerHeight) {
        setNavTop(false);
      } else {
        setNavTop(true);
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
      const observable = {};
      elements.forEach((element) => {
        const el = document.getElementById(element);
        if (el) observable[element] = el;
      });
      const pos = {};
      for (const key in observable) {
        const rect = observable[key].getBoundingClientRect();
        pos[key] = rect;
      }
      const scrolled = Object.keys(pos).filter((key) => {
        const rect = pos[key];
        if (rect.top < window.innerHeight / 2 && rect.bottom >= 0) {
          return true;
        }
        return false;
      });
      setActiveLink(scrolled[scrolled.length - 1]);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setOpen(!open);
    }
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <div id="navbar" className={navTop ? "nav_top" : "nav_scrolled"}>
      <div className="content">
        <div className="brand">
          <img className="logo" src="/images/logo1.png" alt="logo" />
          <h1>Peak Reach</h1>
        </div>

        <div className="desktop_links">
          <Link
            to="/"
            className={activeLink === "header" ? "active link" : "link"}
          >
            Home
          </Link>
          <Link
            to="/#services"
            className={activeLink === "services" ? "active link" : "link"}
          >
            Services
          </Link>
          <Link
            to="/#about"
            className={
              activeLink === "about" ||
              activeLink === "testimonials" ||
              activeLink === "start"
                ? "active link"
                : "link"
            }
          >
            About Us
          </Link>
          <Link
            to="/#faq"
            className={activeLink === "faq" ? "active link" : "link"}
          >
            FAQs
          </Link>
          <Link
            to="/#team"
            className={activeLink === "team" ? "active link" : "link"}
          >
            Our Team
          </Link>
          <Link
            to="/#contact"
            className={activeLink === "contact" ? "active link" : "link"}
          >
            Contact
          </Link>
          {/* <Link
              to="/#contact"
              className={activeLink === "contact" ? "active link" : "link"}>
            Careers
          </Link> */}
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: "10vh",
            },
          }}
        >
          {drawerItems(open, activeLink)}
        </Drawer>
      </div>
    </div>
  );
}
