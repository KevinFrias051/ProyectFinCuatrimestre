import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from "./componentes/header/Header";
import { Footer } from "./componentes/footer/Footer";

// Layout permite que Header y Footer este presente en todas las paginas que se muestren

export const metadata = {
  title: "Olavarría Municipio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
            {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
