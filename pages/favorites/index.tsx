import { Card, Grid } from "@nextui-org/react";
import React from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";
import { FavoritePokemons } from "./../../components/pokemon";

const FavoritesPage = () => {
  const [isFavoritePokemons, setIsFavoritePokemons] = React.useState<number[]>(
    []
  );
  React.useEffect(() => {
    setIsFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemon - Favoritos">
      {isFavoritePokemons.length === 0 ? (
        <NoFavorites></NoFavorites>
      ) : (
        <FavoritePokemons pokemons={isFavoritePokemons}></FavoritePokemons>
      )}
    </Layout>
  );
};

export default FavoritesPage;
