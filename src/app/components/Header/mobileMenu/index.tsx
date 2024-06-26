'use client'
import React from 'react';
import Icons from "../../../../../public/Icons";
import {usePathname} from "next/navigation";

export default function BottomMenu() {
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'chat',
      title: 'Chat Bot',
      path: '/',
      iconName: 'chart',
      selectedIconName: 'chart-twoTone',
    },
    {
      name: 'profile',
      title: 'Profile',
      path: '/profile',
      iconName: 'user-disable',
      selectedIconName: 'user-twoTone',
    },
  ];


  return (
    <ul className={"fixed w-full b-0 p-4 bg-white bottom-0"}>
      <li className={"flex list-none place-content-between text-xs text-secondary font-semibold cursor-pointer"}>
        {menuItems.map((item) => (
          <a
            key={item.name}
            className={`${(pathname === item.path)?'selected text-primary' : ''}`}
            href={item.path}
          >
            <div className={'w-fit m-auto'}>
              {pathname === item.path ?
                  <Icons name={item.selectedIconName} />
                  : <Icons name={item.iconName} />
              }
            </div>
            <p>{item.title}</p>
          </a>
        ))}
      </li>
    </ul>

  );
}
