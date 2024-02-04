export const rainbowWord = () => {
  const wordLetters = document.querySelectorAll('.letter')

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF'.split('')
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)]
    }

    return color
  }

  wordLetters.forEach((letter: any) => {
    letter.style.color = getRandomColor()
  })
}
