import React from 'react';
import {Box, Container, createTheme, Grid, Icon, Link} from "@mui/material";
import '../../asets/fonts/helveticaneuecyr-roman.ttf';
import logo from '../../asets/images/640px-Emblem_of_the_Ministry_of_Health_of_Ukraine.svg.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {BootstrapButton, StyledIconButton} from "../../styles/button.styled";
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF} from "@fortawesome/free-brands-svg-icons"


function HeaderComponent(props) {

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

    const icon = <FontAwesomeIcon icon={faFacebookF}/>

    return (
        <Container style={{paddingTop: '18px', paddingBottom: '15px'}}>
            <Grid
                container
                justifyContent='space-between'
                alignItems='center'
            >
                <Grid item>
                    <Link href="https://moz.gov.ua/">
                        <img
                            style={{width: '120px', marginRight: '50px'}}
                            alt={'moz'}
                            src={logo}
                        />
                    </Link>
                </Grid>
                <Grid item>
                    <Box component='div' sx={{
                        [theme.breakpoints.only('lg')]: {
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end'
                    }}>
                          <span
                              style={{
                                  fontSize: '14px',
                                  lineHeight: '14px',
                                  color: '#8a8b90'
                              }}>
                          Контакт-центр МОЗ
                      </span>
                        <Link href='tel: 0 800 60 20 19' underline="none"
                        >
                            < Box component='h3'
                                  sx={{
                                      [theme.breakpoints.only('lg')]: {
                                          marginRight: '20px',
                                          marginLeft: '20px',
                                          fontSize: '24px',
                                      },
                                      fontWeight: 100,
                                      fontSize: '20px',
                                      lineHeight: '24px',
                                      color: '#2b2b2b',
                                      letterSpacing: '.05em'
                                  }}>
                                0 800 60 20 19
                            </Box>
                        </Link>
                    </Box>
                </Grid>
                <Grid item sx={{display: {xs: 'none', lg: 'block'}}}>
                    <BootstrapButton variant="contained" disableRipple>
                        <VisibilityIcon style={{marginRight: '10px'}}/>
                        <h5>
                            ДЛЯ ЛЮДЕЙ З ПОРУШЕННЯМ ЗОРУ
                        </h5>
                    </BootstrapButton>
                </Grid>
                <Grid item xs={2} sx={{display: {xs: 'none', lg: 'block'}}}>
                    <div>
                        <a href='https://www.facebook.com/moz.ukr' target="_blank" rel="noopener noreferrer">
                            <Icon sx={{
                                marginRight: '17px',
                                color: '#48b7d5',
                                fontSize: '20px',
                                '&:hover': {color: '#ffc904'}
                            }}>{icon}</Icon>
                        </a>
                        <a href='https://www.youtube.com/channel/UC-kYPlo9h8F2--Xyesbh-8w' target="_blank"
                           rel="noopener noreferrer">
                            <YouTubeIcon sx={{
                                marginRight: '17px',
                                color: '#48b7d5',
                                fontSize: '22px',
                                '&:hover': {color: '#ffc904'}
                            }}/>
                        </a>
                        <a href='https://twitter.com/MoH_Ukraine' target="_blank" rel="noopener noreferrer">
                            <TwitterIcon sx={{
                                marginRight: '17px',
                                color: '#48b7d5',
                                fontSize: '22px',
                                '&:hover': {color: '#ffc904'}
                            }}/>
                        </a>
                        <a href='https://t.me/mozofficial' target="_blank" rel="noopener noreferrer">
                            <TelegramIcon sx={{
                                marginRight: '17px',
                                color: '#48b7d5',
                                fontSize: '22px',
                                '&:hover': {color: '#ffc904'}
                            }}/>
                        </a>
                    </div>
                </Grid>
                <Grid item sx={{display: {xs: 'none', lg: 'block'}}}>
                    <StyledIconButton variant="contained" disableRipple>
                        <SearchOutlinedIcon style={{padding: 0, margin: 0}}/>
                    </StyledIconButton>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HeaderComponent;