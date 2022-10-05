import { Spacer, Text, useTheme,Link } from "@nextui-org/react"
import Image from "next/image"
import NextLink from 'next/link';


export const Navbar = () => {

  const { theme } = useTheme()

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 20px",
        backgroundColor: theme?.colors.gray200.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icono app"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            M
          </Text>
          <Text color="white" h3>
            erce
          </Text>
          <Text color="violet" h2>
            D
          </Text>
          <Text color="white" h3>
            itto
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />

      <Text color="white">Favoritos</Text>
    </div>
  );
}
