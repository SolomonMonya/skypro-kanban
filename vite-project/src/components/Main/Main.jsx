import { ColumnBox } from "../Column/Column";

function Main({cards,isLoaded}) {
	const arrColumns = [
		{
			columnName: "Без статуса",

		},
		{
			columnName: "Нужно сделать",

		},
		{
			columnName: "В работе",

		},
		{
			columnName: "Тестирование",

		},
		{
			columnName: "Готово",

		}
	];


	return (
		<main className="main">
			<div className="container">
				<div className="main__block">
					<div className="main__content">
					{
            			isLoaded? 'Loading' : 
						cards.map((cards, index) => (
							<ColumnBox ColumnName={arrColumns[index].columnName} ArrCards={cards} key={self.crypto.randomUUID()} />
						))
					}
					</div>
				</div>
			</div>
		</main>
	)
}

export default Main