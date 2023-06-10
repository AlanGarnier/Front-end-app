import * as React from 'react';
import {TextField, InputLabel, Container,Grid, FormControl, Paper, Select, MenuItem} from "@mui/material";



export default function MenuForm() {

    const [type, setType] = React.useState('');
    const handleChange = (event) => {
        setType(event.target.value);
    };
    return(
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={5} >
                    <FormControl fullWidth>
                        <InputLabel id="type-label">Type</InputLabel>
                        <Select labelId="type-label" id="select-type" value={type} label="type" onChange={handleChange}>
                            <MenuItem value={0}>Débiter</MenuItem>
                            <MenuItem value={1}>Créditer</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

        </Container>
    )
}