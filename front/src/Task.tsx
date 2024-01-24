import Task from "../../common/task"

export default function Task(task: Task) {
    return (
        <>
            <div>{task.description}</div>
            Fini ?
            <input type="checkbox" checked={task.finished} />
        </>
    )
}