import React from "react";
import MoneyForm from "./Form.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            all_stores: []
        };
    }
    emit_parent( object = { name: "Example", amount: 10, amount_type: 0 }) {
        let array = [ ...this.state.all_stores ];
        array.push( object );
        this.setState({ all_stores: array });
    }
    render() {
        return (
            <div className="App">
                <h1 className="ts center aligned header">Money app</h1>
                <div className="ts container">
                    <MoneyForm emit_parent={ this.emit_parent.bind(this) } />
                </div>
            </div>
        );
    }
}

export default App;
