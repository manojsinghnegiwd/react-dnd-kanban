import React from 'react';

const KanbanCard = ({
    card = {}
}) => {
    return (
        <div className="kanbanCard">
            {
                card.title
            }
        </div>
    )
}

export default KanbanCard;