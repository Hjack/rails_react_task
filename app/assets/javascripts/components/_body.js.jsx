class Body extends React.Component {
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
  
  render(){
    return(
    <div>
      <AllTasks tasks={this.state.tasks} /> 
    </div>
    )
  }
}

