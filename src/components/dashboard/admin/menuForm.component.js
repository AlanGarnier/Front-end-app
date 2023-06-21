import * as React from 'react';
import {TextField, InputLabel, Container,Grid, FormControl, Paper, Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik'
import {editAmount} from "../../../services/procurement.service";



// Schema

const editCagnotteSchema = Yup.object().shape({
    amount: Yup.number()
        .required('Le montant est requis')
        .positive(),
    type: Yup.string()
        .required('Le type est requis'),
    user: Yup.number()
        .required('Veuillez sélectionner un utilisateur'),
})

export default function MenuForm() {

    return(
        <React.Fragment>
            <Formik initialValues={{ amount: '', type: '', user: ''}}
            validationSchema={editCagnotteSchema}
            onSubmit={(values, { resetForm }) => {
                editAmount(values.amount, values.type, values.user)
                resetForm()
            }}>
                <Container>
                    <Form>
                        <h3> Editer cagnotte</h3>
                        <div className="form-group mt-4 ">
                            <TextField id="outlined-basic" name="amount" label="Montant" type="number" variant="outlined" />
                        </div>
                        <div className="form-group mt-4 ">
                            <FormControl fullWidth>
                                <InputLabel id="type-label">Type</InputLabel>
                                <Select labelId="type-label" id="select-type" name="type" label="type" >
                                    <MenuItem value="debit">Débiter</MenuItem>
                                    <MenuItem value="credit">Créditer</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="form-group mt-4 ">
                            <FormControl fullWidth>
                                <InputLabel id="user-label">Utilisateur</InputLabel>
                                <Select labelId="user-label" id="select-user" name="user" label="Utilisateur" >
                                    <MenuItem value={0}>Tom</MenuItem>
                                    <MenuItem value={1}>Harry</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="form-group mt-4 mb-2 col-3">
                            <Button
                                className="submit-form-btn"
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Valider
                            </Button>
                        </div>
                    </Form>
                </Container>
            </Formik>
        </React.Fragment>
    )
}