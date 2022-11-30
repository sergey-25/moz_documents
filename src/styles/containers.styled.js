import {Box, Button, Container, styled, TextField} from "@mui/material";


export const FooterBoxMain = styled(Box)({
    position: 'relative',
    paddingTop: '40px',
    paddingBottom: '40px',
    backgroundColor: '#29384b',

});

export const FooterBoxContent = styled(Container)({
    // position:'relative',
    // maxWidth: '1170px',
    // margin: '0 auto'
});
export const FooterRow = styled(Container)(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
}));

export const FooterAddress = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        order: 0,
        flex: '1 0 270px',
        alignItems: 'flex-start'
    },
    alignItems: 'center',
    order: 2,
    flex: '0 0 0 ',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
}));

export const FooterStrWrapper = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        textAlign: 'left'
    },
    textAlign: 'center'
}));

export const FooterStr = styled(Box)({
    marginBottom: '4px'
});

export const FooterStrContent = styled(Box)({
    color: '#fff',
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '.1em'
});

export const FooterStrLink = styled('a')({
    color: '#fff',
    '&:hover': {
        color: '#ffc904'
    }
});

export const FooterStrContentCovid = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '11px'
});

export const FooterPhoneLink = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '30px',
    paddingLeft: '13px'
});

export const FooterSocial = styled(Box)({
    display: 'flex',
    marginLeft: '-10px',
    justifyContent: 'flex-start'
});

export const FooterNav = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
    display: 'none',
    justifyContent: 'space-between',
    flex: '1 1 670px'
}));

export const FooterNavList = styled(Box)({
    flex: '1 0 225px'
});

export const FooterTitle = styled(Box)({
    paddingLeft: '12px',
    marginBottom: '9px',
    position: 'relative',
    color: '#8a8b90',
    textTransform: 'uppercase'
});

export const FooterSpan = styled('span')({
    height: '13px',
    width: '2px',
    position: 'absolute',
    backgroundColor: '#ffc904',
    top: '3px',
    left: 0
});

export const FooterNavLink = styled('a')({
    display: 'inline-block',
    paddingLeft: '11px',
    marginBottom: '4px',
    color: '#fff',
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '.1em',
    transition: '.3s',
    '&:hover': {
        color: '#ffc904'
    }
});

export const FooterLogo = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        marginBottom: 0
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
    textAlign: 'right',
    flex: '1 1 170px'
}));

export const FooterLogoLink = styled('a')({
    display: 'inline-block'
});

export const FooterLogoSvg = styled(Box)({
    display: 'block',
    height: '73px',
    width: '117px'
});

export const FooterCopyRight = styled(Box)(({theme}) => ({
    'p': {
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        display: 'none',
    },
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '.1em',
    marginTop: '40px',
    color: '#fff',
}));

export const FooterCopyRightImg = styled('img')({
    width: '135px'
});

export const FooterRowBottom = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
    display: 'none',
}));

export const FooterRowBottomRef = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    width: '360px',
    position: 'absolute',
    bottom: 0,
    right: 0,
    transition: 'background .3s',
    '&:hover': {
        'a': {
            color: '#ffc904',
        },
        'span': {
            color: '#ffc904',
            backgroundColor: '#ffc904'
        }

    },
});

export const FooterRowBottomRefLink = styled('a')({
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: '.05em',
    color: '#fff',
    position: 'relative',
    padding: '0 38px 0 0',
    transition: 'background .3s',
});

export const FooterRowBottomStripe = styled('span')({
    width: '15px',
    height: '2px',
    backgroundColor: '#fff',
    position: 'absolute',
    top: '10px',
    right: 0,
    transition: 'background .3s',
});

