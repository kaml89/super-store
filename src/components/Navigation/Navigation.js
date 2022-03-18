import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAuth } from "../../context/AuthContext";
// import { useCart } from "../../context/CartContext";
import CartIcon from "../Cart/CartIcon/CartIcon";

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { isAuthenticated, isAdmin, logout } = useAuth();
  // const { getTotalQuantity } = useCart();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElNav(null);
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseMenu();
    logout();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            super store
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseMenu} component={Link} to="/">
                <Typography textAlign="center">Products</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseMenu} component={Link} to="/deals">
                <Typography textAlign="center">Deals</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            super store
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              component={Link}
              to="/"
            >
              Products
            </Button>
            <Button
              onClick={handleCloseMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              component={Link}
              to="/deals"
            >
              Deals
            </Button>
          </Box>

          <Box sx={{ display: "flex" }}>
            {/* <IconButton
              size="large"
              aria-label="show-cart"
              color="inherit"
              component={Link}
              to="/cart"
            >
              <Badge badgeContent={getTotalQuantity()} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton> */}
            <CartIcon />
            {isAuthenticated() ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={handleOpenUserMenu}
                    // sx={{ p: 0 }}
                  >
                    <AccountCircle />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseMenu}
                >
                  {isAdmin() ? (
                    <>
                      <MenuItem
                        onClick={handleCloseMenu}
                        component={Link}
                        to="/admin/items"
                      >
                        <Typography textAlign="center">Items</Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={handleCloseMenu}
                        component={Link}
                        to="/admin/users"
                      >
                        <Typography textAlign="center">Users</Typography>
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
                        <Typography textAlign="center">Logout</Typography>
                      </MenuItem>
                    </>
                  ) : (
                    <MenuItem onClick={handleLogout}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  )}
                </Menu>
              </Box>
            ) : (
              <Button
                onClick={handleCloseMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to="/login"
              >
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
