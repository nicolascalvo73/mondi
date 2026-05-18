'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useLanguage } from './LanguageContext'

interface DolarBlueData {
  moneda: string
  casa: string
  nombre: string
  compra: number
  venta: number
  fechaActualizacion: string
}

interface DolarBlueContextType {
  dolarBlue: DolarBlueData | null
  loading: boolean
}

const DolarBlueContext = createContext<DolarBlueContextType>({ dolarBlue: null, loading: false })

export function DolarBlueProvider({ children }: { children: ReactNode }) {
  const { language } = useLanguage()
  const [dolarBlue, setDolarBlue] = useState<DolarBlueData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (language !== 'es') {
      setDolarBlue(null)
      return
    }

    setLoading(true)
    fetch('https://dolarapi.com/v1/dolares/blue')
      .then((res) => res.json())
      .then((data: DolarBlueData) => {
        console.log('[Dólar Blue]', data)
        setDolarBlue(data)
      })
      .catch((err) => console.error('[Dólar Blue] Error al obtener cotización:', err))
      .finally(() => setLoading(false))
  }, [language])

  return (
    <DolarBlueContext.Provider value={{ dolarBlue, loading }}>
      {children}
    </DolarBlueContext.Provider>
  )
}

export function useDolarBlue() {
  return useContext(DolarBlueContext)
}
