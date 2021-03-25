import PropTypes from 'prop-types';
import {
  Container, CardHeader, CardImage, CardAnimation,
} from './styles';

export default function Card({
  title, posterPath, name,
}) {
  return (
    <CardAnimation>
      <Container>
        <CardHeader>
          {title || name}
          <hr />
        </CardHeader>
        <CardImage>
          <img src={posterPath} alt="Cartaz do Filme" />
        </CardImage>
      </Container>
    </CardAnimation>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  posterPath: PropTypes.string.isRequired,
};
