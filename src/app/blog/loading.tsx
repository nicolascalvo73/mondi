'use client'

export default function BlogLoading() {
  return (
    <div style={{ maxWidth: '75rem', margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{
        width: '7.5rem',
        height: '3rem',
        backgroundColor: '#f0ede9',
        borderRadius: '1rem',
        marginBottom: '0.5rem',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }} />
      <div style={{
        width: '25rem',
        height: '1.75rem',
        backgroundColor: '#f0ede9',
        borderRadius: '1rem',
        marginBottom: '3rem',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))',
        gap: '2rem'
      }}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            style={{
              border: '0.0625rem solid rgba(224, 191, 180, 0.25)',
              borderRadius: '1rem',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              backgroundColor: '#fff',
            }}
          >
            <div style={{
              width: '80%',
              height: '1.5rem',
              backgroundColor: '#f0ede9',
              borderRadius: '0.375rem',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              animationDelay: `${i * 0.1}s`
            }} />

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[1, 2, 3].map((j) => (
                <div key={j} style={{
                  width: j === 3 ? '70%' : j === 2 ? '90%' : '100%',
                  height: '1rem',
                  backgroundColor: '#f0ede9',
                  borderRadius: '0.25rem',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  animationDelay: `${i * 0.1}s`
                }} />
              ))}
            </div>

            <div style={{
              width: '7.5rem',
              height: '0.875rem',
              backgroundColor: '#f0ede9',
              borderRadius: '0.25rem',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              animationDelay: `${i * 0.1}s`
            }} />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}
