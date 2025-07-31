import React, { useState, useEffect } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Main Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl">
            <i className="bi bi-lightning-charge-fill text-3xl text-white"></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            WebSparks AI
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            Expert AI-Powered Full Stack Software Engineer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to build exceptional applications with modern technologies, 
            best practices, and enterprise-grade solutions. Let's create something amazing together.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <i className="bi bi-code-slash text-3xl text-blue-400 mb-4"></i>
            <h3 className="text-xl font-semibold text-white mb-2">Full Stack Development</h3>
            <p className="text-gray-400 text-sm">React, TypeScript, Node.js, and modern frameworks</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <i className="bi bi-palette text-3xl text-purple-400 mb-4"></i>
            <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
            <p className="text-gray-400 text-sm">Beautiful, responsive, and user-centric interfaces</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <i className="bi bi-rocket-takeoff text-3xl text-green-400 mb-4"></i>
            <h3 className="text-xl font-semibold text-white mb-2">Production Ready</h3>
            <p className="text-gray-400 text-sm">Enterprise-grade applications with best practices</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-8">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <i className="bi bi-chat-dots mr-2"></i>
            Start Building Now
          </button>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <i className="bi bi-lightning-charge text-blue-400"></i>
            Powered by WebSparks AI
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
