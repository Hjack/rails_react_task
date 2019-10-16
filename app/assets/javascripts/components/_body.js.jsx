class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(title, due_date){
    console.log(title, due_date)
  }

  componentDidMount(){
    fetch('/tasks.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ tasks: data }) });
  }
  
  render(){
    return(
    <div>
      <NewTask handleFormSubmit={this.handFormSubmit}/>
      <AllTasks tasks={this.state.tasks} /> 
    </div>
    )
  }
}

