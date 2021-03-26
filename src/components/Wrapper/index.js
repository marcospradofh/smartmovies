/* eslint-disable react/prop-types */
import { Container } from './styles';

export default function Wrapper({
  children, heightSize, backgroungURL, colorWhite,
}) {
  return (
    <Container
      heightSize={heightSize}
      backgroungURL={backgroungURL}
      colorWhite={colorWhite}
    >
      {children}
    </Container>
  );
}
