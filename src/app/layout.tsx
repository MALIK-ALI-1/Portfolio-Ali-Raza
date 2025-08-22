// app/layout.tsx
import "./globals.css";
import NeonCursor from "@/components/NeonCursor";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Code with Ali",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="popins">
        <Navbar />
        <NeonCursor /> 
        {children}
        <Contact /> 
        <Footer />
      </body>
    </html>
  );
}
