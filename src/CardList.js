import {cardsList} from './constants';
import Card from "./Card"
import { useState } from 'react';
import './CardList.scss';

function CardList(){
    const [cards, setCards] = useState (cardsList);

    const cardListItem = cards.map((card, index) => {
        return (
            // Return the desired HTML for each card
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
        <table className="mainTable">
         <tr>
            <th>Card</th>
            <th>Suite</th>
            <th>Image</th>
         </tr>
            { cardListItem }
        </table>
    );
}

export default CardList