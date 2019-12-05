import React from "react";

class MoneyTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render() {
        const th_render = () => (
            <tr>
                <th>#</th>
                <th>姓名</th>
                <th>英文暱稱</th>
            </tr>
        );
        return (
            <table className="ts table">
                <thead>
                    { th_render() }
                </thead>
                <tbody>
                    {
                        this.props.list.map( (item, index) =>
                        {
                            return (
                                <tr key={ index }>
                                    <td>1</td>
                                    <td>item</td>
                                    <td>Caris</td>
                                </tr>
                            );
                        })
                    }
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