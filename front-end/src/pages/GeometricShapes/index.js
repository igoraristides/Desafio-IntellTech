import React, { useState, useEffect } from "react";

import Button from "../../components/Button";

import { Container, Card, TitlePage, TitleCard, Header } from "./styles";
import { ReactComponent as NewDirectory } from "../../assets/plus.svg";
import { toast } from "react-toastify";

import Loader from "react-loader-spinner";

import GeometricTable from "../../components/Table/GeometricTable";
import api from "../../services/api";

const GeometricShapes = ({ history }) => {
  const [geo, setGeo] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(geo);

  async function fetchGeo() {
    try {
      setLoading(true);
      const { data } = await api.get("/GeometricShapes/geo");
      setGeo(data);
      setLoading(false);
    } catch (error) {
      toast.error(
        "Não foi possível retornar as formas Geométricas cadastradas"
      );
    }
  }

  useEffect(() => {
    fetchGeo();
  }, []);

  return (
    <Container>
      <TitlePage>Formas Geométricas</TitlePage>

      <Card>
        <Header>
          <TitleCard>Lista de formas geométricas cadastradas</TitleCard>
          <Button
            type="button"
            label="Nova forma geométrica"
            Icon={NewDirectory}
            iconPosition="right"
            onClick={() => history.push("/geometricshapes/newGeo")}
          />
        </Header>
        {loading ? (
          <Loader type="TailSpin" color="#9163AE" height={50} width={50} />
        ) : (
          <GeometricTable data={geo} />
        )}
      </Card>
    </Container>
  );
};

export default GeometricShapes;
