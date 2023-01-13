import React from "react";
import { Button, Col, Container, Dropdown, DropdownButton, Row, Card } from "react-bootstrap";
import styles from "./places.module.css";

function Places({ locaisFiltrados }) {

    return (
        <app-places>
            <div className="py-5 bg-light">
                <Container>
                    <Row>
                        {locaisFiltrados.map((data, index) => (
                            <Col className="d-flex align-items-stretch" key={index} md="4">
                                {/* Ajustar tamanho */}
                                <Card style={{ width: '100%' }}>
                                    <Card.Img style={{ width: '100%', display: 'block', marginBottom: '1rem' }} variant="top" src={data.url} alt={data.name}/>
                                    <Card.Body style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
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
