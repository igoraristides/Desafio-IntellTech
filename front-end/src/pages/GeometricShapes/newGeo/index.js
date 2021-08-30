import React, { useState, useEffect, useRef } from "react";

import { Grid } from "@material-ui/core";
import Button from "../../../components/Button";
import Form from "../../../components/Form";

import { Container, Card, TitlePage, TitleCard, Header } from "./styles";
import api from "../../../services/api";
import Input from "../../../components/Input";

import { toast } from "react-toastify";
import Select from "../../../components/Select";

const NewGeo = ({ history }) => {
  const formRef = useRef(null);

  const [dir, setDir] = useState([]);
  console.log(dir);

  async function fetchDir() {
    try {
      const { data } = await api.get("/Directories/dir");
      setDir(data);
    } catch (error) {
      toast.error("Não foi possível retornar os diretórios cadastrados");
    }
  }

  useEffect(() => {
    fetchDir();
  }, []);

  const handleSubmit = async () => {
    try {
      const formData = formRef.current.getData();
      await api.post("/GeometricShapes/newGeo", formData);
      toast.success("Forma Geométrica cadastrada com sucesso.");

      window.history.back();
    } catch (error) {
      toast.error("Erro no cadastro da forma geométrica, tente novamente.");
    }
  };

  return (
    <Container>
      <TitlePage>Formas Geométricas</TitlePage>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <Header>
              <TitleCard>Cadastrar Nova Forma Geométrica </TitleCard>
            </Header>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Select
                    name="id_diretorio"
                    label="Diretório"
                    options={dir}
                    getOptionLabel={(o) => o.nome}
                    getOptionValue={(o) => o?.idDiretorio}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input name="nome" label="Nome" variant="border" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Select
                    name="tipo"
                    label="Tipo"
                    options={[
                      { label: "Trapézio", value: "1" },
                      { label: "Quadrado", value: "2" },
                      { label: "Triângulo", value: "3" },
                      { label: "Retângulo", value: "4" },
                      { label: "Losangolo", value: "5" },
                      { label: "Paralelogramo", value: "6" },
                      { label: "Círculo", value: "7" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input name="cor" label="Cor" variant="border" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    name="tamPixels"
                    label="Tamanho"
                    variant="border"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" label="Cadastrar" fullWidth />
                </Grid>
              </Grid>
            </Form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewGeo;