export const MedicalContainer = styled(Box)(({theme}) => ({
    [theme.breakpoints.only('lg')]: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1 1 auto'
    },
    display: 'flex',
    flexDirection: 'column'
}));
export const MedicalWrapper = styled(Box)(({theme}) => ({
    [theme.breakpoints.only('lg')]: {
        width: 'calc(100% - 300px)',
        marginRight: '30px',
        order: 1,
    },
    order: 2,
    marginRight: 0
}));
export const ShareContainer = styled(Box)(({theme}) => ({
    [theme.breakpoints.only('lg')]: {
        marginBottom: 0,
        order: 2,
        display: 'block',
    },
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    order: 1,
    marginBottom: '40px',
}));
export const BlockTitle = styled('h5')(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        position: 'relative',
        marginBottom: '23px',
        paddingLeft: '12px'
    },
    paddingLeft: '12px',
    position: 'relative',
    marginBottom: 0
}));

export const BlockTitleSpan = styled('span')({
    display: 'inline-block',
    position: 'absolute',
    top: '4px',
    left: 0,
    backgroundColor: '#ffc904',
    height: '15px',
    width: '2px'
});

export const ServiceLine = styled('div')(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'nowrap',
        paddingLeft: '22px',

    },
    marginBottom: 0
}));
export const ArticleLinks = styled(Box)(({theme}) => ({
    [theme.breakpoints.only('lg')]: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '20px 0 20px 0',
    },
    display: 'none'
}));
export const DocumentsContainer = styled(Box)({
    marginBottom: '70px'
});
export const DocumentTitle = styled('h5')({
    position: 'relative',
    marginBottom: '23px',
    paddingLeft: '12px'
});
export const DocumentDownload = styled('div')({
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '20px'
});
//////////////////////////////////////////////////////////////////////////
export const PressWrapperNoMargin = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        marginBottom: '0 !important',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
        marginBottom: '0 !important'
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

export const PressWrapperBg = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        backgroundColor: '#f5f5f5'
    },
    backgroundColor: '#f5f5f5'
}));

export const PressSubscribe = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 50px 0 50px'
    },
    [theme.breakpoints.between('sm', 'lg')]: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0 40px 25px 40px',
        justifyContent: 'flex-start'
    },
    [theme.breakpoints.down('sm')]: {
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '25px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }
}));

export const PressEmail = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: '20px',
        minHeight: '135px',
        flex: '1 1 50%'
    },
    [theme.breakpoints.between('sm', 'lg')]: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: 0,
        minHeight: '90px',
        flex: '1 1 auto',
    },
    [theme.breakpoints.down('sm')]: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: 0,
        minHeight: '90px',
        flex: '1 1 auto',
    }
}));

export const PressEmailBgText = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        textTransform: 'uppercase',
        fontFamily: 'Akrobat, bold, serif',
        zIndex: 0,
        position: 'absolute',
        top: 0,
        left: '-12px',
        bottom: 0,
        userSelect: 'none',
        fontSize: '200px',
        lineHeight: '112px',
        letterSpacing: '12px',
        color: '#fff',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
        top: 0,
        left: '-12px',
        bottom: 0,
        right: 0,
        zIndex: 0,
        textTransform: 'uppercase',
        fontFamily: 'Akrobat, bold, serif',
        position: 'relative',
        fontSize: '100px',
        lineHeight: '60px',
        letterSpacing: 0,
        color: '#fff'
    },
    [theme.breakpoints.down('sm')]: {
        textTransform: 'uppercase',
        fontFamily: 'Akrobat, bold, serif',
        position: 'relative',
        fontSize: '100px',
        lineHeight: '60px',
        letterSpacing: 0,
        color: '#fff'
    }
}));

export const PressEmailCnt = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        zIndex: 20,
        userSelect: 'none',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    [theme.breakpoints.between('sm', 'lg')]: {
        position: 'absolute',
        zIndex: 20,
        top: '50%',
        left: '50%',
        whiteSpace: 'nowrap',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 1
    },
    [theme.breakpoints.down('sm')]: {
        zIndex: 20,
        position: 'absolute',
        top: '50%',
        left: '56%',
        whiteSpace: 'nowrap',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
}));

