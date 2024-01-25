import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import "react-circular-progressbar/dist/styles.css";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const DashboardTwoPage: React.FC = () => {
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
      <div className="bg-blue_gray-900_02 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 gap-[67px] items-start mx-auto sm:pl-5 pl-[31px] w-full">
        <Sidebar1 className="!sticky !w-[232px] flex h-screen md:hidden justify-start md:mt-0 mt-[35px] overflow-auto md:px-5 top-[0]" />
        <div className="bg-blue_gray-50 flex-1 sm:h-[1112px] h-[1321px] md:h-[1446px] pb-3.5 pr-3.5 md:px-5 relative w-full">
          <div className="absolute h-[287px] left-[3%] top-[9%] w-[59%] md:w-full">
            <div className="absolute bg-blue_gray-900_03 flex flex-col inset-x-[0] items-start justify-start mx-auto p-[30px] sm:px-5 rounded-[10px] top-[11%] w-full">
              <Text
                className="ml-1 md:ml-[0] sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                size="txtPoppinsMedium23"
              >
                Hello User!
              </Text>
              <Text
                className="ml-1 md:ml-[0] mt-2 text-white-A700 text-xl"
                size="txtPoppinsRegular20"
              >
                Be one of our best customers!
              </Text>
              <Text
                className="ml-1 md:ml-[0] mt-[29px] text-white-A700 text-xl"
                size="txtPoppinsRegular20"
              >
                Order now
              </Text>
              <Line className="bg-white-A700 h-px mb-1 ml-1.5 md:ml-[0] w-[13%]" />
            </div>
            <Img
              className="absolute h-[287px] inset-y-[0] my-auto object-cover right-[1%] w-[45%]"
              src="images/img_wristbandremovebgpreview_287x362.png"
              alt="wristbandremove"
            />
          </div>
          <div className="absolute bottom-[4%] flex flex-col gap-[11px] items-start justify-start right-[2%] w-[33%]">
            <div className="h-[357px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-row h-full inset-y-[0] items-start justify-between left-[0] my-auto p-[17px] rounded-[10px] w-[95%]">
                <Text
                  className="mb-[287px] ml-[9px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-600_01"
                  size="txtPoppinsRegular23"
                >
                  Your cards
                </Text>
                <a
                  href="javascript:"
                  className="mr-[26px] mt-1 text-[19px] text-gray-900"
                >
                  <Text size="txtPoppinsRegular19">See all</Text>
                </a>
              </div>
              <Img
                className="absolute bottom-[8%] h-[257px] object-cover right-[0] rounded-bl-[20px] rounded-tl-[20px] w-[96%]"
                src="images/img_cardremovebgpreview.png"
                alt="cardremovebgpre"
              />
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-[21px] py-7 rounded-[10px] w-[425px] sm:w-full">
              <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-[93%] md:w-full">
                    <Text
                      className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-600_01 w-auto"
                      size="txtPoppinsRegular23"
                    >
                      Recent tasks
                    </Text>
                    <a
                      href="javascript:"
                      className="text-[19px] text-gray-900 w-auto"
                    >
                      <Text size="txtPoppinsRegular19">See all</Text>
                    </a>
                  </div>
                  <List
                    className="flex flex-col gap-[15px] items-start w-auto"
                    orientation="vertical"
                  >
                    <div className="bg-deep_purple-50 flex flex-col items-end justify-start my-0 pl-[17px] pt-[17px] rounded-[10px] w-full">
                      <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                        <Text
                          className="ml-0.5 md:ml-[0] text-base text-gray-900"
                          size="txtPoppinsRegular16"
                        >
                          Backend development
                        </Text>
                        <div className="flex flex-row gap-[15px] items-start justify-start mt-1 w-[31%] md:w-full">
                          <Img
                            className="h-6 mb-[3px] w-6"
                            src="images/img_ictwotonehowtoreg.svg"
                            alt="ictwotonehowtor"
                          />
                          <Text
                            className="mt-[3px] text-base text-gray-600_01"
                            size="txtPoppinsRegular16Gray60001"
                          >
                            Angele K
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between mt-1 w-full">
                          <div className="flex flex-row gap-[15px] items-start justify-start w-[26%]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_clock_indigo_900.svg"
                              alt="clock"
                            />
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtPoppinsRegular16Gray60001"
                            >
                              2 days
                            </Text>
                          </div>
                          <div className="bg-indigo-900 flex flex-row gap-[17px] items-start justify-end p-0.5 rounded-br-[10px] rounded-tl-[100px] w-[42%]">
                            <Img
                              className="h-5 mt-[9px] w-5"
                              src="images/img_streamlinegrap.svg"
                              alt="streamlinegrap"
                            />
                            <Text
                              className="mr-[5px] mt-2 text-base text-white-A700"
                              size="txtPoppinsRegular16WhiteA700"
                            >
                              Progress
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-deep_purple-50 flex flex-col items-end justify-start my-0 pl-[17px] pt-[17px] rounded-[10px] w-full">
                      <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                        <Text
                          className="ml-0.5 md:ml-[0] text-base text-gray-900"
                          size="txtPoppinsRegular16"
                        >
                          Drawing for At bells company
                        </Text>
                        <div className="flex flex-row gap-[15px] items-start justify-start mt-1 w-1/2 md:w-full">
                          <Img
                            className="h-6 mb-[3px] w-6"
                            src="images/img_ictwotonehowtoreg.svg"
                            alt="ictwotonehowtor"
                          />
                          <Text
                            className="mt-[3px] text-base text-gray-600_01"
                            size="txtPoppinsRegular16Gray60001"
                          >
                            At bells company
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between mt-1 w-full">
                          <div className="flex flex-row gap-[15px] items-start justify-start w-[26%]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_clock_indigo_900.svg"
                              alt="clock"
                            />
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtPoppinsRegular16Gray60001"
                            >
                              5 days
                            </Text>
                          </div>
                          <div className="bg-indigo-900 flex flex-row gap-[17px] items-start justify-end p-0.5 rounded-br-[10px] rounded-tl-[100px] w-[42%]">
                            <Img
                              className="h-5 mt-[9px] w-5"
                              src="images/img_streamlinegrap.svg"
                              alt="streamlinegrap"
                            />
                            <Text
                              className="mr-[5px] mt-2 text-base text-white-A700"
                              size="txtPoppinsRegular16WhiteA700"
                            >
                              Progress
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-deep_purple-50 flex flex-col items-end justify-end my-0 pl-[17px] pt-[17px] rounded-[10px] w-full">
                      <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                        <Text
                          className="ml-0.5 md:ml-[0] text-base text-gray-900"
                          size="txtPoppinsRegular16"
                        >
                          Singing At a concert
                        </Text>
                        <div className="flex flex-row gap-[15px] items-center justify-start mt-1 w-[21%] md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_ictwotonehowtoreg.svg"
                            alt="ictwotonehowtor"
                          />
                          <Text
                            className="text-base text-gray-600_01"
                            size="txtPoppinsRegular16Gray60001"
                          >
                            Livia
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between mt-1.5 w-full">
                          <div className="flex flex-row gap-[15px] items-center justify-start w-[29%]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_clock_indigo_900.svg"
                              alt="clock"
                            />
                            <Text
                              className="text-base text-gray-600_01"
                              size="txtPoppinsRegular16Gray60001"
                            >
                              2 weeks
                            </Text>
                          </div>
                          <div className="bg-indigo-900 flex flex-row gap-1.5 items-start justify-center p-0.5 rounded-br-[10px] rounded-tl-[100px] w-[42%]">
                            <Img
                              className="h-6 ml-[27px] mt-[7px] w-6"
                              src="images/img_music.svg"
                              alt="music"
                            />
                            <Text
                              className="mr-1 mt-[7px] text-base text-white-A700"
                              size="txtPoppinsRegular16WhiteA700"
                            >
                              Complete
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <List
                  className="flex flex-col gap-[15px] items-start w-auto"
                  orientation="vertical"
                >
                  <div className="bg-deep_purple-50 flex flex-col items-end justify-start my-0 pl-[17px] pt-[17px] rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                      <Text
                        className="ml-0.5 md:ml-[0] text-base text-gray-900"
                        size="txtPoppinsRegular16"
                      >
                        Backend development
                      </Text>
                      <div className="flex flex-row gap-[15px] items-start justify-start mt-1 w-[31%] md:w-full">
                        <Img
                          className="h-6 mb-[3px] w-6"
                          src="images/img_ictwotonehowtoreg.svg"
                          alt="ictwotonehowtor"
                        />
                        <Text
                          className="mt-[3px] text-base text-gray-600_01"
                          size="txtPoppinsRegular16Gray60001"
                        >
                          Angele K
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-1 w-full">
                        <div className="flex flex-row gap-[15px] items-start justify-start w-[26%]">
                          <Img
                            className="h-6 w-6"
                            src="images/img_clock_indigo_900.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-base text-gray-600_01"
                            size="txtPoppinsRegular16Gray60001"
                          >
                            2 days
                          </Text>
                        </div>
                        <div className="bg-indigo-900 flex flex-row gap-[17px] items-start justify-end p-0.5 rounded-br-[10px] rounded-tl-[100px] w-[42%]">
                          <Img
                            className="h-5 mt-[9px] w-5"
                            src="images/img_streamlinegrap.svg"
                            alt="streamlinegrap"
                          />
                          <Text
                            className="mr-[5px] mt-2 text-base text-white-A700"
                            size="txtPoppinsRegular16WhiteA700"
                          >
                            Progress
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-deep_purple-50 flex flex-col items-end justify-end my-0 pl-[17px] pt-[17px] rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                      <Text
                        className="ml-0.5 md:ml-[0] text-base text-gray-900"
                        size="txtPoppinsRegular16"
                      >
                        Drawing for At bells company
                      </Text>
                      <div className="flex flex-row gap-[15px] items-start justify-start mt-1 w-1/2 md:w-full">
                        <Img
                          className="h-6 mb-[3px] w-6"
                          src="images/img_ictwotonehowtoreg.svg"
                          alt="ictwotonehowtor"
                        />
                        <Text
                          className="mt-[3px] text-base text-gray-600_01"
                          size="txtPoppinsRegular16Gray60001"
                        >
                          At bells company
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-1 w-full">
                        <div className="flex flex-row gap-[15px] items-start justify-start w-[26%]">
                          <Img
                            className="h-6 w-6"
                            src="images/img_clock_indigo_900.svg"
                            alt="clock"
                          />
                          <Text
                            className="text-base text-gray-600_01"
                            size="txtPoppinsRegular16Gray60001"
                          >
                            5 days
                          </Text>
                        </div>
                        <div className="bg-indigo-900 flex flex-row gap-[17px] items-start justify-end p-0.5 rounded-br-[10px] rounded-tl-[100px] w-[42%]">
                          <Img
                            className="h-5 mt-[9px] w-5"
                            src="images/img_streamlinegrap.svg"
                            alt="streamlinegrap"
                          />
                          <Text
                            className="mr-[5px] mt-2 text-base text-white-A700"
                            size="txtPoppinsRegular16WhiteA700"
                          >
                            Progress
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[4%] flex flex-col items-start justify-start left-[3%] w-3/5">
            <div className="flex flex-col items-start justify-start max-w-[828px] w-full">
              <div className="md:gap-5 gap-8 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[9px] items-start justify-start mb-3.5 mt-[3px] w-[99%] md:w-full">
                    <div className="flex flex-col justify-start w-[67%]">
                      <div className="flex flex-row gap-3.5 items-center justify-start md:ml-[0] ml-[11px] w-[55%] md:w-full">
                        <Text
                          className="text-gray-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          In process
                        </Text>
                        <Img
                          className="h-6 w-[23px]"
                          src="images/img_uimprocess.svg"
                          alt="uimprocess"
                        />
                      </div>
                      <Text
                        className="text-gray-500 text-lg w-full"
                        size="txtPoppinsRegular18Gray500"
                      >
                        7 od the 45 projects to be completed
                      </Text>
                    </div>
                    <div className="h-[110px] md:h-[119px] mt-[9px] relative w-[110px]">
                      <div className="!w-[110px] h-[110px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[110px] h-[110px] m-auto overflow-visible"
                          value={60}
                          strokeWidth={9}
                          styles={{
                            trail: { strokeWidth: 9, stroke: "#edd8b3" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#232266",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-center text-gray-600_01 text-sm w-max"
                        size="txtPoppinsRegular14"
                      >
                        60%
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[9px] items-start justify-start mb-3.5 mt-[3px] w-[99%] md:w-full">
                    <div className="flex flex-col justify-start w-[67%]">
                      <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[11px] w-[53%] md:w-full">
                        <Text
                          className="text-gray-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          Complete
                        </Text>
                        <Img
                          className="h-[25px] w-6"
                          src="images/img_alarm.svg"
                          alt="alarm"
                        />
                      </div>
                      <Text
                        className="text-gray-500 text-lg w-full"
                        size="txtPoppinsRegular18Gray500"
                      >
                        7 od the 45 projects to be completed
                      </Text>
                    </div>
                    <div className="h-[110px] md:h-[120px] mt-2.5 relative w-[110px]">
                      <div className="!w-[110px] h-[110px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[110px] h-[110px] m-auto overflow-visible"
                          value={60}
                          strokeWidth={9}
                          styles={{
                            trail: { strokeWidth: 9, stroke: "#edd8b3" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#232266",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-center text-gray-600_01 text-sm w-max"
                        size="txtPoppinsRegular14"
                      >
                        60%
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-row gap-[9px] items-center justify-start p-[17px] rounded-[10px] w-full">
                  <div className="md:h-[54px] h-[87px] ml-2 relative w-[65%]">
                    <Text
                      className="mt-[5px] text-gray-900 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      On going
                    </Text>
                    <div className="absolute h-[87px] inset-[0] justify-center m-auto w-full">
                      <Img
                        className="h-[34px] mb-[-1.87px] ml-[90px] z-[1]"
                        src="images/img_phshufflethin.svg"
                        alt="phshufflethin"
                      />
                      <Text
                        className="mt-auto mx-auto text-gray-500 text-lg w-full"
                        size="txtPoppinsRegular18Gray500"
                      >
                        7 od the 45 projects to be completed
                      </Text>
                    </div>
                  </div>
                  <div className="h-[110px] md:h-[140px] my-[15px] relative w-[110px]">
                    <div className="!w-[110px] h-[110px] m-auto overflow-visible">
                      <CircularProgressbar
                        className="!w-[110px] h-[110px] m-auto overflow-visible"
                        value={60}
                        strokeWidth={9}
                        styles={{
                          trail: { strokeWidth: 9, stroke: "#edd8b3" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(0deg)",
                            stroke: "#232266",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto text-center text-gray-600_01 text-sm w-max"
                      size="txtPoppinsRegular14"
                    >
                      60%
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[9px] items-start justify-start mb-3.5 mt-[3px] w-[99%] md:w-full">
                    <div className="flex flex-col justify-start w-[67%]">
                      <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[11px] w-[54%] md:w-full">
                        <Text
                          className="text-gray-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          In process
                        </Text>
                        <Img
                          className="h-6 w-[23px]"
                          src="images/img_materialsymbol.svg"
                          alt="materialsymbol"
                        />
                      </div>
                      <Text
                        className="text-gray-500 text-lg w-full"
                        size="txtPoppinsRegular18Gray500"
                      >
                        7 od the 45 projects to be completed
                      </Text>
                    </div>
                    <div className="h-[110px] md:h-[119px] mt-[9px] relative w-[110px]">
                      <div className="!w-[110px] h-[110px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[110px] h-[110px] m-auto overflow-visible"
                          value={60}
                          strokeWidth={9}
                          styles={{
                            trail: { strokeWidth: 9, stroke: "#edd8b3" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#232266",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-center text-gray-600_01 text-sm w-max"
                        size="txtPoppinsRegular14"
                      >
                        60%
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[3px] mt-[30px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-600_01"
              size="txtPoppinsRegular23"
            >
              What is New
            </Text>
            <div className="gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start max-w-[807px] ml-1.5 md:ml-[0] mt-[23px] w-full">
              <Text
                className="bg-indigo-900 flex-1 justify-center sm:px-5 px-[35px] py-2.5 rounded-[10px] text-[19px] text-white-A700 w-full"
                size="txtPoppinsMedium19"
              >
                New
              </Text>
              <Button
                className="cursor-pointer flex-1 font-medium leading-[normal] min-w-[180px] rounded-[10px] text-[19px] text-center w-full"
                color="indigo_900"
                variant="outline"
              >
                Incomplete
              </Button>
              <Button
                className="cursor-pointer flex-1 font-medium leading-[normal] min-w-[180px] rounded-[10px] text-[19px] text-center w-full"
                color="indigo_900"
                variant="outline"
              >
                Not yet stareted
              </Button>
              <Button
                className="cursor-pointer flex-1 font-medium leading-[normal] min-w-[180px] rounded-[10px] text-[19px] text-center w-full"
                color="indigo_900"
                variant="outline"
              >
                Long time no see
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start ml-1.5 md:ml-[0] mt-7 p-[19px] rounded-[10px] w-full">
              <List
                className="flex flex-col gap-4 items-start my-0.5 w-auto"
                orientation="vertical"
              >
                <div className="sm:h-[113px] h-[118px] md:h-[199px] relative w-full">
                  <div className="absolute bg-deep_purple-50 flex flex-col h-max inset-[0] items-center justify-center m-auto pl-[17px] pt-[17px] rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                      <Text
                        className="ml-0.5 md:ml-[0] text-base text-gray-900"
                        size="txtPoppinsRegular16"
                      >
                        Backend development
                      </Text>
                      <div className="flex flex-row gap-[15px] items-start justify-start mt-1 w-[15%] md:w-full">
                        <Img
                          className="h-6 mb-[3px] w-6"
                          src="images/img_ictwotonehowtoreg.svg"
                          alt="ictwotonehowtor"
                        />
                        <Text
                          className="mt-[3px] text-base text-gray-600_01"
                          size="txtPoppinsRegular16Gray60001"
                        >
                          Angele K
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1 w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_clock_indigo_900.svg"
                          alt="clock"
                        />
                        <Text
                          className="md:ml-[0] ml-[15px] text-base text-gray-600_01"
                          size="txtPoppinsRegular16Gray60001"
                        >
                          2 days ago
                        </Text>
                        <div className="bg-indigo-900 flex flex-col items-end justify-end md:ml-[0] ml-[435px] p-1 rounded-br-[10px] rounded-tl-[100px]">
                          <Text
                            className="mr-9 mt-[3px] text-base text-white-A700"
                            size="txtPoppinsRegular16WhiteA700"
                          >
                            New
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-9 right-[14%] w-9"
                    src="images/img_claritynewline.svg"
                    alt="claritynewline"
                  />
                </div>
                <div className="sm:h-[113px] h-[118px] md:h-[199px] relative w-full">
                  <div className="absolute bg-deep_purple-50 flex flex-col h-max inset-[0] items-center justify-center m-auto pl-[17px] pt-[17px] rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
                      <Text
                        className="ml-0.5 md:ml-[0] text-base text-gray-900"
                        size="txtPoppinsRegular16"
                      >
                        Backend development
                      </Text>
                      <div className="flex flex-row gap-[15px] items-start justify-start mt-1 w-[15%] md:w-full">
                        <Img
                          className="h-6 mb-[3px] w-6"
                          src="images/img_ictwotonehowtoreg.svg"
                          alt="ictwotonehowtor"
                        />
                        <Text
                          className="mt-[3px] text-base text-gray-600_01"
                          size="txtPoppinsRegular16Gray60001"
                        >
                          Angele K
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-1 w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_clock_indigo_900.svg"
                          alt="clock"
                        />
                        <Text
                          className="md:ml-[0] ml-[15px] text-base text-gray-600_01"
                          size="txtPoppinsRegular16Gray60001"
                        >
                          2 days ago
                        </Text>
                        <div className="bg-indigo-900 flex flex-col items-end justify-end md:ml-[0] ml-[435px] p-1 rounded-br-[10px] rounded-tl-[100px]">
                          <Text
                            className="mr-9 mt-[3px] text-base text-white-A700"
                            size="txtPoppinsRegular16WhiteA700"
                          >
                            New
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-9 right-[14%] w-9"
                    src="images/img_claritynewline.svg"
                    alt="claritynewline"
                  />
                </div>
              </List>
            </div>
          </div>
          <Text
            className="absolute left-[3%] text-gray-600_01 text-xl top-[29%]"
            size="txtPoppinsRegular20Gray60001"
          >
            Explorer your working
          </Text>
          <div className="absolute bg-blue_gray-50 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto p-[27px] sm:px-5 top-[0] w-[99%]">
            <div className="bg-white-A700 flex flex-row gap-[34px] items-center justify-start md:ml-[0] ml-[15px] md:mt-0 mt-5 p-[11px] rounded-[10px] w-[62%] md:w-full">
              <Img
                className="h-[25px] ml-10 w-[25px]"
                src="images/img_search_blue_gray_700.svg"
                alt="search"
              />
              <Text
                className="text-gray-600_01 text-lg"
                size="txtPoppinsRegular18Gray60001"
              >
                Search
              </Text>
            </div>
            <Img
              className="h-[26px] mb-[9px] md:ml-[0] ml-[266px] md:mt-0 mt-[35px] w-[26px]"
              src="images/img_wpfmessageoutline.svg"
              alt="wpfmessageoutli"
            />
            <Img
              className="h-[25px] mb-2.5 ml-12 md:ml-[0] md:mt-0 mt-[35px] w-[25px]"
              src="images/img_phbelllight.svg"
              alt="phbelllight"
            />
            <Img
              className="h-10 md:h-auto mb-[3px] ml-11 md:ml-[0] md:mt-0 mt-[27px] rounded-[50%] w-10"
              src="images/img_screenshot20230915_40x40.png"
              alt="screenshot20230"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTwoPage;
