import React, { useState } from 'react';
import { Button, Col, Container, Row, Form, FormControl } from "react-bootstrap";
import Places from "./components/places";
import styles from './turismo.module.css'
import placeArray from "./components/locais"
import Footer from '../Footer/footer';

function Turismo() {
    // hook para localidade
    const [filterList, setFilterList] = useState(placeArray);
    // função para pesquisar lugares
    const handleSearch = (event) => {
        if (event.target.value === "") {
            setFilterList(placeArray);
            return ;
        }
        const filteredValues = placeArray.filter((query) =>
            query.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        );
        setFilterList(filteredValues);
    };

    return (
        <app-turismo>
            <div className={styles.coverContainer}>
                <div className={styles.coverText}>
                    <h1>FAÇA SUA ESCOLHA, VIAJANTE!</h1>
                    <p>Viagens nacionais e internacionais!</p>
                    <Form className="d-flex">
                        <Form.Control 
                        className='me-2' 
                        name="text" 
                        type="text" 
                        onChange={handleSearch} 
                        placeholder='Pesquisar pelo local'/>
					</Form>
                </div>
            </div>
            <Places
            locaisFiltrados={filterList}
            />
            <Footer/>
        </app-turismo>
    );
}

export default Turismo;

/* 
LEMBRETES: Embelezamento não é prioridade!
PESQUISAR: rio de janeiro brazil imagesize:1920x1080
*/