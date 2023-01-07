import React from "react";
import { FavoriteCard } from "./FavoriteCard";
import { Grid } from "@nextui-org/react";
interface Props {
  pokemons: number[];
}
export const FavoritePokemons: React.FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => {
        return <FavoriteCard id={id} key={id}></FavoriteCard>;
      })}
    </Grid.Container>
  );
};
