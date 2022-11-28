import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3A60BB",
    },
  },
  components: {
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: "#3A60BB",
            }
        },
      defaultProps: {
        elevation: 0,
      },
    },
  },
});
