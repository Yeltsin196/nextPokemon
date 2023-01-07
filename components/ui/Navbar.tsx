import { useTheme, Text, Spacer } from "@nextui-org/react";

import React from "react";
import Image from "next/image";
import Link from "next/link";
export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        }
        alt="icono de la app"
        width={70}
        height={70}
      ></Image>
      <Link href="/" passHref>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </div>
      </Link>

      <Spacer css={{ flex: 1 }}></Spacer>
      <Link href="/favorites" passHref>
        <div style={{ marginRight: "10px" }}>
          <Text color="white" h3>
            Favoritos
          </Text>
        </div>
      </Link>
    </div>
  );
};