export const PressEmailHeading = styled('span')(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        display: 'flex',
        alignSelf: 'center',
        lineHeight: '34px',
        letterSpacing: 0,
        textTransform: 'uppercase',
        marginRight: '10px',
        fontSize: '30px',
        fontFamily: 'Akrobat, semibold, serif',
        color: '#2b2b2b'
    },
    [theme.breakpoints.between('sm', 'lg')]: {
        display: 'flex',
        alignSelf: 'flex-start',
        lineHeight: '34px',
        letterSpacing: 0,
        textTransform: 'uppercase',
        marginRight: '10px',
        fontSize: '30px',
        fontFamily: 'Akrobat, semibold, serif',
        color: '#2b2b2b'
    },
    [theme.breakpoints.down('sm')]: {
        textTransform: 'uppercase',
        marginRight: '10px',
        fontSize: '30px',
        fontFamily: 'Akrobat, semibold, serif',
        color: '#2b2b2b'
    }
}));

export const PressIcon = styled(Button)({
    color: '#000',
    minWidth: 0,
    borderRadius: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '1px',
    width: '15px',
    height: '15px',
    transition: ' .3s',
    cursor: 'pointer',
    backgroundColor: '#ffc904',
    '&:hover': {
        backgroundColor: '#48b7d5'
    }
});

export const PressForm = styled('form')(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: '1 1 60%'
    },
    [theme.breakpoints.between('sm', 'lg')]: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10,
        width: '100%',
        flex: '1 1 auto'
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        flex: '1 1 auto'
    },
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
}));

export const PressFormInput = styled(TextField)({
    '& .MuiOutlinedInput-notchedOutline':{
        borderRadius:0,
    },

    '& .MuiInputBase-root': {
        color:'#000',
        fontStyle: 'italic',
        fontSize: '15px',
        backgroundColor: '#fff',
        height: '52px',
        padding: '14px 30px 12px 30px',
        "& .MuiSvgIcon-root": {
            color: "#000",
            fontSize: '19px',
            '&:hover': {
                backgroundColor: 'inherit'
            }
        }
    },
    '& .MuiInput-underline:before': {
        transition: 'none',
        borderBottom: 'none',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#ffc904',
        transition: 'none'
    },
    '& .MuiInputBase-root:hover:not(.Mui-disabled):before': {
        borderBottom: "none",
    },
    '& .MuiInputBase-root:hover': {
        "& .MuiSvgIcon-root": {
            color: '#ffc904'
        }
    }
});

export const PressFormButton = styled(Button)(({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        marginTop: 0,
        marginBottom: 0,
    },
    borderRadius: 0,
    position: 'relative',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    backgroundColor: '#ffc904',
    width: '179px',
    height: '52px',
    border: 0,
    outline: 0,
    lineHeight: '30px',
    padding: '11px 50px 11px 50px',
    marginTop: '20px',
    marginBottom: '15px',
    '&:hover': {
        backgroundColor: '#48b7d5',
        '& span ': {
            top: '300%',
            opacity: 0,
            visibility: 'hidden',
        },
        '& i': {
            top: '56%',
            opacity: 1,
            visibility: 'visible',
        },
    },
}));
export const PressFormSpan = styled('span')({
    opacity: 1,
    visibility: 'visible',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: '#2b2b2b',
    transition: ' .3s'
});
export const PressButtonSvg = styled('i')({
    opacity: 0,
    visibility: 'hidden',
    position: 'absolute',
    top: '-300%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    transition: ' .3s',
    '&:before': {
        content: '""',
        position: 'relative',
        backgroundColor: '#fff',
        width: '10px',
        height: '1px',
        bottom: '7px',
        right: '9px',
        display: 'inline-block'
    },
    '&:after': {
        content: '""',
        position: 'relative',
        backgroundColor: '#fff',
        width: '10px',
        height: '1px',
        bottom: '7px',
        left: '9px',
        display: 'inline-block'
    }
});