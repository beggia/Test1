import React, {Component} from 'react';

class App extends Component {
    state = {
        counter: 0
    }

    render(){
        return(
            <div>
                <h1>Contatore: {this.state.counter}</h1>
                <button onClick={()=> this.setState({counter:this.state.counter+1})}>
                    Incremento
                </button>
                <button onClick={()=> this.setState({counter:this.state.counter-1})}>
                    Decremento
                </button>
            </div>
        );
    }
}

export default App;