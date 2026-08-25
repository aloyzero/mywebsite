import { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    setIsLoaded(true)
    controls.start('visible')
  }, [controls])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      rotateY: -10 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 0,
      boxShadow: "0 20px 40px rgba(139, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    tap: {
      scale: 0.98
    }
  }

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 1.1,
      filter: "grayscale(100%) blur(5px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "grayscale(20%) contrast(1.1) blur(0px)",
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    hover: {
      filter: "grayscale(0%) contrast(1.2)",
      scale: 1.03,
      transition: {
        duration: 0.3
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -30,
      textShadow: "0 0 0px rgba(255,0,0,0)"
    },
    visible: {
      opacity: 1,
      y: 0,
      textShadow: [
        "0 0 0px rgba(255,0,0,0)",
        "0 0 20px rgba(255,0,0,0.5)",
        "0 0 10px rgba(255,0,0,0.3)"
      ],
      transition: {
        duration: 1.5,
        ease: "easeOut",
        textShadow: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      x: 10,
      backgroundColor: "rgba(139, 0, 0, 0.15)",
      borderColor: "#8B0000",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  }

  const interestCardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateX: 90 
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }),
    hover: {
      y: -15,
      rotateY: 5,
      boxShadow: "0 25px 50px rgba(139, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  }

  const iconVariants = {
    hidden: { 
      rotate: -180,
      scale: 0 
    },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3
      }
    },
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }

  const quoteVariants = {
    hidden: { 
      opacity: 0,
      scaleX: 0 
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const footerVariants = {
    hidden: { 
      opacity: 0,
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5
      }
    }
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const glowAnimation = {
    textShadow: [
      "0 0 10px rgba(139, 0, 0, 0.3)",
      "0 0 20px rgba(139, 0, 0, 0.6)",
      "0 0 10px rgba(139, 0, 0, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }

  const interests = [
    { icon: '🎵', title: 'Music', desc: 'Black Metal, DSBM, Folk Metal, Death Metal' },
    { icon: '🎨', title: 'Art', desc: 'Gore art, album covers' },
    { icon: '📖', title: 'Literature', desc: 'Romanticism, Mythology, Fiction' },
    { icon: '💻', title: 'Technology', desc: 'Web development, programming' },
    { icon: '🌲', title: 'Atmosphere', desc: 'Darkness, calm, Forests' },
    { icon: '🎮', title: 'Gaming', desc: 'Atmospheric, immersive experiences' }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: '100vh',
        background: '#000',
        backgroundImage: `
          radial-gradient(circle at 15% 50%, rgba(139, 0, 0, 0.05) 0%, transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(139, 0, 0, 0.03) 0%, transparent 25%)
        `
      }}
    >
      {/* Floating Particles Background */}
      <AnimatePresence>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'fixed',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '2px',
              height: '2px',
              background: `rgba(139, 0, 0, ${0.1 + Math.random() * 0.2})`,
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 0
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </AnimatePresence>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{
            textAlign: 'center',
            marginBottom: '60px',
            padding: '60px 40px',
            background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(26, 26, 26, 0.85) 100%)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(139, 0, 0, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(45deg, transparent 30%, rgba(139, 0, 0, 0.1) 50%, transparent 70%)',
              animation: 'shine 3s infinite linear'
            }}
          />
          
          <motion.h1
            variants={titleVariants}
            animate={glowAnimation}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '3.5rem',
              fontWeight: '900',
              color: '#E8E8E8',
              textTransform: 'uppercase',
              letterSpacing: '6px',
              marginBottom: '20px',
              position: 'relative'
            }}
          >
            BOUCHRA'S REALM
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            animate={floatingAnimation}
            style={{
              fontFamily: "'Crimson Text', serif",
              fontSize: '1.4rem',
              color: '#AAAAAA',
              fontStyle: 'italic',
              opacity: 0.9
            }}
          >
            Where Technology Meets Darkness
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #8B0000, transparent)',
              margin: '40px auto 0',
              maxWidth: '400px',
              borderRadius: '3px'
            }}
          />
        </motion.header>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '40px', marginBottom: '60px' }}
        >
          {/* Sidebar */}
          <aside>
            {/* Profile Card */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(139, 0, 0, 0.3)',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <img 
                  src="https://i.pinimg.com/1200x/e6/f5/fa/e6f5fa87d12edb41d70e8d0c1e6c82a1.jpg" 
                  alt="Bouchra"
                  style={{ width: '100%', height: '320px', objectFit: 'cover' }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.8) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '20px'
                  }}
                >
                  <motion.div
                    animate={pulseAnimation}
                    style={{
                      color: '#8B0000',
                      fontSize: '14px',
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: '2px'
                    }}
                  >
                    VIEW PROFILE
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <div style={{ padding: '30px' }}>
                <motion.h3
                  variants={itemVariants}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: '#8B0000',
                    marginBottom: '25px',
                    fontSize: '0.9rem',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    ⚡
                  </motion.span>
                  PROFILE
                </motion.h3>
                
                <motion.div
                  variants={containerVariants}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <motion.div
                    variants={itemVariants}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingBottom: '15px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      position: 'relative'
                    }}
                  >
                    <span style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>Name:</span>
                    <motion.span
                      animate={glowAnimation}
                      style={{ 
                        color: '#E8E8E8', 
                        fontWeight: '700', 
                        fontFamily: "'Cinzel', serif",
                        fontSize: '1.1rem'
                      }}
                    >
                      Bouchra
                    </motion.span>
                    <motion.div
                      style={{
                        position: 'absolute',
                        bottom: '-1px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, #8B0000, transparent)'
                      }}
                      animate={{ width: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  <motion.div
                    variants={itemVariants}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingBottom: '15px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <span style={{ color: '#AAAAAA', fontSize: '0.9rem' }}>Age:</span>
                    <span style={{ color: '#E8E8E8', fontWeight: '600', fontFamily: "'Cinzel', serif" }}>19</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              style={{
                marginTop: '30px',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(139, 0, 0, 0.3)',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              <motion.h3
                variants={itemVariants}
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: '#8B0000',
                  marginBottom: '25px',
                  fontSize: '0.9rem',
                  letterSpacing: '3px',
                  textTransform: 'uppercase'
                }}
              >
                CONNECT
              </motion.h3>
              
              <motion.div
                variants={containerVariants}
                style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
              >
                <motion.a
                  href="https://www.instagram.com/toxicsad18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '18px 22px',
                    background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.05) 0%, rgba(139, 0, 0, 0.02) 100%)',
                    border: '1px solid rgba(139, 0, 0, 0.2)',
                    borderRadius: '12px',
                    color: '#E8E8E8',
                    textDecoration: 'none',
                    fontFamily: "'Crimson Text', serif",
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    variants={iconVariants}
                    style={{ fontSize: '24px' }}
                  >
                    📱
                  </motion.div>
                  <span style={{ flex: 1, fontWeight: '600' }}>Instagram</span>
                  <motion.div
                    initial={{ x: -100 }}
                    whileHover={{ x: 0 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(139, 0, 0, 0.1), transparent)',
                      opacity: 0
                    }}
                  />
                </motion.a>
                
                <motion.a
                  href="https://open.spotify.com/user/317fhg27j7dxnoh7k5cxvgcd4jgm"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '18px 22px',
                    background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.05) 0%, rgba(139, 0, 0, 0.02) 100%)',
                    border: '1px solid rgba(139, 0, 0, 0.2)',
                    borderRadius: '12px',
                    color: '#E8E8E8',
                    textDecoration: 'none',
                    fontFamily: "'Crimson Text', serif",
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    variants={iconVariants}
                    style={{ fontSize: '24px' }}
                  >
                    🎧
                  </motion.div>
                  <span style={{ flex: 1, fontWeight: '600' }}>Spotify</span>
                  <motion.div
                    initial={{ x: -100 }}
                    whileHover={{ x: 0 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(139, 0, 0, 0.1), transparent)',
                      opacity: 0
                    }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          </aside>

          {/* Main Content Area */}
          <main>
            {/* About Section */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
                borderRadius: '20px',
                border: '1px solid rgba(139, 0, 0, 0.3)',
                padding: '50px',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
                marginBottom: '40px'
              }}
            >
              <motion.div
                variants={containerVariants}
              >
                <motion.h2
                  variants={itemVariants}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: '#E8E8E8',
                    fontSize: '2.2rem',
                    marginBottom: '30px',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    position: 'relative',
                    paddingBottom: '20px'
                  }}
                >
                  <motion.span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100px',
                      height: '4px',
                      background: 'linear-gradient(90deg, #8B0000, transparent)',
                      borderRadius: '2px'
                    }}
                    animate={{ width: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  ABOUT ME
                </motion.h2>
                
                <motion.p
                  variants={itemVariants}
                  style={{
                    color: '#AAAAAA',
                    lineHeight: '1.9',
                    marginBottom: '25px',
                    fontSize: '1.1rem'
                  }}
                >
                  An English student who discovered a profound love for language alongside 
                  a lifelong passion for technology. Since day one, I've been captivated 
                  by the endless possibilities of technology in all its forms.
                </motion.p>
                
                <motion.p
                  variants={itemVariants}
                  style={{
                    color: '#AAAAAA',
                    lineHeight: '1.9',
                    marginBottom: '40px',
                    fontSize: '1.1rem'
                  }}
                >
                  Gaming, programming, graphic design — each represents a different 
                  language through which I express myself. By embracing both technical 
                  and creative pursuits, I've found a path that defies conventional 
                  boundaries and celebrates authentic self-expression.
                </motion.p>
                
                <motion.blockquote
                  variants={quoteVariants}
                  style={{
                    padding: '40px',
                    background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.08) 0%, rgba(139, 0, 0, 0.03) 100%)',
                    borderLeft: '6px solid rgba(139, 0, 0, 0.5)',
                    borderRadius: '12px',
                    fontStyle: 'italic',
                    color: '#E8E8E8',
                    fontSize: '1.3rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                      position: 'absolute',
                      top: '-50px',
                      right: '-50px',
                      fontSize: '100px',
                      opacity: 0.05,
                      color: '#8B0000'
                    }}
                  >
                    "
                  </motion.div>
                  "Gaming, programming, graphic design — each is a language. 
                  Each tells a story. I speak them all."
                </motion.blockquote>
              </motion.div>
            </motion.div>

            {/* Interests Section */}
            <motion.div
              variants={containerVariants}
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
                borderRadius: '20px',
                border: '1px solid rgba(139, 0, 0, 0.3)',
                padding: '50px',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)'
              }}
            >
              <motion.h2
                variants={itemVariants}
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: '#E8E8E8',
                  fontSize: '2.2rem',
                  marginBottom: '40px',
                  textTransform: 'uppercase',
                  letterSpacing: '4px',
                  position: 'relative',
                  paddingBottom: '20px'
                }}
              >
                MY INTERESTS
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #8B0000, transparent)',
                    borderRadius: '2px'
                  }}
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.h2>
              
              <motion.div
                variants={containerVariants}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}
              >
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    custom={index}
                    variants={interestCardVariants}
                    whileHover="hover"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.05) 0%, rgba(139, 0, 0, 0.02) 100%)',
                      borderRadius: '16px',
                      border: '1px solid rgba(139, 0, 0, 0.2)',
                      padding: '35px',
                      position: 'relative',
                      overflow: 'hidden',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                      style={{
                        fontSize: '48px',
                        marginBottom: '25px',
                        textAlign: 'center'
                      }}
                    >
                      {interest.icon}
                    </motion.div>
                    
                    <motion.h3
                      variants={itemVariants}
                      style={{
                        fontFamily: "'Cinzel', serif",
                        color: '#E8E8E8',
                        marginBottom: '15px',
                        fontSize: '1.3rem',
                        textAlign: 'center'
                      }}
                    >
                      {interest.title}
                    </motion.h3>
                    
                    <motion.p
                      variants={itemVariants}
                      style={{
                        color: '#8B0000',
                        fontWeight: '700',
                        fontSize: '1rem',
                        textAlign: 'center',
                        lineHeight: '1.6'
                      }}
                    >
                      {interest.desc}
                    </motion.p>
                    
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, transparent 30%, rgba(139, 0, 0, 0.05) 50%, transparent 70%)',
                        opacity: 0
                      }}
                      whileHover={{ opacity: 1, x: ['0%', '100%'] }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </main>
        </motion.div>

        {/* Footer */}
        <motion.footer
          variants={footerVariants}
          initial="hidden"
          animate="visible"
          style={{
            textAlign: 'center',
            padding: '60px 40px',
            marginTop: '80px',
            borderTop: '1px solid rgba(139, 0, 0, 0.3)',
            background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 26, 26, 0.8) 100%)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: '-100px',
              left: '-100px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(139, 0, 0, 0.1) 0%, transparent 70%)',
              borderRadius: '50%'
            }}
          />
          
          <motion.p
            variants={itemVariants}
            animate={glowAnimation}
            style={{
              fontFamily: "'Cinzel', serif",
              color: '#8B0000',
              fontSize: '1.4rem',
              marginBottom: '25px',
              fontStyle: 'italic',
              position: 'relative'
            }}
          >
            "In darkness, we find our true selves"
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            style={{
              color: '#AAAAAA',
              fontSize: '1rem',
              opacity: 0.7,
              marginBottom: '30px'
            }}
          >
            &copy; Made with passion for the dark arts
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            animate={pulseAnimation}
            style={{
              width: '80px',
              height: '80px',
              margin: '0 auto',
              background: 'radial-gradient(circle, rgba(139, 0, 0, 0.3) 0%, transparent 70%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{
                width: '20px',
                height: '20px',
                background: '#8B0000',
                borderRadius: '50%'
              }}
            />
          </motion.div>
        </motion.footer>
      </div>

      {/* Global Styles */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(0deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(360deg); }
        }
        
        *::-webkit-scrollbar {
          width: 12px;
        }
        
        *::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        
        *::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #8B0000, #660000);
          border-radius: 6px;
          border: 2px solid #0a0a0a;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #B22222, #8B0000);
        }
        
        @media (max-width: 1024px) {
          .main-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 15px !important;
          }
          
          .header h1 {
            font-size: 2rem !important;
            letter-spacing: 3px !important;
          }
          
          .content-card {
            padding: 30px !important;
          }
          
          .interests-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default App