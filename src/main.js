import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="scene" aria-live="polite">
    <div class="sky"></div>
    <div class="glow glow-left"></div>
    <div class="glow glow-right"></div>

    <section class="card">
      <p class="eyebrow">Une petite surprise</p>
      <h1>Je t'aime beaucoup</h1>
      <button class="heart-button" type="button" aria-label="Mon amour !">
        <svg class="heart-button__shape" viewBox="0 0 64 60" aria-hidden="true">
          <defs>
            <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ff7ca1" />
              <stop offset="48%" stop-color="#ea225d" />
              <stop offset="100%" stop-color="#b71243" />
            </linearGradient>
          </defs>
          <path d="M47.8 3.4c-6.2 0-11.4 3.5-15.8 10.5C27.6 6.9 22.4 3.4 16.2 3.4 8.5 3.4 2.1 9.8 2.1 17.5c0 8.8 5.9 16.2 15 25.6C22.2 48.6 28.6 54 32 57c3.4-3 9.8-8.4 14.9-13.9 9.1-9.4 15-16.8 15-25.6 0-7.7-6.4-14.1-14.1-14.1Z" />
        </svg>
        <span>Mon amour !</span>
      </button>
      <p class="hint">Clique sur le coeur pour déclencher l'explosion de pétales.</p>
    </section>

    <div class="love-flash" aria-hidden="true"></div>
    <div class="petal-layer" aria-hidden="true"></div>
  </main>
`

const scene = document.querySelector('.scene')
const button = document.querySelector('.heart-button')
const flash = document.querySelector('.love-flash')
const petalLayer = document.querySelector('.petal-layer')

function spawnPetal(originX, originY) {
  const petal = document.createElement('span')
  petal.className = 'petal'

  const size = 10 + Math.random() * 18
  const duration = 1800 + Math.random() * 1800
  const startX = originX + (Math.random() * 160 - 80)
  const startY = originY + (Math.random() * 120 - 60)
  const drift = Math.random() * 240 - 120
  const arc = 120 + Math.random() * 180
  const rotation = Math.random() * 720 - 360
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
  }, duration + 200)
}

function launchPetals() {
  scene.classList.add('is-active')
  flash.classList.remove('is-visible')
  void flash.offsetWidth
  flash.classList.add('is-visible')

  const rect = button.getBoundingClientRect()
  const originX = rect.left + rect.width / 2
  const originY = rect.top + rect.height / 2

  const burstCount = 42
  for (let index = 0; index < burstCount; index += 1) {
    window.setTimeout(() => spawnPetal(originX, originY), index * 28)
  }
}

button.addEventListener('pointerdown', launchPetals)
button.addEventListener('click', launchPetals)
