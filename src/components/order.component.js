import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import {MenuItem} from "@mui/material";

import Button from "@mui/material/Button";
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik'
import {setOrder} from "../services/command.service";


const orderSchema = Yup.object().shape({
    entree: Yup.number()
        .required('L\'entree est requise'),
    plat: Yup.number()
        .required('Le plat est requis'),
    dessert: Yup.number()
        .required('Le dessert est requis'),
})

export default function OrderForm() {

    return (
            <Formik initialValues={{ entree: '', plat: '', dessert: ''}}
                    validationSchema={orderSchema}
                    onSubmit={(values, { resetForm }) => {
                        setOrder(values.amount, values.plat, values.dessert)
                        resetForm()
                    }}>
                <Container>
                    <Form>
                        <h3> Créer menu</h3>
                        <div className="form-group mt-4 col-5">
                            <FormControl fullWidth>
                                <InputLabel id="entree-label">Entrée</InputLabel>
                                <Select labelId="entree-label" id="select-entree" name='entree' label="Entree">
                                    <MenuItem value="Salade césar">Salade césar</MenuItem>
                                    <MenuItem value="Oeuf mimosa">Oeuf mimosa</MenuItem>
                                    <MenuItem value="Rielletes de thon">Rielletes de thon</MenuItem>
                                    <MenuItem value="Chèvre chaud">Chèvre chaud</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="form-group mt-4 ">
                            <FormControl fullWidth>
                                <InputLabel id="plat-label">Plat</InputLabel>
                                <Select labelId="plat-label" id="select-plat" name="" label="Plat">
                                    <MenuItem value="Salade césar">Salade césar</MenuItem>
                                    <MenuItem value="Oeuf mimosa">Oeuf mimosa</MenuItem>
                                    <MenuItem value="Rielletes de thon">Rielletes de thon</MenuItem>
                                    <MenuItem value="Chèvre chaud">Chèvre chaud</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="form-group mt-4 ">
                            <FormControl fullWidth>
                                <InputLabel id="dessert-label">Entrée</InputLabel>
                                <Select labelId="dessert-label" id="select-dessert" name="" label="Dessert">
                                    <MenuItem value="Salade césar">Salade césar</MenuItem>
                                    <MenuItem value="Oeuf mimosa">Oeuf mimosa</MenuItem>
                                    <MenuItem value="Rielletes de thon">Rielletes de thon</MenuItem>
                                    <MenuItem value="Chèvre chaud">Chèvre chaud</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="form-group mt-4">
                            <Button
                                className="submit-form-btn"
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Ajouter
                            </Button>
                        </div>
                    </Form>
                </Container>
            </Formik>
    );
}

