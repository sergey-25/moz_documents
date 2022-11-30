import React from 'react'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {uk} from 'date-fns/locale';
import {SxProps} from "@mui/material";


export default function DateFieldComponent(props) {

    const {name, value, onChange, renderInput, InputProps, disabled} = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    });

    const popperSx: SxProps = {
        '& .MuiPaper-root': {
            width: '220px',
            backgroundColor: '#f5f5f5',
            borderRadius: 0,
            boxShadow: 'none'
        },
        '& .MuiCalendarPicker-root': {
            margin: 0,
            width: '220px',
            backgroundColor: '#f5f5f5',
        },
        '& .PrivatePickersSlideTransitionGroup': {},
        '& .MuiPickersCalendarHeader-label': {
            fontSize: '14px',
        },
        '.css-1j79pt2-PrivatePickersYear-button':{
            borderRadius:0
        },
        '.css-1j79pt2-PrivatePickersYear-button.Mui-selected': {
            backgroundColor: '#ffc904'
        },
        '.css-1j79pt2-PrivatePickersYear-button.Mui-selected:hover':{
            backgroundColor:'#ffc904'
        },
        '.css-1j79pt2-PrivatePickersYear-button:hover':{
            color:'#fff',
            backgroundColor:'#ffc904'
        },
        '& .MuiDayPicker-slideTransition': {
            minHeight: '150px'
        },
        '& .MuiPickersDay-dayWithMargin': {
            color: '#000',
            backgroundColor: '#f5f5f5',
            '&:hover': {
                backgroundColor: '#ffc904'
            }
        },
        '& .MuiPickersDay-root': {
            width: '25px',
            height: '25px',
        },
        '& .MuiDayPicker-weekDayLabel': {
            width: '25px',
            height: '25px',
        },
        '& .MuiButtonBase-root': {
            width: '25px',
            height: '25px',
            padding: 0,
            borderRadius: 0,
            backgroundColor: '#f5f5f5',
        },
        '& .MuiButtonBase-root.Mui-selected': {
            backgroundColor: '#ffc904',
        }
    }

    return (
        <LocalizationProvider
            dateAdapter={AdapterDateFns}
            locale={uk}>
            <DesktopDatePicker
                components={{
                    OpenPickerIcon: CalendarMonthIcon,
                    LeftArrowIcon: KeyboardArrowLeftIcon,
                    RightArrowIcon: KeyboardArrowRightIcon
                }}
                disablePast={true}
                InputProps={InputProps}
                value={value}
                disabled={disabled}
                onChange={date => onChange(convertToDefEventPara(name, date))}
                renderInput={renderInput}
                PopperProps={{
                    sx: popperSx
                }}
            />
        </LocalizationProvider>
    )
}
