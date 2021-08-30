import React from "react";
import { Container, Text } from "./styles";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#fff",
    border: 0,
    color: "#9163AE",
    font: "19px 'Source Sans Pro', sans-serif",
    fontWeight: 600,
  },
  body: {
    border: 0,
    color: "#4D4D4E;",
    font: "16px 'Source Sans Pro', sans-serif",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#fff",
    },
  },
}))(TableRow);

const GeometricTablebyDirectory = (data) => {
  console.log(data.data.length);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  return (
    <Container>
      {data.data.length === 0 ? (
        <Text>
          Não há nenhuma forma geométrica cadastrada nesse diretório...
        </Text>
      ) : (
        <TableContainer component={Paper} style={{ boxShadow: "none" }}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="center">NOME</StyledTableCell>
                <StyledTableCell align="center">TIPO</StyledTableCell>
                <StyledTableCell align="center">COR</StyledTableCell>
                <StyledTableCell align="center">
                  TAMANHO (PIXELS)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.data.map((geometric) => (
                <StyledTableRow key={geometric.idFormasGeometricas}>
                  <StyledTableCell component="th" scope="row">
                    {geometric.idFormasGeometricas}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {geometric.nome}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {geometric.tipo}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {geometric.cor}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {geometric.tamPixels}px
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default GeometricTablebyDirectory;
