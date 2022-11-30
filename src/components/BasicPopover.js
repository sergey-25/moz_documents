import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import {useStateContext} from "../contexts/dataContext";
import {Button} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function BasicPopover({id, open, anchorEl, onClose}) {
    // const {
    //     handleClose,
    //     open,
    //     id,
    //     anchorEl
    // } = useStateContext();


    return (
        <div>
            <Popover
                id={id}
                open={open}
                onClose={onClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Button   onClick={onClose}>
                    <CloseIcon/>
                </Button>
                <Typography sx={{p: 2}}>The content of the Popover.</Typography>
            </Popover>
        </div>
    );
}