import React from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";
import { TextField } from "formik-mui";
import { H1, H2, Container, AuthForm, Span, RelativeParentContainer } from "./styles";
import "./style.css";
import * as Yup from "yup";
import {signup} from "../../services/auth/singup.service";

const registerSchema = Yup.object().shape({

    firstName: Yup.string()
        .required('Champ requis'),
    lastName: Yup.string()
        .required('Champ requis'),
    phoneNumber: Yup.number()
        .min(10,'Le mot de passe doit contenir 10 caractères')
        .max(10,'Le mot de passe doit contenir 10 caractères')
        .required('Champ requis'),
    email: Yup.string()
        .email('Adresse email invalide')
        .required('Champ requis'),
    password: Yup.string()
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .required('Champ requis'),
    confirmPassword: Yup.string()
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .required('Champ requis'),
});


const registerForm = () => {
    return (
        <Formik
            initialValues={{ email: "", password: "", firstName: "", lastName: "", phoneNumber: "", confirmPassword: "" }}
            validationSchema={registerSchema}
            onSubmit={(values, { resetForm }) => {
                 signup(values.email, values.password, values.firstName, values.lastName, values.phoneNumber, values.confirmPassword);
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
                                        name="firstName"
                                        type="text"
                                        placeholder="FirstName"
                                        className="custom_field"
                                        component={TextField}
                                        required
                                        fullWidth
                                    />
                                </RelativeParentContainer>
                                <RelativeParentContainer>
                                    <Field
                                        name="lastName"
                                        type="text"
                                        placeholder="LastName"
                                        className="custom_field"
                                        component={TextField}
                                        required
                                        fullWidth
                                    />
                                </RelativeParentContainer>
                                <RelativeParentContainer>
                                    <Field
                                        name="email"
                                        type="text"
                                        placeholder="Email"
                                        className="custom_field"
                                        component={TextField}
                                        required
                                        fullWidth
                                    />
                                </RelativeParentContainer>
                                <RelativeParentContainer>
                                    <Field
                                        name="phoneNumber"
                                        type="text"
                                        placeholder="PhoneNumber"
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
                                        placeholder="Mot de passe"
                                        className="custom_field"
                                        component={TextField}
                                        required
                                        fullWidth
                                    />
                                </RelativeParentContainer>

                                <RelativeParentContainer className="mt3">
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirmer mot de passe"
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