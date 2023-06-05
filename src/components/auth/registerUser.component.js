import React from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";
import { TextField } from "formik-mui";
import { H1, H2, Container, AuthForm, Span, RelativeParentContainer } from "./styles";
import "./style.css";
import * as Yup from "yup";
// import { signup } from "../../../services/auth";

const registerSchema = Yup.object().shape({

    email: Yup.string()
        .email('Adresse email invalide')
        .required('Champ requis'),
    password: Yup.string()
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .required('Champ requis'),

});


const registerForm = () => {
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={registerSchema}
            onSubmit={(values, { resetForm }) => {
                // signup(values.email, values.password);
                resetForm();
            }}>
            <Container>
                <AuthForm className="page-login">
                    <H1>Créez votre compte</H1>
                    <H2>Rejoignez nous et créez votre compte dès maintenant</H2>
                    <Form>
                        <div className="form-container">
                            <div className="login-form">
                                <RelativeParentContainer>
                                    <Field
                                        name="email"
                                        type="text"
                                        label="Email"
                                        className="custom_field"
                                        component={TextField}
                                        required
                                        fullWidth
                                    />
                                </RelativeParentContainer>

                                <RelativeParentContainer className="mt3">
                                    <Field
                                        name="password"
                                        type="password"
                                        label="Mot de passe"
                                        className="custom_field"
                                        component={TextField}
                                        required
                                        fullWidth
                                    />
                                </RelativeParentContainer>

                                <Button
                                    className="submit-form-btn"
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Créer mon compte
                                </Button>
                                <Span>
                                    Déjà un compte ?
                                    <a href="/connexion"> Connectez-vous !</a>
                                </Span>
                            </div>
                        </div>
                    </Form>
                </AuthForm>
            </Container>
        </Formik>
    );
}

export default registerForm;