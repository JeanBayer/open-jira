import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Open Jira
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
