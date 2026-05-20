import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="scene" aria-live="polite">
    <section class="screen screen--home" aria-label="Accueil">
      <div class="backdrop backdrop--home" aria-hidden="true"></div>
      <button class="heart-button" type="button" aria-label="Mon amour !">
        <svg class="heart-button__shape" viewBox="0 0 64 60" aria-hidden="true">
          <defs>
            <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ffd3df" />
              <stop offset="40%" stop-color="#ff5d8f" />
              <stop offset="100%" stop-color="#c61d52" />
            </linearGradient>
          </defs>
          <path d="M47.8 3.4c-6.2 0-11.4 3.5-15.8 10.5C27.6 6.9 22.4 3.4 16.2 3.4 8.5 3.4 2.1 9.8 2.1 17.5c0 8.8 5.9 16.2 15 25.6C22.2 48.6 28.6 54 32 57c3.4-3 9.8-8.4 14.9-13.9 9.1-9.4 15-16.8 15-25.6 0-7.7-6.4-14.1-14.1-14.1Z" />
        </svg>
        <span>Mon amour !</span>
      </button>
    </section>

    <section class="screen screen--love" aria-label="Nouvelle page">
      <div class="backdrop backdrop--love" aria-hidden="true"></div>
      <h1 class="love-title">Je t'aime beaucoup</h1>
      <div class="petal-layer" aria-hidden="true"></div>
      <div class="love-flash" aria-hidden="true"></div>
    </section>
  </main>
`

const scene = document.querySelector('.scene')
const homeScreen = document.querySelector('.screen--home')
const loveScreen = document.querySelector('.screen--love')
const button = document.querySelector('.heart-button')
const flash = document.querySelector('.love-flash')
const petalLayer = document.querySelector('.petal-layer')

let isActive = false

function spawnPetal(originX, originY) {
  const petal = document.createElement('span')
  petal.className = 'petal'

  const size = 18 + Math.random() * 32
  const duration = 2200 + Math.random() * 2200
  const startX = originX + (Math.random() * 240 - 120)
  const startY = originY + (Math.random() * 160 - 80)
  const drift = Math.random() * 340 - 170
  const arc = 180 + Math.random() * 280
  const rotation = Math.random() * 900 - 450
  const hue = 340 + Math.random() * 18

  petal.style.setProperty('--size', `${size}px`)
  petal.style.setProperty('--duration', `${duration}ms`)
  petal.style.setProperty('--start-x', `${startX}px`)
  petal.style.setProperty('--start-y', `${startY}px`)
  petal.style.setProperty('--drift', `${drift}px`)
  petal.style.setProperty('--arc', `${arc}px`)
  petal.style.setProperty('--rotation', `${rotation}deg`)
  petal.style.setProperty('--hue', `${hue}`)

  petalLayer.appendChild(petal)

  window.setTimeout(() => {
    petal.remove()
  }, duration + 250)
}

function launchLovePage() {
  if (isActive) {
    return
  }

  isActive = true
  scene.classList.add('is-active')
  homeScreen.setAttribute('aria-hidden', 'true')
  loveScreen.setAttribute('aria-hidden', 'false')
  button.setAttribute('aria-pressed', 'true')

  flash.classList.remove('is-visible')
  void flash.offsetWidth
  flash.classList.add('is-visible')

  const rect = button.getBoundingClientRect()
  const originX = rect.left + rect.width / 2
  const originY = rect.top + rect.height / 2

  const burstCount = 108
  for (let index = 0; index < burstCount; index += 1) {
    window.setTimeout(() => spawnPetal(originX, originY), index * 14)
  }
}

button.addEventListener('click', launchLovePage)
