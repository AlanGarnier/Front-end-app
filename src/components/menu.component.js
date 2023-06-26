import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';

export default function Pricing(props) {
    return (
        <section>
            <Container maxWidth="lg">
                <Box py={8} textAlign="center" >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardHeader style={{backgroundColor:"#8E8D8A"}} title={['Chicken']}></CardHeader>
                                <CardContent>
                                    <Box px={1}>
                                        <Typography variant="h3" component="h2" gutterBottom={true}>{['8€']}</Typography>
                                        <Typography color="textSecondary" component="h5">{['Salade césar']}</Typography>
                                        <Typography color="textSecondary" component="h5">{['Escalope de poulet']}</Typography>
                                        <Typography color="textSecondary" component="h5">{['Salade de fruit']}</Typography>
                                    </Box>
                                            <br></br>
                                            <Button variant="contained" style={{ backgroundColor: '#E98074'}}>{['Commander']}</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardHeader style={{backgroundColor:"#8E8D8A"}} title={['Beef']}></CardHeader>
                                <CardContent>
                                    <Box px={1}>
                                        <Typography variant="h3" component="h2" gutterBottom={true}>{['8€']}</Typography>
                                        <Typography color="textSecondary" component="h5">{['Oeuf mimosa']}</Typography>
                                        <Typography color="textSecondary" component="h5">{['Entrecote de boeuf']}</Typography>
                                        <Typography color="textSecondary" component="h5">{['Tiramisu']}</Typography>
                                    </Box>
                                    <br></br>
                                    <Button variant="contained" style={{ backgroundColor: '#E98074'}}>{['Commander']}</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardHeader style={{backgroundColor:"#8E8D8A"}} title={['Fish']}></CardHeader>
                                <CardContent>
                                    <Box px={1}>
                                        <Typography variant="h3" component="h2" gutterBottom={true}>{['8€']}</Typography>
                                        <Typography color="textSecondary" component="h5">{['Rilletette de thon']}</Typography>
                                        <Typography color="textSecondary" component="h5">{['Filet de cabillaud']}</Typography>
                                        <Typography color="textSecondary" component="h5">{['Brownie']}</Typography>
                                    </Box>
                                    <br></br>
                                    <Button variant="contained" style={{ backgroundColor: '#E98074'}}>{['Commander']}</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
);
}