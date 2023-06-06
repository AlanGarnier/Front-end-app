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
                <Box py={8} textAlign="center">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardHeader style={{backgroundColor:"#cdcdcd"}} title={['Pro']}></CardHeader>
                                <CardContent>
                                    <Box px={1}>
                                        <Typography variant="h3" component="h2" gutterBottom={true}>{['$15/mo']}</Typography>
                                        <Typography color="textSecondary" component="h5">{['20 users included']}</Typography>
                                        <Typography color="textSecondary" component="h5">{['10 GB of storage']}</Typography>
                                        <Typography color="textSecondary" component="h5">{['Help center access']}</Typography>
                                        <Typography color="textSecondary" component="h5"> {['Priority email support']}</Typography>
                                    </Box>
                                            <br></br>
                                            <Button variant="outlined" color="primary">{['Get started']}</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
);
}