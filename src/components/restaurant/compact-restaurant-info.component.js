import React from "react";
import styled from "styled-components/native";
import { restaurantsRequest } from "../../services/restaurants/restaurants.service";
import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactRestaurantInfo = () => {
  return (
    <Item>
      <CompactImage source={{ uri: restaurantsRequest.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurantsRequest.name}
      </Text>
    </Item>
  );
};
