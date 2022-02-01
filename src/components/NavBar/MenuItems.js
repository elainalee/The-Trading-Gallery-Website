import { AboutPageRoute, BlogsPageRoute, ContactPageRoute, ShopPageRoute } from "../../utils/routes";

export const MenuItems = [
    {
        title: 'Shop',
        url: ShopPageRoute,
        cName: 'nav-bottom-menu-item',
    },
    {
        title: 'Blog',
        url: BlogsPageRoute,
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
