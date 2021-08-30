import React from "react";

import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import clsx from "clsx";

import Drawer from "../../components/Drawer";

import useStyles, { Container, Content } from "./styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  const open = true;
  return (
    <Container>
      <Drawer open={open} />
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Content>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              {children}
            </Grid>
          </Grid>
        </Content>
      </div>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
