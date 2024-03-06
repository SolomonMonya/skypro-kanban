import CardBox from "../Card/Card.jsx";
export function ColumnBox({ColumnName, ArrCards}) {

    const postsHtml = ArrCards.map((card) => {
        
        let uuid = self.crypto.randomUUID();
        return <CardBox cardColor={card[0]} cardName={card[1]} key={uuid}/>
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