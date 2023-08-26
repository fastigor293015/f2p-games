import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
