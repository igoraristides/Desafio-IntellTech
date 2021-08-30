import React from "react";

import { Drawer as DrawerMat, Grid } from "@material-ui/core/";
import withWidth from "@material-ui/core/withWidth";
import clsx from "clsx";
import { useHistory, useLocation } from "react-router-dom";

import Logo from "../../assets/LogoG.svg";

import { ReactComponent as Diretorio } from "../../assets/Icons/folder.svg";
import { ReactComponent as Formas } from "../../assets/Icons/geometrical-shapes.svg";

import Item from "./Item";
import useStyles, { LogoDrawer } from "./styles";

const routes = [
  {
    label: "Diretórios",
    to: "/",
    icon: Diretorio,
  },
  {
    label: "Formas Geométricas",
    to: "/geometricshapes",
    icon: Formas,
  },
];

function Drawer({ open }) {
  const history = useHistory();
  const classes = useStyles();
  const { pathname } = useLocation();

  const onChangePage = (to) => {
    history.push(to);
  };

  const changeTo = (to) => {
    if (pathname === "/" && to === "/") return true;

    if (to === "/") return false;

    return pathname.startsWith(to);
  };

  return (
    <DrawerMat
      variant={"persistent"}
      className={clsx(classes.drawer)}
      classes={{
        paper: clsx(classes.drawerPaper),
      }}
      open={open}
      onClose={false}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.logoGrid}>
          <LogoDrawer src={Logo} alt="logo" onClick={() => history.push("/")} />
        </Grid>
        {routes.map((item) => (
          <Grid item xs={12}>
            <Item
              navigatePage={() => onChangePage(item.to)}
              label={item.label}
              active={changeTo(item.to)}
              icon={item.icon}
            />
          </Grid>
        ))}
      </Grid>
    </DrawerMat>
  );
}

export default withWidth()(Drawer);
