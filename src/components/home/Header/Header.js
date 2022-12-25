import React, { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { logo } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import List from "../../designLayouts/List";
import ListItem from "../../designLayouts/ListItem";
import { Link } from "react-router-dom";
import Flex from "../../designLayouts/Flex";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    let ResponsiveMenu = (e) => {
      if (window.innerWidth < 769) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };

    window.addEventListener("resize", ResponsiveMenu);
  });
  return (
    <nav className="h-20 max-w-container mx-auto relative">
      <Flex className="flex items-center justify-between h-full">
        <Link to="/">
          <div>
            <Image className="w-20 object-cover" imgSrc={logo} />
          </div>
        </Link>
        <div>
          <HiMenuAlt2
            onClick={() => setShowMenu(!showMenu)}
            className="bg-red-400 flex mdl:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
          />
          <List className="flex gap-1">
            {showMenu && (
              <>
                {navBarList.map(({ _id, title }) => (
                  <ListItem
                    className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12  text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] border-r-[2px] border-r-gray-300 hover:border-r-[#262626] hoverEffect last:border-r-0"
                    key={_id}
                    itemName={title}
                  />
                ))}
              </>
            )}
          </List>
        </div>
      </Flex>
    </nav>
  );
};

export default Header;
