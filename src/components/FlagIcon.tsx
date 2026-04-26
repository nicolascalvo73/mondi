'use client'

interface FlagIconProps {
  code: 'ar' | 'us' | 'br'
}

export default function FlagIcon({ code }: FlagIconProps) {
  const style: React.CSSProperties = { display: 'block', flexShrink: 0 }

  if (code === 'ar') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={24} height={24} style={style}>
        <path fill="#80BDE3" d="M0 160h512v192H0z" />
        <path fill="#fff" d="M0 64h512v96H0zm0 288h512v96H0z" />
        <circle cx="256" cy="256" r="48" fill="#F6B800" />
        <path fill="#F6B800" d="M256 208l4.8 14.7h15.5l-12.5 9.1 4.8 14.7-12.5-9.1-12.5 9.1 4.8-14.7-12.5-9.1h15.5z" />
      </svg>
    )
  }

  if (code === 'us') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={24} height={24} style={style}>
        <path fill="#B22234" d="M0 0h512v512H0z" />
        <path fill="#fff" d="M0 39h512v39H0zm0 78h512v39H0zm0 78h512v39H0zm0 78h512v39H0zm0 78h512v39H0zm0 78h512v39H0zm0 78h512v39H0z" />
        <path fill="#3C3B6E" d="M0 0h256v273H0z" />
      </svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={24} height={24} style={style}>
      <path fill="#009B3A" d="M0 0h512v512H0z" />
      <path fill="#FEDF00" d="M256 64l224 192-224 192L32 256z" />
      <circle cx="256" cy="256" r="80" fill="#002776" />
    </svg>
  )
}
