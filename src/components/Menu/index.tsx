import { FlatList } from "react-native";

import { products } from "../../mocks/products";
import { formatCurreny } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { Text } from "../Text";

import {
  Product,
  ProductImage,
  ProductDatails,
  Separator,
  AddToCartButton,
} from "./styled";

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(product) => product._id}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage
            source={{
              uri: `http://192.168.0.7:3001/uploads/${product.imagePath}`,
            }}
          />
          <ProductDatails>
            <Text weight="600">{product.name}</Text>
            <Text size={14} color="#666" style={{ marginVertical: 8 }}>
              {product.description}
            </Text>
            <Text size={14} weight="600">
              {formatCurreny(product.price)}
            </Text>
          </ProductDatails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
