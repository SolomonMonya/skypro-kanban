import { ColumnBox } from "../Column/Column";
function Main() {
	//            ^ 
	// 			  |
	// если будем менять этот массив, то я его возьму через передоваемый элемент в функцию, от куда мы её вызываем.

	const getUuid = () => {
		return self.crypto.randomUUID();
	}
	const arrCards = [
		[
			{
				key: getUuid(),
				color: "_orange",
				cardName: "Web Design",

			},
			{
				key: getUuid(),
				color: "_green",
				cardName: "Research",

			},
			{
				key: getUuid(),
				color: "_orange",
				cardName: "Web Design",

			},
			{
				key: getUuid(),
				color: "_purple",
				cardName: "Copywriting",

			},
			{
				key: getUuid(),
				color: "_orange",
				cardName: "Web Design",

			},
		],
		[
			{
				key: getUuid(),
				color: "_green",
				cardName: "Research",

			},
		],
		[
			{
				key: getUuid(),
				color: "_green",
				cardName: "Research",

			},
			{
				key: getUuid(),
				color: "_purple",
				cardName: "Copywriting",

			},
			{
				key: getUuid(),
				color: "_orange",
				cardName: "Web Design",

			},
		],
		[
			{
				key: getUuid(),
				color: "_green",
				cardName: "Research",

			},
		],
		[
			{
				key: getUuid(),
				color: "_green",
				cardName: "Research",

			},
		]
	]
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

	const arrColumnBox = arrCards.map((cards, index) => {
		let uuid = self.crypto.randomUUID();
		return <ColumnBox ColumnName={arrColumns[index].columnName} ArrCards={cards} key={uuid} />
	});

	return (

		<main className="main">
			<div className="container">

				<div className="main__block">
					<div className="main__content">

						{arrColumnBox}


					</div>

				</div>
			</div>
		</main>
	)
}

export default Main