import styled from "styled-components";

import { makeStyles } from "@material-ui/core";

import { theme } from "../../styles/theme";

const drawerWidth = 252;

export default makeStyles(() => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    position: "relative",
    flexShrink: 0,
    whiteSpace: "nowrap",
    height: "100%",
    minHeight: "100%",
  },
  drawerPaper: {
    width: drawerWidth,
    position: "fixed",
    background: "#fff",
    minHeight: "100%",
    padding: 15,
    borderRight: "none",
    overflowY: "visible",
  },
}));

export const LogoDrawer = styled.img`
  width: 100%;
  cursor: pointer;
`;
