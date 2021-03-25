import { Container, Logo, SearchBox } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <Logo>
          <h1>
            <span>smart</span>
            MOVIES
          </h1>
        </Logo>
        <SearchBox />
      </div>
    </Container>
  );
}
