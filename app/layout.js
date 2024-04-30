import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import connectMongo from "@/services/mongo";
import AuthProvider from "@/Providers/AuthProvider";
// import { dbConnect } from "@/services/mongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventry - Home ",
  description: "A One stop place for all  of your events ",
};

export default async function RootLayout({ children }) {
  // await dbConnect()
  await connectMongo()
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <main className="py-8">
            <section className="container">
              {children}
            </section>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
