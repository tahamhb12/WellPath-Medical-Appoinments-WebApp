import React, { useEffect, useState } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { registerLicense } from '@syncfusion/ej2-base';
import dayjs from 'dayjs'; // Import dayjs for date/time manipulation
import "./chart.css"


import useAuthContext from '../../context/AuthContext';

const App = () => {

  registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhPYVJ/WmFZfVpgcF9DZlZTTGY/P1ZhSXxXdkBhWX5YdXJXT2FVVUQ=');

  const [currentDate, setCurrentDate] = useState(dayjs()); // Current date
  const startOfWeek = currentDate.startOf('week').day(1); // Start of the current week, set to Monday

  const {getAppoinments,appointments,user} = useAuthContext()

  
  const dataSource = appointments.filter(x=>x.doctor_id == user.id).map((a)=>({
    EndTime: dayjs(a.date).add(Number(a.time.slice(0,2))+1, 'hour').toDate(), // Example end time at 8 pm if the date starts at 9 am
    StartTime: dayjs(a.date).add(a.time.slice(0,2), 'hour').toDate(), // Example start time at 6 pm if the date starts at 9 am
    Subject: a.patient_name,
    Description: `This is an appointment on ${a.date} `// Adjust description as needed
  }))
  
  const localeData = {
    dataSource: dataSource
  };
  useEffect(()=>{
    getAppoinments()
  },[dataSource])
  
  const handleTodayButtonClick = () => {
    setCurrentDate(dayjs()); // Update current date to today
  };

  return (
    <div style={{marginTop:"-150px",paddingBottom:"50px"}}>
      <button className='today_date' onClick={handleTodayButtonClick}>Today</button>
      <ScheduleComponent 
        currentView='Week' 
        selectedDate={currentDate.toDate()} 
        eventSettings={localeData}
        startHour="09:00" // Set the start hour to 9 am
        endHour="18:00"   // Set the end hour to 6 pm
        firstDayOfWeek={1} // Set Monday as the first day of the week
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        <div><svg className='app_icon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM9.78 5H9.72C9.32 5 9 5.32 9 5.72V10.44C9 10.79 9.18 11.12 9.49 11.3L13.64 13.79C13.98 13.99 14.42 13.89 14.62 13.55C14.83 13.21 14.72 12.76 14.37 12.56L10.5 10.26V5.72C10.5 5.32 10.18 5 9.78 5Z" fill="#C3CAD9"/>
      </svg>
      </div>
      </ScheduleComponent>
    </div>
  );
};

export default App;
