import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const CountryCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CountryCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const CountryInfoCard = ({ Country = {} }) => {
  const {
    name = "Canada",
    photos = [
      "/Users/aarushg/Desktop/development/Builds/DreamCatcherProject/dreamcatcher/assets/flags/Canada_Flag.png",
    ],
  } = Country;

  return (
    <CountryCard elevation={5}>
      <CountryCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
      </Info>
    </CountryCard>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
