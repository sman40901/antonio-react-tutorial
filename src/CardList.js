import {cardsList} from './constants';
import Card from "./Card"
import { useState } from 'react';

function CardList(){
    const [cards, setCards] = useState (cardsList);

    const cardListItem = cards.map((card, index) => {
        return (
            // Return the desired HTML for each ingredient
            <>
               <Card key={index}
                    header={card.header}
                    suite={card.suite}
                    img={card.img}
               />
            </>
        );
    });

    return (
        <>
            { cardListItem }
        </>
    );
}

export default CardList