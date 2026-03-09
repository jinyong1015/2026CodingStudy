import { useState } from 'react'
import Nav from './components/Nav'
import Titlebar from './components/Titlebar'
import Button from './components/core/Button'
import ButtonGroup from './components/core/ButtonGroup'
import Container from './components/Container'
import CardContainer from './components/CardContainer'
import Calendar from './Calendar'
import DiaryForm from './DiaryForm'
import Spacer from './components/core/Spacer'
import Maxims from './components/Maxims'
import { buildCalendarData } from './utils/buildCalendarData'

const App = () => {
  const today = new Date() // 오늘 날짜 만들기 
  const [pickDay, setPickDay] = useState(0) // 선택된 날짜 상태 
  const [year, setYear] = useState(today.getFullYear()) // 현재 년도 상태 
  const [month, setMonth] = useState(today.getMonth() + 1) // 현재 월 상태
  const calendar = buildCalendarData(year, month) // 달력 데이터 생성

  const onGoToday = () => {
    setYear(today.getFullYear())
    setMonth(today.getMonth() + 1)
  } // 오늘 버튼 함수

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
  } /* direction 값에 따라 이전 달 또는 다음 달로 이동하는 함수 */

  const onSelectDay = (day) => {
    setPickDay(day)
  } /* 달력에서 날짜를 클릭했을 때 실행되는 함수 */

  return (
    <Container>
      <Nav>
        <Titlebar>{year}년 {month}월 {pickDay !== 0 ? `${pickDay}일` : ''} Diary</Titlebar>
        { pickDay === 0 ? 
          <ButtonGroup>
            <Button onClick={() => onChangeMonth('prev')}>◀︎</Button>
            <Button onClick={() => onGoToday()}>오늘</Button>
            <Button onClick={() => onChangeMonth('next')}>►</Button>
          </ButtonGroup>
          : null
        }
      </Nav>
      <CardContainer>
        { pickDay === 0 
            ? <Calendar data={calendar} year={year} month={month} onSelectDay={onSelectDay} />
            : <DiaryForm 
                date={`${year}-${String(month).padStart(2, '0')}-${String(pickDay).padStart(2, '0')}`} 
                onCancel={() => setPickDay(0)} // onCancel 함수가 실해되면 setPickDay 값이 0이 됨.  그러면 pickDay === 0 , <DiaryForm />
              />
        }
      </CardContainer>
      <Spacer size={2} />
      <Maxims />
    </Container>
  )
}

export default App
