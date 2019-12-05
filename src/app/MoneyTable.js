import React from "react";

class MoneyTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    shouldComponentUpdate(next_props)
    {
        const different_table = this.props.list !== next_props.list;
        return different_table;
    }

    render() {
        const th_render = () => (
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Delete</th>
            </tr>
        );
        const td_render = list => list.map( (item, index) =>
        {
            const index_render = id => id + 1;
            const type_render = id => id === 1 ? "Income" : "Expense";
            return (
                <tr key={ index }>
                    <td>{ index_render( index ) }</td>
                    <td>{ item.name }</td>
                    <td>{ type_render( item.type ) }</td>
                    <td>{ item.amount }</td>
                    <td> <i className="remove icon"></i> </td>
                </tr>
            );
        });
        return (
            <table className="ts table">
                <thead>
                    { th_render() }
                </thead>
                <tbody>
                    { td_render( this.props.list ) }
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="3">未到人數：3</th>
                    </tr>
                </tfoot>
            </table>
        );
    }
}

export default MoneyTable;