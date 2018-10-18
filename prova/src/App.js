import React, {Component} from 'react';

class App extends Component {
    state = {
        currentToDo:'',
        toDo: []
    }
    
    onSubmitText(event) {
        event.preventDefault();
        this.setState({toDo:[...this.state.toDo, this.state.currentToDo]});
    }

    onChangeText(event) {
        this.setState({currentToDo: event.target.value});
    }

    render(){
        return(
            <div>
                <h1>Lista</h1>
                <form onSubmit={(event)=> this.onSubmitText(event)}>
                    <input onChange={(event)=> this.onChangeText(event)} type="text" id="dato"></input>
                    <button>Submit</button>
                </form>
                <ol>
                    {
                        this.state.toDo.map((toDo,index)=> <li key={index}>{toDo}</li>)
                    }
                </ol>    
            </div>
        );
    }
}

export default App;