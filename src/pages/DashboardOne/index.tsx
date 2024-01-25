import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const activitiesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const thisMonthOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const angeleMarieOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gradient2  flex flex-col font-montserrat items-center justify-start mx-auto sm:pl-5 pl-[29px] w-full">
        <div className="flex md:flex-col flex-row gap-[13px] items-start justify-between max-w-[1699px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[88px] justify-start md:mt-0 mt-[248px] w-[15%] md:w-full">
            <Input
              name="groupSeventyOne"
              placeholder="Dashboard"
              className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-left text-xl w-full"
              wrapClassName="flex w-full"
              prefix={
                <div className="h-[30px] mr-[35px] w-[30px] bg-white-A700">
                  <Img
                    className="h-[30px] my-auto"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                </div>
              }
              shape="round"
              color="white_A700"
              size="md"
              variant="outline"
            ></Input>
            <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-[81%] md:w-full">
              <div className="flex flex-row gap-[46px] items-start justify-start ml-0.5 md:ml-[0] w-[87%] md:w-full">
                <Img
                  className="h-7"
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
              <Img
                className="h-7 mt-[63px]"
                src="images/img_vector_white_a700.svg"
                alt="vector"
              />
              <SelectBox
                className="font-medium leading-[normal] md:ml-[0] ml-[69px] mt-[3px] text-left text-white-A700 text-xl w-[66%] sm:w-full"
                placeholderClassName="text-white-A700"
                indicator={
                  <Img
                    className="h-[13px] mr-[0] w-[15px]"
                    src="images/img_arrowdown_white_a700.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="group148"
                options={activitiesOptionsList}
                isSearchable={false}
                placeholder="Activities"
              />
              <div className="flex flex-row gap-[46px] items-end justify-start mt-[101px] w-[84%] md:w-full">
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
              <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-[664px] w-[84%] md:w-full">
                <div className="flex flex-col gap-[45px] items-center justify-start w-full">
                  <div className="flex flex-row gap-[50px] items-end justify-start w-[98%] md:w-full">
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
                  <div className="flex flex-row gap-[52px] items-start justify-start w-[99%] md:w-full">
                    <Img
                      className="h-[23px]"
                      src="images/img_profile.svg"
                      alt="profile"
                    />
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtMontserratRomanMedium20WhiteA700"
                    >
                      Get Help
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:h-[1552px] h-[1553px] md:h-[3527px] relative w-[85%] md:w-full">
            <div className="absolute bg-gray-50_01 flex flex-col h-max inset-[0] items-center justify-center m-auto p-7 sm:px-5 rounded-bl-[50px] rounded-tl-[50px] w-full">
              <div className="flex md:flex-col flex-row md:gap-[59px] items-center justify-between mb-[11px] mt-[141px] w-[99%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[67%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-col gap-[13px] items-start justify-end outline outline-[2px] outline-blue_gray-100_01 p-[15px] rounded-[20px] w-[29%] md:w-full">
                      <Text
                        className="bg-clip-text bg-gradient7  md:ml-[0] ml-[13px] mt-2 text-transparent text-xl"
                        size="txtMontserratRomanSemiBold20Gray900"
                      >
                        Total Amount
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[17px] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                        size="txtMontserratRomanBold26"
                      >
                        $120.00
                      </Text>
                      <Img
                        className="h-[156px] md:h-auto ml-3 md:ml-[0] object-cover"
                        src="images/img_group20448.png"
                        alt="group20448"
                      />
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[52px] grid sm:grid-cols-1 grid-cols-2 w-[64%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-white-A700 flex flex-col gap-2.5 justify-end sm:ml-[0] outline outline-[2px] outline-blue_gray-100_01 p-5 rounded-[20px] w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[13px] mr-20 mt-[3px]">
                          <Text
                            className="bg-clip-text bg-gradient7  text-transparent text-xl"
                            size="txtMontserratRomanSemiBold20Gray900"
                          >
                            Tax reserves
                          </Text>
                          <Text
                            className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                            size="txtMontserratRomanBold26"
                          >
                            $20.00
                          </Text>
                        </div>
                        <Img
                          className="h-[156px] md:h-auto mx-auto object-cover"
                          src="images/img_group20448.png"
                          alt="group20451"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-3 justify-end sm:ml-[0] outline outline-[2px] outline-blue_gray-100_01 p-[18px] rounded-[20px] w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[21px] mr-[59px] mt-[5px]">
                          <Text
                            className="bg-clip-text bg-gradient7  text-transparent text-xl"
                            size="txtMontserratRomanSemiBold20Gray900"
                          >
                            Escrow Funds
                          </Text>
                          <Text
                            className="ml-0.5 md:ml-[0] md:text-2xl sm:text-[22px] text-[26px] text-gray-900"
                            size="txtMontserratRomanBold26"
                          >
                            $100.00
                          </Text>
                        </div>
                        <Img
                          className="h-[156px] md:h-auto ml-2.5 md:ml-[0] mr-[3px] object-cover"
                          src="images/img_group20452.png"
                          alt="group20452"
                        />
                      </div>
                    </List>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start mt-[46px] p-[33px] sm:px-5 rounded-[20px] shadow-bs w-full">
                    <div className="flex flex-col md:gap-10 gap-[93px] items-center justify-start mb-[17px] mt-2.5 w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="bg-clip-text bg-gradient7  sm:mt-0 mt-1 text-3xl sm:text-[26px] md:text-[28px] text-transparent"
                          size="txtMontserratRomanSemiBold30Gray900"
                        >
                          Money Flow
                        </Text>
                        <div className="bg-gray-900 h-[15px] sm:ml-[0] ml-[201px] sm:mt-0 my-[13px] rounded-[7px] w-[7%]"></div>
                        <Text
                          className="ml-2.5 sm:ml-[0] sm:mt-0 mt-[13px] text-[15px] text-gray-900"
                          size="txtMontserratRomanMedium15"
                        >
                          Expenses
                        </Text>
                        <Input
                          name="groupSeventyFour"
                          placeholder="25/Dec/2024"
                          className="font-thin leading-[normal] p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                          wrapClassName="flex sm:flex-1 sm:ml-[0] ml-[60px] rounded-[20px] w-[31%] sm:w-full"
                          suffix={
                            <Img
                              className="h-6 ml-[35px] my-auto"
                              src="images/img_solarcalendarbroken.svg"
                              alt="solar:calendar-broken"
                            />
                          }
                          color="gray_200"
                          size="sm"
                          variant="outline"
                        ></Input>
                      </div>
                      <div className="h-[310px] relative w-[97%] md:w-full">
                        <Img
                          className="absolute h-[310px] inset-[0] justify-center m-auto"
                          src="images/img_group20443.svg"
                          alt="group20443"
                        />
                        <Img
                          className="absolute h-[108px] inset-[0] justify-center m-auto"
                          src="images/img_group20454.svg"
                          alt="group20454"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[441px] sm:h-[477px] md:h-[903px] justify-end mt-9 relative w-full">
                    <div className="flex flex-row gap-[15px] h-full items-start justify-center mb-[74px] ml-[116px] mt-auto w-[32%]">
                      <div className="flex flex-col md:gap-10 gap-[155px] justify-start w-[71%]">
                        <Text
                          className="ml-5 md:ml-[0] text-[13px] text-blue_gray-100_01"
                          size="txtMontserratRomanLight13"
                        >
                          monthly income 10%
                        </Text>
                        <Img
                          className="h-2"
                          src="images/img_group20452_blue_gray_100_01.svg"
                          alt="group20452"
                        />
                      </div>
                      <Text
                        className="mt-[129px] text-black-900 text-lg"
                        size="txtMontserratRomanSemiBold18"
                      >
                        $100.00
                      </Text>
                    </div>
                    <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-center justify-between m-auto w-full">
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start outline outline-[2px] outline-blue_gray-100_01 p-[17px] rounded-[20px] shadow-bs w-[47%] md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start mb-[51px] mt-[17px] w-[99%] md:w-full">
                          <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                            <Text
                              className="mt-[3px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                              size="txtMontserratRomanSemiBold23"
                            >
                              Top Inquiries
                            </Text>
                            <SelectBox
                              className="font-light leading-[normal] outline outline-[1px] outline-blue_gray-100_01 text-[15px] text-left w-[41%] sm:w-full"
                              placeholderClassName="text-black-900"
                              indicator={
                                <Img
                                  className="h-[13px] mr-[0] w-[13px]"
                                  src="images/img_arrowdown_black_900.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="groupSeventyNine"
                              options={thisMonthOptionsList}
                              isSearchable={false}
                              placeholder="This month"
                              shape="round"
                              color="gray_200"
                              size="xs"
                            />
                          </div>
                          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                            <div className="bg-white-A700 flex flex-col items-center justify-end outline outline-[1px] outline-blue_gray-100_01 p-[17px] rounded-[10px] w-full">
                              <div className="flex flex-row items-center justify-start w-[97%] md:w-full">
                                <Img
                                  className="h-10 w-10"
                                  src="images/img_rifundsfill.svg"
                                  alt="rifundsfill"
                                />
                                <div className="flex flex-col items-start justify-start ml-3.5 w-[61%]">
                                  <Text
                                    className="text-black-900 text-lg"
                                    size="txtMontserratRomanSemiBold18"
                                  >
                                    Mutual Funds
                                  </Text>
                                  <Text
                                    className="ml-0.5 md:ml-[0] mt-1 text-[13px] text-blue_gray-100_01"
                                    size="txtMontserratRomanLight13"
                                  >
                                    monthly income 10%
                                  </Text>
                                  <Img
                                    className="h-2 mt-[21px]"
                                    src="images/img_group20452_blue_gray_100_01.svg"
                                    alt="group20451"
                                  />
                                </div>
                                <Text
                                  className="ml-[15px] text-black-900 text-lg"
                                  size="txtMontserratRomanSemiBold18"
                                >
                                  $70.00
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white-A700 flex flex-col items-start justify-end outline outline-[1px] outline-blue_gray-100_01 p-[15px] rounded-[10px] w-full">
                              <div className="flex flex-row gap-2.5 items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[72%] md:w-full">
                                <Text
                                  className="bg-deep_purple-500 flex h-10 items-center justify-center mb-5 mt-[7px] rounded-[50%] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-10"
                                  size="txtMontserratRomanSemiBold25"
                                >
                                  $
                                </Text>
                                <div className="flex flex-col items-start justify-start w-[81%]">
                                  <Text
                                    className="md:ml-[0] ml-[5px] text-black-900 text-lg"
                                    size="txtMontserratRomanSemiBold18"
                                  >
                                    Investment
                                  </Text>
                                  <Text
                                    className="ml-1.5 md:ml-[0] mt-1 text-[13px] text-blue_gray-100_01"
                                    size="txtMontserratRomanLight13"
                                  >
                                    monthly income 5%
                                  </Text>
                                  <Img
                                    className="h-2 mt-4"
                                    src="images/img_group20452_blue_gray_100_01.svg"
                                    alt="group20452_One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start outline outline-[2px] outline-blue_gray-100_01 p-4 rounded-[20px] shadow-bs w-[47%] md:w-full">
                        <div className="flex flex-col gap-[38px] items-center justify-start my-[21px] w-full">
                          <div className="flex flex-row items-start justify-between w-[97%] md:w-full">
                            <Text
                              className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                              size="txtMontserratRomanSemiBold23"
                            >
                              Statistics
                            </Text>
                            <div className="bg-gray-200 flex flex-row gap-[19px] items-start justify-center mt-[3px] p-1.5 rounded-[10px]">
                              <a
                                href="javascript:"
                                className="ml-[27px] mt-0.5 text-[15px] text-black-900"
                              >
                                <Text size="txtMontserratRomanLight15">
                                  View All
                                </Text>
                              </a>
                              <Img
                                className="h-[13px] mr-[17px] mt-[5px] w-[13px]"
                                src="images/img_arrowright.svg"
                                alt="arrowright"
                              />
                            </div>
                          </div>
                          <div className="md:h-[268px] h-[289px] relative w-[99%] sm:w-full">
                            <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto outline outline-[1px] outline-blue_gray-100_01 p-[42px] md:px-10 sm:px-5 rounded-[10px] w-full">
                              <div className="flex flex-col items-start justify-start mb-[25px] mt-4 w-[44%] md:w-full">
                                <div className="flex flex-row gap-[11px] items-center justify-start w-3/4 md:w-full">
                                  <div className="bg-deep_purple-500 h-[15px] my-1 rounded-[7px] w-[15px]"></div>
                                  <Text
                                    className="text-black-900 text-center text-xl"
                                    size="txtMontserratRomanSemiBold20Black900"
                                  >
                                    $20.00
                                  </Text>
                                </div>
                                <Text
                                  className="md:ml-[0] ml-[26px] mt-[5px] text-[17px] text-black-900 text-center"
                                  size="txtMontserratRomanLight17"
                                >
                                  applications
                                </Text>
                                <div className="flex flex-row gap-[11px] items-center justify-start mt-[35px] w-3/4 md:w-full">
                                  <div className="bg-gray-900 h-[15px] my-1 rounded-[7px] w-[15px]"></div>
                                  <Text
                                    className="text-black-900 text-center text-xl"
                                    size="txtMontserratRomanSemiBold20Black900"
                                  >
                                    $60.00
                                  </Text>
                                </div>
                                <Text
                                  className="md:ml-[0] ml-[26px] mt-[11px] text-[17px] text-black-900 text-center"
                                  size="txtMontserratRomanLight17"
                                >
                                  Freelancing
                                </Text>
                              </div>
                            </div>
                            <div className="!w-[46%] absolute h-[165px] left-[2%] overflow-visible top-[0]">
                              <CircularProgressbar
                                className="!w-[46%] absolute h-[165px] left-[2%] overflow-visible top-[0]"
                                value={60}
                                strokeWidth={10}
                                styles={{
                                  trail: { strokeWidth: 10, stroke: "#5846df" },
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-9 items-center justify-center p-[18px] rounded-[20px] shadow-bs w-[29%] md:w-full">
                  <div className="md:h-[211px] h-[236px] sm:h-[265px] mt-[29px] relative w-[93%]">
                    <Text
                      className="ml-[9px] mt-1.5 sm:text-[19px] md:text-[21px] text-[23px] text-gray-900"
                      size="txtMontserratRomanSemiBold23Gray900"
                    >
                      My Cards
                    </Text>
                    <div className="absolute flex flex-col font-hkgrotesk gap-7 h-full inset-[0] justify-center m-auto w-full">
                      <Img
                        className="h-[18px] md:ml-[0] ml-[314px]"
                        src="images/img_group.svg"
                        alt="group"
                      />
                      <div className="bg-gradient12  flex md:h-[136px] h-[190px] justify-end relative rounded-[20px] shadow-bs1 w-full">
                        <div className="flex flex-col gap-[30px] h-full items-start justify-start mb-[39px] mt-auto mx-auto w-[86%]">
                          <div className="flex flex-row items-end justify-between w-full">
                            <div className="flex flex-col items-start justify-start mb-0.5">
                              <Text
                                className="text-base text-gray-100"
                                size="txtHKGroteskRegular16"
                              >
                                **** **** **** 1690
                              </Text>
                              <Text
                                className="mt-0.5 text-base text-white-A700_01"
                                size="txtHKGroteskBold16"
                              >
                                Platinum Plus
                              </Text>
                            </div>
                            <Text
                              className="mt-[27px] text-sm text-white-A700_01"
                              size="txtHKGroteskRegular14"
                            >
                              Exp 01/22
                            </Text>
                          </div>
                          <Text
                            className="text-base text-white-A700_01"
                            size="txtHKGroteskBold16"
                          >
                            Sunny Aveiro
                          </Text>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col md:gap-10 gap-24 h-full inset-[0] justify-center m-auto p-[3px] w-full"
                          style={{
                            backgroundImage: "url('images/img_group85.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-2 items-center justify-start ml-5 md:ml-[0] mr-[129px] mt-[33px] w-auto">
                            <Img
                              className="h-6 w-[25px]"
                              src="images/img_settings_indigo_50.svg"
                              alt="settings_One"
                            />
                            <Text
                              className="text-base text-white-A700_01 w-auto"
                              size="txtHKGroteskMedium16"
                            >
                              Dutch Bangla Bank
                            </Text>
                          </div>
                          <Img
                            className="h-[31px] md:ml-[0] ml-[259px] mr-5"
                            src="images/img_user_yellow_800.svg"
                            alt="user_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[936px] md:h-[948px] mb-[70px] relative w-full">
                    <div className="absolute bg-gray-200 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[22px] sm:px-5 rounded-[20px] top-[5%] w-full">
                      <div className="flex flex-col gap-[13px] items-start justify-start mt-2.5 w-[99%] md:w-full">
                        <Text
                          className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-900"
                          size="txtMontserratRomanSemiBold23Gray900"
                        >
                          Quick Transfer
                        </Text>
                        <Line className="bg-black-900_19 h-px w-full" />
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[33px] w-[88%] md:w-full">
                        <div className="flex flex-col items-center justify-start outline-[2px] outline-dashed outline-white-A700 rounded-[17px] w-[34px]">
                          <Text
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                            size="txtMontserratRomanMedium23WhiteA700"
                          >
                            +
                          </Text>
                        </div>
                        <Img
                          className="h-[33px] md:h-auto ml-[19px] rounded-[50%] w-[14%]"
                          src="images/img_screenshot20230915_33x36.png"
                          alt="screenshot20230"
                        />
                        <Img
                          className="h-8 md:h-auto ml-4 rounded-[50%] w-[14%]"
                          src="images/img_yellow2.png"
                          alt="yellowTwo"
                        />
                        <Img
                          className="h-[33px] md:h-auto ml-3.5 rounded-[50%] w-[14%]"
                          src="images/img_screenshot20230915_33x36.png"
                          alt="screenshot20230_One"
                        />
                        <div className="h-[29px] ml-3 relative w-[24%]">
                          <div className="absolute h-[29px] inset-y-[0] my-auto right-[0] w-3/4">
                            <Img
                              className="absolute h-[29px] inset-y-[0] my-auto right-[0] rounded-[50%] w-[73%]"
                              src="images/img_screenshot20230915_29x34.png"
                              alt="screenshot20230_Two"
                            />
                            <Img
                              className="absolute h-[29px] inset-y-[0] left-[0] my-auto rounded-[50%] w-[30px]"
                              src="images/img_yellow1.png"
                              alt="yellowOne"
                            />
                          </div>
                          <Img
                            className="absolute h-[29px] inset-y-[0] left-[0] my-auto rounded-[50%] w-[54%]"
                            src="images/img_screenshot20230915_29x34.png"
                            alt="screenshot20230_Three"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-start justify-start mt-[30px] outline outline-[1px] outline-blue_gray-100_01 p-1.5 rounded-[10px] w-[99%] md:w-full">
                        <div className="flex flex-row gap-4 items-start justify-start mb-[5px] md:ml-[0] ml-[15px] w-[51%] md:w-full">
                          <Img
                            className="h-[37px] md:h-auto mb-0.5 object-cover w-[28%]"
                            src="images/img_screenshot20230915_37x40.png"
                            alt="screenshot20230_Four"
                          />
                          <div className="flex flex-col gap-3 items-start justify-start mt-[3px]">
                            <Text
                              className="text-black-900 text-xs"
                              size="txtMontserratRomanRegular12"
                            >
                              Cyami Andrew
                            </Text>
                            <Text
                              className="text-[8px] text-black-900"
                              size="txtMontserratRomanExtraLight8"
                            >
                              Software Developer
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start mt-[19px] outline outline-[1px] outline-deep_purple-500 p-3 rounded-[10px] w-[99%] md:w-full">
                        <div className="flex flex-row items-center justify-start w-[98%] md:w-full">
                          <div className="flex flex-col gap-2 items-center justify-start">
                            <Text
                              className="text-[13px] text-deep_purple-500"
                              size="txtMontserratRomanMedium13"
                            >
                              Enter Amount
                            </Text>
                            <Text
                              className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                              size="txtMontserratRomanMedium23"
                            >
                              $200.00
                            </Text>
                          </div>
                          <Img
                            className="h-[30px] ml-[118px]"
                            src="images/img_user_yellow_800_30x40.svg"
                            alt="user_Two"
                          />
                          <Img
                            className="h-[9px] ml-1 w-2.5"
                            src="images/img_arrowdown_black_900.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                      <div className="bg-deep_purple-500 flex flex-col items-end justify-end mb-[17px] mt-[27px] p-3 rounded-[10px]">
                        <Text
                          className="mr-20 mt-[5px] text-base text-white-A700"
                          size="txtMontserratRomanSemiBold16"
                        >
                          Send Money
                        </Text>
                      </div>
                    </div>
                    <div className="bg-deep_purple-500 h-2.5 mx-auto rounded-[5px] w-[9%]"></div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group84.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[34px] items-center justify-start mb-2 mt-[558px] w-[99%] md:w-full">
                        <div className="bg-deep_purple-500 flex flex-col font-helveticaneue items-center justify-start rounded-[30px] w-full">
                          <div className="md:h-[201px] h-[258px] relative w-[98%]">
                            <div className="absolute h-[201px] left-[0] top-[0] w-[79%]">
                              <div className="bg-gray-900 h-[201px] m-auto rounded-[122px] w-full"></div>
                              <Text
                                className="absolute left-[9%] text-white-A700 text-xl top-[24%]"
                                size="txtHelveticaNeueBold20"
                              >
                                50% Discount!
                              </Text>
                            </div>
                            <Img
                              className="absolute bottom-[0] h-[109px] object-cover right-[0] rounded-[30px] w-[49%]"
                              src="images/img_image126.png"
                              alt="image126"
                            />
                            <Text
                              className="absolute inset-x-[0] leading-[20.00px] mx-auto text-sm text-white-A700 top-[29%] w-[85%] sm:w-full"
                              size="txtHelveticaNeue14"
                            >
                              Get a discount on certain days and don’t miss it.
                            </Text>
                            <div className="absolute bottom-[17%] h-[38px] left-[7%] w-[14%]">
                              <div className="bg-indigo-900 h-[38px] m-auto rounded-[21px] w-full"></div>
                              <Img
                                className="absolute h-[23px] inset-[0] justify-center m-auto rotate-[180deg] rounded-[50%] w-[61%]"
                                src="images/img_arrowleft.svg"
                                alt="arrowleft"
                              />
                            </div>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-montserrat font-semibold leading-[normal] min-w-[300px] rounded-[10px] text-base text-center"
                          size="md"
                        >
                          <>Go Premium Now &gt;&gt;&gt;</>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto p-7 sm:px-5 rounded-tl-[50px] top-[0] w-full">
              <Text
                className="ml-6 md:ml-[0] md:mt-0 mt-[27px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                size="txtMontserratRomanSemiBold30Gray900"
              >
                Dashboard
              </Text>
              <Button
                className="flex h-10 items-center justify-center md:ml-[0] ml-[855px] md:mt-0 mt-6 w-10"
                shape="circle"
                color="gray_200"
                size="xs"
              >
                <Img src="images/img_rewind.svg" alt="rewind" />
              </Button>
              <Img
                className="h-10 ml-5 md:ml-[0] md:mt-0 mt-6 w-10"
                src="images/img_group20093.svg"
                alt="group20093"
              />
              <div className="flex md:flex-1 flex-row gap-[22px] items-center justify-center ml-7 md:ml-[0] md:mt-0 mt-[25px] w-[13%] md:w-full">
                <Img
                  className="h-9 md:h-auto rounded-[50%] w-[23%]"
                  src="images/img_screenshot20230915_36x40.png"
                  alt="screenshot20230_Five"
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
                  name="group150"
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

export default DashboardOnePage;
