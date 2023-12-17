import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alianzas from "./components/Alianzas";
import Anuncio from "./components/Anuncio";
import Comunidad from "./components/Comunidad";
import Contacto from "./components/Contacto";
import NuestroTrabajo from "./components/NuestroTrabajo";
import Portada from "./components/Portada";
import Proyectos from "./components/Proyectos";
import QuienesSomos from "./components/QuienesSomos";
import { ReactNode } from "react";

const theme = createTheme({
   typography: {
      fontFamily: ["Segoe UI Symbol"].join(", sans-serif"),
      h1: {
         fontWeight: "bold",
      },
      h2: {
         fontWeight: "bold",
      },
      h3: {
         fontWeight: "bold",
      },
      h4: {
         fontWeight: "bold",
      },
      h5: {
         fontWeight: "bold",
      },
      h6: {
         fontWeight: "bold",
      },
      body1: {
         fontWeight: "normal",
      },
      body2: {
         fontWeight: "normal",
      },
   },
});

const slides: { id: number; content: ReactNode }[] = [
   { id: 1, content: <Portada /> },
   { id: 2, content: <Anuncio /> },
   { id: 3, content: <QuienesSomos /> },
   { id: 4, content: <Proyectos /> },
   { id: 5, content: <NuestroTrabajo /> },
   { id: 6, content: <Comunidad /> },
   { id: 7, content: <Alianzas /> },
   { id: 8, content: <Contacto /> },
];

function App() {
   return (
      <ThemeProvider theme={theme}>
         <div style={{ overflowY: "scroll", overflowX: "hidden", height: "100vh" }}>
            {slides.map((element, index) => (
               <div
                  key={index}
                  style={{
                     height: "100vh", // 100% de la altura de la ventana de visualización
                     width: "100vw", // 100% de la anchura de la ventana de visualización
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     margin: "0 auto",
                  }}
               >
                  <Box>{element.content}</Box>
               </div>
            ))}
         </div>
      </ThemeProvider>
   );
}

export default App;
