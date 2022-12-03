import { useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import {
  Container,
  CategoriesContainer,
  ManuContainer,
  Footer,
  FooterContainer,
} from "./styles";

export function Main() {
  const [isTableModalVisible, setisTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

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
          {selectedTable.length === 0 && (
            <Button onPress={() => setisTableModalVisible(true)}>
              Novo Pedido
            </Button>
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setisTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
