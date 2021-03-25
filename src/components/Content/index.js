/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { GET_DATA } from '../../api';
import Card from '../Card';
import ModalCard from '../ModalCard';
import { Container } from './styles';

export default function Content() {
  const [type, setType] = useState('filmes');
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalActive, setModalActive] = useState(null);

  async function getData(typeAPI) {
    const { url, options } = GET_DATA(typeAPI, 1);
    const res = await fetch(url, options);
    const { results } = await res.json();
    setData(results);
  }

  useEffect(() => {
    getData(type);
  }, [type]);

  return (
    <Container>
      {modalActive
      && <ModalCard cardId={selectedCard} type={type} setModalActive={setModalActive} />}
      <Container.Wrapper>
        <div>
          <li onClick={(e) => setType('filmes')}>Filmes</li>
        </div>
        <div>
          <li onClick={(e) => setType('series')}>Séries</li>
        </div>
      </Container.Wrapper>
      <Container.Content>
        {data.map((card) => (
          <div
            key={card.id}
            onClick={(e) => {
              setSelectedCard(card.id);
              setModalActive(true);
            }}
          >
            <Card
              id={card.id}
              title={card.title}
              name={card.name}
              overview={card.overview}
              posterPath={card.poster_path}
              voteAverage={card.vote_average}
            />
          </div>
        ))}
      </Container.Content>
    </Container>
  );
}
