import React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import {ResponsiveTab, ResponsiveTabList, TabCustom} from "../../styles/tab.styled";
import {Box, Container, createTheme, Dialog, Icon, Slide} from "@mui/material";
import BreadcrumbsControl from "../controls/BreadcrumbsControl";
import {useLocation} from "react-router-dom";
import '../../asets/Akrobat_Bold.ttf'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from "@mui/icons-material/Menu";
import {StyledCloseMenuButton, StyledIconButton, StyledMenuButton} from "../../styles/button.styled";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" timeout={500} appear ref={ref} {...props} />;
});


function NavigationComponent(props) {
    const location = useLocation();
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [value, setValue] = React.useState('7');

    const icon = <FontAwesomeIcon icon={faFacebookF}/>

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Container maxWidth="xl" onClick={handleDrawerToggle}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '50px 0 50px 0',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>
                <StyledCloseMenuButton
                    disableRipple
                    edge="start"
                    color="inherit"
                    onClick={handleDrawerToggle}
                    aria-label="close"
                >
                    <CloseIcon sx={{fontSize: '30px'}}/>
                </StyledCloseMenuButton>
                <TabContext value={value} style={{position: 'relative'}}>
                    <ResponsiveTabList
                        orientation="vertical"
                        disableRipple
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        TabIndicatorProps={{
                            sx: {
                                width: 0,
                                backgroundColor: "#fff",
                            }
                        }}
                    >
                        <ResponsiveTab
                            fullWidth={true}
                            href="https://moz.gov.ua/pro-ministerstvo"
                            disableRipple
                            label="Про міністерство"
                            value="1"/>
                        <ResponsiveTab
                            href="https://moz.gov.ua/vojennyj-stan"
                            disableRipple
                            label="Воєнний стан"
                            value="2"/>
                        <ResponsiveTab
                            href="https://moz.gov.ua/gromadjanam"
                            disableRipple
                            label="Громадянам"
                            value="3"/>
                        <ResponsiveTab
                            href="https://moz.gov.ua/medichnim-pracivnikam"
                            disableRipple
                            label="Медичним працівникам"
                            value="4"/>
                        <ResponsiveTab
                            href="https://moz.gov.ua/osvita"
                            disableRipple
                            label="Освіта"
                            value="5"/>
                        <ResponsiveTab
                            href="https://moz.gov.ua/pres-centr"
                            disableRipple
                            label="Пресцентр"
                            value="6"/>
                        <ResponsiveTab
                            disableRipple
                            label="Документи"
                            value="7"/>
                        <ResponsiveTab
                            href="https://moz.gov.ua/kontakti"
                            disableRipple
                            label="Контакти"
                            value="8"/>
                    </ResponsiveTabList>
                </TabContext>
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
            </Box>
        </Container>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

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
        <>
            <Container style={{backgroundColor: '#f5f5f5'}} maxWidth="xl">
                <Container
                    sx={{
                        padding:0,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        minHeight: '60px'
                }}
                >
                    <StyledMenuButton
                        disableRipple
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {lg: 'none',}}}
                    >
                        <MenuIcon sx={{fontSize: '27px'}}/>
                    </StyledMenuButton>
                    <TabContext value={value} style={{position: 'relative'}}>

                        <TabList
                            disableRipple
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                            TabIndicatorProps={{
                                style: {
                                    width: 0,
                                    backgroundColor: "#fff"
                                }
                            }}
                        >
                            <TabCustom
                                sx={{display: {xs: 'none', lg: 'block'}}}
                                // sx={{display: {xs: 'none', [theme.breakpoints.up('xl')]: 'block'}}}
                                href="https://moz.gov.ua/pro-ministerstvo"
                                disableRipple
                                label="Про міністерство"
                                value="1"/>
                            <TabCustom
                                sx={{display: {xs: 'none', lg: 'block'}}}
                                href="https://moz.gov.ua/vojennyj-stan"
                                disableRipple
                                label="Воєнний стан"
                                value="2"/>
                            <TabCustom
                                sx={{display: {xs: 'none', lg: 'block'}}}
                                href="https://moz.gov.ua/gromadjanam"
                                disableRipple
                                label="Громадянам"
                                value="3"/>
                            <TabCustom
                                sx={{display: {xs: 'none', lg: 'block'}}}
                                href="https://moz.gov.ua/medichnim-pracivnikam"
                                disableRipple
                                label="Медичним працівникам"
                                value="4"/>
                            <TabCustom
                                sx={{display: {xs: 'none', lg: 'block'}}}
                                href="https://moz.gov.ua/osvita"
                                disableRipple
                                label="Освіта"
                                value="5"/>
                            <TabCustom
                                sx={{display: {xs: 'none', lg: 'block'}}}
                                href="https://moz.gov.ua/pres-centr"
                                disableRipple
                                label="Пресцентр"
                                value="6"/>
                            <TabCustom
                                sx={{display: {xs: 'none', lg: 'block'}}}
                                disableRipple
                                label="Документи"
                                value="7"/>
                            <TabCustom
                                sx={{display: {xs: 'none', lg: 'block'}}}
                                href="https://moz.gov.ua/kontakti"
                                disableRipple
                                label="Контакти"
                                value="8"/>
                        </TabList>
                    </TabContext>
                    <StyledIconButton
                        theme={theme}
                        variant="contained"
                        disableRipple
                        sx={{display: {lg: 'none'}}}>
                        <SearchOutlinedIcon style={{padding: 0, margin: 0}}/>
                    </StyledIconButton>
                </Container>
            </Container>
            <Container>
                <Box sx={{
                    [theme.breakpoints.up('sm')]: {},
                    paddingTop: '20px'
                }}>
                    {value ?
                        <BreadcrumbsControl/>
                        : null}
                </Box>
                <Box sx={{marginTop: '22px', marginBottom: '36px'}}>
                    <h2
                        style={{
                            color: '#2b2b2b',
                            textTransform: 'uppercase',
                            fontSize: '30px',
                            lineHeight: '36px',
                            letterSpacing: 0,
                        }}>
                        {location.pathname === '/nakazi-moz'
                            ?
                            'Накази МОЗ'
                            :
                            location.pathname === '/nakazi-moz-scho-projshli-derzhavnu-reestraciju-v-minjusti'
                                ?
                                'Накази МОЗ, що пройшли державну реєстрацію в Мін’юсті'
                                : ''
                        }
                    </h2>
                </Box>
            </Container>
            <Box component="nav">
                <Dialog
                    sx={{
                        '.css-m9glnp-MuiPaper-root-MuiDialog-paper': {
                            backgroundColor: '#f5f5f5'
                        },
                        backgroundColor: '#f5f5f5'
                    }}
                    fullScreen
                    TransitionComponent={Transition}
                    container={container}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                >
                    {drawer}
                </Dialog>
            </Box>
        </>
    );
}

export default NavigationComponent;