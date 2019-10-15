class AllTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount(){
    fetch('/tasks.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ tasks: data }) });
  }
  render() {
    var tasks = this.state.tasks.map((task) => {
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
}

