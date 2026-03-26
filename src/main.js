import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <button id="heart-btn" class="heart-btn">
      <span class="heart">❤️</span>
      <p>Mon amour !</p>
    </button>
    <div id="message" class="message hidden">Je t'aime beaucoup</div>
    <div id="petals-container"></div>
  </div>
`

const heartBtn = document.querySelector('#heart-btn')
const message = document.querySelector('#message')
const petalsContainer = document.querySelector('#petals-container')

function createPetal() {
  const petal = document.createElement('div')
  petal.className = 'petal'

  const flowers = ['🌹', '🌺', '🌸', '💐']
  petal.textContent = flowers[Math.floor(Math.random() * flowers.length)]

  const startX = Math.random() * window.innerWidth
  const startY = -10

  petal.style.left = startX + 'px'
  petal.style.top = startY + 'px'

  petalsContainer.appendChild(petal)

  const duration = 3000 + Math.random() * 2000
  const xOffset = (Math.random() - 0.5) * 400

  petal.animate([
    {
      transform: 'translateY(0) translateX(0) rotate(0deg) scale(1)',
      opacity: 1
    },
    {
      transform: `translateY(${window.innerHeight + 100}px) translateX(${xOffset}px) rotate(${Math.random() * 720}deg) scale(0.5)`,
      opacity: 0
    }
  ], {
    duration: duration,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }).onfinish = () => {
    petal.remove()
  }
}

heartBtn.addEventListener('click', () => {
  message.classList.remove('hidden')

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      createPetal()
    }, i * 50)
  }

  setTimeout(() => {
    message.classList.add('hidden')
  }, 5000)
})
