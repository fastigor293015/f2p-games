import { Link } from "react-router-dom";
import Container from "./container";
import NavigationMenu from "./navigation-menu";
import { Button } from "./ui/button";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 shadow-md bg-background">
      <Container className="flex items-center justify-between gap-3 h-16">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src="/logo-header.png" alt="freetogame" />
          </Link>
          <NavigationMenu />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost">
            Log In
          </Button>
          <Button variant="outline">
            Join Free
          </Button>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}

export default Header;
