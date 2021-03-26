/* eslint-disable react/prop-types */
import { Content, Wrapper } from '../../components';
import { Cast, Information } from './styles';

export default function Details({ location }) {
  const { data } = location.state;
  const { cast } = data.credits;
  return (
    <>
      <Wrapper
        heightSize={40}
        backgroungURL={data.backdrop_path}
        colorWhite
      >
        <h1>{data.title || data.name}</h1>
      </Wrapper>
      <Content>
        <Information>
          <div>
            <ul>
              <li>
                Data de lançamento:
                {' '}
                <span>{data.release_date || data.first_air_date}</span>
              </li>
              <li>
                Sinopse
                <p>
                  {data.overview}
                </p>
              </li>
              {data.runtime ? (
                <li>
                  Duração:
                  {' '}
                  <span>
                    {data.runtime}
                    {' '}
                    minutos
                  </span>
                </li>
              ) : (
                <li>
                  Numero de Temporadas:
                  {' '}
                  <span>
                    {data.number_of_seasons}
                    {' '}
                  </span>
                </li>
              )}
              <li className="voteAverage">
                Nota
                <small>
                  {data.vote_average}
                </small>
              </li>
              <li>
                <a href={data.homepage}>Website</a>
              </li>
            </ul>
          </div>
          <div>
            <img src={data.poster_path} alt="Cartaz do Filme" />
          </div>
        </Information>
        <Cast>
          <h3>Elenco</h3>
          <div>
            {cast.slice(0, 5).map((item) => (
              <li
                key={item.id}
              >
                <p>{item.name}</p>
                <img src={item.profile_path} alt={`Foto de ${item.name}`} />
              </li>
            ))}
          </div>
        </Cast>
      </Content>
    </>
  );
}
