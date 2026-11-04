'use client'

export default function PostLoading() {
  return (
    <article style={{ maxWidth: '50rem', margin: '0 auto', padding: '5rem 2rem' }}>
      <div style={{
        width: '7.5rem',
        height: '1.25rem',
        backgroundColor: '#f0ede9',
        borderRadius: '0.25rem',
        marginBottom: '2rem',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }} />

      <header style={{ marginBottom: '3rem' }}>
        <div style={{
          width: '90%',
          height: '3rem',
          backgroundColor: '#f0ede9',
          borderRadius: '0.5rem',
          marginBottom: '1rem',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }} />

        <div style={{
          width: '9.375rem',
          height: '0.875rem',
          backgroundColor: '#f0ede9',
          borderRadius: '0.25rem',
          marginBottom: '1rem',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[1, 2].map((i) => (
            <div key={i} style={{
              width: i === 2 ? '85%' : '100%',
              height: '1.25rem',
              backgroundColor: '#f0ede9',
              borderRadius: '0.25rem',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }} />
          ))}
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[100, 95, 88].map((w, j) => (
              <div key={j} style={{
                width: `${w}%`,
                height: '1.0625rem',
                backgroundColor: '#f0ede9',
                borderRadius: '0.25rem',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                animationDelay: `${i * 0.05}s`
              }} />
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </article>
  )
}
