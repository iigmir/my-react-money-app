import React from "react";
import MoneyForm from "./Form.js";
import MoneyTable from "./MoneyTable.js";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            list: [{ name: "Example", amount: 10, amount_type: 0 }]
        };
    }
    emit_parent( object = { name: "Example", amount: 10, amount_type: 0 })
    {
        let array = [ ...this.state.list ];
        array.push( object );
        this.setState({ list: array });
    }
    render() {
        return (
            <div className="App">
                <h1 className="ts center aligned header">Money app</h1>
                <div className="ts container">
                    <MoneyForm emit_parent={ this.emit_parent.bind(this) } />
                    <div className="ts divider"></div>
                    <MoneyTable list={ this.state.list } />
                </div>
            </div>
        );
    }
}

export default App;
