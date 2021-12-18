import { AboutPageRoute, BlogPageRoute, ContactPageRoute, ShopPageRoute } from "../../utils/routes";

export const MenuItems = [
    {
        title: 'Shop',
        url: ShopPageRoute,
        cName: 'nav-bottom-menu-item',
    },
    {
        title: 'Blog',
        url: BlogPageRoute,
        cName: 'nav-bottom-menu-item',
    },
    {
        title: 'About',
        url: AboutPageRoute,
        cName: 'nav-bottom-menu-item',
    },
    {
        title: 'Contact',
        url: ContactPageRoute,
        cName: 'nav-bottom-menu-item',
    },
];
