import style from './Header.module.css';

export function Header() {
    return(
        <header className={style.Header}>
            <img src="src/assets/todo-logo.svg" />
        </header>
    )
}