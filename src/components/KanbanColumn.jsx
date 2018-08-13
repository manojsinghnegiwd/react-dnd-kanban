import React, { Component } from 'react';

import KanbanCard from './KanbanCard';

export default class KanbanColumn extends Component {

    render () {

        const {
            column = {},
            addCard
        } = this.props;

        return (
            <div className="KanbanColumn">
                <div className="KanbanColumnHead"
                    style={{
                        backgroundColor: column.color
                    }}
                >
                    {column.title}
                </div>
                <div>
                    {
                        column.cards && column.cards.map(
                            (card, index) => <KanbanCard
                                key={index}
                                card={card}
                            />
                        )
                    }
                    <div
                        onClick={() => addCard(column.id)}
                        className="kanbanCard add-button"
                    >
                        +
                    </div>
                </div>
            </div>
        )

    }

}