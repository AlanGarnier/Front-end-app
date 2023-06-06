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




export default function OrderForm() {

    const [entree, setEntree] = React.useState('');
    const handleChange = (event) => {
        setEntree(event.target.value);
    };

    return (
        <Container maxWidth="lg">
            <Box px={1}>
                <Typography variant='h4'>Formulaire de commande</Typography>
                <Grid container spacing={3} py={3}>
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <InputLabel id="entree-label">Entrée</InputLabel>
                            <Select labelId="entree-label" id="select-entree" value={entree} label="Entree"
                                    onChange={handleChange}>
                                <MenuItem value="Salade césar">Salade césar</MenuItem>
                                <MenuItem value="Oeuf mimosa">Oeuf mimosa</MenuItem>
                                <MenuItem value="Rielletes de thon">Rielletes de thon</MenuItem>
                                <MenuItem value="Chèvre chaud">Chèvre chaud</MenuItem>
                            </Select>

                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

