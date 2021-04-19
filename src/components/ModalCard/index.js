/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GET_DATA_ID } from '../../api';
import { Modal } from './styles';

export default function ModalCard({ cardId, type, setModalActive }) {
  const [data, setData] = useState([]);

  async function getData() {
    const { url, options } = GET_DATA_ID(type, cardId);
    const res = await fetch(url, options);
    setData(await res.json());
  }

  useEffect(() => {
    getData();
  }, [cardId]);

  return (
    <div onClick={(e) => { setModalActive(false); }}>
      <Modal>
        <Modal.Container>
          <Modal.Header imageURL={data.backdrop_path}>
            <h3>{data.title || data.name}</h3>
          </Modal.Header>
          <Modal.Content>
            <div>
              <p>
                <strong>Data de lançamento:</strong>
                {' '}
                {data.release_date || data.first_air_date}
              </p>
              <span>
                {data.vote_average}
              </span>
            </div>
            <div>
              <p>{data.overview}</p>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <Link to={{
              pathname: `/${type}/details/${cardId}`,
              state: { data },
            }}
            >
              Mais informações
            </Link>
          </Modal.Footer>
        </Modal.Container>
      </Modal>
    </div>
  );
}

ModalCard.propTypes = {
  cardId: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  setModalActive: PropTypes.func,
};
