

function TaskCard({task}) {

    function eliminarTarea(){
       //alert(task.id)
       
    }
    return(
        <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button
        onClick={eliminarTarea}>Eliminar tarea

        </button>
    </div>
    )
}

export default TaskCard