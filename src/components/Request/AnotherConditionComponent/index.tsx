import { FormControl, Grid, TextField, Typography } from '@mui/material';

const AnotherConditionComponent = () => {
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
                            その他の注意事項
                        </Typography>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            defaultValue="Default Value"
                        />
                    </Grid>
                </FormControl>
            </div>
        </>
    );
};

export default AnotherConditionComponent;
