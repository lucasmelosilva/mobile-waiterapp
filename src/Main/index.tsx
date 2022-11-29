import { Header } from "../components/Header";
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

        <CategoriesContainer></CategoriesContainer>

        <ManuContainer></ManuContainer>
      </Container>

      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
    </>
  );
}
