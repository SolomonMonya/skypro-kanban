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
export function ColumnNeedToDo() {

    return (
        <div className="main__column">
            <div className="column__title">
                <p>Нужно сделать</p>
            </div>
            <div className="cards">
                <CardBox cardThemeColor={"_green"}  cardName={"Research"}/>
            </div>
        </div>
    )
}
export function ColumnInProgress() {

    return (
        <div className="main__column">
            <div className="column__title">
                <p>В работе</p>
            </div>
            <div className="cards">
                <CardBox cardThemeColor={"_green"}  cardName={"Research"}/>

                <CardBox cardThemeColor={"_purple"}  cardName={"Copywriting"}/>

                <CardBox cardThemeColor={"_orange"}  cardName={"Web Design"} />
            </div>
        </div>
    )
}
export function ColumnTesting() {

    return (
        <div className="main__column">
            <div className="column__title">
                <p>Тестирование</p>
            </div>
            <div className="cards">
                <CardBox cardThemeColor={"_green"}  cardName={"Research"}/>
            </div>
        </div>
    )
}
export function ColumnReady() {

    return (
        <div className="main__column">
            <div className="column__title">
                <p>Готово</p>
            </div>
            <div className="cards">
                <CardBox cardThemeColor={"_green"}  cardName={"Research"}/>
            </div>
        </div>
    )
}