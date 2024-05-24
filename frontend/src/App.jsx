import { useEffect, useRef, useState } from 'react'
import styles from './App.module.css'
import { User } from './components/User'
import { api } from './services/api'
import { Modal } from './components/Modal'

export function App() {
  const inputName = useRef(null)
  const inputEmail = useRef(null)
  const inputPassword = useRef(null)

  const [users, setUsers] = useState([])
  const [open, setOpen] = useState(false)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    loadUsers()
  }, [])

  function handleEventKey(event) {
    if (event.key === 'Enter') {
      verifyInputs()
    }
  }

  function verifyInputs() {
    const nameValue = inputName.current.value
    const emailValue = inputEmail.current.value
    const passwordValue = inputPassword.current.value

    if (!nameValue || !emailValue || !passwordValue) {
      alert("Preencha todos os campos.")
      return
    }

    const user = users.find(item => emailValue === item.email)

    if (user) {
      alert("Este e-mail já foi cadastrado.")
    } else {
      createUser(nameValue, emailValue, passwordValue)
    }
  }

  async function loadUsers() {
    const res = await api.get("/users")
    setUsers(res.data)
  }

  async function createUser(name, email, password) {
    await api.post("/create", {
      name,
      email,
      password
    })

    inputName.current.value = ""
    inputEmail.current.value = ""
    inputPassword.current.value = ""

    loadUsers()
  }

  async function deleteUser(id) {
    await api.delete(`/remove?id=${id}`)
    loadUsers()
  }

  function openModal(isOpen, id) {
    setOpen(isOpen)
    if (isOpen) {
      const user = users.find(item => id === item.id)
      setUserData(user)
    } else {
      setUserData(null)
    }
  }

  return (
    <main>
      {open && <Modal user={userData} openModal={openModal} loadUsers={loadUsers} />}
      <div className={styles.signUpContainer}>
        <input className={styles.inputs} type="text" placeholder="Digite o Nome" ref={inputName} onKeyDown={handleEventKey} />
        <input className={styles.inputs} type="email" placeholder="Digite o E-mail" ref={inputEmail} onKeyDown={handleEventKey} />
        <input className={styles.inputs} type="password" placeholder="Digite a Senha" ref={inputPassword} onKeyDown={handleEventKey} />
        <button className={styles.signUpBtn} onClick={verifyInputs}>Cadastrar</button>
      </div>
      <div>
        {users.length > 0 && users.map(item => (
          <User key={item.id} user={item} deleteUser={deleteUser} openModal={openModal} />
        ))}
      </div>
    </main>
  )
}
