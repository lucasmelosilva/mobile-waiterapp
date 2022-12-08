import { useState } from "react";
import { Button } from "../components/Button";
import { Cart } from "../components/Cart";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleResetOrder() {
    setSelectedTable("");
    setCartItems([]);
  }

  function handleAddToCartItem(product: Product) {
    if (!selectedTable) setisTableModalVisible(true);

    setCartItems((prevState) => {
      // Busca o index do produto caso ele exista
      const indexItem = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      // se o produto nao existir set o produto com quantity = 1
      if (indexItem < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      // caso ele nao exista cria um novo array para nao mexer no atual
      const newCartItems = [...prevState];

      // pega o item
      const item = newCartItems[indexItem];
      // modifica o item
      newCartItems[indexItem] = {
        ...item,
        quantity: item.quantity + 1,
      };

      // retorna o array criado com as modificaoes necessarias
      return newCartItems;
    });
  }

  function handleDrecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const indexItem = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      const item = prevState[indexItem];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(indexItem, 1);

        return newCartItems;
      }
      newCartItems[indexItem] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  return (
    <>
      <Container>
        <Header
          onCancelOrder={handleResetOrder}
          selectedTable={selectedTable}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <ManuContainer>
          <Menu onAddToCart={handleAddToCartItem} />
        </ManuContainer>
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={() => setisTableModalVisible(true)}>
              Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart
              onDecrement={handleDrecrementCartItem}
              onAdd={handleAddToCartItem}
              cartItems={cartItems}
              onConfirmOder={handleResetOrder}
            />
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
