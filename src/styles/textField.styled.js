import {styled, TextField} from "@mui/material";


export const TextFieldStyled = styled(TextField)({
    '& .MuiInputBase-root': {
        fontSize: '15px',
        // width: 180,
        backgroundColor: '#f5f5f5',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        "& .MuiSvgIcon-root": {
            color: "#000",
            fontSize: '19px',
            '&:hover':{
                backgroundColor: 'inherit'
            }}
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
    '& .MuiInputBase-root:hover':{
        "& .MuiSvgIcon-root":{
            color:'#ffc904'
        }
    }
})