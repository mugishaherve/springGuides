import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";

const angeleMarieOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TransactionsPage: React.FC = () => {
  return (
    <>
      <div className="bg-gradient2  flex flex-col font-montserrat items-center justify-end mx-auto sm:pl-5 pl-[29px] w-full">
        <div className="flex md:flex-col flex-row gap-[13px] items-start justify-between max-w-[1699px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[263px] w-[15%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-20 justify-start w-full">
                <div className="flex flex-col md:gap-10 gap-[79px] items-start justify-start ml-3 md:ml-[0] w-[74%] md:w-full">
                  <div className="flex flex-row gap-9 items-start justify-start ml-1 md:ml-[0] w-[98%] md:w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_grid.svg"
                      alt="grid"
                    />
                    <Text
                      className="mt-1 text-white-A700 text-xl"
                      size="txtMontserratRomanSemiBold20WhiteA700"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[46px] items-start justify-start w-[96%] md:w-full">
                    <Img
                      className="h-[25px] mb-0.5"
                      src="images/img_user_white_a700.svg"
                      alt="user"
                    />
                    <Text
                      className="mt-0.5 text-white-A700 text-xl"
                      size="txtMontserratRomanMedium20WhiteA700"
                    >
                      Messages
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient  border border-solid border-white-A700 flex flex-row items-center justify-start p-3 rounded-[10px] shadow-bs w-full">
                  <Img
                    className="h-[30px] mb-1.5 ml-1 w-[30px]"
                    src="images/img_vector_white_a700.svg"
                    alt="vector"
                  />
                  <Text
                    className="ml-[33px] text-white-A700 text-xl"
                    size="txtMontserratRomanMedium20WhiteA700"
                  >
                    Activities
                  </Text>
                  <Img
                    className="h-[13px] ml-6"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[72px] mt-[22px]">
              <Text
                className="text-[15px] text-black-900"
                size="txtMontserratRomanMedium15Black900"
              >
                Deals
              </Text>
              <Text
                className="text-[15px] text-black-900"
                size="txtMontserratRomanMedium15Black900"
              >
                Transactions
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] mt-10 w-[68%] md:w-full">
              <div className="flex flex-row gap-[46px] items-end justify-start w-full">
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_solarpiechartoutline.svg"
                  alt="solarpiechartou"
                />
                <Text
                  className="mt-[5px] text-white-A700 text-xl"
                  size="txtMontserratRomanMedium20WhiteA700"
                >
                  Analytics
                </Text>
              </div>
              <div className="flex flex-row gap-[50px] items-end justify-start mt-[278px] w-[97%] md:w-full">
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_materialsymbolssettings.svg"
                  alt="materialsymbols"
                />
                <Text
                  className="mt-[5px] text-white-A700 text-xl"
                  size="txtMontserratRomanMedium20WhiteA700"
                >
                  Settings
                </Text>
              </div>
              <div className="flex flex-row gap-[52px] items-start justify-start md:ml-[0] ml-[3px] mt-[38px] w-[99%] md:w-full">
                <Img
                  className="h-[25px] mb-0.5 w-[25px]"
                  src="images/img_profile.svg"
                  alt="profile"
                />
                <Text
                  className="mt-0.5 text-white-A700 text-xl"
                  size="txtMontserratRomanMedium20WhiteA700"
                >
                  Get Help
                </Text>
              </div>
              <Img
                className="h-[30px] mt-[357px] w-[30px]"
                src="images/img_materialsymbolssettings.svg"
                alt="materialsymbols_One"
              />
            </div>
          </div>
          <div className="sm:h-[1608px] h-[1627px] md:h-[4167px] relative w-[85%] md:w-full">
            <div className="absolute bg-gray-50_01 flex flex-col h-max inset-[0] items-center justify-center m-auto p-10 sm:px-5 rounded-bl-[50px] rounded-tl-[50px] w-full">
              <div className="flex flex-col items-start justify-start mb-[316px] mt-[87px] w-[99%] md:w-full">
                <div className="font-poppins sm:h-[116px] h-[133px] md:h-[306px] relative w-[85%] md:w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex md:flex-col flex-row md:gap-10 gap-[130px] inset-x-[0] items-center justify-end mx-auto p-[27px] sm:px-5 rounded-[10px] w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start mb-0.5 w-[16%] md:w-full">
                      <div className="flex flex-row items-end justify-between w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[15px] text-gray-900"
                            size="txtPoppinsExtraLight15"
                          >
                            Euros
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsBold25"
                          >
                            182
                          </Text>
                        </div>
                        <Text
                          className="mb-[3px] mt-[31px] text-[15px] text-red-A700"
                          size="txtPoppinsRegular15"
                        >
                          90%
                        </Text>
                        <Button
                          className="flex items-center justify-center mb-1.5 mt-[11px]"
                          shape="round"
                        >
                          <Img
                            className="h-5"
                            src="images/img_close.svg"
                            alt="close"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-row gap-[34px] items-center justify-center w-[16%] md:w-full">
                      <div className="h-14 md:h-[35px] relative w-[53%]">
                        <Text
                          className="absolute bottom-[4%] right-[0] text-[15px] text-lime-300"
                          size="txtPoppinsRegular15Lime300"
                        >
                          90%
                        </Text>
                        <div className="absolute h-14 md:h-[35px] inset-y-[0] left-[0] my-auto w-[55px]">
                          <Text
                            className="absolute bottom-[0] left-[5%] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsBold25"
                          >
                            182
                          </Text>
                          <Text
                            className="absolute inset-x-[0] mx-auto text-[15px] text-gray-900 top-[0] w-max"
                            size="txtPoppinsExtraLight15"
                          >
                            Rupees
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex items-center justify-center mb-1.5 mt-[9px] w-[27%]"
                        shape="round"
                      >
                        <Img
                          className="h-5"
                          src="images/img_close.svg"
                          alt="close_One"
                        />
                      </Button>
                    </div>
                    <div className="flex md:flex-1 flex-row gap-[22px] items-center justify-center mr-9 w-[16%] md:w-full">
                      <div className="h-14 md:h-[35px] relative w-[61%]">
                        <Text
                          className="absolute bottom-[4%] right-[0] text-[15px] text-red-A700"
                          size="txtPoppinsRegular15"
                        >
                          0.05%
                        </Text>
                        <div className="absolute h-14 md:h-[35px] inset-y-[0] left-[0] my-auto w-3/5">
                          <Text
                            className="absolute bottom-[0] left-[5%] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                            size="txtPoppinsBold25"
                          >
                            182
                          </Text>
                          <Text
                            className="absolute inset-x-[0] mx-auto text-[15px] text-gray-900 top-[0] w-max"
                            size="txtPoppinsExtraLight15"
                          >
                            Shillings
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex items-center justify-center mb-1.5 mt-[9px] w-[27%]"
                        shape="round"
                      >
                        <Img
                          className="h-5"
                          src="images/img_close.svg"
                          alt="close_Two"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute flex flex-col items-center justify-start left-[2%] top-[0] w-[15%]">
                    <div className="flex flex-row gap-[34px] items-start justify-between w-full">
                      <div className="flex flex-col gap-10 justify-start">
                        <Img
                          className="h-1 md:ml-[0] ml-[62px]"
                          src="images/img_vector11.svg"
                          alt="vectorEleven"
                        />
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-[15px] text-gray-900"
                            size="txtPoppinsExtraLight15"
                          >
                            US Dollars
                          </Text>
                          <div className="flex flex-row gap-[11px] items-end justify-between md:ml-[0] ml-[3px] w-[97%] md:w-full">
                            <Text
                              className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                              size="txtPoppinsBold25"
                            >
                              182
                            </Text>
                            <Text
                              className="mb-0.5 mt-[11px] text-[15px] text-lime-300"
                              size="txtPoppinsRegular15Lime300"
                            >
                              90%
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="flex items-center justify-center mb-1.5 mt-14"
                        shape="round"
                      >
                        <Img
                          className="h-5"
                          src="images/img_close.svg"
                          alt="close_Three"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-poppins gap-[15px] items-center justify-between mt-[79px] w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-[21px] sm:px-5 rounded-[10px] w-[21%] md:w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] text-[15px] text-gray-900"
                      size="txtPoppinsMedium15"
                    >
                      Reminders
                    </Text>
                    <div className="bg-gray-200 flex flex-col gap-[23px] items-center justify-start mt-[26px] p-[9px] rounded-[5px] w-[95%] md:w-full">
                      <Text
                        className="text-[17px] text-gray-900 w-3/4 sm:w-full"
                        size="txtPoppinsMedium17"
                      >
                        Upcoming Deals To crack
                      </Text>
                      <div className="flex flex-col items-center justify-start mb-[17px] w-[84%] md:w-full">
                        <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                          <div className="flex flex-row gap-[9px] items-start justify-start w-[79%] md:w-full">
                            <Img
                              className="h-[17px] w-[17px]"
                              src="images/img_calendar.svg"
                              alt="calendar"
                            />
                            <Text
                              className="text-[13px] text-gray-900"
                              size="txtPoppinsExtraLight13"
                            >
                              Sept-27-08-2023
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-start justify-start w-full">
                            <Img
                              className="h-[18px] w-[18px]"
                              src="images/img_mditag.svg"
                              alt="mditag"
                            />
                            <Text
                              className="text-[13px] text-gray-900"
                              size="txtPoppinsExtraLight13"
                            >
                              Backend Development
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-200 flex flex-col gap-[17px] items-center justify-center mb-4 mt-[50px] p-[18px] rounded-[5px] w-[95%] md:w-full">
                      <Text
                        className="mt-[21px] text-[17px] text-gray-900 w-[82%] sm:w-full"
                        size="txtPoppinsMedium17"
                      >
                        Upcoming Deals To Pay
                      </Text>
                      <div className="flex flex-col items-start justify-start mb-9 w-[96%] md:w-full">
                        <div className="md:h-[58px] h-[59px] ml-1 md:ml-[0] relative w-[98%]">
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                            <div className="flex flex-col gap-[18px] justify-start w-full">
                              <div className="flex flex-row gap-[9px] items-start justify-start w-[79%] md:w-full">
                                <Img
                                  className="h-[17px] w-[17px]"
                                  src="images/img_calendar.svg"
                                  alt="calendar_One"
                                />
                                <Text
                                  className="text-[13px] text-gray-900"
                                  size="txtPoppinsExtraLight13"
                                >
                                  Sept-27-08-2023
                                </Text>
                              </div>
                              <Text
                                className="md:ml-[0] ml-[26px] text-[13px] text-gray-900"
                                size="txtPoppinsExtraLight13"
                              >
                                Backend Development
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="absolute bottom-[0] h-[18px] left-[0] w-[18px]"
                            src="images/img_mditag.svg"
                            alt="mditag_One"
                          />
                        </div>
                        <Text
                          className="ml-1 md:ml-[0] mt-11 text-[17px] text-gray-900 w-[86%] sm:w-full"
                          size="txtPoppinsMedium17"
                        >
                          Upcoming Tasks To complete
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[23px] w-[99%] md:w-full">
                          <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                            <div className="flex flex-row gap-[9px] items-start justify-start w-[77%] md:w-full">
                              <Img
                                className="h-[17px] w-[17px]"
                                src="images/img_calendar.svg"
                                alt="calendar_Two"
                              />
                              <Text
                                className="text-[13px] text-gray-900"
                                size="txtPoppinsExtraLight13"
                              >
                                Sept-27-08-2023
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-start justify-start w-full">
                              <Img
                                className="h-[18px] w-[18px]"
                                src="images/img_mditag.svg"
                                alt="mditag_Two"
                              />
                              <Text
                                className="text-[13px] text-gray-900"
                                size="txtPoppinsExtraLight13"
                              >
                                Frontend-development
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col font-montserrat items-start justify-end p-[21px] sm:px-5 rounded-[10px] w-[79%] md:w-full">
                    <div className="flex flex-col justify-start md:ml-[0] ml-[15px] w-[93%] md:w-full">
                      <Text
                        className="ml-5 md:ml-[0] text-[17px] text-gray-900"
                        size="txtMontserratRomanMedium17"
                      >
                        Recent Transactions
                      </Text>
                      <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-end md:ml-[0] ml-[152px] mt-11 w-4/5 md:w-full">
                        <Text
                          className="text-[15px] text-gray-900"
                          size="txtPoppinsMedium15"
                        >
                          Partner
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[178px] text-[15px] text-gray-900"
                          size="txtPoppinsMedium15"
                        >
                          Price
                        </Text>
                        <Text
                          className="ml-32 md:ml-[0] text-[15px] text-gray-900"
                          size="txtPoppinsMedium15"
                        >
                          Date
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[110px] text-[15px] text-gray-900"
                          size="txtPoppinsMedium15"
                        >
                          Method
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[82px] text-[15px] text-gray-900"
                          size="txtPoppinsMedium15"
                        >
                          Status
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-center justify-between mt-[50px] w-full">
                        <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-start justify-between w-[68%] md:w-full">
                          <Line className="bg-deep_purple-500 h-14 md:h-px mb-[391px] md:mt-0 mt-[99px] md:w-full w-px" />
                          <div className="flex flex-col items-center justify-start">
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                              <div className="flex sm:flex-1 flex-col md:gap-10 gap-[84px] items-center justify-start w-[4%] sm:w-full">
                                <div className="border border-deep_purple-500 border-solid h-4 rounded-sm w-full"></div>
                                <div className="bg-deep_purple-500 h-4 rounded-sm w-full"></div>
                                <div className="border border-deep_purple-500 border-solid h-4 rounded-sm w-full"></div>
                                <div className="border border-deep_purple-500 border-solid h-4 rounded-sm w-full"></div>
                                <div className="border border-deep_purple-500 border-solid h-4 rounded-sm w-full"></div>
                                <div className="border border-deep_purple-500 border-solid h-4 rounded-sm w-full"></div>
                              </div>
                              <div className="flex sm:flex-1 flex-col items-center justify-start w-4/5 sm:w-full">
                                <List
                                  className="flex flex-col gap-[46px] items-center w-full"
                                  orientation="vertical"
                                >
                                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                                    <div className="flex flex-col gap-[7px] items-start justify-start">
                                      <Text
                                        className="text-[15px] text-gray-900"
                                        size="txtPoppinsMedium15"
                                      >
                                        Livia Kirezi
                                      </Text>
                                      <Text
                                        className="text-[13px] text-gray-900"
                                        size="txtPoppinsExtraLight13"
                                      >
                                        Freelancer
                                      </Text>
                                    </div>
                                    <Text
                                      className="sm:ml-[0] ml-[156px] sm:mt-0 mt-1 text-[15px] text-deep_purple-500"
                                      size="txtPoppinsMedium15Deeppurple500"
                                    >
                                      $75000
                                    </Text>
                                    <Text
                                      className="sm:ml-[0] ml-[75px] sm:mt-0 mt-3 text-[13px] text-gray-900"
                                      size="txtPoppinsExtraLight13"
                                    >
                                      Sept-27-08-2023
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                                    <div className="flex flex-col gap-[7px] items-start justify-start">
                                      <Text
                                        className="text-[15px] text-gray-900"
                                        size="txtPoppinsMedium15"
                                      >
                                        Livia Kirezi
                                      </Text>
                                      <Text
                                        className="text-[13px] text-gray-900"
                                        size="txtPoppinsExtraLight13"
                                      >
                                        Freelancer
                                      </Text>
                                    </div>
                                    <Text
                                      className="sm:ml-[0] ml-[156px] sm:mt-0 mt-1.5 text-[15px] text-deep_purple-500"
                                      size="txtPoppinsMedium15Deeppurple500"
                                    >
                                      $7500
                                    </Text>
                                    <Text
                                      className="sm:ml-[0] ml-[85px] sm:mt-0 mt-[15px] text-[13px] text-gray-900"
                                      size="txtPoppinsExtraLight13"
                                    >
                                      Sept-27-08-2023
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 w-full">
                                    <div className="flex flex-col gap-[7px] items-start justify-start">
                                      <Text
                                        className="text-[15px] text-gray-900"
                                        size="txtPoppinsMedium15"
                                      >
                                        Livia Kirezi
                                      </Text>
                                      <Text
                                        className="text-[13px] text-gray-900"
                                        size="txtPoppinsExtraLight13"
                                      >
                                        Freelancer
                                      </Text>
                                    </div>
                                    <Text
                                      className="sm:ml-[0] ml-[156px] text-[15px] text-deep_purple-500"
                                      size="txtPoppinsMedium15Deeppurple500"
                                    >
                                      $7500
                                    </Text>
                                    <Text
                                      className="sm:ml-[0] ml-[85px] text-[13px] text-gray-900"
                                      size="txtPoppinsExtraLight13"
                                    >
                                      Sept-27-08-2023
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                                    <div className="flex flex-col gap-[7px] items-start justify-start">
                                      <Text
                                        className="text-[15px] text-gray-900"
                                        size="txtPoppinsMedium15"
                                      >
                                        Livia Kirezi
                                      </Text>
                                      <Text
                                        className="text-[13px] text-gray-900"
                                        size="txtPoppinsExtraLight13"
                                      >
                                        Freelancer
                                      </Text>
                                    </div>
                                    <Text
                                      className="sm:ml-[0] ml-[156px] sm:mt-0 mt-[5px] text-[15px] text-deep_purple-500"
                                      size="txtPoppinsMedium15Deeppurple500"
                                    >
                                      $7500
                                    </Text>
                                    <Text
                                      className="sm:ml-[0] ml-[85px] sm:mt-0 mt-4 text-[13px] text-gray-900"
                                      size="txtPoppinsExtraLight13"
                                    >
                                      Sept-27-08-2023
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                                    <div className="flex flex-col gap-[7px] items-start justify-start">
                                      <Text
                                        className="text-[15px] text-gray-900"
                                        size="txtPoppinsMedium15"
                                      >
                                        Livia Kirezi
                                      </Text>
                                      <Text
                                        className="text-[13px] text-gray-900"
                                        size="txtPoppinsExtraLight13"
                                      >
                                        Freelancer
                                      </Text>
                                    </div>
                                    <Text
                                      className="sm:ml-[0] ml-[156px] sm:mt-0 mt-[3px] text-[15px] text-deep_purple-500"
                                      size="txtPoppinsMedium15Deeppurple500"
                                    >
                                      $7500
                                    </Text>
                                    <Text
                                      className="sm:ml-[0] ml-[85px] sm:mt-0 mt-[15px] text-[13px] text-gray-900"
                                      size="txtPoppinsExtraLight13"
                                    >
                                      Sept-27-08-2023
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                                    <div className="flex flex-col gap-[7px] items-start justify-start">
                                      <Text
                                        className="text-[15px] text-gray-900"
                                        size="txtPoppinsMedium15"
                                      >
                                        Livia Kirezi
                                      </Text>
                                      <Text
                                        className="text-[13px] text-gray-900"
                                        size="txtPoppinsExtraLight13"
                                      >
                                        Freelancer
                                      </Text>
                                    </div>
                                    <Text
                                      className="sm:ml-[0] ml-[156px] sm:mt-0 mt-[3px] text-[15px] text-deep_purple-500"
                                      size="txtPoppinsMedium15Deeppurple500"
                                    >
                                      $7500
                                    </Text>
                                    <Text
                                      className="sm:ml-[0] ml-[85px] sm:mt-0 mt-4 text-[13px] text-gray-900"
                                      size="txtPoppinsExtraLight13"
                                    >
                                      Sept-27-08-2023
                                    </Text>
                                  </div>
                                </List>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col items-center justify-start w-[5%] md:w-full">
                          <Img
                            className="h-[30px]"
                            src="images/img_user_yellow_800_30x40.svg"
                            alt="user_One"
                          />
                          <Img
                            className="h-[30px] mt-[66px]"
                            src="images/img_user_yellow_800_30x40.svg"
                            alt="user_Two"
                          />
                          <Img
                            className="h-[30px] mt-[71px]"
                            src="images/img_user_yellow_800_30x40.svg"
                            alt="user_Three"
                          />
                          <Img
                            className="h-[30px] mt-[72px]"
                            src="images/img_user_yellow_800_30x40.svg"
                            alt="user_Four"
                          />
                          <Img
                            className="h-[30px] mt-[65px]"
                            src="images/img_user_yellow_800_30x40.svg"
                            alt="user_Five"
                          />
                          <Img
                            className="h-[30px] mt-[67px]"
                            src="images/img_user_yellow_800_30x40.svg"
                            alt="user_Six"
                          />
                        </div>
                        <div className="flex md:flex-1 flex-col md:gap-10 gap-[68px] items-center justify-start w-[11%] md:w-full">
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[96px] rounded-[3px]"
                            rightIcon={
                              <Img
                                className="mt-px mb-0.5 ml-[17px]"
                                src="images/img_checkmark_white_a700_16x20.svg"
                                alt="checkmark"
                              />
                            }
                            shape="round"
                            size="xs"
                          >
                            <div className="font-bold leading-[normal] text-[13px] text-left">
                              Payed
                            </div>
                          </Button>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[96px] rounded-[3px]"
                            rightIcon={
                              <Img
                                className="mt-px mb-0.5 ml-[17px]"
                                src="images/img_checkmark_white_a700_16x20.svg"
                                alt="checkmark"
                              />
                            }
                            shape="round"
                            color="gray_900"
                            size="xs"
                          >
                            <div className="font-bold leading-[normal] text-[13px] text-left">
                              Payed
                            </div>
                          </Button>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[96px] rounded-[3px]"
                            rightIcon={
                              <Img
                                className="mt-px mb-0.5 ml-[17px]"
                                src="images/img_checkmark_white_a700_16x20.svg"
                                alt="checkmark"
                              />
                            }
                            shape="round"
                            size="xs"
                          >
                            <div className="font-bold leading-[normal] text-[13px] text-left">
                              Payed
                            </div>
                          </Button>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[96px] rounded-[3px]"
                            rightIcon={
                              <div className="mt-px mb-0.5 ml-[17px] bg-gray-600 p-0.5 flex justify-center items-center">
                                <Img
                                  src="images/img_checkmark_white_a700_16x20.svg"
                                  alt="checkmark"
                                />
                              </div>
                            }
                            shape="round"
                            color="gray_600"
                            size="xs"
                          >
                            <div className="font-bold leading-[normal] text-[13px] text-left">
                              Payed
                            </div>
                          </Button>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[96px] rounded-[3px]"
                            rightIcon={
                              <Img
                                className="mt-px mb-0.5 ml-[17px]"
                                src="images/img_checkmark_white_a700_16x20.svg"
                                alt="checkmark"
                              />
                            }
                            shape="round"
                            color="gray_900"
                            size="xs"
                          >
                            <div className="font-bold leading-[normal] text-[13px] text-left">
                              Payed
                            </div>
                          </Button>
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[96px] rounded-[3px]"
                            rightIcon={
                              <Img
                                className="mt-px mb-0.5 ml-[17px]"
                                src="images/img_checkmark_white_a700_16x20.svg"
                                alt="checkmark"
                              />
                            }
                            shape="round"
                            size="xs"
                          >
                            <div className="font-bold leading-[normal] text-[13px] text-left">
                              Payed
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[152px] mt-[184px] text-[13px] text-blue_gray-100_01"
                  size="txtMontserratRomanLight13"
                >
                  monthly income 10%
                </Text>
              </div>
            </div>
            <div className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto p-[23px] sm:px-5 rounded-tl-[50px] top-[0] w-full">
              <Text
                className="md:ml-[0] ml-[30px] md:mt-0 mt-[30px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                size="txtMontserratRomanSemiBold30Gray900"
              >
                Transactions
              </Text>
              <Button
                className="flex h-10 items-center justify-center md:ml-[0] ml-[805px] md:mt-0 mt-[30px] w-10"
                shape="circle"
                color="gray_200"
              >
                <Img
                  className="h-[17px]"
                  src="images/img_search.svg"
                  alt="search"
                />
              </Button>
              <Img
                className="h-10 ml-5 md:ml-[0] md:mt-0 mt-[30px] w-10"
                src="images/img_group20093.svg"
                alt="group20093"
              />
              <div className="flex md:flex-1 flex-row gap-[22px] items-center justify-center ml-7 md:ml-[0] md:mt-0 mt-[31px] w-[13%] md:w-full">
                <Img
                  className="h-9 md:h-auto rounded-[50%] w-[23%]"
                  src="images/img_screenshot20230915_36x40.png"
                  alt="screenshot20230"
                />
                <SelectBox
                  className="font-medium leading-[normal] text-[13px] text-black-900 text-left w-[64%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-[13px] mr-[0] w-[15px]"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group134"
                  options={angeleMarieOptionsList}
                  isSearchable={false}
                  placeholder="Angele Marie"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionsPage;
