const AllTasks = (props) => {

var tasks = props.tasks.map((task) => {
    return(
      <div key={task.id}>
        <p>{task.title}</p>
        <p>{task.due_date}</p>
      </div>
    )
  })
  
  return(
    <div>
      {tasks}
    </div>
  )
}

