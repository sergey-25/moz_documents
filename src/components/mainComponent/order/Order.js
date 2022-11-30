import React from 'react';
import {Box, useTheme} from "@mui/material";
import SortComponent from "../../sortComponent/SortComponent";

import {Link} from "react-router-dom";
import {useStateContext} from "../../../contexts/dataContext";


function Order(props) {

    const { data, setData } = useStateContext();

    const theme = useTheme();

    return (
        <Box>
          <Box sx={{
              [theme.breakpoints.up('sm')]: {
                  display: 'block',
              },
              display: 'none',
          }}>
              <h5 style={{
                  position: 'relative',
                  color: '#2b2b2b',
                  paddingLeft: '12px',
                  paddingBottom: '23px'
              }}>
                  НАКАЗИ МОЗ
                  <span style={{
                      display: 'inline-block',
                      position: 'absolute',
                      top: '4px',
                      left: 0,
                      backgroundColor: '#ffc904',
                      width: '2px',
                      height: '15px'
                  }}></span>
              </h5>
          </Box>
            <SortComponent/>
            <Box>
                {data.map(item => {
                    return(
                        <>
                            <Box>
                                <Link to={`/article/ministry-mandates/${item.title}`}>
                                    {item.title}
                                </Link>
                            </Box>
                        </>
                    )
                })}
            </Box>
        </Box>
    );
}

export default Order;