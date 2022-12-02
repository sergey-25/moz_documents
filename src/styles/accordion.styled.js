import styled from "@emotion/styled";
import {Accordion, AccordionSummary} from "@mui/material";


export const AccordionStyled = styled(Accordion)({
    color: '#5a5858',
    marginTop: 0,
    marginBottom: 0,
    '&.MuiAccordion-root': {
        boxShadow: 'none',
        marginTop: 0,
        marginBottom: 0,
        '&:before': {
            backgroundColor: '#fff'
        },
    },
    '.Mui-expanded': {
        backgroundColor: '#48b7d5',
        color: '#fff'
    }
});

export const StyledAccordionSummary = styled(AccordionSummary)({
    color: '#5a5858',
    paddingTop: '14px',
    paddingBottom: '14px',
    paddingLeft: '40px',
    paddingRight: '40px',

    '& .MuiAccordionSummary-content': {
        margin: 0
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: 0,
    },
    backgroundColor: '#f5f5f5',
    '&:hover': {
        backgroundColor: '#48b7d5',
        color: '#fff',
        '& .MuiSvgIcon-root': {
            color: '#fff'
        }
    },

});
export const ResponsiveAccordionStyled = styled(Accordion)({
    color: '#5a5858',
    padding: 0,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor:'#f5f5f5',
    '&.MuiAccordion-root': {
        boxShadow: 'none',
        marginTop: 0,
        padding: 0,
        marginBottom: 0,
        '&:before': {
            backgroundColor: '#fff'
        },
    },
    '.Mui-expanded': {
        backgroundColor: '#48b7d5',
        color: '#fff'
    }
});
export const ResponsiveSubAccordionStyled = styled(Accordion)({
    color: '#5a5858',
    padding: 0,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor:'#f5f5f5',
    '&.MuiAccordion-root': {
        boxShadow: 'none',
        marginTop: 0,
        padding: 0,
        marginBottom: 0,
        '&:before': {
            backgroundColor: '#fff'
        },
    },
    '.Mui-expanded': {
        backgroundColor: '#48b7d5',
        color: '#fff'
    }
});
export const StyledResponsiveAccordionSummary = styled(AccordionSummary)({
    color: '#5a5858',
    paddingTop: '26px',
    paddingBottom: '26px',
    paddingLeft: '40px',
    paddingRight: '40px',

    '& .MuiAccordionSummary-content': {
        margin: 0
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: 0,
    },
    '&:hover': {
        backgroundColor: '#48b7d5',
        color: '#fff',
        '& .MuiSvgIcon-root': {
            color: '#fff'
        }
    },

});
export const StyledResponsiveSubAccordionSummary = styled(AccordionSummary)({
    color: '#5a5858',
    paddingTop: '14px',
    paddingBottom: '14px',
    paddingLeft: '40px',
    paddingRight: '40px',
    '& .MuiAccordionSummary-expandIconWrapper': {
        marginRight: '30px',
    },

    '& .MuiAccordionSummary-content': {
        margin: 0
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: 0,
    },
    '&:hover': {
        backgroundColor: '#48b7d5',
        color: '#fff',
        '& .MuiSvgIcon-root': {
            color: '#fff'
        }
    },

});
export const AccordionStripe = styled('span')({
    position: 'absolute',
    height: '15px',
    width: '2px',
    backgroundColor: '#ffc904',
    top: '4px',
    left: 0
})