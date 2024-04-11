import React, { useEffect, useState } from 'react';
import Card from './Card';

const Body = (props) => {
    // console.log(props.timeCal);
    const [cardDatas, setCardDatas] = useState([]);
    // const [cart, setCart] = useState([]);

    useEffect(() => {
        const url = 'data.json';
        fetch(url).then(res => res.json()).then(data => setCardDatas(data))
    }, [])

    return (
        <div className=''>
            {
                cardDatas.map(cardData =>
                    <Card
                        timeCal={props.timeCal}
                        bookMarkedClick={props.bookMarkedClick}
                        key={cardData.id} cardData={cardData}>
                    </Card>)
            }
        </div>
    );
};

export default Body;