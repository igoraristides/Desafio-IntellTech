import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";

import { IoIosArrowRoundBack } from "react-icons/io";
import { useParams } from "react-router-dom";
import Button from "../../../components/Button";

import Loader from "react-loader-spinner";

import {
  Container,
  Card,
  TitlePage,
  TitleCard,
  Section,
  Title,
  Text,
  Content,
} from "./styles";

import { toast } from "react-toastify";

import api from "../../../services/api";

const GeometricDetails = ({ history }) => {
  const { id } = useParams();
  const [geo, setGeo] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(geo);

  async function fetchGeo() {
    try {
      setLoading(true);
      const { data } = await api.get(`/GeometricShapes/geo/${id}`);
      setGeo(data);
      setLoading(false);
    } catch (error) {
      toast.error("Não foi possível retornar os dados da forma geométrica");
    }
  }

  useEffect(() => {
    fetchGeo();
  }, []);

  return (
    <Container>
      <TitlePage>Formas Geométricas</TitlePage>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <TitleCard>Dados da forma geométrica</TitleCard>
            {loading ? (
              <Loader type="TailSpin" color="#9163AE" height={50} width={50} />
            ) : (
              <Content>
                <Section>
                  <Title>Nome</Title>
                  <Text>{geo.nome}</Text>
                  <Title>Tipo</Title>
                  <Text>{geo.tipo}</Text>
                  <Title>Cor</Title>
                  <Text>{geo.cor}</Text>
                  <Title>Tamanho (Pixels)</Title>
                  <Text>{geo.tamPixels}px</Text>
                  <Title>ID do Diretório</Title>
                  <Text>{geo.id_diretorio}</Text>
                </Section>
              </Content>
            )}
            <Button
              type="button"
              label="Voltar"
              Icon={IoIosArrowRoundBack}
              iconPosition="left"
              onClick={() => window.history.back()}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GeometricDetails;
