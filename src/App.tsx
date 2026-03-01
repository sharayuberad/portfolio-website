import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <header className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="gradient-text text-3xl font-bold">
            Neon Core
          </h1>
          <nav className="flex gap-6">
            <a href="#" className="text-white/70 hover:text-white transition">Home</a>
            <a href="#" className="text-white/70 hover:text-white transition">About</a>
            <a href="#" className="text-white/70 hover:text-white transition">Projects</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="min-h-screen flex flex-col justify-center items-center text-center">
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-4 gradient-text">
              Welcome to Neon Core
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              A modern portfolio website built with React, Tailwind CSS, and Vite
            </p>
          </div>

          <div className="flex gap-4">
            <button className="button-primary">
              Get Started
            </button>
            <button className="button-secondary">
              Learn More
            </button>
          </div>

          <div className="mt-16 p-8 card bg-white/5 rounded-lg">
            <p className="text-lg mb-4">React + Vite + Tailwind CSS</p>
            <p className="text-white/60 mb-6">Count: {count}</p>
            <button 
              onClick={() => setCount(count + 1)}
              className="button-primary"
            >
              Increment Counter
            </button>
          </div>
        </section>

        <section className="py-16">
          <h3 className="text-3xl font-bold mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card p-6 bg-white/5 rounded-lg hover:bg-white/10">
                <div className="aspect-video bg-gradient-to-br from-cyber-cyan/20 to-cyber-magenta/20 rounded mb-4"></div>
                <h4 className="text-xl font-semibold mb-2">Project {i}</h4>
                <p className="text-white/60 mb-4">
                  A showcase of my work and capabilities in web development.
                </p>
                <a href="#" className="text-accent-primary hover:underline">
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-white/60">
          <p>&copy; 2026 Sharayu Berad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
