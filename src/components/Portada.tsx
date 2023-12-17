import img from "../assets/portadaImg.png";

export default function Portada() {
   return (
      <div
         style={{
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover", // Cubrirá todo el área disponible
            backgroundPosition: "center", // Centra la imagen en el contenedor
            backgroundRepeat: "no-repeat", // Evita que la imagen se repita
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
         }}
      ></div>
   );
}
