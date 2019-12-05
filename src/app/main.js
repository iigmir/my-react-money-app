import React from "react";
import MoneyForm from "./Form.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.emit_parent = this.emit_parent.bind(this)
        this.state = {};
    }
    emit_parent( payload ) {
        console.log( payload );
    }
    render() {
        return (
            <div className="App">
                <h1 className="ts center aligned header">Money app</h1>
                <div className="ts container">
                    <MoneyForm emit_parent={ this.emit_parent } />
                    {/* <MoneyForm name={ this.state.name } amount={ this.state.amount } amount_type={ this.state.amount_type } /> */}
                </div>
            </div>
        );
    }
}

export default App;
