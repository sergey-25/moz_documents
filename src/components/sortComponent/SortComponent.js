import React from 'react';
import {Box, createTheme, Grid, IconButton, InputBase, Paper} from "@mui/material";
import DateFieldComponent from "../controls/DateFieldComponent";
import {TextFieldStyled} from "../../styles/textField.styled";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function SortComponent(props) {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 767,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <Box>
            <Grid container component='form' alignItems='center' columns={{xs: 2, sm: 8, lg: 12, }}>
                <Grid item xs={2} sm={1} md={2} lg={2}
                      sx={{
                          [theme.breakpoints.up('sm')]: {
                              marginBottom: 0
                          },
                          marginBottom: '14px'
                      }}>
                        <span style={{
                            color: '#8a8b90',
                            fontSize: '12px',
                            letterSpacing: ' .1em',
                            lineHeight: '24px',
                            marginRight: '30px',
                            whiteSpace: 'nowrap'
                        }}
                        >
                            Показати з
                        </span>
                </Grid>
                <Grid item xs={2} sm={3} md={2} lg={2} sx={{
                    [theme.breakpoints.up('sm')]: {
                        marginRight: '24px',
                        marginBottom: 0
                    },
                    marginRight: 0,
                    marginBottom: '10px'
                }}>
                    <DateFieldComponent
                        // name='term'
                        // onChange={handleValuesChange}
                        // value={`До ${values.term}`}
                        //
                        InputProps={{
                            sx: {
                                '& .MuiButtonBase-root:hover': {
                                    backgroundColor: 'inherit'
                                },
                                '& .MuiTouchRipple-root': {
                                    display: 'none'
                                }
                            }
                        }}
                        renderInput={(params) => <TextFieldStyled
                            fullWidth
                            placeholder='До'
                            name='term'
                            variant='standard'
                            {...params}
                        />}
                    />
                </Grid>
                <Grid item xs={2} sm={3} md={2} l={2}
                      sx={{
                          [theme.breakpoints.up('sm')]: {
                              marginRight: '24px',
                              marginBottom: 0
                          },
                          marginRight: 0,
                          marginBottom: '40px'
                      }}
                >
                    <DateFieldComponent
                        // name='term'
                        // onChange={handleValuesChange}
                        // value={`До ${values.term}`}
                        InputProps={{
                            sx: {
                                '& .MuiButtonBase-root:hover': {
                                    backgroundColor: 'inherit'
                                },
                                '& .MuiTouchRipple-root': {
                                    display: 'none'
                                }
                            }
                        }}
                        renderInput={(params) => <TextFieldStyled
                            fullWidth
                            placeholder='До'
                            name='term'
                            variant='standard'
                            {...params}
                        />}
                    />
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                    <Paper
                        component="form"
                        sx={{
                            [theme.breakpoints.up('sm')]: {
                                width: '320px'
                            },
                            pt: 0, display: 'flex', alignItems: 'center', width: '100%',
                            borderRadius: 0, boxShadow: 'none', backgroundColor: '#f5f5f5'
                        }}
                    >
                        <InputBase
                            sx={{ml: 1, flex: 1, fontStyle: 'italic'}}
                            placeholder="Пошук"
                            inputProps={{'aria-label': 'search'}}
                        />
                        <IconButton
                            disableRipple={true}
                            sx={{
                                p: '13px', borderRadius: 0,
                                backgroundColor: '#ffc904', color: '#fff', '&:hover': {
                                    backgroundColor: '#48b7d5',

                                }
                            }} aria-label="directions">
                            <SearchOutlinedIcon/>
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SortComponent;