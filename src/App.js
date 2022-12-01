import './App.css';
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import NavigationComponent from "./components/navigationComponent/NavigationComponent";
import FooterComponent from "./components/footerComponent/FooterComponent";
import MainComponent from "./components/mainComponent/MainComponent";
import {Box, Container, createTheme, ThemeProvider} from "@mui/material";
import {Route, Routes, useLocation} from "react-router-dom";
import Order from "./components/mainComponent/order/Order";
import RegistratedOrder from "./components/mainComponent/order/RegistratedOrder";
import React, {useRef, useState} from "react";
import OrderContent from "./components/mainComponent/order/OrderContent";
import {
    PressButtonSvg,
    PressEmail,
    PressEmailBgText,
    PressEmailCnt,
    PressEmailHeading,
    PressForm,
    PressFormButton,
    PressFormInput,
    PressFormSpan,
    PressIcon,
    PressSubscribe,
    PressWrapperBg,
    PressWrapperNoMargin
} from "./styles/containers.styled";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CloseIcon from "@mui/icons-material/Close";
import {
    PopoverOnlineForm,
    PopoverOnlineFormContent,
    PopoverOnlineFormContentWrapper,
    PopoverOnlineFormStripeBleu,
    PopoverOnlineFormStripeWrapper,
    PopoverOnlineFormStripeYellow,
    PopoverStyled,
    StyledCloseButton
} from "./styles/popover.styled";


function App() {

    const location = useLocation();
    const inputRef = useRef(null);
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isShown, setIsShown] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
        typography: {
            fontFamily: [
                'Roboto',
                '"HelveticaNeueCyr-Light"',
                'Arial',
                'sans-serif',
            ].join(','),
        },
    });

    const handleEmail = (e) => {
        setEmail(e.target.value)
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (!regEx.test(String(e.target.value).toLowerCase()) && isShown) {
            setIsError('Значення "Email" не є правильною email адресою".')
            if (e.target.value === '' && !isShown) {
                setTimeout(() => setIsError('Необхідно заповнити "Email".'), 5000);
            }
        } else {
            setIsError('')
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <HeaderComponent/>
                <NavigationComponent/>
                <Container>
                    <Box sx={{
                        [theme.breakpoints.up('sm')]: {
                            display: 'flex',
                        },
                        display: 'block'
                    }}>
                        <MainComponent/>
                        <Routes>
                            <Route exact path="/"/>
                            <Route path="/nakazi-moz" element={<Order/>}/>
                            <Route path="/article/ministry-mandates/:title" element={<OrderContent/>}/>
                            <Route path="/nakazi-moz-scho-projshli-derzhavnu-reestraciju-v-minjusti"
                                   element={<RegistratedOrder/>}/>
                        </Routes>
                    </Box>
                </Container>
                {location.pathname.includes('article') &&
                    <PressWrapperNoMargin>
                        <PressWrapperBg>
                            <PressSubscribe>
                                <PressEmail>
                                    <PressEmailBgText>
                                        Email
                                    </PressEmailBgText>
                                    <PressEmailCnt>
                                        <PressEmailHeading>
                                            ПІДПИСАТИСЯ
                                        </PressEmailHeading>
                                        <PopoverStyled
                                            id={id}
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                        >
                                            <StyledCloseButton
                                                disableRipple
                                                onClick={handleClose}
                                            >
                                                <CloseIcon/>
                                            </StyledCloseButton>
                                            <PopoverOnlineForm>
                                                <PopoverOnlineFormContentWrapper>
                                                    <PopoverOnlineFormContent>
                                                        Ця розсилка створена для того, щоб ділитися новинами щодо змін в
                                                        українській медицині. Долучайтеся!
                                                    </PopoverOnlineFormContent>
                                                </PopoverOnlineFormContentWrapper>
                                                <PopoverOnlineFormStripeWrapper>
                                                    <PopoverOnlineFormStripeBleu/>
                                                    <PopoverOnlineFormStripeYellow/>
                                                </PopoverOnlineFormStripeWrapper>
                                            </PopoverOnlineForm>
                                        </PopoverStyled>
                                        <PressIcon disableRipple
                                                   onClick={handleClick}
                                        >
                                            <QuestionMarkIcon
                                                sx={{
                                                    fontSize: '11px'
                                                }}
                                            />
                                        </PressIcon>
                                    </PressEmailCnt>
                                </PressEmail>
                                <PressForm>
                                    <PressFormInput
                                        onMouseEnter={() => setIsShown(true)}
                                        onMouseLeave={() => setIsShown(false)}
                                        sx={isError ? {

                                                // '& .MuiInputBase-root:hover':{
                                                //
                                                // },
                                                '& input::-webkit-input-placeholder': {
                                                    color: '#d32f2f',
                                                    opacity: 1,
                                                }
                                            }
                                            :
                                            null
                                        }
                                        name='email'
                                        value={email}
                                        onChange={(e) => {
                                            handleEmail(e)
                                        }}
                                        inputRef={inputRef}
                                        variant={isError ? "outlined" : "standard"}
                                        fullWidth={true}
                                        placeholder={isError}
                                        error={isError ? true : false}

                                    />
                                </PressForm>
                                <PressFormButton disableRipple>
                                    <PressFormSpan>
                                        <h5>
                                            ПІДПИСАТИСЯ
                                        </h5>
                                    </PressFormSpan>
                                    <PressButtonSvg>
                                        <svg
                                            style={{
                                                width: '18px',
                                                height: '16px',
                                                fill: '#fff'
                                            }}
                                            id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 122.88 85.57"><title>mail</title>
                                            <path
                                                d="M3.8,0,62.48,47.85,118.65,0ZM0,80.52,41.8,38.61,0,4.53v76ZM46.41,42.37,3.31,85.57h115.9L78,42.37,64.44,53.94h0a3,3,0,0,1-3.78.05L46.41,42.37Zm36.12-3.84,40.35,42.33V4.16L82.53,38.53Z"/>
                                        </svg>
                                    </PressButtonSvg>
                                </PressFormButton>
                            </PressSubscribe>
                        </PressWrapperBg>
                    </PressWrapperNoMargin>
                }
                <FooterComponent/>
            </div>
        </ThemeProvider>
    );
}

export default App;
