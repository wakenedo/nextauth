import { FormEvent, useState } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    }

    console.log(data)
  }


  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="email" value={email} autoComplete="current-email" onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} autoComplete="current-password" onChange={e => setPassword(e.target.value)} />
      <button type={"submit"}>Login</button>
    </form>
  )
}

