// @/Data/NavData.ts

export interface NavItem {
  id: string;
  item: string;
  link: string; // Optional: Add '?' if the link is not always required
}

const NavData: NavItem[] = [
  {
    id: "1",
    item: "Ranking",
    link: "/ranking",
  },
  {
    id: "2",
    item: "Special Editions",
    link: "/special-editions?rankingCategory=editors-choice",
  },
  {
    id: "3",
    item: "About Us",
    link: "/about",
  },
  {
    id: "4",
    item: "Insider...",
    link: "/",
  },
];

export default NavData;
