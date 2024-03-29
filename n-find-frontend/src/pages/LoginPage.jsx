import React, { useState } from 'react';
import { Box, Grid, Typography, FormControl, InputLabel, FilledInput, InputAdornment, IconButton, TextField, Select, MenuItem, Button, FormControlLabel, Switch } from "@mui/material";
import { Link } from 'react-router-dom';
import LoginImg from '../assets/login.png'
import Logo from '../assets/logo.png'
import { Visibility, VisibilityOff } from '@mui/icons-material';

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid
        sx={{
            background: '#44A08D', /* fallback for old browsers */
            background: '-webkit-linear-gradient(to right, #093637, #44A08D)', /* Chrome 10-25, Safari 5.1-6 */
            background: 'linear-gradient(to right, #093637, #44A08D)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}
    >
            <Box
                sx={{
                    backgroundColor: "white",
                }}
            >
                <Grid container>
                    <Grid item lg={6} xl={6} borderRadius={5}>
                        <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} mt={1}>
                            <img src={Logo} width={"200px"} alt="" />
                        </Grid>

                        <Grid p={2}>
                            <Grid item lg={12} xl={12}>
                                <Typography variant='p'>Nice to see you</Typography>
                            </Grid>
                            <Grid item lg={12} xl={12} mt={2}>
                                <TextField id="filled-basic" fullWidth label="Enter Email" variant="filled" />

                            </Grid>
                            <Grid item lg={12} xl={12} mt={2}>
                                <FormControl fullWidth variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                    <FilledInput
                                        id="filled-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item lg={12} xl={12} mt={2}>
                                <FormControl fullWidth variant="filled">
                                    <InputLabel id="demo-simple-select-filled-label">Select Option</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value=""
                                        onChange={() => {}} // Add your onChange logic here
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Option 1</MenuItem>
                                        <MenuItem value={2}>Option 2</MenuItem>
                                        <MenuItem value={3}>Option 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={12} xl={12} display={'flex'} justifyContent={'start'} mt={1}>
                                <FormControlLabel control={<Switch defaultChecked />} label="Remember Me" />

                            </Grid>
                            <Grid item lg={12} xl={12} display={'flex'} justifyContent={'start'} mt={1}>
                                <Button fullWidth variant="contained" sx={{ backgroundColor: '#F94D53', '&:hover': { backgroundColor: '#C64444' } }}>Sign In</Button>
                            </Grid>
                            <Grid item lg={12} xl={12} display={'flex'} justifyContent={'center'} mt={2}>
                                <Typography variant='p'>Don't have an account? <Link to="/signup" style={{ color: '#F94D53' }}>Sign up now</Link></Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item lg={6} xl={6} p={5} bgcolor={'#DADCF1'}>
                        <img src={LoginImg} width={'500px'} style={{ maxWidth: '100%', height: 'auto', display: 'block' }} alt="Login" />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default LoginPage;
