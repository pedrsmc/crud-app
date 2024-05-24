import styles from './User.module.css'

export function User({ user, deleteUser, openModal }) {
    return (
        <div className={styles.usersContainer}>
            <div className={styles.usersField}>
                <span>Nome: {user.name}</span>
                <span>E-mail: {user.email}</span>
                <span>Senha: {user.password}</span>
            </div>
            <div className={styles.btnField}>
                <button className={styles.removeBtn} onClick={() => deleteUser(user.id)}>Remover</button>
                <button className={styles.updateBtn} onClick={() => openModal(true, user.id)}>Editar</button>
            </div>
        </div>
    )
}
