import React from "react";
import { Button, Col, Container, Dropdown, DropdownButton, Row, Card } from "react-bootstrap";
import styles from "./places.module.css";
// import placeArray from "./locais"

function Places({ locaisFiltrados }) {

    return (
        <app-places>
            <div className="py-5 bg-light">
                <Container>
                    <Row>
                        {locaisFiltrados.map((data, index) => (
                            <Col key={index} md="4">
                                {/* Ajustar tamanho */}
                                <Card style={{ height: '325px', width: '100%', display: 'block', marginBottom: '1rem'}}>
                                    <Card.Img variant="top" src={data.url} alt={data.name}/>
                                    <Card.Body>
                                        <Card.Title>{data.name}</Card.Title>
                                        <DropdownButton variant="success" id="dropdown-item-button" title="Info" size='sm'>
                                            <Dropdown.ItemText>{data.description}</Dropdown.ItemText>
                                        </DropdownButton>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </app-places>
    );
}

export default Places;