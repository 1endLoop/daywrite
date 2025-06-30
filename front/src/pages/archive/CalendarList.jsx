import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarcustom.css';

const CalendarList = () => {
  const [calendarData, setCalendarData] = useState({});

  useEffect(() => {
    const dummyData = [
      { date: '2025-06-30', title: 'travel',author: 'lucy is good', color: '#D8FFE3' },
      { date: '2025-06-01', title: 'friends is good godd gdodo',author: 'happy day', color: '#FFDEE3' },
      { date: '2025-06-4', title: 'mylife haha', author: 'goodluct',color: '#FFF3C7' },
      { date: '2025-06-13', title: 'today mood',author: 'applecomapny', color: '#FFF9C4' },
      { date: '2025-06-22', title: 'LUY ',author: 'drawio', color: '#D8FFE3' },
      { date: '2025-06-11', title: 'Love yourself', author: 'phone',color: '#FFDCFA' }
    ];

    const dataObj = {};
    dummyData.forEach(item => {
      dataObj[item.date] = { title: item.title,author:item.author ,color: item.color || '#F0F0F0' };
    });

    setCalendarData(dataObj);
  }, []);

  return (
   
 <Calendar  locale="en-US"
  tileContent={({ date, view }) => {
    const dateStr = date.toISOString().split('T')[0];
    if (view === 'month' && calendarData[dateStr]) {
      const { title, author,color } = calendarData[dateStr];

      return (
        <>
          {/* 셀 전체 덮는 배경 */}
          <div
            style={{
              backgroundColor: color,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0
            }}
          >

          </div>

          {/* 글자 내용 */}
          <div
            style={{

              fontSize: '14px',
              color: '#282828',
              padding: '2px 2px',
              marginTop:'30px',
              position: 'relative',
              zIndex: 1,
              fontWeight: 'bold',
              width: '100%',
              textAlign: 'left',         
              wordBreak: 'break-word',   
              overflowWrap: 'break-word' 
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '12px',
              color: '#282828',
              padding: '2px 4px',
              position: 'relative',
              zIndex: 1,
              opacity:'0.40'
              
            }}
          >
            {author}
          </div>
        </>
      );
    }
    return null;
  }}
/>


  );
};

export default CalendarList;
