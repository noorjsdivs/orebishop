import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { logo } from "../../assets/images";
import Image from "../designLayouts/Image";
import { navBarList } from "../../constants";
import Flex from "../designLayouts/Flex";
import List from "../designLayouts/List";
import ListItem from "../designLayouts/ListItem";

const Header = () => {
  return (
    <nav className="h-20">
      <Flex>
        <div>
          <Image className="w-16 object-cover" imgSrc={logo} />
        </div>
        <div>
          <HiMenuAlt2 className="bg-red-400 flex mdl:hidden w-8 h-6" />
          <List className="flex gap-1">
            {navBarList.map(({ _id, title }) => (
              <ListItem
                className="hidden mdl:flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12  text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] border-r-[2px] border-r-gray-300 hover:border-r-[#262626] hoverEffect last:border-r-0"
                key={_id}
                itemName={title}
              />
            ))}
          </List>
        </div>
      </Flex>
    </nav>
  );
};

export default Header;
