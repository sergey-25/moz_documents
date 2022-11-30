import { styled, Tab} from "@mui/material";
import '../asets/Akrobat_Bold.ttf'
import TabList from "@mui/lab/TabList";


export const TabCustom = styled(Tab)({
    '&@font-face': {
        fontFamily: 'Akrobat, bold, serif',
        src: 'url(/../asets/Akrobat_Bold.ttf) format(truetype) local(Akrobat),',
    },
    minHeight:'60px',
    fontWeight:100,
    fontSize: '14px',
    color: '#5a5858',
    textTransform: 'uppercase',
    display: 'inline-block',
    padding: '19px 30px 20px',
    position: 'relative',
    transition: 'color .3s',
    fontFamily: 'Akrobat, bold, serif',
    letterSpacing: '.05em',
    whiteSpace: 'nowrap',
    '&:hover': {
        color: '#48b7d5'
    },
    '&:after': {
        display: 'inline-block',
        content: '""',
        width: '1px',
        height: '10px',
        backgroundColor: '#a8a9ad',
        position: 'absolute',
        top: '22px',
        right: 0,
        transition: '.3s'
    },
    '&:hover:after': {
        backgroundColor: '#48b7d5',
        webkitTransform: 'rotate(-90deg)',
        msTransform: 'rotate(-90deg)',
        transform: 'rotate(-90deg)'
    },
    '&.Mui-selected': {
        backgroundColor: '#48b7d5',
        color: '#fff',
    },
    // '&.Mui-selected:not(:last-of-type(6))': {
    //     display:'none'
    // },
});
export const ResponsiveTabList = styled(TabList)({
    marginBottom:'50px',
    width:'100%',
    maxWidth:'350px',
});

export const ResponsiveTab = styled(Tab)({
    '&@font-face': {
        fontFamily: 'Akrobat, bold, serif',
        src: 'url(/../asets/Akrobat_Bold.ttf) format(truetype) local(Akrobat),',
    },
    fontFamily: 'Akrobat, bold, serif',
    fontSize: '14px',
    fontWeight:100,
    letterSpacing: '.05em',
    borderBottom:'1px solid #e2e1e2',
    transition: 'color .3s',
    lineHeight:'21px',
    padding:'15px 0 15px 0',
    '&:last-child':{
        borderBottom:'none',
    },
    '&:hover': {
        color: '#48b7d5'
    },
    '&.Mui-selected': {
        backgroundColor: '#48b7d5',
        color: '#fff',
    },
})
