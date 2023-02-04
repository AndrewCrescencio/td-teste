import { Card as StyledCard, CardImage, CardText, CardTitle } from "./styles";

export const Card = ({ title, text, image, imageAltText }) => {
  return (
    <>
      <StyledCard>
        <CardImage src={image} width={463} height={141} alt={imageAltText} />
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </StyledCard>
    </>
  );
};
