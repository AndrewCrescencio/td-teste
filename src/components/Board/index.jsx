import { cards } from "@/mocks/cards";
import { Card } from "../Card";
import { CardsContainer, Container, Header, Title } from "./styles";

export const Board = () => {
  return (
    <Container>
      <Header>
        <Title>Olá Usuário</Title>
      </Header>
      <CardsContainer>
        {cards.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </CardsContainer>
    </Container>
  );
};
