import { ColumnNoneStatus, ColumnNeedToDo, ColumnInProgress, ColumnTesting, ColumnReady} from "./Column";
function MainContainer() {
	return (

		<main className="main">
			<div className="container">

				<div className="main__block">
					<div className="main__content">

						<ColumnNoneStatus />
						<ColumnNeedToDo />
						<ColumnInProgress />
						<ColumnTesting />
						<ColumnReady />


					</div>

				</div>
			</div>
		</main>
	)
}

export default MainContainer