import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  ListItemButton,
} from "@mui/material";

import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

const MENU_ITEMS = [
  "Dashboard",
  "Projects",
  "Issues",
  "Users",
  "Settings",
  "Logout",
];

const Sidebar = () => {
  return (
    <Drawer open={true} anchor="left" onClose={() => {}}>
      <Box
        sx={{
          width: 250,
        }}
      >
        <Box
          sx={{
            padding: "5px 10px",
          }}
        >
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {MENU_ITEMS.map((item, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <AutoAwesomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
