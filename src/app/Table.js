import React from "react";

class MoneyTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    delete_item = index =>
    {
        this.props.delete_item( index );
    }

    shouldComponentUpdate(next_props)
    {
        const different_table = this.props.list !== next_props.list;
        return different_table;
    }

    render()
    {
        const thead_render = () => (
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Delete</th>
            </tr>
        );
        const tbody_render = list =>
        {
            return list.map( (item, index) =>
            {
                const index_render = id => id + 1;
                const type_render = id => id === 1 ? "Income" : "Expense";
                return (
                    <tr key={ index }>
                        <td>{ index_render( index ) }</td>
                        <td>{ item.name }</td>
                        <td>{ type_render( item.type ) }</td>
                        <td>{ item.amount }</td>
                        <td> <i className="remove icon" onClick={ () => this.delete_item(index) }></i> </td>
                    </tr>
                );
            })
        };
        const tfoot_render = list => {
            const total_exp = list => {
                const lst = list.filter( item => item.amount_type === 0 );
                if( lst.length < 1 ) { return 0; }
                return lst.map( prop => prop.amount ).reduce( (x, y) => x + y );
            };
            const total_inc = list => {
                const lst = list.filter( item => item.amount_type === 1 );
                if( lst.length < 1 ) { return 0; }
                return lst.map( prop => prop.amount ).reduce( (x, y) => x + y );
            };
            return (
                <tr>
                    <th>Total income:{ total_inc( list ) }</th>
                    <th>Total expense:{ total_exp( list ) }</th>
                    <th>未到人數：3</th>
                    <th>未到人數：3</th>
                    <th>未到人數：3</th>
                </tr>
            );
        };
        return (
            <table className="ts table">
                <thead>{ thead_render() }</thead>
                <tbody>{ tbody_render( this.props.list ) }</tbody>
                <tfoot>{ tfoot_render( this.props.list ) }</tfoot>
            </table>
        );
    }
}

export default MoneyTable;