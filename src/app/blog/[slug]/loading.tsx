'use client'

export default function PostLoading() {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 2rem' }}>
      <div style={{ 
        width: '120px',
        height: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '4px',
        marginBottom: '2rem',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }} />
      
      <header style={{ marginBottom: '3rem' }}>
        <div style={{ 
          width: '90%',
          height: '48px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          marginBottom: '1rem',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }} />
        
        <div style={{ 
          width: '150px',
          height: '14px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          marginBottom: '1rem',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ 
            width: '100%',
            height: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }} />
          <div style={{ 
            width: '85%',
            height: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }} />
        </div>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ 
              width: '100%',
              height: '17px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              animationDelay: `${i * 0.05}s`
            }} />
            <div style={{ 
              width: '95%',
              height: '17px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              animationDelay: `${i * 0.05}s`
            }} />
            <div style={{ 
              width: '88%',
              height: '17px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              animationDelay: `${i * 0.05}s`
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
    </article>
  )
}
