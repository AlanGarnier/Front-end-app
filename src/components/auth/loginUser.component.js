import React from 'react'
import { Field, Form, Formik } from 'formik'
// import LockOpenIcon from '@mui/icons-material/LockOpen'
import { Button, InputLabel } from '@mui/material'
import { TextField } from 'formik-mui'
import { H1, Container, AuthForm, Span, RelativeParentContainer } from "./styles"
import * as Yup from 'yup'
import './style.css'
// import { signin } from '../../../services/auth'

const loginSchema = Yup.object().shape({
  login: Yup.string()
      // .email('Adresse email invalide')
      .required('Champ requis'),
  password: Yup.string().required('Le mot de passe est requis'),
})

const loginForm = () => {
  return (
      <Formik
          initialValues={{ login: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values, { resetForm }) => {
            // signin(values.login, values.password)
            resetForm()
          }}
      >
        <Container>
          <AuthForm className="page-login">
            <H1>Connexion</H1>
            <Form>

              <div className="form-container">
                <div className="login-form">
                  <RelativeParentContainer>
                    <InputLabel htmlFor="login">Login</InputLabel>
                    <Field
                        placeholder="test"

                        name="login"
                        type="text"
                        label="Login"
                        className="custom_field"
                        component={TextField}
                        required
                        fullWidth
                    />
                  </RelativeParentContainer>

                  <RelativeParentContainer className="mt3">
                    <InputLabel htmlFor="password">Mot de passe</InputLabel>
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
                      // startIcon={<LockOpenIcon />}
                  >
                    Connexion
                  </Button>
                  <Span>
                    Vous n'avez pas de compte ?
                    <a href="/register"> Inscrivez-vous !</a>
                  </Span>
                </div>
              </div>
            </Form>
          </AuthForm>
        </Container>
      </Formik>
  )
}

export default loginForm;