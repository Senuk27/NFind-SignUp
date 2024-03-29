import React, { useState } from 'react';
import { Box, Grid, Typography, FormControl, InputLabel, FilledInput, InputAdornment, IconButton, TextField, Select, MenuItem, Button, FormControlLabel, Switch, Checkbox } from "@mui/material";
import { Link } from 'react-router-dom';
import signupImg from '../assets/signup.png'
import Logo from '../assets/logo.png'
import { Visibility, VisibilityOff } from '@mui/icons-material';
function SignUpPage() {
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
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{

                    backgroundColor: "white",
                    maxHeight: '700px', // Set maximum width
                    maxWidth: '850px',
                    textAlign: 'center', // Center the content inside the box
                    overflow: 'hidden', // Hide the scrollbar
                }}
            >
                <Grid container>
                    <Grid item lg={5} xl={5} bgcolor={'#F9FFF3'} display={'flex'} justifyContent={'center'}>
                        <img src={signupImg} width={'100%'} alt="Login" />
                    </Grid>
                    <Grid item lg={7} xl={7} borderRadius={5} sx={{ maxHeight: '500px', overflowY: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>

                        <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} >
                            <img src={Logo} width={"150px"} alt="" />
                        </Grid>

                        <Grid container spacing={2} p={2}>
                            <Grid item lg={12} xl={12} display={'flex'} justifyContent={'start'}>
                                <Typography variant='p'>Welcome to N-Find</Typography>
                            </Grid>
                            <Grid item lg={6} xl={6} >
                                <TextField id="filled-basic" fullWidth label="First Name" variant="filled" />

                            </Grid>
                            <Grid item lg={6} xl={6} >
                                <TextField id="filled-basic" fullWidth label="Last Name" variant="filled" />

                            </Grid>

                            <Grid item lg={6} xl={6} >
                                <TextField id="filled-basic" fullWidth label="Email " variant="filled" />

                            </Grid>
                            <Grid item lg={6} xl={6} >
                                <FormControl fullWidth variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Create Password</InputLabel>
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

                            <Grid item lg={6} xl={6} >
                                <FormControl fullWidth variant="filled">
                                    <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
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
                            <Grid item lg={6} xl={6}  >
                                <FormControl fullWidth variant="filled">
                                    <InputLabel id="demo-simple-select-filled-label">Select Option</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value=""
                                        onChange={() => { }} // Add your onChange logic here
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
                            <Grid item lg={12} xl={12} display={'flex'} justifyContent={'start'} >
                                <FormControlLabel control={<Checkbox defaultChecked />} label="By creating an account, I agree to our Terms of use and
                        Privacy Policy " />

                            </Grid>
                            <Grid item lg={12} xl={12} display={'flex'} justifyContent={'start'}>
                                <Button fullWidth variant="contained" sx={{ backgroundColor: '#F94D53', '&:hover': { backgroundColor: '#C64444' } }}>Sign Up</Button>
                            </Grid>
                            <Grid item lg={12} xl={12} display={'flex'} justifyContent={'center'} >
                                <Typography variant='p'> have an account? <Link to="/" style={{ color: '#F94D53' }}>Sign in</Link></Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </Grid>
    )
}

export default SignUpPage
