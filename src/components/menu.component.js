import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const menu = () => {
    return(
        <Box sx={{flexGrow: 1}}>
            <Grid container>
                <Grid item sx={5}>
                    <Card style={{ background: "withe"}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 16}} color="text.secondary"></Typography>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item sx={4}>
                    <Card style={{ background: "green"}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 10}} color="text.primary"></Typography>
                            <Typography sx={{ fontSize: 10}} color="text.secondary"></Typography>
                            <Typography sx={{ fontSize: 30}} color="text.danger"></Typography>
                            <Typography sx={{ fontSize: 10}} color="text.secondary"></Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>


        </Box>
    )
}

export default menu;