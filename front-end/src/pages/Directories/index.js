import React, { useState, useEffect } from "react";

import Button from "../../components/Button";

import { Container, Card, TitlePage, TitleCard, Header } from "./styles";
import { ReactComponent as NewDirectory } from "../../assets/plus.svg";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

import DirectoryTable from "../../components/Table/DirectoryTable";
import api from "../../services/api";

const Directories = ({ history }) => {
  const [dir, setDir] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(dir);

  async function fetchDir() {
    try {
      setLoading(true);
      const { data } = await api.get("/Directories/dir");
      setDir(data);
      setLoading(false);
    } catch (error) {
      toast.error("Não foi possível retornar os diretórios cadastrados");
    }
  }

  useEffect(() => {
    fetchDir();
  }, []);

  return (
    <Container>
      <TitlePage>Diretórios</TitlePage>

      <Card>
        <Header>
          <TitleCard>Lista de Diretórios Cadastrados</TitleCard>
          <Button
            type="button"
            label="Novo Diretório"
            Icon={NewDirectory}
            iconPosition="right"
            onClick={() => history.push("/directories/newDirectory")}
          />
        </Header>
        {loading ? (
          <Loader type="TailSpin" color="#9163AE" height={50} width={50} />
        ) : (
          <DirectoryTable data={dir} />
        )}
      </Card>
    </Container>
  );
};

export default Directories;
