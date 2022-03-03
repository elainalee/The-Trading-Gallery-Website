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

export const ShopCategoryItems = [
    [
        {
            title: 'Yu gi oh',
            url: ShopPageRoute,
            cName: 'nav-menu-item',
        },
        {
            title: 'Yu gi oh Boosters',
            url: ShopPageRoute,
            cName: 'nav-menu-item',
        },
        {
            title: 'Structure Decks',
            url: ShopPageRoute,
            cName: 'nav-menu-item',
        },
        {
            title: 'Blister Packs',
            url: ShopPageRoute,
            cName: 'nav-menu-item',
        },
        {
            title: 'Singles',
            url: ShopPageRoute,
            cName: 'nav-menu-item',
        },
        {
            title: 'Accessories',
            url: ShopPageRoute,
            cName: 'nav-menu-item',
        }
    ],
    [
        {
            title: 'Pokemon',
            url: ShopPageRoute,
            cName: 'nav-menu-item',
        },
        {
            title: 'Pokemon Booster Boxes',
            url: ShopPageRoute,
            cName: 'nav-menu-item',
        },
        {
            title: 'Pokemon Blisters',
            url: ShopPageRoute,
            cName: 'nav-menu-item',
        },
        {
            title: 'Singles',
            url: ShopPageRoute,
            cName: 'nav-menu-item',
        },
        {
            title: 'Accessories',
            url: ShopPageRoute,
            cName: 'nav-menu-item',
        }
    ],
    [
        {
            title: 'New Releases',
            url: ShopPageRoute,
            cName: 'nav-menu-item',
        }
    ],
    
]