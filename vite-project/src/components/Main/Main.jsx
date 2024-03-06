import { ColumnBox } from "../Column/Column";
function Main( ) {
//            ^ 
// 			  |
// если будем менять этот массив, то я его возьму через передоваемый элемент в функцию, от куда мы её вызываем.

	const arrColumn = [
		["Без статуса",	[["_orange" , "Web Design"], 
			["_green" , "Research"], 
			["_orange" , "Web Design"], 
			["_purple" , "Copywriting"], 
			["_orange" , "Web Design"]]], 
		["Нужно сделать", [["_green" , "Research"]]],
		[ "В работе", [["_green" , "Research"], 
				["_purple" , "Copywriting"], 
				["_orange" , "Web Design"]]],
		[ "Тестирование", [["_green" , "Research"]]],
		[ "Готово", [["_green" , "Research"]]]
	];
	
	const arrColumnBox = arrColumn.map((column) => {
    
		let uuid = self.crypto.randomUUID();
		return <ColumnBox ColumnName={column[0]} ArrCards={column[1]} key={uuid}/>
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