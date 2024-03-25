import { ColumnBox } from "../Column/Column";
import { Container } from "../Common/Common.styled";
import { HeadMain, MainBlock, MainContent } from "./Main.styled";

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
		<HeadMain>
		  <Container>
			<MainBlock>
			  <MainContent>
						{
				isLoaded? 'Loading' : 
							cards.map((cards, index) => (
								<ColumnBox title={arrColumns[index].columnName} ArrCards={cards} key={self.crypto.randomUUID()} />
							))
						}
			  </MainContent>
			</MainBlock>
		  </Container>
		</HeadMain>
	  );
}

export default Main