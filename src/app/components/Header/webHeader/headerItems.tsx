export default function HeaderItems() {

    const menuItems : { key: number, title: string, route: string }[] = [
        {
            key: 1,
            title: 'Menu 1',
            route: '/',
        },
        {

            key: 3,
            title: 'Menu 2',
            route: '/wallet',
        },
        {

            key: 4,
            title: 'Menu 3',
            route: '/faq',
        },
        {

            key: 5,
            title: 'Menu 4',
            route: '/',
        },
    ];

    return (
        <ul className={"flex h-full text-right list-none"}>
            {menuItems.map( (item) =>
                <li className={"h-full flex items-center mr-4 ml-4 " +
                    "hover:border-b-2 hover:border-primary hover:text-primary " +
                    "visited:text-primary " +
                    "active:text-primary"}
                    key={item.key}>
                    <a href={item.route}>{item.title}</a>
                </li>
            )}
        </ul>
    )
}