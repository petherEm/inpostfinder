import "../styles/globals.css";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />

      <body className="min-h-screen bg-slate-900">
        <Header />

        <main className="">
        {children}
        </main>
        
      </body>
    </html>
  );
}
