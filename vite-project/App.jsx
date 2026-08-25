import { useState, useEffect } from 'react'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const styles = {
    app: {
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 0.8s ease',
      minHeight: '100vh',
      background: '#000',
      backgroundImage: `
        radial-gradient(circle at 15% 50%, rgba(139, 0, 0, 0.05) 0%, transparent 25%),
        radial-gradient(circle at 85% 30%, rgba(139, 0, 0, 0.03) 0%, transparent 25%)
      `
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      padding: '40px 20px',
      background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 26, 26, 0.7) 100%)',
      backdropFilter: 'blur(10px)',
      borderRadius: '8px',
      border: '1px solid rgba(139, 0, 0, 0.2)',
      animation: 'fadeIn 0.8s ease forwards'
    },
    title: {
      fontFamily: "'Cinzel', serif",
      fontSize: '2.8rem',
      fontWeight: '700',
      color: '#E8E8E8',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      marginBottom: '10px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
    },
    subtitle: {
      fontFamily: "'Crimson Text', serif",
      fontSize: '1.2rem',
      color: '#AAAAAA',
      fontStyle: 'italic',
      opacity: 0.9
    }
  }

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>BOUCHRA'S REALM</h1>
          <p style={styles.subtitle}>Where Technology Meets Darkness</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '30px', marginBottom: '40px' }}>
          {/* Sidebar */}
          <aside>
            <div style={{ background: '#1a1a1a', borderRadius: '8px', border: '1px solid rgba(139, 0, 0, 0.2)', overflow: 'hidden' }}>
              <img 
                src="https://i.pinimg.com/1200x/e6/f5/fa/e6f5fa87d12edb41d70e8d0c1e6c82a1.jpg" 
                alt="Bouchra"
                style={{ width: '100%', height: '280px', objectFit: 'cover', filter: 'grayscale(20%) contrast(1.1)' }}
              />
              <div style={{ padding: '25px' }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: '#8B0000', marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  PROFILE
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <span style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>Name:</span>
                    <span style={{ color: '#E8E8E8', fontWeight: '600', fontFamily: "'Cinzel', serif" }}>Bouchra</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <span style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>Age:</span>
                    <span style={{ color: '#E8E8E8', fontWeight: '600', fontFamily: "'Cinzel', serif" }}>19</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ marginTop: '25px', background: '#1a1a1a', borderRadius: '8px', border: '1px solid rgba(139, 0, 0, 0.2)', padding: '25px' }}>
              <h3 style={{ fontFamily: "'Cinzel', serif", color: '#8B0000', marginBottom: '20px', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                CONNECT
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a 
                  href="https://www.instagram.com/toxicsad18/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(139, 0, 0, 0.1)', borderRadius: '6px', color: '#E8E8E8', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(139, 0, 0, 0.1)'
                    e.target.style.borderColor = '#8B0000'
                    e.target.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.03)'
                    e.target.style.borderColor = 'rgba(139, 0, 0, 0.1)'
                    e.target.style.transform = 'translateX(0)'
                  }}
                >
                  <span style={{ fontSize: '20px' }}>📱</span>
                  <span style={{ flex: 1 }}>Instagram</span>
                </a>
                
                <a 
                  href="https://open.spotify.com/user/317fhg27j7dxnoh7k5cxvgcd4jgm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(139, 0, 0, 0.1)', borderRadius: '6px', color: '#E8E8E8', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(139, 0, 0, 0.1)'
                    e.target.style.borderColor = '#8B0000'
                    e.target.style.transform = 'translateX(5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.03)'
                    e.target.style.borderColor = 'rgba(139, 0, 0, 0.1)'
                    e.target.style.transform = 'translateX(0)'
                  }}
                >
                  <span style={{ fontSize: '20px' }}>🎧</span>
                  <span style={{ flex: 1 }}>Spotify</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            <div style={{ background: '#1a1a1a', borderRadius: '8px', border: '1px solid rgba(139, 0, 0, 0.2)', padding: '40px' }}>
              <h2 style={{ fontFamily: "'Cinzel', serif", color: '#E8E8E8', fontSize: '1.8rem', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '3px', position: 'relative', paddingBottom: '15px' }}>
                ABOUT ME
              </h2>
              
              <p style={{ color: '#AAAAAA', lineHeight: '1.8', marginBottom: '20px' }}>
                An English student who discovered a profound love for language alongside 
                a lifelong passion for technology. Since day one, I've loved technology 
                and everything related to it.
              </p>
              
              <p style={{ color: '#AAAAAA', lineHeight: '1.8', marginBottom: '30px' }}>
                Gaming, programming (web development, etc.), graphic design, and a love 
                for tech and language lead me to follow both passions without following 
                any norms. I returned to the essence of rebellion and authenticity.
              </p>
              
              <blockquote style={{ padding: '30px', background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.05) 0%, rgba(139, 0, 0, 0.02) 100%)', borderLeft: '4px solid rgba(139, 0, 0, 0.3)', borderRadius: '4px', fontStyle: 'italic', color: '#E8E8E8', marginTop: '30px' }}>
                "Gaming, programming, graphic design — each is a language. Each tells a story. I speak them all."
              </blockquote>
            </div>

            {/* Interests */}
            <div style={{ marginTop: '40px', background: '#1a1a1a', borderRadius: '8px', border: '1px solid rgba(139, 0, 0, 0.2)', padding: '40px' }}>
              <h2 style={{ fontFamily: "'Cinzel', serif", color: '#E8E8E8', fontSize: '1.8rem', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '3px', position: 'relative', paddingBottom: '15px' }}>
                MY INTERESTS
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
                {[
                  { icon: '🎵', title: 'Music', desc: 'Black Metal, DSBM, Folk Metal, Death Metal' },
                  { icon: '🎨', title: 'Art', desc: 'Gore art, album covers' },
                  { icon: '📖', title: 'Literature', desc: 'Romanticism, Mythology, Fiction' },
                  { icon: '💻', title: 'Technology', desc: 'Web development, programming' },
                  { icon: '🌲', title: 'Atmosphere', desc: 'Darkness, calm, Forests' },
                  { icon: '🎮', title: 'Gaming', desc: 'Atmospheric, immersive experiences' }
                ].map((interest, index) => (
                  <div 
                    key={interest.title}
                    style={{ 
                      padding: '25px', 
                      background: 'rgba(139, 0, 0, 0.03)', 
                      borderRadius: '8px', 
                      border: '1px solid rgba(139, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      animation: `fadeIn 0.5s ease forwards ${index * 0.1}s`
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(139, 0, 0, 0.05)'
                      e.target.style.borderColor = '#8B0000'
                      e.target.style.transform = 'translateY(-8px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(139, 0, 0, 0.03)'
                      e.target.style.borderColor = 'rgba(139, 0, 0, 0.1)'
                      e.target.style.transform = 'translateY(0)'
                    }}
                  >
                    <div style={{ fontSize: '32px', marginBottom: '15px' }}>{interest.icon}</div>
                    <h3 style={{ fontFamily: "'Cinzel', serif", color: '#E8E8E8', marginBottom: '10px', fontSize: '1.1rem' }}>
                      {interest.title}
                    </h3>
                    <p style={{ color: '#8B0000', fontWeight: '600', fontSize: '0.95rem' }}>{interest.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '40px 20px', marginTop: '60px', borderTop: '1px solid rgba(139, 0, 0, 0.2)' }}>
          <p style={{ fontFamily: "'Cinzel', serif", color: '#8B0000', fontSize: '1.1rem', marginBottom: '15px', fontStyle: 'italic' }}>
            "In darkness, we find our true selves"
          </p>
          <p style={{ color: '#AAAAAA', fontSize: '0.9rem', opacity: 0.7 }}>
            &copy; Made with passion for the dark arts
          </p>
        </footer>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        *::-webkit-scrollbar {
          width: 10px;
        }
        
        *::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        
        *::-webkit-scrollbar-thumb {
          background: #8B0000;
          border-radius: 5px;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: #B22222;
        }
        
        @media (max-width: 1024px) {
          .main-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .title {
            font-size: 2.2rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 10px !important;
          }
          
          .content-card {
            padding: 25px !important;
          }
          
          .interests-grid {
            grid-template-columns: 1fr !important;
          }
          
          .title {
            font-size: 1.8rem !important;
            letter-spacing: 2px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default App