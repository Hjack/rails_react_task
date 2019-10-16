const NewTask = (props) => {
  let formFields = {}

  return(
    <form onSubmit={ (e) => {props.handleFormSubmit(formFields.title.value,
    formFields.due_date.value); e.target.reset();}}>
      <input ref={input => formFields.title = input}
      placeholder='Enter the title of the task' />
      <input ref={input => formFields.due_date = input}
      placeholder='Enter the due date' />
      <button>Submit</button>
    </form>
  )
}
