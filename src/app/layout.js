import Header from "./Layout/Header";
import "./globals.css";

export const metadata = {
  title: "Convin Engage",
  description: "Convin Engage Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <Header />
        {children}
      </body>
    </html>
  );
}
