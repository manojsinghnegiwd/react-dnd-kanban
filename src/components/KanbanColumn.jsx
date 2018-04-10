import React, { Component } from 'react';

import KanbanCard from './KanbanCard';

export default class KanbanColumn extends Component {

    render () {

        const {
            column = {}
        } = this.props;

        return (
            <div className="KanbanColumn">
                <div className="KanbanColumnHead">
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
                </div>
            </div>
        )

    }

}