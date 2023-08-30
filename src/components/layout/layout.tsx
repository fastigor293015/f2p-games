import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-12">
        {children}
      </main>
    </>
  );
}

export default Layout;
