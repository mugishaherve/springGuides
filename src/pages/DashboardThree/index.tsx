import React from "react";

import { Button, Img, Text } from "components";

const DashboardThreePage: React.FC = () => {
  return (
    <>
      <div className="bg-gradient2  flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mb-[7px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[43px] md:px-5 w-[18%] md:w-full">
            <div className="md:h-[51px] h-[55px] relative w-[82%]">
              <Img
                className="absolute h-[51px] left-[0] object-cover top-[0] w-[32%]"
                src="images/img_logo1.png"
                alt="logoOne"
              />
              <Text
                className="absolute bottom-[0] right-[0] text-3xl sm:text-[26px] md:text-[28px] text-indigo-900"
                size="txtPoppinsRegular30"
              >
                <span className="text-indigo-900 font-montserrat text-left font-semibold">
                  Mince{" "}
                </span>
                <span className="text-white-A700 font-montserrat text-left font-semibold">
                  Tech
                </span>
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-row font-montserrat gap-[31px] items-start justify-start mt-[139px] p-2 rounded-[10px] w-full">
              <Img
                className="h-[35px] ml-[39px] mt-[5px] rounded-[10px] w-[35px]"
                src="images/img_lucidelayoutdashboard.svg"
                alt="lucidelayoutdas"
              />
              <Text
                className="mt-1.5 sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900_01"
                size="txtMontserratRomanMedium25Bluegray90001"
              >
                Dashboard
              </Text>
            </div>
            <div className="flex flex-col font-montserrat items-start justify-start mt-[87px] w-[73%] md:w-full">
              <div className="flex flex-row gap-[31px] items-start justify-start w-[85%] md:w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_solarpiechartoutline.svg"
                  alt="solarpiechartou"
                />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtMontserratRomanMedium25"
                >
                  Analytics
                </Text>
              </div>
              <div className="flex flex-row gap-[26px] items-start justify-start mt-[110px] w-full">
                <Img
                  className="h-[45px] w-[45px]"
                  src="images/img_iondocuments.svg"
                  alt="iondocuments"
                />
                <Text
                  className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtMontserratRomanMedium25"
                >
                  Documents
                </Text>
              </div>
              <div className="flex flex-row gap-[34px] items-start justify-start mt-[106px] w-[89%] md:w-full">
                <Img
                  className="h-[37px] w-[37px]"
                  src="images/img_user_white_a700.svg"
                  alt="user"
                />
                <Text
                  className="mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtMontserratRomanMedium25"
                >
                  Messages
                </Text>
              </div>
              <div className="flex flex-row gap-[27px] items-start justify-start ml-0.5 md:ml-[0] mt-28 w-[62%] md:w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_mditags.svg"
                  alt="mditags"
                />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtMontserratRomanMedium25"
                >
                  Deals
                </Text>
              </div>
              <div className="flex flex-row gap-[23px] items-center justify-start mt-[110px] w-[78%] md:w-full">
                <Img
                  className="h-[45px] w-[45px]"
                  src="images/img_materialsymbolssettings.svg"
                  alt="materialsymbols"
                />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtMontserratRomanMedium25"
                >
                  Settings
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-50_01 flex md:flex-1 flex-col font-montserrat gap-[54px] justify-start p-[37px] md:px-5 w-[83%] md:w-full">
            <div className="flex flex-row items-start justify-end md:ml-[0] ml-[1027px] mt-0.5 w-[23%] md:w-full">
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="white_A700"
              >
                <Img
                  className="h-[17px]"
                  src="images/img_search.svg"
                  alt="search"
                />
              </Button>
              <Button
                className="flex h-10 items-center justify-center ml-5 w-10"
                shape="circle"
                color="white_A700"
              >
                <Img src="images/img_vector_black_900.svg" alt="vector" />
              </Button>
              <Img
                className="h-[13px] ml-[190px] mt-[13px]"
                src="images/img_arrowdown_black_900.svg"
                alt="arrowdown"
              />
            </div>
            <div className="flex flex-col gap-[45px] items-center justify-start mb-[247px] mr-[456px] w-[67%] md:w-full">
              <div className="bg-gradient3  flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:pl-10 sm:pl-5 pl-[46px] rounded-[20px] w-full">
                <Text
                  className="sm:mt-0 mt-[60px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtMontserratRomanSemiBold30WhiteA700"
                >
                  Payment Have Been Made Easier Now!
                </Text>
                <Img
                  className="h-[300px] md:h-auto object-cover"
                  src="images/img_wristbandremovebgpreview_300x245.png"
                  alt="wristbandremove"
                />
              </div>
              <div className="bg-white-A700 md:h-[408px] h-[537px] p-8 sm:px-5 relative rounded-[20px] shadow-bs w-full">
                <Img
                  className="absolute bottom-[7%] h-[372px] inset-x-[0] mx-auto"
                  src="images/img_group20443_blue_gray_100_01.svg"
                  alt="group20443"
                />
                <Img
                  className="absolute h-[408px] inset-[0] justify-center m-auto"
                  src="images/img_group20442.svg"
                  alt="group20442"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardThreePage;
