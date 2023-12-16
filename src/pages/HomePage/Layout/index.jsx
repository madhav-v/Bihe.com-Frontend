import Footer from "../../Header and Footer/footer";
import Header from "../../Header and Footer/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
