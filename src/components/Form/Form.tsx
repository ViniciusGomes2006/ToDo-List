import style from './Form.module.css'
import { PlusCircle, ClipboardText } from 'phosphor-react'
import { Task } from '../Task/Task'
import { useState, FormEvent, ChangeEvent } from 'react'

interface TasksInfo {
    id: number;
    task: string;
    checked: boolean;
}

export function Form() {
    
    const[tasks , TasksSet] = useState<TasksInfo[]>([])
    const[newTask, setNewTask] = useState('')
    
    const couter =  tasks.filter(data => data.checked === true).length

    function handleCreateNewTask(event:FormEvent) {
        event.preventDefault()
        TasksSet([...tasks, {
            id: tasks.length,
            task: newTask,
            checked: false
        }])
        setNewTask('')
    }

    function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
    }

    function changeValueChecked(id:number) {
        const find = tasks.findIndex(task => task.id === id)
        const newState = tasks.map(task=> {
            if (task.id === find) {
                return {...task, checked: !task.checked};
            }
        return task;
        });

        TasksSet(newState)
    }
    
    function deleteTask(id:number) {
        const newState = tasks.filter(task => task.id != id)
        TasksSet(newState)
    }

    return (
        <div className={style.content}>
            <form onSubmit={handleCreateNewTask}>
                <input type="text" placeholder='Adicione uma nova tarefa' value={newTask} onChange={handleNewTaskChange} />
                <button type="submit">Criar <PlusCircle className={style.plusCircle}/></button>
            </form>

            <div className={style.tasks}>
                <div className={style.info}>
                    <p>Tarefas Criadas <span>{tasks.length}</span></p>
                    <p>Concluídas <span>{couter} de {tasks.length}</span></p>
                </div>

                {/* <div className={style.noTasks}>
                    <ClipboardText size={56} color="#333333" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie e organize seus itens a fazer</span>
                </div> */}
                {tasks.map(data => {
                    return (
                        <Task 
                        key={data.id} 
                        task={data.task} 
                        checked={data.checked} 
                        id={data.id} 
                        functionChange={changeValueChecked}
                        functionDelete={deleteTask}
                        />
                    )
                })}
            </div>
        </div>
    )
}