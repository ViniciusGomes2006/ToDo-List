import style from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    task: string;
    checked: boolean;
    id: number;
    functionChange: (id: number) => void;
    functionDelete: (id: number) => void;

}

export function Task({task, checked, id, functionChange, functionDelete}: TaskProps) {

    const styleTask = `${ checked ? "checked" : "unchecked"}`

    return(
        <div className={style.task}>
            <label className={style.checkInput}>
                <input type="checkbox" defaultChecked={checked} onClick={(event) => functionChange(id)}/>
                <span className={style.checkbox} ></span>
            </label>
            <p id={styleTask}>{task}</p>
            <button>
                <Trash size={20} onClick={() => functionDelete(id)}/>
            </button>
        </div>
    )
}