import { useState } from 'react'

const App = () => {
  const today = new Date();
  const [pickDay, setPickDay] = useState(0);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);

  const calendar = buildCalendarData(year, month);

  const onGoToday = () => {
    setYear(today.getFullYear())
    setMonth(today.getMonth() + 1)
  }

  const onChangeMonth = (direction) => {
    if (direction === 'prev') {
      if (month === 1) {
        setYear(year - 1)
        setMonth(12)
      } else {
        setMonth(month - 1)
      }
    } else {
      if (month === 12) {
        setYear(year + 1)
        setMonth(1)
      } else {
        setMonth(month + 1)
      }
    }
  }

  const onSelectDay = (day) => {
    setPickDay(day)
  }


  return (
    <div></div>
  )
}

export default App;