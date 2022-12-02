import React, {useState} from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Box, createTheme} from "@mui/material";
import {ButtonGroupStyled, GroupStyledButton} from "../../styles/button.styled";
import {AccordionStyled, StyledAccordionSummary} from "../../styles/accordion.styled";
import {useLocation, useNavigate} from "react-router-dom";
import {ORDERS_ROUTE} from "../../consts";
import ResponsiveAccordion from "../mediaQueryComponents/ResponsiveAccordion";


const btns = [
    {
        text: 'Накази МОЗ, що пройшли державну реєстрацію в Мін’юсті',
        path: '/nakazi-moz-scho-projshli-derzhavnu-reestraciju-v-minjusti'
    },
    {text: 'Накази, що вводять у дію рішення оперативного штабу МОЗ України щодо вакцинації від COVID-19'}
]


function MainComponent(props) {

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
    const navigate = useNavigate();
    const location = useLocation();

    const [expanded, setExpanded] = React.useState(null);
    const [state, setState] = useState([])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const someFunct = (name) => {
        setState({active: name})
    }


    return (
        <>
            <Box>
                <Box
                    sx={{
                        [theme.breakpoints.up('sm')]: {
                            display: 'none',
                        },
                        display: 'block',
                        marginBottom: '50px',
                    }}
                >
                    <ResponsiveAccordion/>
                </Box>
                <Box sx={{
                    [theme.breakpoints.up('sm')]: {
                        display: 'block',
                    },
                    display: 'none',
                    width: '270px',
                    marginBottom: '50px',
                    marginRight: '30px'
                }}>
                    <div>
                        <AccordionStyled
                            disableGutters={true}
                            square={false}
                            expanded={location.pathname !== 'ORDERS_ROUTE' && expanded === 'panel1'}
                            onChange={handleChange('panel1')}
                            onClick={() => {
                                navigate(ORDERS_ROUTE)
                            }}
                        >
                            <StyledAccordionSummary
                                disableGutters={true}
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                sx={location.pathname === ORDERS_ROUTE ? {
                                    backgroundColor: '#48b7d5',
                                    color: '#fff'
                                } : ''}
                            >
                                <h5 style={{
                                    fontSize: '14px',
                                    lineHeight: '22px',
                                    letterSpacing: '.05em',
                                    textTransform: 'uppercase'
                                }}>
                                    НАКАЗИ МОЗ
                                </h5>
                            </StyledAccordionSummary>
                            <AccordionDetails sx={{padding: 0}}>
                                <ButtonGroupStyled
                                    disableRipple={true}
                                    orientation="vertical"
                                    aria-label="vertical contained button group"
                                    variant="text"
                                >
                                    {
                                        btns.map((btn, i) => {
                                            return (
                                                <div key={i}>
                                                    <GroupStyledButton
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            someFunct(btn)
                                                            navigate(btn.path)
                                                        }}
                                                        className={state.active === btn ? 'active-button' : ''}
                                                    >{btn.text}</GroupStyledButton>
                                                </div>
                                            )
                                        })
                                    }
                                </ButtonGroupStyled>
                            </AccordionDetails>
                        </AccordionStyled>
                        <AccordionStyled
                            expanded={expanded === 'panel2'}
                            onChange={handleChange('panel2')}
                            disableGutters={true}
                        >
                            <a href='https://moz.gov.ua/golovnij-derzhavnij-sanitarnij-likar-ukraini'>
                                <StyledAccordionSummary
                                    disableGutters={true}
                                    focusVisible
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <h5 style={{
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        letterSpacing: '.05em',
                                        textTransform: 'uppercase'
                                    }}>
                                        ГОЛОВНИЙ ДЕРЖАВНИЙ САНІТАРНИЙ ЛІКАР УКРАЇНИ
                                    </h5>
                                </StyledAccordionSummary>
                            </a>
                        </AccordionStyled>
                        <AccordionStyled
                            disableGutters={true}
                            expanded={expanded === 'panel3'}
                            onChange={handleChange('panel3')}>
                            <a href='https://moz.gov.ua/kerivnik-robit-z-likvidacii-nadzvichajnoi-situacii-covid-19'>
                                <StyledAccordionSummary
                                    disableGutters={true}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <h5 style={{
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        letterSpacing: '.05em',
                                        textTransform: 'uppercase'
                                    }}>
                                        Керівник робіт з ліквідації наслідків надзвичайної ситуації (COVID-19)
                                    </h5>
                                </StyledAccordionSummary>
                            </a>
                        </AccordionStyled>
                        <AccordionStyled
                            disableGutters={true}
                            expanded={expanded === 'panel4'}
                            onChange={handleChange('panel4')}>
                            <a href='https://moz.gov.ua/gromadske-obgovorennja'>
                                <StyledAccordionSummary
                                    disableGutters={true}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <h5 style={{
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        letterSpacing: '.05em',
                                        textTransform: 'uppercase'
                                    }}>
                                        Громадське обговорення
                                    </h5>
                                </StyledAccordionSummary>
                            </a>
                        </AccordionStyled>
                        <AccordionStyled
                            disableGutters={true}
                            expanded={expanded === 'panel5'}
                            onChange={handleChange('panel5')}>
                            <a href='https://moz.gov.ua/gromadska-rada-mozu'>
                                <StyledAccordionSummary
                                    disableGutters={true}
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <h5 style={{
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        letterSpacing: '.05em',
                                        textTransform: 'uppercase'
                                    }}>
                                        Громадська рада МОЗ
                                    </h5>
                                </StyledAccordionSummary>
                            </a>
                        </AccordionStyled>
                        <AccordionStyled
                            disableGutters={true}
                            expanded={expanded === 'panel6'}
                            onChange={handleChange('panel6')}>
                            <a href='https://moz.gov.ua/gromadska-ekspertiza'>
                                <StyledAccordionSummary
                                    disableGutters={true}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <h5 style={{
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        letterSpacing: '.05em',
                                        textTransform: 'uppercase'
                                    }}>
                                        Громадська експертиза
                                    </h5>
                                </StyledAccordionSummary>
                            </a>
                        </AccordionStyled>
                        <AccordionStyled
                            disableGutters={true}
                            expanded={expanded === 'panel7'}
                            onChange={handleChange('panel7')}>
                            <a href='https://moz.gov.ua/dokumenty-z-pitan-ekonomiki-ta-finansiv'>
                                <StyledAccordionSummary
                                    disableGutters={true}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <h5 style={{
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        letterSpacing: '.05em',
                                        textTransform: 'uppercase'
                                    }}>
                                        Документи з питань економіки та фінансів
                                    </h5>
                                </StyledAccordionSummary>
                            </a>
                        </AccordionStyled>
                        <AccordionStyled
                            disableGutters={true}
                            expanded={expanded === 'panel8'}
                            onChange={handleChange('panel8')}>
                            <a href='https://moz.gov.ua/nacionalna-rada-z-pitan-protidii-tuberkulozu-ta-vilsnid'>
                                <StyledAccordionSummary
                                    disableGutters={true}
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <h5 style={{
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        letterSpacing: '.05em',
                                        textTransform: 'uppercase'
                                    }}>
                                        Національна рада з питань протидії туберкульозу та ВІЛ/СНІД
                                    </h5>
                                </StyledAccordionSummary>
                            </a>
                        </AccordionStyled>
                        <AccordionStyled
                            disableGutters={true}
                            expanded={expanded === 'panel9'}
                            onChange={handleChange('panel9')}>
                            <a href='https://moz.gov.ua/dokumenti_'>
                                <StyledAccordionSummary
                                    disableGutters={true}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <h5 style={{
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        letterSpacing: '.05em',
                                        textTransform: 'uppercase'
                                    }}>
                                        Документи
                                    </h5>
                                </StyledAccordionSummary>
                            </a>
                        </AccordionStyled>
                        <AccordionStyled
                            disableGutters={true}
                            expanded={expanded === 'panel10'}
                            onChange={handleChange('panel10')}>
                            <a href='https://moz.gov.ua/gromadske-obgovorennja-arhiv'>
                                <StyledAccordionSummary
                                    disableGutters={true}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <h5 style={{
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        letterSpacing: '.05em',
                                        textTransform: 'uppercase'
                                    }}>
                                        Громадське обговорення (архів)
                                    </h5>
                                </StyledAccordionSummary>
                            </a>
                        </AccordionStyled>
                        <AccordionStyled
                            disableGutters={true}
                            expanded={expanded === 'panel11'}
                            onChange={handleChange('panel11')}>
                            <a href='https://moz.gov.ua/strategichna-ekologichna-ocinka'>
                                <StyledAccordionSummary
                                    disableGutters={true}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <h5 style={{
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        letterSpacing: '.05em',
                                        textTransform: 'uppercase'
                                    }}>
                                        Стратегічна екологічна оцінка
                                    </h5>
                                </StyledAccordionSummary>
                            </a>
                        </AccordionStyled>
                    </div>
                </Box>
            </Box>
        </>
    );
}

export default MainComponent;