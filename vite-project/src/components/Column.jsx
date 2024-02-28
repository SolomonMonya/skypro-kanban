import { CardResearch, CardWebDesign, CardCopywriting} from "./Card";
export function ColumnNoneStatus() {

    return (
        <div className="main__column column">
            <div className="column__title">
                <p>Без статуса</p>
            </div>
            <div className="cards">
                <CardWebDesign />

                <CardResearch />

                <CardWebDesign />

                <CardCopywriting />

                <CardWebDesign />
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
                <CardResearch />
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
                <CardResearch />

                <CardCopywriting />

                <CardWebDesign />
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
                <CardResearch />
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
                <CardResearch />
            </div>
        </div>
    )
}