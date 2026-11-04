'use client'

import { useState, type FormEvent } from 'react'
import type { Content } from './content'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm({ c }: { c: Content['contact']['form'] }) {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('botcheck')) return
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Nuevo contacto de ${data.get('name')} — Mondi Studio`,
          name: data.get('name'),
          email: data.get('email'),
          tipo_de_proyecto: data.get('type'),
          message: data.get('message'),
        }),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} data-fade>
      <label className="field">
        {c.name}
        <input name="name" type="text" required autoComplete="name" placeholder={c.namePh} />
      </label>
      <label className="field">
        {c.email}
        <input name="email" type="email" required autoComplete="email" placeholder={c.emailPh} />
      </label>
      <label className="field field--full">
        {c.type}
        <select name="type" defaultValue={c.types[0]}>
          {c.types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="field field--full">
        {c.message}
        <textarea name="message" rows={3} required placeholder={c.messagePh} />
      </label>
      <input className="hp" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form__actions">
        <button className="btn btn--solid" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? c.sending : c.send}
        </button>
      </div>
      <div role="status" aria-live="polite" className="form__status">
        {status === 'success' && <p className="form__status--ok">{c.ok}</p>}
        {status === 'error' && <p className="form__status--error">{c.error}</p>}
      </div>
    </form>
  )
}
