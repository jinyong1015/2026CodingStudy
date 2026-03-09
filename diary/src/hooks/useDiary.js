import { useEffect, useState } from 'react'
import { getDiaryArticle } from '../store/database'

const useDiary = (date) => {
  const [diaryEntry, setDiaryEntry] = useState(null) // db에서 가져온 일기

  useEffect(() => {
    const fetchDiary = async () => {
      const diary = await getDiaryArticle(date)
      setDiaryEntry(diary)
    }

    date && fetchDiary() // data가 있으면 fetchDiary 실행
  }, [date])

  return diaryEntry
}

export default useDiary

/* 특정 날짜의 일기를 db에서 가져오는 기능 */