import "@/assets/styles/globals.css";
import AuthProviders from "@/components/AuthProviders";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "real state",
  keywords: "rent, real state, property, خانه, کرایه",
  description: "کرایه و خرید ملک در محله ما",
};
const layout = ({ children }) => {
  return (
    <AuthProviders>
      <html dir="rtl">
        <body className="text-gray-500">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProviders>
  );
};

export default layout;
