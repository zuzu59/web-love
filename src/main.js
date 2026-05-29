import './style.css'

const app = document.querySelector('#app')

function renderHome() {
  app.innerHTML = `
    <main class="page home">
      <div class="home-shell">
        <p class="eyebrow">Pour toi</p>
        <button class="heart-button" aria-label="Mon amour !">
          <span>Mon amour !</span>
        </button>
        <p class="hint">Clique sur le cœur</p>
      </div>
    </main>
  `

  const button = app.querySelector('.heart-button')
  button.addEventListener('click', () => {
    history.pushState({}, '', '/love')
    renderLove()
  })
}

function createPetals(container) {
  const count = 84
  for (let i = 0; i < count; i += 1) {
    const petal = document.createElement('span')
    petal.className = 'petal'

    const angle = Math.random() * Math.PI * 2
    const distance = 140 + Math.random() * 320
    const x = Math.cos(angle) * distance
    const y = Math.sin(angle) * distance * 0.9
    const size = 8 + Math.random() * 16
    const delay = Math.random() * 0.35
    const rotate = (Math.random() * 900 - 450).toFixed(0)
    const blur = Math.random() > 0.7 ? '1px' : '0px'
    const sway = (Math.random() * 24 - 12).toFixed(0)

    petal.style.setProperty('--x', `${x}px`)
    petal.style.setProperty('--y', `${y}px`)
    petal.style.setProperty('--size', `${size}px`)
    petal.style.setProperty('--delay', `${delay}s`)
    petal.style.setProperty('--rotate', `${rotate}deg`)
    petal.style.setProperty('--blur', blur)
    petal.style.setProperty('--sway', `${sway}px`)

    container.appendChild(petal)
  }
}

function renderLove() {
  app.innerHTML = `
    <main class="page love">
      <div class="love-scene">
        <div class="glow" aria-hidden="true"></div>
        <div class="love-card">
          <p class="eyebrow">Juste pour toi</p>
          <h1>Je t'aime beaucoup</h1>
        </div>
        <div class="burst" aria-hidden="true"></div>
      </div>
    </main>
  `

  const burst = app.querySelector('.burst')
  createPetals(burst)
}

window.addEventListener('popstate', () => {
  if (location.pathname === '/love') renderLove()
  else renderHome()
})

if (location.pathname === '/love') renderLove()
else renderHome()
