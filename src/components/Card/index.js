import PropTypes from 'prop-types';
import {
  Container, CardContent, CardHeader, CardImage,
} from './styles';

export default function Card({
  title, overview, posterPath, name,
}) {
  return (
    <Container>
      <CardHeader>
        {title || name}
        <hr />
      </CardHeader>
      <CardImage
        style={{ backgroundImage: `url('${posterPath}')` }}
      />
      <CardContent>
        {overview}
      </CardContent>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  overview: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
};
