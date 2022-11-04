import style from './App.module.css';
import { Form } from './Form/Form';
import { Header } from './Header/Header'


export function App() {
    return (
        <div className={style.container}>
            <Header />
            <Form />
        </div>
    )
}