import { FormControl, Grid, TextField, Typography } from '@mui/material';

const DetailComponent = () => {
    return (
        <>
            <div className="detail-container">
                <FormControl fullWidth>
                    <Grid item>
                        <Typography
                            variant="h5"
                            component="h5"
                            sx={{ padding: '5px' }}
                            className="typo-custom">
                            仕事の詳細
                        </Typography>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                        />
                    </Grid>
                </FormControl>
            </div>
        </>
    );
};

export default DetailComponent;
