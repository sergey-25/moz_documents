import {Button, ButtonGroup, styled} from "@mui/material";
import '../asets/Akrobat-SemiBold.ttf'

export const BootstrapButton = styled(Button)({
    height: '45px',
    boxShadow: 'none',
    color: '#000',
    textTransform: 'none',
    fontSize: '14px',
    borderRadius: '0',
    padding: '0 30px 0 30px',
    border: '1px solid #f5f5f5',
    lineHeight: '22px',
    backgroundColor: '#fff',
    letterSpacing: '.05em',
    '&:hover': {
        backgroundColor: '#48b7d5',
        borderColor: '#48b7d5',
        boxShadow: 'none',
        color: '#fff'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#48b7d5',
        borderColor: '#005cbf',
    }
});

export const StyledIconButton = styled(Button)(({theme})=>({
    [theme.breakpoints.only('lg')]: {
        backgroundColor: '#f5f5f5',
    },
    color: '#48b7d5',
    minWidth: 0,
    width: '45px',
    height: '45px',
    boxShadow: 'none',
    borderRadius: '0',
    backgroundColor: '#fff',
    '&:hover': {
        borderRadius: '0',
        backgroundColor: '#48b7d5',
        borderColor: '#48b7d5',
        boxShadow: 'none',
        color: '#fff'
    },
}));

export const ButtonGroupStyled = styled(ButtonGroup)({
    '.MuiButtonGroup-grouped:not(:last-of-type)': {
        border: 'none'
    }
});

export const GroupStyledButton = styled(Button)({
    '&@font-face': {
        fontFamily: 'Akrobat',
        src: 'url(/../asets/Akrobat-SemiBold.ttf) format(truetype) local(Akrobat),',
    },
    fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: 'Akrobat, semibold, serif',
    display: 'inline-block',
    color: '#5a5858',
    textAlign: 'inherit',
    paddingTop: '7px',
    paddingBottom: '7px',
    paddingLeft: '40px',
    paddingRight: '40px',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#48b7d5'
    },
    '&:after': {
        content: '""',
        width: '15px',
        height: '3px',
        transform: 'translateY(-50%)',
        backgroundColor: '#48b7d5',
        position: 'absolute',
        top: '50%',
        right: 0,
        transition: '.3s',
        display: 'none'
    },
    '&:hover:after': {
        display: 'inline-block'
    },
    '&.active': {
        color: 'red'
    },
});
export const StyledMenuButton = styled(Button)({
    color: '#fff',
    minWidth: 0,
    width: '45px',
    height: '45px',
    boxShadow: 'none',
    borderRadius: '0',
    backgroundColor: '#ffc904',
    '&:hover': {
        borderRadius: '0',
        backgroundColor: '#48b7d5',
        borderColor: '#48b7d5',
        boxShadow: 'none',
        color: '#fff',
    },
});
export const StyledCloseMenuButton = styled(Button)({
    color: '#000',
    minWidth: 0,
    width: '40px',
    height: '40px',
    boxShadow: 'none',
    borderRadius: '0',
    backgroundColor: '#fff',
    '&:hover': {
        borderRadius: '0',
        backgroundColor: '#48b7d5',
        borderColor: '#48b7d5',
        boxShadow: 'none',
        color: '#fff',
    },
});
