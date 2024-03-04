import { ColumnBox } from "../ColumnFolder/Column";
function Main() {

	return (

		<main className="main">
			<div className="container">

				<div className="main__block">
					<div className="main__content">

						<ColumnBox ColumnName="Без статуса" ArrCards={[
							["_orange" , "Web Design"], 
							["_green" , "Research"], 
							["_orange" , "Web Design"], 
							["_purple" , "Copywriting"], 
							["_orange" , "Web Design"]
							]}/>
						<ColumnBox ColumnName="Нужно сделать" ArrCards={[
							["_green" , "Research"]   
							]}/>
						<ColumnBox ColumnName="В работе" ArrCards={[
							["_green" , "Research"], 
							["_purple" , "Copywriting"], 
							["_orange" , "Web Design"]
							]}/>
						<ColumnBox ColumnName="Тестирование" ArrCards={[
							["_green" , "Research"]   

							]}/>
						<ColumnBox ColumnName="Готово" ArrCards={[
							["_green" , "Research"]   

							]}/>


					</div>

				</div>
			</div>
		</main>
	)
}

export default Main