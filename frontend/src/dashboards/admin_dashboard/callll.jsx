import React, { useState, useEffect } from 'react';
import '../doctor_dashboard/cal.css';
import useAuthContext from '../../context/AuthContext';

const Calendrrr = (props) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const { appointments, user } = useAuthContext();

    useEffect(() => {
        // Set selectedDate to today's date when the component mounts
        setSelectedDate(new Date());
    }, []);

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    // Adjust startDay to match the format where Monday is the first day of the week
    const adjustedStartDay = (startDay === 0 ? 6 : startDay - 1);

    const days = [];
    for (let i = 0; i < adjustedStartDay; i++) {
        days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        const day = i;
        const isSelected =
            selectedDate &&
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear();

        days.push(
            <div
                key={`day-${i}`}
                className={`day ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
            >
                {i}
            </div>
        );
    }

    const handlePreviousMonth = () => {
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        setCurrentDate(prevMonth);
        setSelectedDate(null); // Reset selected date when changing months
    };

    const handleNextMonth = () => {
        const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        setCurrentDate(nextMonth);
        setSelectedDate(null); // Reset selected date when changing months
    };

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const formattedSelectedDate = selectedDate ? formatDate(selectedDate) : null;
    const day_appointments = appointments.filter((x) => x.date === formattedSelectedDate)
    
    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={handlePreviousMonth}>&lt;</button>
                <span>
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </span>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
            <div className="calendar-body">
                <div className="day-names">
                    <div>Mo</div>
                    <div>Tu</div>
                    <div>We</div>
                    <div>Th</div>
                    <div>Fr</div>
                    <div>Sa</div>
                    <div>Su</div>
                </div>
                <div className="days-grid">{days}</div>
            </div>
            <div className="todays_apps_interface">
                {appointments.filter((x) => x.date === formattedSelectedDate)
                .sort((a, b) => {
                    const hourA = parseInt(a.time.slice(0, 2));
                    const hourB = parseInt(b.time.slice(0, 2));
                    return hourA - hourB; 
                }).slice(0,3).map((a, index) => (
                <div className="today_apps_interface" key={index}>
                    <p className='tttss'>{a.time.slice(0,2)}:00{a.time.slice(0,2)>="12" ? <span>PM</span>:<span>AM</span>}</p>
                    <div className="app_name_time">
                        <p>{a.patient_name}</p>
                        <p>{a.time.slice(0,2)}:00{a.time.slice(0,2)>="12" ? " PM":" AM"} - 
                        <span>{Number(a.time.slice(0,2))+1}:00{a.time.slice(0,2)>="12" ? " PM":" AM"}</span>
                        </p>
                    </div>                    
                </div>
                ))}
                {day_appointments.length>3 && <p onClick={()=>settabs("Appointments")} className='show_app_day'>Show All</p>}
                {day_appointments.length==0 && <p className='no_found'>No Appointments This Day</p>}
            </div>
        </div>
    );
};

export default Calendrrr;

