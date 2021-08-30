import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

export const Container = styled.div`
  min-height: 100%;
  display: flex;
`;

export const Content = styled.div`
  padding-top: 20px;
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
`;

const drawerWidth = 252;

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("md")]: {
      marginLeft: -drawerWidth,
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
