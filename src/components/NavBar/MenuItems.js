import { AboutPageRoute, BlogsPageRoute, ContactPageRoute, FeedbackPageRoute, ShopPageRoute } from "../../utils/routes";

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

export const SellerMenuItems = [
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
];


export const AdminMenuItems = SellerMenuItems.concat([
    {
        title: 'Feedbacks',
        url: FeedbackPageRoute,
        cName: 'nav-menu-item',
    }
]);


export const ShopCategoryItems = [
    [
        {
            title: 'Yu gi oh',
            url: '/yugioh',
            cName: 'nav-menu-item',
            id: "6227ded2e7b1fcb2d7523a11"
        },
        {
            title: 'Yu gi oh Boosters',
            url: '/yugioh/boosters',
            cName: 'nav-menu-item',
            id: "6227df55255bd790d96d7449"
        },
        {
            title: 'Structure Decks',
            url: '/yugioh/structure-decks',
            cName: 'nav-menu-item',
            id: "6227df6a255bd790d96d744d"
        },
        {
            title: 'Blister Packs',
            url: '/yugioh/blister-packs',
            cName: 'nav-menu-item',
            id: "6227df74255bd790d96d7453"
        },
        {
            title: 'Singles',
            url: '/yugioh/singles',
            cName: 'nav-menu-item',
            id: "6227df78255bd790d96d7456"
        },
        {
            title: 'Accessories',
            url: '/yugioh/accessories',
            cName: 'nav-menu-item',
            id: "6227df7b255bd790d96d7459"
        }
    ],
    [
        {
            title: 'Pokemon',
            url: '/pokemon',
            cName: 'nav-menu-item',
            id: "6227dedbe7b1fcb2d7523a14"
        },
        {
            title: 'Pokemon Booster Boxes',
            url: '/pokemon/boosters',
            cName: 'nav-menu-item',
            id: "6227df8a255bd790d96d745c"
        },
        {
            title: 'Pokemon Blisters',
            url: '/pokemon/blister-packs',
            cName: 'nav-menu-item',
            id: "6227df91255bd790d96d745f"
        },
        {
            title: 'Singles',
            url: '/pokemon/singles',
            cName: 'nav-menu-item',
            id: "6227df95255bd790d96d7462"
        },
        {
            title: 'Accessories',
            url: '/pokemon/accessories',
            cName: 'nav-menu-item',
            id: "6227df99255bd790d96d7465"
        }
    ],
    [
        {
            title: 'New Releases',
            url: '/new-releases',
            cName: 'nav-menu-item',
            id: "6227dee2e7b1fcb2d7523a17"
        }
    ],
    
]