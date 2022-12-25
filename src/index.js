import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"




const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

class TodoItem extends React.Component {
  render(){
    return(
      <li onClick={()=>this.props.saySomething(this.props.title)} key={this.props.id}>
        <input className="input-2" type="checkbox" /> {this.props.title}   {(this.props.done) ? <span>✅</span> : <span>❌</span>}  
      </li>
    )
  }
}

class ToDoApp extends React.Component {
  render(){
   

    return(
    <div className="container">
      <div className="main-div">
        <h1>TODOS</h1>
        <div>
        <input className="search" type="search" placeholder="  Create New Todo..."  />
        <button className="enter">↩</button>
        </div>
        <ul>
          {this.props.todos.map((todo)=>{
            const {id, title, done,} = todo;
           return <TodoItem saySomething={saySomething} id={id} title={title} done={done}/>
          })}
          
        </ul>
        <div className="footer">
            <h1 className="title-1">{this.props.count} items</h1>
          </div>
      </div>
    </div>
    )
  }
}

const todos = [
  {id:1, title:"Create New Todo...", done:false},
  {id:2, title:"Create New Todo...", done:true},
  {id:3, title:"Create New Todo...", done:false},
  {id:4, title:"Create New Todo...", done:true},
  {id:5, title:"Create New Todo...", done:false},
]

const saySomething = (something)=>{
  console.log(something)
}



root.render(<ToDoApp saySomething={saySomething} count={todos.length}  todos={todos} />);