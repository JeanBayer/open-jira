import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useUI } from "../../context/ui";

export const Navbar = () => {
  const { openMenu } = useUI();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={openMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Open Jira
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
