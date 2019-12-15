import React from 'react';

class InspirationalMessage extends React.Component {
    state = {
        inspirations: [
            { id: 1, inspiration: "Life is a balance of holding on and letting go - Rumi" },
            { id: 2, inspiration: "Laughter is the fireworks of the soul - Josh Billings" },
            { id: 3, inspiration: "To appreciate the beauty of a snowflake it is necessary to stand out in the cold - Aristotle" },
            { id: 4, inspiration: "You can cut all the flowers, but you cannot keep spring from coming - Pablo Neruda" },
            { id: 5, inspiration: "To fall in love with yourself is the first secret to happiness - Robert Morley" },
            { id: 6, inspiration: "You cannot serve from an empty vessel - Eleanor Brownn" },
        ],
    }



    render() {


        let RandomMessage = this.state.inspirations[Math.floor(Math.random() * this.state.inspirations.length)];


        return (
            <div className="title-message">{RandomMessage.inspiration}</div>
        )
    }
}

export default InspirationalMessage;