import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from "./componentes/header/Header";
import { Footer } from "./componentes/footer/Footer";


export const metadata = {
  title: "Olavarría Municipio",
  description: "Generated by Next.js",
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
          <Header/>
          {children}
          <Footer/>
          </body>
      </html>
    </>
  );
}
