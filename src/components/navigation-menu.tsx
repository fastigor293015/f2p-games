import { forwardRef } from "react";
import {
  NavigationMenu as ShadcnNavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Item {
  title: string;
  href: string;
}

const freeGamesItems: Item[] = [
  {
    title: "MMORPG",
    href: "https://www.freetogame.com/games/mmorpg",
  },
  {
    title: "Shooter",
    href: "https://www.freetogame.com/games/shooter",
  },
  {
    title: "MOBA",
    href: "https://www.freetogame.com/games/moba",
  },
  {
    title: "Anime",
    href: "https://www.freetogame.com/games/anime",
  },
  {
    title: "Battle Royale",
    href: "https://www.freetogame.com/games/battle-royale",
  },
  {
    title: "Strategy",
    href: "https://www.freetogame.com/games/strategy",
  },
  {
    title: "Fantasy",
    href: "https://www.freetogame.com/games/fantasy",
  },
  {
    title: "Sci-Fi",
    href: "https://www.freetogame.com/games/sci-fi",
  },
  {
    title: "Card Games",
    href: "https://www.freetogame.com/games/card",
  },
  {
    title: "Racing",
    href: "https://www.freetogame.com/games/racing",
  },
  {
    title: "Fighting",
    href: "https://www.freetogame.com/games/fighting",
  },
  {
    title: "Social",
    href: "https://www.freetogame.com/games/social",
  },
  {
    title: "Sports",
    href: "https://www.freetogame.com/games/sports",
  },
];

const browserGamesItems: Item[] = [
  {
    title: "Browser MMORPG",
    href: "https://www.freetogame.com/browser/mmorpg",
  },
  {
    title: "Browser Shooter",
    href: "https://www.freetogame.com/browser/shooter",
  },
  {
    title: "Browser Anime",
    href: "https://www.freetogame.com/browser/anime",
  },
  {
    title: "Browser Strategy",
    href: "https://www.freetogame.com/browser/strategy",
  },
  {
    title: "Browser Fantasy",
    href: "https://www.freetogame.com/browser/fantasy",
  },
  {
    title: "Browser Sci-Fi",
    href: "https://www.freetogame.com/browser/sci-fi",
  },
  {
    title: "Browser Racing",
    href: "https://www.freetogame.com/browser/racing",
  },
  {
    title: "Browser Social",
    href: "https://www.freetogame.com/browser/social",
  },
  {
    title: "Browser Sports",
    href: "https://www.freetogame.com/browser/sports",
  },
];

interface NavigationMenuProps {
  className?: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ className }) => {
  return (
    <ShadcnNavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Free Games
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-1 p-4 md:w-[400px] md:grid-cols-2">
              {freeGamesItems.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Browser Games
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-1 p-4 md:w-[400px] md:grid-cols-2">
              {browserGamesItems.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {/* <MoreHorizontal /> */}
            Explore
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-6 md:w-[200px] lg:w-[300px] lg:grid-cols-1">
              <li>
                <h3 className="text-sm font-bold">Explore our other sites</h3>
              </li>
              <ListItem href="https://www.gamerpower.com" title="GamerPower" />
              <ListItem href="https://www.mmobomb.com" title="MMOBomb" />
              <ListItem href="https://www.gamescamp.com" title="GamesCamp" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="https://www.freetogame.com/giveaways" className={navigationMenuTriggerStyle()}>
            Special Offers
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="https://www.freetogame.com/top" className={navigationMenuTriggerStyle()}>
            Top 2023
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </ShadcnNavigationMenu>
  )
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href = "", title, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        to={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 truncate text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        {title}
      </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavigationMenu;
