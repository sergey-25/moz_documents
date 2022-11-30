import React, {useState} from 'react';
import {
    AccordionStripe,
    ResponsiveAccordionStyled,
    ResponsiveSubAccordionStyled,
    StyledResponsiveAccordionSummary,
    StyledResponsiveSubAccordionSummary
} from "../../styles/accordion.styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import {ORDERS_ROUTE} from "../../consts";
import {ButtonGroupStyled, GroupStyledButton} from "../../styles/button.styled";
import {useLocation, useNavigate} from "react-router-dom";

const btns = [
    {
        text: 'Накази МОЗ, що пройшли державну реєстрацію в Мін’юсті',
        path: '/nakazi-moz-scho-projshli-derzhavnu-reestraciju-v-minjusti'
    },
    {text: 'Накази, що вводять у дію рішення оперативного штабу МОЗ України щодо вакцинації від COVID-19'}
]

function ResponsiveAccordion(props) {

    const [state, setState] = useState([])
    const navigate = useNavigate();
    const location = useLocation();
    const [expanded, setExpanded] = React.useState(null);
    const [toggleAccordion, setToggleAccordion] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const someFunct = (name) => {
        setState({active: name})
    };

    return (
        <>
            <ResponsiveAccordionStyled
                disableGutters={true}
                expanded={toggleAccordion}
            >
                <StyledResponsiveAccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    disableGutters={true}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    onClick={() => {
                        setToggleAccordion(!toggleAccordion)
                    }}
                >
                    <h5 style={{
                        position: 'relative',
                        paddingLeft: '12px',
                        fontSize: '14px',
                        lineHeight: '22px',
                        letterSpacing: '.05em',
                        textTransform: 'uppercase'
                    }}>
                        Категорії
                        <AccordionStripe/>
                    </h5>
                </StyledResponsiveAccordionSummary>
                <AccordionDetails sx={{padding: 0}}>
                    <ResponsiveSubAccordionStyled
                        expanded={location.pathname !== 'ORDERS_ROUTE' && expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                        onClick={() => {
                            navigate(ORDERS_ROUTE)
                        }}
                        disableGutters={true}>
                        <StyledResponsiveSubAccordionSummary
                            onClock={(e) => {
                                navigate(ORDERS_ROUTE)
                                e.stopPropagation()
                            }}
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
                        </StyledResponsiveSubAccordionSummary>
                        <AccordionDetails sx={{padding: 0, backgroundColor: '#fff'}}>
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
                                                        setToggleAccordion(false)
                                                    }}
                                                    className={state.active === btn ? 'active-button' : ''}
                                                >{btn.text}</GroupStyledButton>
                                            </div>
                                        )
                                    })
                                }
                                {/*{buttons}*/}
                            </ButtonGroupStyled>
                        </AccordionDetails>
                    </ResponsiveSubAccordionStyled>
                    <ResponsiveSubAccordionStyled
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}
                        disableGutters={true}
                    >
                        <a href='https://moz.gov.ua/golovnij-derzhavnij-sanitarnij-likar-ukraini'>
                            <StyledResponsiveSubAccordionSummary
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
                            </StyledResponsiveSubAccordionSummary>
                        </a>
                    </ResponsiveSubAccordionStyled>
                    <ResponsiveSubAccordionStyled
                        disableGutters={true}
                        expanded={expanded === 'panel3'}
                        onChange={handleChange('panel3')}>
                        <a href='https://moz.gov.ua/kerivnik-robit-z-likvidacii-nadzvichajnoi-situacii-covid-19'>
                            <StyledResponsiveSubAccordionSummary
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
                            </StyledResponsiveSubAccordionSummary>
                        </a>
                    </ResponsiveSubAccordionStyled>
                    <ResponsiveSubAccordionStyled
                        disableGutters={true}
                        expanded={expanded === 'panel4'}
                        onChange={handleChange('panel4')}>
                        <a href='https://moz.gov.ua/gromadske-obgovorennja'>
                            <StyledResponsiveSubAccordionSummary
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
                            </StyledResponsiveSubAccordionSummary>
                        </a>
                    </ResponsiveSubAccordionStyled>
                    <ResponsiveSubAccordionStyled
                        disableGutters={true}
                        expanded={expanded === 'panel5'}
                        onChange={handleChange('panel5')}>
                        <a href='https://moz.gov.ua/gromadska-rada-mozu'>
                            <StyledResponsiveSubAccordionSummary
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
                            </StyledResponsiveSubAccordionSummary>
                        </a>
                    </ResponsiveSubAccordionStyled>
                    <ResponsiveSubAccordionStyled
                        disableGutters={true}
                        expanded={expanded === 'panel6'}
                        onChange={handleChange('panel6')}>
                        <a href='https://moz.gov.ua/gromadska-ekspertiza'>
                            <StyledResponsiveSubAccordionSummary
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
                            </StyledResponsiveSubAccordionSummary>
                        </a>
                    </ResponsiveSubAccordionStyled>
                    <ResponsiveSubAccordionStyled
                        disableGutters={true}
                        expanded={expanded === 'panel7'}
                        onChange={handleChange('panel7')}>
                        <a href='https://moz.gov.ua/dokumenty-z-pitan-ekonomiki-ta-finansiv'>
                            <StyledResponsiveSubAccordionSummary
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
                            </StyledResponsiveSubAccordionSummary>
                        </a>
                    </ResponsiveSubAccordionStyled>
                    <ResponsiveSubAccordionStyled
                        disableGutters={true}
                        expanded={expanded === 'panel8'}
                        onChange={handleChange('panel8')}>
                        <a href='https://moz.gov.ua/nacionalna-rada-z-pitan-protidii-tuberkulozu-ta-vilsnid'>
                            <StyledResponsiveSubAccordionSummary
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
                            </StyledResponsiveSubAccordionSummary>
                        </a>
                    </ResponsiveSubAccordionStyled>
                    <ResponsiveSubAccordionStyled
                        disableGutters={true}
                        expanded={expanded === 'panel9'}
                        onChange={handleChange('panel9')}>
                        <a href='https://moz.gov.ua/dokumenti_'>
                            <StyledResponsiveSubAccordionSummary
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
                            </StyledResponsiveSubAccordionSummary>
                        </a>
                    </ResponsiveSubAccordionStyled>
                    <ResponsiveSubAccordionStyled
                        disableGutters={true}
                        expanded={expanded === 'panel10'}
                        onChange={handleChange('panel10')}>
                        <a href='https://moz.gov.ua/gromadske-obgovorennja-arhiv'>
                            <StyledResponsiveSubAccordionSummary
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
                            </StyledResponsiveSubAccordionSummary>
                        </a>
                    </ResponsiveSubAccordionStyled>
                    <ResponsiveSubAccordionStyled
                        disableGutters={true}
                        expanded={expanded === 'panel11'}
                        onChange={handleChange('panel11')}>
                        <a href='https://moz.gov.ua/strategichna-ekologichna-ocinka'>
                            <StyledResponsiveSubAccordionSummary
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
                            </StyledResponsiveSubAccordionSummary>
                        </a>
                    </ResponsiveSubAccordionStyled>
                </AccordionDetails>
            </ResponsiveAccordionStyled>
        </>
    );
}

export default ResponsiveAccordion;