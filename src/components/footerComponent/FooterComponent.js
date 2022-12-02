import React from 'react';
import {
    FooterAddress,
    FooterBoxMain,
    FooterCopyRight,
    FooterCopyRightImg,
    FooterLogo,
    FooterLogoLink,
    FooterLogoSvg,
    FooterNav,
    FooterNavLink,
    FooterNavList,
    FooterPhoneLink,
    FooterRow,
    FooterRowBottom,
    FooterRowBottomRef,
    FooterRowBottomRefLink,
    FooterRowBottomStripe,
    FooterSocial,
    FooterSpan,
    FooterStr,
    FooterStrContent,
    FooterStrContentCovid,
    FooterStrLink,
    FooterStrWrapper,
    FooterTitle
} from "../../styles/containers.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Container, createTheme, Icon} from "@mui/material";
import CopyRightSvg from '../../asets/images/giz_logo.svg'

function FooterComponent(props) {


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
        <FooterBoxMain>
            <Container disableGutters={true} maxWidth="xl">
                <FooterRow theme={theme}>
                    <FooterAddress theme={theme}>
                        <FooterStrWrapper theme={theme}>
                            <FooterStr>
                                <FooterStrContent>
                                    01601, м. Київ, вул. Грушевського, 7
                                </FooterStrContent>
                            </FooterStr>
                            <FooterStr>
                                <FooterStrContent>
                                   <span>
                                    Телефон:
                               </span>
                                    <FooterStrLink href='tel:(044) 253-61-94'>
                                        (044) 253-61-94
                                    </FooterStrLink>
                                </FooterStrContent>
                            </FooterStr>
                            <FooterStr>
                                <FooterStrContent>
                                 <span>
                                    Факс:
                               </span>
                                    <FooterStrLink href='tel:(044) 253-40-17'>
                                        (044) 253-40-17
                                    </FooterStrLink>
                                </FooterStrContent>
                            </FooterStr>
                            <FooterStr>
                                <FooterStrContent>
                                    <FooterStrLink href='mailto: moz@moz.gov.ua'>
                                        moz@moz.gov.ua
                                    </FooterStrLink>
                                </FooterStrContent>
                            </FooterStr>
                            <FooterStrContentCovid>
                                <span style={{
                                    color: '#fff',
                                    fontSize: '12px',
                                    lineHeight: '20px',
                                    letterSpacing: '.1em'
                                }}>
                                    Контакт-центр МОЗ з питань COVID-19
                                </span>
                                <FooterPhoneLink>
                                    <FooterStrLink href='tel: 0 800 60 20 19' style={{wordBreak: 'break-all'}}>
                                        0 800 60 20 19
                                    </FooterStrLink>
                                </FooterPhoneLink>
                            </FooterStrContentCovid>
                        </FooterStrWrapper>
                        <FooterSocial>
                            <a href='https://www.facebook.com/moz.ukr' target="_blank" rel="noopener noreferrer">
                                <Icon sx={{
                                    marginRight: '17px',
                                    color: '#fff',
                                    fontSize: '20px',
                                    transition: 'background .3s',
                                    '&:hover': {color: '#ffc904'}
                                }}>{icon}</Icon>
                            </a>
                            <a href='https://www.youtube.com/channel/UC-kYPlo9h8F2--Xyesbh-8w' target="_blank"
                               rel="noopener noreferrer">
                                <YouTubeIcon sx={{
                                    marginRight: '17px',
                                    color: '#fff',
                                    fontSize: '22px',
                                    transition: 'background .3s',
                                    '&:hover': {color: '#ffc904'}
                                }}/>
                            </a>
                            <a href='https://twitter.com/MoH_Ukraine' target="_blank" rel="noopener noreferrer">
                                <TwitterIcon sx={{
                                    marginRight: '17px',
                                    color: '#fff',
                                    fontSize: '22px',
                                    transition: 'background .3s',
                                    '&:hover': {color: '#ffc904'}
                                }}/>
                            </a>
                            <a href='https://t.me/mozofficial' target="_blank" rel="noopener noreferrer">
                                <TelegramIcon sx={{
                                    marginRight: '17px',
                                    color: '#fff',
                                    fontSize: '22px',
                                    transition: 'background .3s',
                                    '&:hover': {color: '#ffc904'}
                                }}/>
                            </a>
                        </FooterSocial>
                    </FooterAddress>
                    <FooterNav theme={theme}>
                        <FooterNavList>
                            <div>
                                <FooterTitle>
                                    <h5>Розділи</h5>
                                    <FooterSpan/>
                                </FooterTitle>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/pro-ministerstvo'>
                                    Про міністерство
                                </FooterNavLink>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/gromadjanam'>
                                    Громадянам
                                </FooterNavLink>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/medichnim-pracivnikam'>
                                    Медичним працівникам
                                </FooterNavLink>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/adminposlugi'>
                                    Фахівцям
                                </FooterNavLink>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/pres-centr'>
                                    Пресцентр
                                </FooterNavLink>
                            </div>
                        </FooterNavList>
                        <FooterNavList>
                            <div>
                                <FooterTitle>
                                    <h5> Інструментарій</h5>
                                    <FooterSpan/>
                                </FooterTitle>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/onlajn-forms'>
                                    Онлайн форми
                                </FooterNavLink>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/nakazi-moz'>
                                    Накази
                                </FooterNavLink>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/dovidnik'>
                                    Довідник
                                </FooterNavLink>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/dokumenti'>
                                    Документи
                                </FooterNavLink>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/kontakti'>
                                    Контакти
                                </FooterNavLink>
                            </div>
                        </FooterNavList>
                        <FooterNavList>
                            <div>
                                <FooterTitle>
                                    <h5> ІНШЕ</h5>
                                    <FooterSpan/>
                                </FooterTitle>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/onlajn-forms'>
                                    Акредитація закладу
                                </FooterNavLink>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/nakazi-moz'>
                                    Ліцензування
                                </FooterNavLink>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/dovidnik'>
                                    Реєстри
                                </FooterNavLink>
                            </div>
                            <div>
                                <FooterNavLink href='https://moz.gov.ua/dokumenti'>
                                    Державний нагляд (контроль)
                                </FooterNavLink>
                            </div>
                        </FooterNavList>
                    </FooterNav>
                    <FooterLogo theme={theme}>
                        <FooterLogoLink href='https://moz.gov.ua/'>
                            <FooterLogoSvg>
                                <svg className="footer__logo-svg-icon" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 370.9 229.8">
                                    <g>
                                        <text
                                            className="footer__logo-svg-icon-st0 footer__logo-svg-icon-st1 footer__logo-svg-icon-st2"
                                            transform="matrix(1 0 0 1 105.0788 43.8436)">
                                            МIнIстерство
                                        </text>
                                        <text
                                            className="footer__logo-svg-icon-st0 footer__logo-svg-icon-st1 footer__logo-svg-icon-st2"
                                            transform="matrix(1 0 0 1 105.0788 105.8436)">
                                            охорони
                                        </text>
                                        <text
                                            className="footer__logo-svg-icon-st0 footer__logo-svg-icon-st1 footer__logo-svg-icon-st2"
                                            transform="matrix(1 0 0 1 105.0788 167.8436)">
                                            здоров’я
                                        </text>
                                        <text
                                            className="footer__logo-svg-icon-st0 footer__logo-svg-icon-st1 footer__logo-svg-icon-st2"
                                            transform="matrix(1 0 0 1 105.0788 229.8436)">
                                            УкраIни
                                        </text>
                                    </g>
                                    <g>
                                        <path className="footer__logo-svg-icon-st0"
                                              d="M37.6,25.4c-1.5,13.4-2.2,19.4-2.2,19.4s0.3-0.1,1-0.1s4.3,0.9,4.3,4.2s-2.9,4.4-4.3,4.4s-1.5-0.2-1.5-0.2                                s-6.7-9.2-6.7-23.1c0-8.9,0.6-17,0.6-21.5c0-0.8,0-5.1-3.1-8.5c-3.1,3.4-3.1,7.7-3.1,8.5c0,4.6,0.6,12.7,0.6,21.5                                c0,13.9-6.7,23.1-6.7,23.1s-0.1,0.2-1.5,0.2s-4.3-1.1-4.3-4.4c0-3.3,3.6-4.2,4.3-4.2s1,0.1,1,0.1s-0.7-5.9-2.2-19.4                                C10.8,11,0,6,0,6v62.1h14.4c0,0,1,8.7,8.7,14.3c0,0,2.4,2.1,2.5,2.8c0.1-0.7,2.5-2.8,2.5-2.8c7.7-5.6,8.7-14.3,8.7-14.3h14.4V6                                C51.3,6,40.5,11,37.6,25.4z M4.4,15.2c0,0,3.9,4.9,5,10.6c0.6,5.3,1.9,15.5,1.9,15.5s-3.7,1.6-4.6,5.5c-0.7,0-2.3,0-2.3,0L4.4,15.2                                L4.4,15.2z M13.9,63.9H4.4V51h2.3c1.2,5.6,7.2,6.5,8.1,6.5C13.9,60.4,13.9,63.9,13.9,63.9z M23.5,76.9c-3.9-3.7-4.4-8.8-4.4-8.8                                h4.4C23.5,68.1,23.5,74.6,23.5,76.9z M18.3,63.9c0-2.6,0.3-4.1,0.7-5.3c4.3,0.7,4.5,5.3,4.5,5.3H18.3z M25.7,57.7                                c0,0-3.8-2.6-4.9-3.3c3-4.6,4.9-11.6,4.9-11.6s1.9,7,4.9,11.6C29.5,55.1,25.7,57.7,25.7,57.7z M27.9,76.9c0-2.3,0-8.8,0-8.8h4.4                                C32.3,68.1,31.8,73.2,27.9,76.9z M27.8,63.9c0,0,0.2-4.6,4.5-5.3c0.4,1.2,0.7,2.6,0.7,5.3H27.8z M47,63.9h-9.5c0,0,0-3.5-0.9-6.4                                c0.9,0,6.9-0.9,8.1-6.5H47V63.9z M47,46.8c0,0-1.6,0-2.3,0c-0.8-3.9-4.6-5.5-4.6-5.5s1.2-10.2,1.9-15.5c1.1-5.7,5-10.6,5-10.6V46.8                                z"></path>
                                    </g>
                                    <g>
                                        <path className="footer__logo-svg-icon-st0"
                                              d="M216.1,179.8v3.3h-3.2v-3.3H216.1z"></path>
                                    </g>
                                    <g>
                                        <path className="footer__logo-svg-icon-st0"
                                              d="M210,179.8v3.3h-3.4v-3.3H210z"></path>
                                    </g>
                                    <rect className="footer__logo-svg-icon-st3" x="76.6" y="114.7" width="5.1"
                                          height="115.2"></rect>
                                    <rect className="footer__logo-svg-icon-st4" x="76.6" y="0.3" width="5.1"
                                          height="114.6"></rect>
                                </svg>
                            </FooterLogoSvg>
                        </FooterLogoLink>
                        <FooterCopyRight theme={theme}>
                            <p>
                                За підтримки
                            </p>
                            <FooterCopyRightImg src={CopyRightSvg} alt={'logo'}/>
                        </FooterCopyRight>
                    </FooterLogo>
                </FooterRow>
                <FooterRowBottom theme={theme}>
                    <FooterRowBottomRef>
                        <FooterRowBottomRefLink href='https://moz.gov.ua/sitemap'>
                            <div>Карта сайту</div>
                            <FooterRowBottomStripe/>
                        </FooterRowBottomRefLink>
                    </FooterRowBottomRef>
                </FooterRowBottom>
            </Container>
        </FooterBoxMain>
    );
}

export default FooterComponent;