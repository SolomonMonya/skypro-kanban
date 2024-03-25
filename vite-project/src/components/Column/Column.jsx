import CardBox from "../Card/Card.jsx";
import { ColumnCards, ColumnTitle, ColumnTitleText, MainColumn } from "./Column.styled";

export function ColumnBox({ title, ArrCards }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <ColumnTitleText>{title}</ColumnTitleText>
      </ColumnTitle>
      <ColumnCards>
        {ArrCards.map((card) => (
          <CardBox
            name={card.title}
            theme={card.theme}
            date={card.date}
            key={card.id}
          />
        ))}
      </ColumnCards>
    </MainColumn>
  );
}
