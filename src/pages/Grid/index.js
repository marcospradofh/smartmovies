/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import {
  MdFirstPage, MdLastPage, MdNavigateNext, MdNavigateBefore,
} from 'react-icons/md';
import {
  Content, Wrapper, Card, ModalCard,
} from '../../components';
import { Container } from './styles';
import { GET_DATA } from '../../api';

export default function Grid() {
  const [type, setType] = useState('filmes');
  const [data, setData] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalActive, setModalActive] = useState(null);
  const [page, setPage] = useState(1);

  async function getData(typeAPI, actualPage) {
    const { url, options } = GET_DATA(typeAPI, actualPage);
    const res = await fetch(url, options);
    const { results, total_pages: totalPages } = await res.json();
    setData(results);
    setLastPage(totalPages);
    return totalPages;
  }

  useEffect(() => {
    getData(type, page);
  }, [type, page]);

  useEffect(() => {
    document.title = 'smartMOVIES';
  }, []);

  return (
    <>
      <Wrapper>
        <h2>Bem vindo ao smartMOVIES!</h2>
        <p>Encontre os melhores filmes e séries disponiveis.</p>
      </Wrapper>
      <Content>
        <Container>
          {modalActive
      && <ModalCard cardId={selectedCard} type={type} setModalActive={setModalActive} />}
          <Container.Wrapper active={type}>
            <div>
              <li
                className="movies"
                onClick={(e) => setType('filmes')}
              >
                Filmes

              </li>
            </div>
            <div>
              <li
                className="series"
                onClick={(e) => setType('series')}
              >
                Séries

              </li>
            </div>
          </Container.Wrapper>
          <Container.Navigation>
            <div>
              <button
                type="button"
                disabled={page === 1}
                onClick={(e) => setPage(1)}
              >
                <MdFirstPage size={32} />
              </button>
              <button
                type="button"
                disabled={page === 1}
                onClick={(e) => setPage((prev) => prev - 1)}
              >
                <MdNavigateBefore size={32} />
              </button>
            </div>
            <p>
              Página
              {' '}
              {page}
            </p>
            <div>
              <button
                type="button"
                disabled={page === lastPage}
                onClick={(e) => setPage((prev) => prev + 1)}
              >
                <MdNavigateNext size={32} />
              </button>
              <button
                type="button"
                disabled={page === lastPage}
                onClick={(e) => setPage(lastPage)}
              >
                <MdLastPage size={32} />
              </button>
            </div>
          </Container.Navigation>
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
      </Content>
    </>
  );
}
