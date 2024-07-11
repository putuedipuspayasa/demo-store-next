import {FC} from "react";
import Link from "next/link";

import menu from '../../../domain/constants/menu.json';

type MenuItem = {
  name: string;
  path:string;
}

const LeftNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex flex-col w-64 bg-gray-800 min-h-screen">
      <button onClick={() => setIsOpen(!isOpen)} className="p-4 text-white">
        Toogle Menu
      </button>
      <nav className={`${isOpen ? 'block' : 'hidden'} sm:block`}>
        {(menu as MenuItem[]).map((item, index) => (
          <Link href={item.path} key={index}>
            <a className="block p-4 text-white hover:bg-gray-700">{item.name}</a>
          </Link>
        ))}
      </nav>
    </div>
  )

}

export default LeftNavbar;
