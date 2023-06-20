import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';
import './style.scss';
import { useState } from 'react';

const SelectTimeComponent = () => {
    const [hour, setHour] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const [minutes, setMinutes] = useState<number[]>([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);
    const [amOrPm] = useState<string[]>(['AM', 'PM']);

    return (
        <>
            <FormControl fullWidth>
                <Grid item>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ padding: '5px' }}
                        className="typo-custom">
                        時間
                    </Typography>
                    <div className="row">
                        <div className="row container">
                            <div className="col-6 first__content">
                                <div className="first__content-title">から</div>
                                <div className="first__content-hour">
                                    <FormControl
                                        sx={{ m: 1, minWidth: 60, textAlign: 'center' }}
                                        variant="standard">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age">
                                            {hour.map((item) => (
                                                <MenuItem value={item}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                :
                                <div className="first__content-minute">
                                    <FormControl
                                        sx={{ m: 1, minWidth: 60, textAlign: 'center' }}
                                        variant="standard">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age">
                                            {minutes.map((item) => (
                                                <MenuItem value={item}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                :
                                <div className="first__content-which-time">
                                    <FormControl
                                        sx={{ m: 1, minWidth: 60, textAlign: 'center' }}
                                        variant="standard">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age">
                                            {amOrPm.map((item) => (
                                                <MenuItem value={item}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-6 second__content">
                                <div className="second__content-title">まで</div>
                                <div className="second__content-hour">
                                    <FormControl
                                        sx={{ m: 1, minWidth: 60, textAlign: 'center' }}
                                        variant="standard">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age">
                                            {hour.map((item, i) => (
                                                <MenuItem key={i} value={item}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                :
                                <div className="second__content-minute">
                                    <FormControl
                                        sx={{ m: 1, minWidth: 60, textAlign: 'center' }}
                                        variant="standard">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age">
                                            {minutes.map((item) => (
                                                <MenuItem value={item}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                :
                                <div className="second__content-which-time">
                                    <FormControl
                                        sx={{ m: 1, minWidth: 60, textAlign: 'center' }}
                                        variant="standard">
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age">
                                            {amOrPm.map((item) => (
                                                <MenuItem value={item}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </FormControl>
        </>
    );
};

export default SelectTimeComponent;
