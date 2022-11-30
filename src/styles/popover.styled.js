import {Box, Button, Popover, styled} from "@mui/material";


export const PopoverStyled = styled(Popover)({
    '& .MuiPaper-root': {
        position: 'relative',
        width: '370px',
        borderRadius: 0,
        whiteSpace: 'normal',
        padding: '40px',
    }
});

export const PopoverOnlineForm = styled(Box)({
    position: 'relative',
});

export const PopoverOnlineFormContentWrapper = styled(Box)({
    paddingLeft: '27px',
    paddingRight: '17px'
});

export const PopoverOnlineFormContent = styled('p')({
    color: '#5a5858',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: ' .05em',
    fontFamily: 'HelveticaNeueCyr, roman, serif'
});

export const PopoverOnlineFormStripeWrapper = styled(Box)({
    position: 'absolute',
    left: 0,
    top: '8px'
});

export const PopoverOnlineFormStripeBleu = styled('span')({
    display: 'block',
    height: '39px',
    width: '2px',
    backgroundColor: '#2c368f'
});

export const PopoverOnlineFormStripeYellow = styled('span')({
    display: 'block',
    height: '39px',
    width: '2px',
    backgroundColor: '#ffc904'
});

export const StyledCloseButton = styled(Button)({
    position: 'absolute',
    zIndex: 55,
    top: '10px',
    right: '10px',
    color: '#000',
    minWidth: 0,
    boxShadow: 'none',
    borderRadius: '0',
    '&:hover': {
        borderRadius: '0',
        backgroundColor: '#fff',
        borderColor: '#fff',
        boxShadow: 'none',
        color: '#48b7d5',
    },
});