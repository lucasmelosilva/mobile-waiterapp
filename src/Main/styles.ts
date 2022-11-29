import { Platform, StatusBar } from "react-native";

import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
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

export const FooterContainer = styled.SafeAreaView`
  background: #fff;
`;

export const Footer = styled.View`
  min-height: 120px;
`;
