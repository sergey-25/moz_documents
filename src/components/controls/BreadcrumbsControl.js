import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {BreadcrumbLink} from "../../styles/links.styled";
import {useLocation, useNavigate} from "react-router-dom";
import {Link} from "@mui/material";


function BreadcrumbsControl(props) {

    const location = useLocation();
    const navigate = useNavigate();

    const pathNames = location.pathname.split("/").filter(x => x);

    return (
        <div role="presentation">
            <Breadcrumbs
                // maxItems={4}
                sx={{fontSize: '10px'}}
                separator="|"
                size="sm"
                aria-label="breadcrumb">
                {pathNames.length > 0 ? (
                    <BreadcrumbLink underline="none" color="inherit" href="https://moz.gov.ua/">
                        Головна
                    </BreadcrumbLink>
                ) : (<BreadcrumbLink underline="none" color="inherit">
                    Головна
                </BreadcrumbLink>)}
                <BreadcrumbLink
                    underline="none"
                    onClick={() => navigate('/')
                    }
                >
                    Документи
                </BreadcrumbLink>
                {pathNames.map((name, index) => {
                    const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathNames.length - 1;
                    return isLast ? (
                        <BreadcrumbLink
                            underline="none" color="inherit"
                            key={name}>

                            {name === 'nakazi-moz'
                                ?
                                ' Накази МОЗ'
                                :
                                name === 'nakazi-moz-scho-projshli-derzhavnu-reestraciju-v-minjusti'
                                    ? 'Накази МОЗ, що пройшли державну реєстрацію в Мін’юсті'
                                    : routeTo.includes('article' || 'ministry-mandates')
                                        ? name.replace(/[0-9._%+-]/g, ' ')
                                        : null
                            }
                        </BreadcrumbLink>
                    ) : location.pathname === 'article' ?
                        (
                            <>
                                <Link key={name} onClick={() => {
                                    navigate(routeTo)
                                }}>

                                    {name}
                                </Link>
                            </>
                        ) : null
                })}
            </Breadcrumbs>
        </div>
    );
}

export default BreadcrumbsControl;