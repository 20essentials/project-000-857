import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider, Container, Group, Image } from "@mantine/core";

const iconsRow = [
  "./icons/campofrio.webp",
  "./icons/asus.webp",
  "./icons/heineken.webp",
  "./icons/google-pixel.webp",
  "./icons/volkswagen.webp",
  "./icons/universal.webp",
  "./icons/takis.webp",
  "./icons/spotify.webp",
  "./icons/mediamarkt.webp",
  "./icons/maggi.webp",
  "./icons/mcdonalds.webp",
  "./icons/pccomp.webp",
  "./icons/dia.webp",
  "./icons/oysho.webp",
  "./icons/milanuncios.webp",
  "./icons/nike.webp",
  "./icons/elpozo.webp",
  "./icons/infojobs.webp",
  "./icons/adidas.webp",
  "./icons/central-lechera.webp",
  "./icons/logitech.webp",
  "./icons/samsung.webp",
  "./icons/riot.webp"
];

function Row({ reverse, bg }) {
  return (
    <Group
      justify="center"
      gap="xl"
      style={{
        width: "100%",
        height: "50%",
        overflow: "hidden",
        flexDirection: reverse ? "row-reverse" : "row",
        backgroundColor: bg ? "#252525" : "transparent",
        backgroundImage: bg ? "url('assets/a31.avif')" : "none",
        backgroundSize: bg ? "80%" : "auto",
        backgroundRepeat: bg ? "repeat" : "no-repeat",
        animation: bg ? "move 60s linear infinite" : "none",
      }}
    >
      {iconsRow.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt="icon-logo"
          w={150}
          h={150}
          radius="md"
          fit="contain"
        />
      ))}
    </Group>
  );
}

export default function App() {
  return (
    <MantineProvider>
      <Container
        fluid
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundImage: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
        }}
      >
        <Row reverse bg />
        <Row reverse={false} bg />
      </Container>
      <style>
        {`
          @keyframes move {
            0% { background-position: 0; }
            100% { background-position: -1000%; }
          }
        `}
      </style>
    </MantineProvider>
  );
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
createRoot(rootEl).render(<App />);
