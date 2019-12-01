import React from "react";

class MoneyForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: "Example",
                amount: 10,
                amount_type: 0
            };
        
            this.change_state = this.change_state.bind(this);
            this.sent_info = this.sent_info.bind(this);
        }

        change_state({ state_name, event }) {
            let object = {};
            object[ state_name ] = event.target.value;
            this.setState( object );
        }
    
        sent_info(event) {
            console.log( this.state );
            event.preventDefault();
        }

        render() {
            return (
                <form className="ts form" onSubmit={ this.handleSubmit }>
                    <h2 className="ts dividing header">Money info</h2>
                    <div className="field">
                        <label>Info</label>
                        <div className="fields">
                            <div className="seven wide field">
                                <input type="text" placeholder="Name" value={ this.state.name } onChange={ event => this.change_state({ state_name: 'name', event }) } />
                            </div>
                            <div className="seven wide field">
                                <input type="text" placeholder="Amount" value={ this.state.amount } onChange={ event => this.change_state({ state_name: 'amount', event }) } />
                            </div>
                            <div className="seven wide field">
                            <select value={ this.state.amount_type }>
                                <option value="0">Expense</option>
                                <option value="1">Income</option>
                            </select>

                            </div>
                        </div>
                    </div>
                    <button type="submit"className="ts button">Submit</button>
                </form>
            );
        }
}

export default MoneyForm;