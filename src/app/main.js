import React from "react";
import MoneyForm from "./Form.js";
import MoneyTable from "./MoneyTable.js";

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            list: [{ name: "Example", amount: 10, amount_type: 0 }],
        };
    }

    add_item( object = { name: "Example", amount: 10, amount_type: 0 })
    {
        let array = [ ...this.state.list ];
        array.push( object );
        this.setState({ list: array });
    }

    delete_item( index = NaN )
    {
        let list = [ ...this.state.list ];
        if( isNaN( index ) ) return;
        list.splice( index, 1 );
        this.setState({ list });
    }

    render() {
        return (
            <div className="App">
                <h1 className="ts center aligned header">Money app</h1>
                <div className="ts container">
                    <MoneyForm add_item={ this.add_item.bind(this) } />
                    <div className="ts divider"></div>
                    <MoneyTable list={ this.state.list } delete_item={ this.delete_item.bind(this) } />
                </div>
            </div>
        );
    }
}

export default App;
