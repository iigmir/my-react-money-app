import React from "react";
import MoneyForm from "./Form.js";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1 className="ts center aligned header">Money app</h1>
                <div className="ts container">
                    <MoneyForm />
                </div>
            </div>
        );
    }
}

export default App;
