import { IconCalendar } from "../icons/IconCalendar";
import {
  Card as StyledCard,
  CardDate,
  CardImage,
  CardText,
  CardTitle,
} from "./styles";

export const Card = ({ title, text, image, imageAltText, date }) => {
  return (
    <>
      <StyledCard>
        <CardDate>
          <IconCalendar />
          {date}
        </CardDate>
        <CardImage src={image} width={463} height={141} alt={imageAltText} />
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </StyledCard>
    </>
  );
};
