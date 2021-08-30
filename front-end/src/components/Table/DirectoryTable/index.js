import React from "react";
import { Container, StyledLink, IconContent, Text } from "./styles";
import { ReactComponent as LinkIcon } from "../../../assets/link.svg";
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

const DirectoryTable = (data, loading) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const classes = useStyles();

  return (
    <Container>
      {data.data.length === 0 ? (
        <Text>Não há nenhum diretório cadastrado...</Text>
      ) : (
        <TableContainer component={Paper} style={{ boxShadow: "none" }}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>NOME</StyledTableCell>
                <StyledTableCell align="center">ID</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.data.map((directory) => (
                <StyledTableRow key={directory.idDiretorio}>
                  <StyledTableCell component="th" scope="row">
                    <StyledLink to={`/directories/${directory.idDiretorio}`}>
                      <IconContent>
                        <div>{directory.nome} </div>
                        <LinkIcon style={{ width: 15 }} />
                      </IconContent>
                    </StyledLink>
                  </StyledTableCell>

                  <StyledTableCell component="th" scope="row" align="center">
                    {directory.idDiretorio}
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

export default DirectoryTable;
