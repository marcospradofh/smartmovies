import { Container, Tabs } from './styles';

export default function Content() {
  return (
    <Container>
      <Tabs>
        <Tabs.Header>
          <input type="radio" name="tabs" className="tabs" id="tab1" checked />
          <label htmlFor="tab1">Aba 1</label>
        </Tabs.Header>
        <Tabs.Content>
          Aba 1
        </Tabs.Content>

        <Tabs.Header>
          <input type="radio" name="tabs" className="tabs" id="tab2" />
          <label htmlFor="tab2">Aba 2</label>
        </Tabs.Header>
        {/* https://www.todoespacoonline.com/w/2014/10/sistema-de-abas-com-css3/ */}
        <Tabs.Content>
          Aba 2
        </Tabs.Content>

      </Tabs>
    </Container>
  );
}
