import {Link, styled} from "@mui/material";
import '../asets/HelveticaNeueCyr-Roman.ttf'


export const BreadcrumbLink = styled(Link)({
    '&@font-face': {
        fontFamily: 'HelveticaNeueCyr',
        src: 'url(../asets/HelveticaNeueCyr-Roman.ttf)  format(truetype) local(HelveticaNeueCyr),',
    },
    fontFamily:'HelveticaNeueCyr, light, serif',
    color: '#ffc904',
    fontSize: '12px',
    cursor:'pointer',
    '&:hover': {
        color: '#c4c4c4'
    }
})