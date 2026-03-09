import { useEffect, useState } from 'react'
import ButtonGroup from './components/core/ButtonGroup'
import Button from './components/core/Button'
import Spacer from './components/core/Spacer'
import Modal from './components/core/Modal'
import useDiary from './hooks/useDiary'
import { addDiaryArticle, updateDiaryArticle } from './store/database'

import './DiaryForm.css'

const DiaryForm = ({ date, onCancel }) => {
  const diaryArticle = useDiary(date) // 해당 날짜 일기 가져오기 
  const [text, setText] = useState('') // 일기내용
  const [isNew, setNew] = useState(true) // 새글인지 여부
  const [isModalOpen, setModalOpen] = useState(false) // 모달상태

  useEffect(() => {
    if (diaryArticle) {
      setNew(false)
      setText(diaryArticle.article)
    }
  }, [diaryArticle]) 
  // diaryArticle 값이 바뀌면 useEffect 실행

  const onCloseModal = () => {
    setModalOpen(false)
  } // 모달 닫는 함수

  const onSave = async () => { // 저장 함수
    if (text.trim() === '') return // 빈 글 검사 
  
    const now = new Date() // 현재 시간 구하기
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    
    try {
      const time = `${hours}:${minutes}` // 저장 로직
      const article = text // 일기 내용

      if (isNew) {
        await addDiaryArticle({ date, time, article })
      } else {
        await updateDiaryArticle({ date, time, article })
      }
    } catch (error) {
      console.error('일기 추가에 실패했습니다.', error)
    }

    onCancel()
    setText('')
  }

  return (
    <div className="diary-form">
      <h2>오늘은 어땠어요?</h2>
      <textarea 
        className="textarea"
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="일기를 작성하세요"
      />
      <Spacer />
      <ButtonGroup align="right">
        <Button size="medium" onClick={onCancel}>돌아가기</Button>
        <Button size="medium" onClick={onSave}>저장</Button>
      </ButtonGroup>
      <Spacer size={2} />
      <Modal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        message="이 작업은 복구할 수 없습니다. 정말로 삭제하시겠습니까?"
      />
    </div>
  )
}

export default DiaryForm
