import "./styles/globals.css";
import Header from "./components/header/Header";
import { AppProvider } from "./context/AppContext";
import { Footer } from "./components/footer/Footer";

export const metadata = {
  title: "Sp Cars - Automotive",
  description: "Participa en el sorteo!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppProvider>
        <body>
          <Header />
          {children}
          <Footer/>
        </body>
      </AppProvider>
    </html>
  );
}
