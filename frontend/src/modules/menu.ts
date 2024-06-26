interface IListItem {
  id: number;
  title: string;
  url: string;
  icon: string;
}

interface IMenu {
  id: number;
  title: string;
  listItems: IListItem[];
}

export const menu: IMenu[] = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/elements",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/notes",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/forms",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/calendar",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/settings",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/backups",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/charts",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Journal",
        url: "/journal",
        icon: "log.svg",
      },
    ],
  },
];
