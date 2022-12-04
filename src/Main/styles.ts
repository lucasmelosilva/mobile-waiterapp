import { StatusBar } from "react-native";

import styled from "styled-components/native";
import { isAndroid } from "../utils/isAndroid";

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid() ? `${StatusBar.currentHeight}px` : 0};
  background: #fafafa;
  flex: 1;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const ManuContainer = styled.View`
  height: 73px;
  flex: 1;
`;

export const Footer = styled.View`
  padding: 16px 24px;
  min-height: 120px;
  background: #fff;
`;

export const FooterContainer = styled.SafeAreaView``;
