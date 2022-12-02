import React from 'react';
import {
    ArticleLinks,
    BlockTitle,
    BlockTitleSpan,
    DocumentDownload,
    DocumentsContainer,
    DocumentTitle,
    MedicalContainer,
    MedicalWrapper,
    ServiceLine,
    ShareContainer
} from "../../../styles/containers.styled";
import { createTheme, Divider, Icon, Link} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGooglePlusG, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faFileContract} from "@fortawesome/free-solid-svg-icons";


const myArray = ["dn_2113_21112022 (pdf, 143 Кб)", "dn_2113_21112022_dod (pdf, 124 Кб)"];

function OrderContent(props) {

    // const params = useParams();

    // const itemId = params.title;

    // const thisItem = data.find(prod => prod.title === itemId);

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
    const iconGoogle = <FontAwesomeIcon icon={faGooglePlusG} className="fa-brands fa-google-plus-g  fa-xs"/>
    const iconIn = <FontAwesomeIcon icon={faLinkedinIn} className="fa-brands fa-linkedin-in"/>
    const documentIcon = <FontAwesomeIcon icon={faFileContract}/>
    return (
        <MedicalContainer theme={theme}>
            <MedicalWrapper theme={theme}>
                <h4>
                    Наказ МОЗ України від 21.11.2022 № 2113 "Про внесення змін до Розподілу лікарського засобу
                    «ОКСИТОЦИН-БІОЛІК (Окситоцин 5 МО/мл)» для надання невідкладної медичної допомоги при кровотечах,
                    закупленого за кошти Державного бюджету України на 2020 рік"
                </h4>
                <DocumentsContainer>
                    <DocumentTitle>
                        ДОКУМЕНТИ
                        <BlockTitleSpan/>
                    </DocumentTitle>
                    {myArray.map(item => {
                        return (
                            <>
                                <DocumentDownload>
                                    <Link underline='none'>
                                        <Icon sx={{color: '#48b7d5', marginRight: '9px', fontSize: '18px'}}>
                                            {documentIcon}
                                        </Icon>
                                        {item}
                                    </Link>
                                </DocumentDownload>
                            </>
                        )
                    })}
                </DocumentsContainer>
                <Divider/>
                <ArticleLinks theme={theme}>
                    <a href='https://www.facebook.com/moz.ukr' target="_blank" rel="noopener noreferrer">
                        <Icon sx={{
                            marginRight: '25px',
                            color: '#48b7d5',
                            fontSize: '17px',
                            transition: 'background .3s',
                            '&:hover': {color: '#ffc904'}
                        }}>{icon}</Icon>
                    </a>
                    <a href='https://twitter.com/MoH_Ukraine'
                       target="_blank"
                       rel="noopener noreferrer">
                        <TwitterIcon sx={{
                            marginRight: '25px',
                            color: '#48b7d5',
                            fontSize: '19px',
                            transition: 'background .3s',
                            '&:hover': {color: '#ffc904'}
                        }}/>
                    </a>
                    <a href='#' target="_blank" rel="noopener noreferrer">
                        <Icon sx={{
                            marginRight: '25px',
                            color: '#48b7d5',
                            fontSize: '20px',
                            transition: 'background .3s',
                            '&:hover': {color: '#ffc904'}
                        }}>
                            {iconGoogle}
                        </Icon>
                    </a>
                    <a href='#' rel="noopener noreferrer" style={{width: '15px'}}>
                        <Icon sx={{
                            marginRight: '25px',
                            color: '#48b7d5',
                            fontSize: '18px',
                            transition: 'background .3s',
                            '&:hover': {color: '#ffc904'}
                        }}>
                            {iconIn}
                        </Icon>
                    </a>
                </ArticleLinks>
                <Divider sx={{marginBottom: '30px'}}/>
            </MedicalWrapper>
            <ShareContainer theme={theme}>
                <BlockTitle theme={theme}>
                    ПОДІЛИТИСЬ
                    <BlockTitleSpan/>
                </BlockTitle>
                <ServiceLine theme={theme}>
                    <a href='https://www.facebook.com/moz.ukr' target="_blank" rel="noopener noreferrer">
                        <Icon sx={{
                            marginRight: '25px',
                            color: '#48b7d5',
                            fontSize: '17px',
                            transition: 'background .3s',
                            '&:hover': {color: '#ffc904'}
                        }}>{icon}</Icon>
                    </a>
                    <a href='https://twitter.com/MoH_Ukraine'
                       target="_blank"
                       rel="noopener noreferrer">
                        <TwitterIcon sx={{
                            marginRight: '25px',
                            color: '#48b7d5',
                            fontSize: '19px',
                            transition: 'background .3s',
                            '&:hover': {color: '#ffc904'}
                        }}/>
                    </a>
                    <a href='#' target="_blank" rel="noopener noreferrer">
                        <Icon sx={{
                            marginRight: '25px',
                            color: '#48b7d5',
                            fontSize: '20px',
                            transition: 'background .3s',
                            '&:hover': {color: '#ffc904'}
                        }}>
                            {iconGoogle}
                        </Icon>
                    </a>
                    <a href='#' rel="noopener noreferrer" style={{width: '15px'}}>
                        <Icon sx={{
                            marginRight: '25px',
                            color: '#48b7d5',
                            fontSize: '18px',
                            transition: 'background .3s',
                            '&:hover': {color: '#ffc904'}
                        }}>
                            {iconIn}
                        </Icon>
                    </a>
                </ServiceLine>
            </ShareContainer>
        </MedicalContainer>
    );
}

export default OrderContent;