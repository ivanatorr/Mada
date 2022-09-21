/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Plus",
      pageURL: "/plus",
    },
    {
      menuTitle: "Profile",
      pageURL: "/profile",
    },
    {
      menuTitle: "About",
      pageURL: "/about",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Mada
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem
                  href={"/plus"}
                  onClick={() => handleMenuClick("/plus")}
                >
                  Plus
                </MenuItem>
                <MenuItem
                  href={"/profile"}
                  onClick={() => handleMenuClick("/profile")}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  href={"/main"}
                  onClick={() => handleMenuClick("/menu")}
                >
                  Menu
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div className="mainHeader">
              <div className="footer">
                <Button
                  className="h1"
                  variant="primary"
                  href={"/plus"}
                  onClick={() => handleButtonClick("/plus")}
                >
                  <i
                    className="fas fa-plus"
                    style={{ color: "white", fontSize: "22px" }}
                  ></i>
                </Button>
                <Button
                  className="h1"
                  variant="primary"
                  href={"/profile"}
                  onClick={() => handleButtonClick("/profile")}
                >
                  <i
                    className="fas fa-user-alt"
                    style={{ color: "white", fontSize: "22px" }}
                  ></i>
                </Button>
                <Button
                  className="h1"
                  variant="primary"
                  href={"/main"}
                  onClick={() => handleButtonClick("/main")}
                >
                  <i
                    className="fas fa-bars"
                    style={{ color: "white", fontSize: "22px" }}
                  ></i>
                </Button>
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
