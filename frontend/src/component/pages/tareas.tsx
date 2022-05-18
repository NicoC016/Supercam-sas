import { useEffect, useState } from "react";
import { TaskDTO } from "../../api/dto/task.dto";
import { TaskApi } from "../../api/taskApi";
import {Navigator } from "../pages/navigator"

export function Tareas(){
    const [tasks,setTasks] = useState<TaskDTO[]>([])

    useEffect(() => {
      async function fetchAll() {
        const resp = await TaskApi.getAll();
        
        setTasks(resp)
        
      }
    },[])

    return (
        <div>
            <Navigator></Navigator>
            <br />
            <br />
            <br />
            <ul className="bg-dark">
                {
                    tasks.map(task => {
                        return <li>{task.title}</li>
                    })
                }
            </ul>
        </div>
    )
}