'use client'

export default function BlogLoading() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
      {/* Header skeleton */}
      <div style={{ 
        width: '120px',
        height: '48px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        marginBottom: '0.5rem',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }} />
      <div style={{ 
        width: '400px',
        height: '28px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        marginBottom: '3rem',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }} />
      
      {/* Cards skeleton */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '2rem' 
      }}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div 
            key={i}
            style={{ 
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              backgroundColor: '#fff',
            }}
          >
            {/* Title skeleton */}
            <div style={{ 
              width: '80%',
              height: '24px',
              backgroundColor: '#f0f0f0',
              borderRadius: '6px',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              animationDelay: `${i * 0.1}s`
            }} />
            
            {/* Excerpt skeleton */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ 
                width: '100%',
                height: '16px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                animationDelay: `${i * 0.1}s`
              }} />
              <div style={{ 
                width: '90%',
                height: '16px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                animationDelay: `${i * 0.1}s`
              }} />
              <div style={{ 
                width: '70%',
                height: '16px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                animationDelay: `${i * 0.1}s`
              }} />
            </div>
            
            {/* Date skeleton */}
            <div style={{ 
              width: '120px',
              height: '14px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              animationDelay: `${i * 0.1}s`
            }} />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}
