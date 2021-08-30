import React, { useRef } from "react";

import { Grid } from "@material-ui/core";
import Button from "../../../components/Button";
import Form from "../../../components/Form";

import { Container, Card, TitlePage, TitleCard, Header } from "./styles";
import api from "../../../services/api";
import Input from "../../../components/Input";

import { toast } from "react-toastify";

const NewDirectory = ({ history }) => {
  const formRef = useRef(null);
  const handleSubmit = async () => {
    try {
      const formData = formRef.current.getData();

      await api.post("/Directories/newDirectory", formData);
      toast.success("Diretório cadastrado com sucesso.");

      window.history.back();
    } catch (error) {
      toast.error("Erro no cadastro do diretório, tente novamente.");
    }
  };

  return (
    <Container>
      <TitlePage>Diretórios</TitlePage>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <Header>
              <TitleCard>Cadastrar Novo Diretórios </TitleCard>
            </Header>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input name="Nome" label="Nome" variant="border" fullWidth />
              <Button
                type="submit"
                label="Cadastrar"
                iconPosition="right"
                fullWidth
              />
            </Form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewDirectory;
