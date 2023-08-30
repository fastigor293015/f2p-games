import { SelectSection } from "@/components/shared/select";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const platformItems: SelectSection[] = [
  {
    title: "Browse by platform:",
    items: [
      {
        value: "pc",
        label: "Windows (PC)",
      },
      {
        value: "browser",
        label: "Browser (Web)",
      },
      {
        value: "",
        label: "All Platforms",
      },
    ]
  }
];

export const genreItems: SelectSection[] = [
  {
    title: "Browse by genre:",
    items: [
      {
        value: "mmo",
        label: "MMO",
      },
      {
        value: "mmorpg",
        label: "MMORPG",
      },
      {
        value: "shooter",
        label: "Shooter",
      },
      {
        value: "strategy",
        label: "Strategy",
      },
      {
        value: "moba",
        label: "Moba",
      },
      {
        value: "card",
        label: "Card Games",
      },
      {
        value: "racing",
        label: "Racing",
      },
      {
        value: "sports",
        label: "Sports",
      },
      {
        value: "social",
        label: "Social",
      },
      {
        value: "fighting",
        label: "Fighting",
      },
      {
        value: "",
        label: "All Genres",
      },
    ]
  },
  {
    title: "Popular tags:",
    items: [
      {
        value: "mmofps",
        label: "MMOFPS",
      },
      {
        value: "action-rpg",
        label: "Action RPG",
      },
      {
        value: "sandbox",
        label: "Sandbox",
      },
      {
        value: "open-world",
        label: "Open World",
      },
      {
        value: "survival",
        label: "Survival",
      },
      {
        value: "battle-royale",
        label: "Battle Royale",
      },
      {
        value: "mmotps",
        label: "MMOTPS",
      },
      {
        value: "anime",
        label: "Anime",
      },
      {
        value: "pvp",
        label: "PvP",
      },
      {
        value: "pve",
        label: "PvE",
      },
      {
        value: "pixel",
        label: "Pixel",
      },
      {
        value: "mmorts",
        label: "MMORTS",
      },
      {
        value: "fantasy",
        label: "Fantasy",
      },
      {
        value: "sci-fi",
        label: "Sci-Fi",
      },
      {
        value: "action",
        label: "Action",
      },
      {
        value: "voxel",
        label: "Voxel",
      },
      {
        value: "zombie",
        label: "Zombie",
      },
      {
        value: "turn-based",
        label: "Turn-Based",
      },
      {
        value: "first-person",
        label: "First Person View",
      },
      {
        value: "third-person",
        label: "Third Person View",
      },
      {
        value: "top-down",
        label: "Top-Down View",
      },
      {
        value: "3d",
        label: "3D Graphics",
      },
      {
        value: "2d",
        label: "2D Graphics",
      },
      {
        value: "tank",
        label: "Tank",
      },
      {
        value: "space",
        label: "Space",
      },
      {
        value: "sailing",
        label: "Sailing",
      },
      {
        value: "side-scroller",
        label: "Side Scroller",
      },
      {
        value: "superhero",
        label: "Superhero",
      },
      {
        value: "permadeath",
        label: "Permadeath",
      },
    ]
  }
];

export const sortItems: SelectSection[] = [
  {
    title: "Sort By:",
    items: [
      {
        value: "",
        label: "Relevance",
      },
      {
        value: "popularity",
        label: "Popularity",
      },
      {
        value: "release-date",
        label: "Release Date",
      },
      {
        value: "alphabetical",
        label: "Alphabetical",
      },
    ]
  }
];
