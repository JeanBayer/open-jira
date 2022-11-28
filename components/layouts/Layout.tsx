import { Box } from "@mui/material";
import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const Layout = ({ title = "Open Jira", children }: Props) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Box
        sx={{
          padding: "10px 20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
