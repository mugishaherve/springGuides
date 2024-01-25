import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

type Sidebar1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;
type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Sidebar1: React.FC<Sidebar1Props> = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-[35px] mb-[3px] rounded-[10px] w-[35px]"
          src="images/img_grid_white_a700.svg"
          alt="grid"
        />
      ),
      label: "Home page",
      href: "/homepage",
      active: window.location.pathname === "/homepage",
    },
    {
      icon: (
        <Img
          className="h-[35px] mb-4 mt-[7px] w-[35px]"
          src="images/img_ripiechartline.svg"
          alt="ripiechartline"
        />
      ),
      label: "Analytics",
    },
    {
      icon: (
        <Img
          className="h-[35px] mb-[22px] rounded-[3px] w-[35px]"
          src="images/img_lafilecontract.svg"
          alt="lafilecontract"
        />
      ),
      label: "Documents",
    },
    {
      icon: (
        <Img
          className="h-[35px] mb-2 w-[35px]"
          src="images/img_reply.svg"
          alt="reply"
        />
      ),
      label: "New Contract",
    },
    {
      icon: (
        <Img
          className="h-[35px] mb-3.5 w-[35px]"
          src="images/img_mditags_gray_600_01.svg"
          alt="mditags"
        />
      ),
      label: "Deals",
    },
    {
      icon: (
        <Img
          className="h-[35px] mb-[19px] w-[35px]"
          src="images/img_materialsymbolssettings_gray_600_01.svg"
          alt="materialsymbols"
        />
      ),
      label: "Settings",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="flex flex-row items-end justify-start mr-[31px] w-[87%]">
          <Img
            className="h-[51px] md:h-auto object-cover w-2/5"
            src="images/img_logo1.png"
            alt="logoOne"
          />
          <Text
            className="mt-3.5 sm:text-[19px] md:text-[21px] text-[23px] text-indigo-900"
            size="txtPoppinsRegular23Indigo900"
          >
            <span className="text-indigo-900 font-poppins text-left font-normal">
              Mince
            </span>
            <span className="text-gray-600_01 font-poppins text-left font-normal">
              Tech
            </span>
          </Text>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: "14px",
              gap: "41px",
              color: "#6b6b6b",
              fontWeight: 500,
              fontSize: "20px",
              fontFamily: "Poppins",
              [`&:hover, &.ps-active`]: { color: "#ffffff" },
            },
          }}
          className="flex flex-col items-center justify-end mb-7 mt-[130px] sm:pr-5 pr-[31px] pt-1 w-full"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
