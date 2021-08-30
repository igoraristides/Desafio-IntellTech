import React, { useState, useEffect } from "react";

import Button from "../../../components/Button";
import { useParams } from "react-router-dom";

import { Container, Card, TitlePage, TitleCard, Header } from "./styles";
import { IoIosArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

import api from "../../../services/api";
import GeometricTablebyDirectory from "../../../components/Table/GeometricTable/GeometricTablebyDirectory";

const GeoShapesbyDir = ({ history }) => {
  const [geo, setGeo] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(geo);

  async function fetchGeoByDir() {
    try {
      setLoading(true);
      const { data } = await api.get(`/GeometricShapes/directory/${id}`);
      setGeo(data);
      setLoading(false);
    } catch (error) {
      toast.error("Não foi possível retornar os diretórios cadastrados");
    }
  }

  useEffect(() => {
    fetchGeoByDir();
  }, []);

  return (
    <Container>
      <TitlePage>Diretórios</TitlePage>
      <Card>
        <Header>
          <TitleCard>
            Lista das formas geométricas no diretório escolhido
          </TitleCard>
          <Button
            type="button"
            label="Voltar"
            Icon={IoIosArrowRoundBack}
            iconPosition="left"
            onClick={() => window.history.back()}
          />
        </Header>
        {loading ? (
          <Loader type="TailSpin" color="#9163AE" height={50} width={50} />
        ) : (
          <GeometricTablebyDirectory data={geo} />
        )}
      </Card>
    </Container>
  );
};

export default GeoShapesbyDir;
