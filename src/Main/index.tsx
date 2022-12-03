import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import {
  Container,
  CategoriesContainer,
  ManuContainer,
  Footer,
  FooterContainer,
} from "./styles";

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <ManuContainer>
          <Menu />
        </ManuContainer>
      </Container>

      <Footer>
        <FooterContainer>
          <Button onPress={() => alert("botao clicado")}>Novo Pedido</Button>
        </FooterContainer>
      </Footer>
    </>
  );
}
