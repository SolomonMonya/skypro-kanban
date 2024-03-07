import CardBox from "../Card/Card.jsx";
export function ColumnBox({ColumnName, ArrCards}) {

    const postsHtml = ArrCards.map((card) => {
        return <CardBox cardColor={card.color} cardName={card.cardName} key={card.key}/>
    })

    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{ColumnName}</p>
            </div>
            <div className="cards">
                {postsHtml}

            </div>
        </div>
    )
}