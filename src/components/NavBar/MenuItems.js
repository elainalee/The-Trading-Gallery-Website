import { AboutPageRoute, BlogsPageRoute, ContactPageRoute, ShopPageRoute } from "../../utils/routes";

export const MenuItems = [
    {
        title: 'Shop',
        url: ShopPageRoute,
        cName: 'nav-menu-item',
    },
    {
        title: 'Blog',
        url: BlogsPageRoute,
        cName: 'nav-menu-item',
    },
    {
        title: 'About',
        url: AboutPageRoute,
        cName: 'nav-menu-item',
    },
    {
        title: 'Contact',
        url: ContactPageRoute,
        cName: 'nav-menu-item',
    },
];
