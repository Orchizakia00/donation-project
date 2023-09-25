import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "../singleCard/SingleCard";

const CardDetails = () => {

    const [card, setCard] = useState({});

    const { id } = useParams();
    const idInt = parseInt(id);
    const cards = useLoaderData();
    
    // console.log(cards);

    useEffect(() => {
        const findCard = cards?.find(card => card.id === idInt);
        setCard(findCard);
    }, [idInt, cards])

    return (
        <div className="w-full">
            <SingleCard card={card}></SingleCard>
        </div>
    );
};

export default CardDetails;