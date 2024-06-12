import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Cal(props) {
    const setDate =  props.setDate


    const today = new Date();

    const [selectedDate, setSelectedDate] = useState(dayjs(today));

    const handleDateChange = (date) => {
        const formattedDay = date.$D < 10 ? `0${date.$D}` : date.$D;
        setDate(`${date.$y}-0${date.$M + 1}-${formattedDay}`);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar']}>
                <DateCalendar
                    referenceDate={selectedDate}
                    views={['year', 'month', 'day']}
                    onChange={handleDateChange} 
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
