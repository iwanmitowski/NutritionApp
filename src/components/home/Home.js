import { useNavigate } from "react-router-dom";
import "./Home.css";
import Table from 'react-bootstrap/Table';
import { Container, FormControl, InputGroup, Row, Button } from "react-bootstrap";
import FoodTable from "../food-table/FoodTable";
import { useEffect, useState } from "react";
import { getAll } from "../../services/foods-service";

export default function Home() {
  const navigate = useNavigate();

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getAll()
    .then((res) => {
      setFoods(res);
    })
  }, [])

  return (
    <Container>
      <Row>
        <FoodTable isFiltered foods={foods}/>
      </Row>
      <Row>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for a food"
            aria-label="Search for a food"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary">Search</Button>
        </InputGroup>
      </Row>
      <Row>
        <FoodTable foods={foods}/>
      </Row>
    </Container>
  );
}
