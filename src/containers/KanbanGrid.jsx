import React, { Component} from 'react';

import KanbanColumn from '../components/KanbanColumn';

export default class KanbanGrid extends Component {

    state = {
        columns: [
            {
                id: 1,
                title: 'Active',
                color: '#3ced8b',
                cards: [
                    {
                        title: 'Card 1',
                        id: 1
                    }
                ]
            },
            {
                id: 2,
                title: 'Pending',
                color: '#f7b543',
                cards: [
                    {
                        title: 'Card 2',
                        id: 2
                    },
                    {
                        title: 'Card 3',
                        id: 3
                    }
                ]
            },
            {
                id: 3,
                title: 'Suspended',
                color: '#ed3c5f',
                cards: [
                    {
                        title: 'Card 5',
                        id: 5
                    }
                ]
            },
            {
                id: 4,
                title: 'Completed',
                color: '#50c8f9',
                cards: [
                    {
                        title: 'Card 6',
                        id: 6
                    },
                    {
                        title: 'Card 4',
                        id: 4
                    }
                ]
            }
        ]
    }

    addCard = ( columnId ) => {

        const columns = this.state.columns.slice();

        const columnIndex = columns.findIndex(column => column.id === columnId);

        if(columnIndex > -1) {

            let selectedColumn = columns[columnIndex];

            selectedColumn = {
                ...selectedColumn,
                cards: selectedColumn.cards.concat({
                    title: 'New Card',
                    id: new Date().getTime()
                })
            }

            columns[columnIndex] = selectedColumn;

            this.setState({
                columns
            })

        }

    }

    render () {

        const {
            columns = []
        } = this.state;

        return (
            <div className="kanbanGrid">
                {
                    columns.map(
                        (column, index) => <KanbanColumn
                            addCard={this.addCard}
                            column={column}
                        />
                    )
                }
            </div>
        )
    }

}