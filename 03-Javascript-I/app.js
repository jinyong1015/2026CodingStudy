let currentLeftBoxPosition = 100
let numberOfStep = 10
let direction = 'yes'
let box

function boxProgram() {
  numberOfStep = Number(prompt('몇 걸음 걸을까요?'))
  direction = prompt('왼쪽으로 갈까요? (yes / no)')

  let moveStep = 0

  const intervalId = setInterval(() => {
    moveStep++

    if (direction === 'yes') {
      box.style.left = (currentLeftBoxPosition - moveStep) + 'px'
    } else {
      box.style.left = (currentLeftBoxPosition + moveStep) + 'px'
    }

    // 목표 지점 도달 시 종료
    if (moveStep >= numberOfStep) {
      clearInterval(intervalId) 

      // 최종 위치 저장
      if (direction === 'yes') {
        currentLeftBoxPosition -= numberOfStep
      } else {
        currentLeftBoxPosition += numberOfStep
      }
    }
  }, 20) // 숫자가 작을수록 더 부드러움
}direction

function main() {
  box = document.querySelector('#box')
  box.style.left = currentLeftBoxPosition + 'px'
  box.addEventListener('click', boxProgram)
}

document.addEventListener('DOMContentLoaded', main)
