import { useRef } from 'react'
import styles from './Modal.module.css'
import { api } from '../../services/api'

export function Modal({ user, openModal, loadUsers }) {
    const updateName = useRef(null)
    const updateEmail = useRef(null)
    const updatePassword = useRef(null)

    async function updateUser() {
        const name = updateName.current.value
        const email = updateEmail.current.value
        const password = updatePassword.current.value

        if (!name || !email || !password) {
            alert("Informe todos os campos.")

            if (!name) {
                updateName.current.value = user.name
            }

            if (!email) {
                updateName.current.value = user.email
            }

            if (!password) {
                updateName.current.value = user.name
            }

            return
        }

        await api.put(`/update?id=${user.id}`, {
            name,
            email,
            password
        })

        loadUsers()
        openModal(false)
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h1>Editar cliente</h1>
                <input type="text" defaultValue={user.name} ref={updateName} />
                <input type="email" defaultValue={user.email} ref={updateEmail} />
                <input type="password" defaultValue={user.password} ref={updatePassword} />
                <div className={styles.btnField}>
                    <button onClick={updateUser}>Salvar</button>
                    <button onClick={() => openModal(false)}>Sair</button>
                </div>
            </div>
        </div>
    )
}
