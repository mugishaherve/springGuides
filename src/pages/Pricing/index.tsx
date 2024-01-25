import React from "react";

import { CheckBox, Img, Input, Line, List, Switch, Text } from "components";
import Footer from "components/Footer";

const PricingPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat gap-14 items-center justify-start mx-auto w-full">
        <div className="sm:h-[2769px] h-[2825px] md:h-[3431px] md:px-5 relative w-full">
          <div className="absolute sm:h-[2769px] h-[2771px] md:h-[3031px] inset-[0] justify-center m-auto w-full">
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[98%]">
              <div className="flex flex-col justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="h-[298px] relative w-[32%] md:w-full">
                    <div className="absolute flex flex-col items-center justify-start right-[0] top-[22%] w-[86%]">
                      <div className="flex flex-row items-end justify-between w-full">
                        <div className="font-inter h-[49px] md:h-[53px] mb-1 relative w-[47%]">
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-deep_purple-500 w-max"
                            size="txtInterRegular30"
                          >
                            <span className="text-deep_purple-500 font-montserrat text-left font-extrabold">
                              Genu ne
                            </span>
                            <span className="text-deep_purple-500 font-montserrat text-left font-normal">
                              Pay
                            </span>
                          </Text>
                          <Img
                            className="absolute h-[49px] inset-y-[0] left-[37%] my-auto"
                            src="images/img_gameiconstakemymoney.svg"
                            alt="gameiconstakemy"
                          />
                        </div>
                        <Text
                          className="mt-[18px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                          size="txtMontserratRomanMedium28"
                        >
                          Home{" "}
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[298px] inset-y-[0] left-[0] my-auto object-cover"
                      src="images/img_group9.png"
                      alt="groupNine"
                    />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[57px] md:mt-0 mt-[84px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtMontserratRomanMedium28"
                  >
                    About Us
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[60px] md:mt-0 mt-[84px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtMontserratRomanMedium28"
                  >
                    Features
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[55px] md:mt-0 mt-[86px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtMontserratRomanMedium28"
                  >
                    Pricing
                  </Text>
                  <div className="flex md:flex-1 flex-row items-start justify-center md:ml-[0] ml-[322px] md:mt-0 mt-[88px] w-[8%] md:w-full">
                    <Img
                      className="h-[25px] md:h-auto mb-0.5 object-cover w-[27%]"
                      src="images/img_ing1.png"
                      alt="ingOne"
                    />
                    <Text
                      className="ml-[7px] mt-1 text-black-900 text-lg"
                      size="txtMontserratRomanRegular18Black900"
                    >
                      English
                    </Text>
                    <Img
                      className="h-6 mt-[3px] w-6"
                      src="images/img_checkmark_black_900.svg"
                      alt="checkmark"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-row gap-3 items-center justify-start md:ml-[0] ml-[57px] md:mt-0 mt-[85px] w-[8%] md:w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_octiconperson24_black_900.svg"
                      alt="octiconpersonTwentyFour"
                    />
                    <a
                      href="javascript:"
                      className="sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                    >
                      <Text size="txtMontserratRomanMedium23">Sign In</Text>
                    </a>
                  </div>
                </div>
                <Text
                  className="bg-clip-text bg-gradient3  md:ml-[0] ml-[460px] mt-2 md:text-5xl text-[65px] text-center text-transparent"
                  size="txtMontserratRomanSemiBold65Gray900"
                >
                  Find Your Perfect Plan
                </Text>
                <Text
                  className="bg-clip-text bg-gradient6  md:ml-[0] ml-[406px] mt-[9px] text-3xl sm:text-[26px] md:text-[28px] text-center text-transparent w-3/5 sm:w-full"
                  size="txtMontserratRomanRegular30Gray900b2"
                >
                  Get Yourself A subscription and enjoy 30 days of unlimited
                  free trial!{" "}
                </Text>
                <div className="flex flex-row items-start justify-center md:ml-[0] ml-[716px] mt-[25px] w-[18%] md:w-full">
                  <Text
                    className="bg-clip-text bg-gradient6  mt-[7px] text-center text-transparent text-xl"
                    size="txtMontserratRomanSemiBold20"
                  >
                    Monthly
                  </Text>
                  <Switch
                    onColor="#ffffff"
                    offColor="#ffffff"
                    onHandleColor="#5846df"
                    offHandleColor="#5846df"
                    value={false}
                    className="border border-black-900_19 border-solid ml-[30px] w-[28%]"
                  />
                  <Text
                    className="bg-clip-text bg-gradient6  ml-[35px] mt-[7px] text-center text-transparent text-xl"
                    size="txtMontserratRomanRegular20"
                  >
                    Yearly
                  </Text>
                </div>
                <Img
                  className="h-[1122px] md:h-auto mt-[1114px] object-cover"
                  src="images/img_group30.png"
                  alt="groupThirty"
                />
              </div>
            </div>
            <Img
              className="absolute h-[918px] inset-y-[0] my-auto object-cover right-[0]"
              src="images/img_group8_white_a700_918x372.png"
              alt="groupEight"
            />
          </div>
          <div className="absolute bottom-[37%] flex flex-col gap-[31px] items-center justify-start right-[15%] w-[64%]">
            <Text
              className="bg-clip-text bg-gradient3  md:text-5xl text-[65px] text-center text-transparent"
              size="txtMontserratRomanSemiBold65Gray900"
            >
              Get The Prices Affordable To All
            </Text>
            <div className="h-[78px] relative w-[97%] md:w-full">
              <Text
                className="bg-clip-text bg-gradient6  m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-transparent w-full"
                size="txtMontserratRomanRegular25Gray900b2"
              >
                Prioritizing cost efficiency, strategic negotiations, and
                innovative pricing models to make products or services
                affordable for all.
              </Text>
              <Text
                className="absolute bg-clip-text bg-gradient6  h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-transparent w-full"
                size="txtMontserratRomanRegular25Gray900b2"
              >
                Prioritizing cost efficiency, strategic negotiations, and
                innovative pricing models to make products or services
                affordable for all.
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[375px] items-center justify-start w-full">
              <div className="md:h-[702px] h-[893px] relative w-full">
                <div className="md:h-[702px] h-[893px] m-auto w-full">
                  <div className="md:h-[702px] h-[893px] m-auto w-full">
                    <div className="md:h-[702px] h-[893px] m-auto w-full">
                      <div className="md:h-[702px] h-[893px] m-auto w-full">
                        <div className="absolute bg-gradient3  bottom-[0] h-[697px] inset-x-[0] mx-auto w-full"></div>
                        <div className="absolute bg-white-A700 h-[702px] left-[2%] rounded-[30px] shadow-bs top-[0] w-[32%]"></div>
                        <div className="absolute bg-white-A700 h-[702px] inset-x-[0] mx-auto rounded-[30px] shadow-bs top-[0] w-[32%]"></div>
                        <div className="absolute bg-white-A700 flex flex-col items-start justify-end p-[50px] md:px-10 sm:px-5 right-[1%] rounded-[30px] shadow-bs top-[0] w-[32%]">
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[50px] mt-[383px] w-[56%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row gap-[100px] items-end justify-start w-[87%] md:w-full">
                                <Img
                                  className="h-5 my-1 w-5"
                                  src="images/img_checkmark_gray_900.svg"
                                  alt="checkmark_One"
                                />
                                <Text
                                  className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900"
                                  size="txtMontserratRomanMedium23Gray900"
                                >
                                  30 Days
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[68px] items-end justify-start mt-7 w-full">
                                <Img
                                  className="h-5 mb-0.5 mt-1.5 w-5"
                                  src="images/img_checkmark_gray_900.svg"
                                  alt="checkmark_Two"
                                />
                                <Text
                                  className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900"
                                  size="txtMontserratRomanMedium23Gray900"
                                >
                                  Chat Support
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[70px] items-end justify-start mt-9 w-full">
                                <Img
                                  className="h-5 my-1 w-5"
                                  src="images/img_checkmark_gray_900.svg"
                                  alt="checkmark_Three"
                                />
                                <Text
                                  className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900"
                                  size="txtMontserratRomanMedium23Gray900"
                                >
                                  24/7 Support
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[82px] items-center justify-start mt-9 w-[96%] md:w-full">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_checkmark_gray_900.svg"
                                  alt="checkmark_Four"
                                />
                                <Text
                                  className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900"
                                  size="txtMontserratRomanMedium23Gray900"
                                >
                                  Fingerprint
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[336px] object-cover right-[2%] top-[11%] w-[31%]"
                        src="images/img_screenshot2024_336x527.png"
                        alt="screenshot2024"
                      />
                    </div>
                    <Img
                      className="absolute h-[378px] inset-x-[0] mx-auto object-cover top-[7%] w-[34%]"
                      src="images/img_screenshot2024_378x581.png"
                      alt="screenshot2024_One"
                    />
                  </div>
                  <div className="absolute h-[543px] left-[0] top-[0] w-2/5 md:w-full">
                    <Img
                      className="h-[543px] m-auto object-cover w-full"
                      src="images/img_screenshot2024_543x680.png"
                      alt="screenshot2024_Two"
                    />
                    <Text
                      className="absolute bg-clip-text bg-gradient3  left-1/4 sm:text-[40px] md:text-[46px] text-[50px] text-center text-transparent top-[8%]"
                      size="txtMontserratRomanBold50"
                    >
                      Free Trial
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[313px] inset-x-[0] justify-start mx-auto top-[5%] w-[85%]">
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-[362px] items-center justify-end md:ml-[0] ml-[706px] w-[52%] md:w-full">
                    <Text
                      className="bg-clip-text bg-gradient3  sm:text-[40px] md:text-[46px] text-[50px] text-center text-transparent"
                      size="txtMontserratRomanBold50"
                    >
                      Basic
                    </Text>
                    <Text
                      className="bg-clip-text bg-gradient3  sm:text-[40px] md:text-[46px] text-[50px] text-center text-transparent"
                      size="txtMontserratRomanBold50"
                    >
                      Premium
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[331px] grid md:grid-cols-1 grid-cols-2 mr-[627px] w-[57%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row gap-[102px] items-end justify-start w-[86%] md:w-full">
                          <Img
                            className="h-5 my-1 w-5"
                            src="images/img_checkmark_gray_900.svg"
                            alt="checkmark"
                          />
                          <Text
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900"
                            size="txtMontserratRomanMedium23Gray900"
                          >
                            14 Days
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[68px] items-end justify-start mt-7 w-full">
                          <Img
                            className="h-5 mb-0.5 mt-1.5 w-5"
                            src="images/img_checkmark_gray_900.svg"
                            alt="checkmark_One"
                          />
                          <Text
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900"
                            size="txtMontserratRomanMedium23Gray900"
                          >
                            Chat Support
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[70px] items-end justify-start mt-9 w-full">
                          <Img
                            className="h-5 my-1 w-5"
                            src="images/img_checkmark_gray_900.svg"
                            alt="checkmark_Two"
                          />
                          <Text
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900"
                            size="txtMontserratRomanMedium23Gray900"
                          >
                            24/7 Support
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[82px] items-center justify-start mt-9 w-[96%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_checkmark_gray_900.svg"
                            alt="checkmark_Three"
                          />
                          <Text
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900"
                            size="txtMontserratRomanMedium23Gray900"
                          >
                            Fingerprint
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row gap-[100px] items-end justify-start w-[87%] md:w-full">
                          <Img
                            className="h-5 my-1 w-5"
                            src="images/img_checkmark_gray_900.svg"
                            alt="checkmark"
                          />
                          <Text
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900"
                            size="txtMontserratRomanMedium23Gray900"
                          >
                            30 Days
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[68px] items-end justify-start mt-7 w-full">
                          <Img
                            className="h-5 mb-0.5 mt-1.5 w-5"
                            src="images/img_checkmark_gray_900.svg"
                            alt="checkmark_One"
                          />
                          <Text
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900"
                            size="txtMontserratRomanMedium23Gray900"
                          >
                            Chat Support
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[70px] items-end justify-start mt-9 w-full">
                          <Img
                            className="h-5 my-1 w-5"
                            src="images/img_checkmark_gray_900.svg"
                            alt="checkmark_Two"
                          />
                          <Text
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900"
                            size="txtMontserratRomanMedium23Gray900"
                          >
                            24/7 Support
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[82px] items-center justify-start mt-9 w-[96%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_checkmark_gray_900.svg"
                            alt="checkmark_Three"
                          />
                          <Text
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900"
                            size="txtMontserratRomanMedium23Gray900"
                          >
                            Fingerprint
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[98%] md:w-full">
                <div className="bg-gradient10  flex flex-col justify-start p-[85px] md:px-10 sm:px-5 rounded-[40px] shadow-bs w-[33%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[94px] mt-[26px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                    size="txtMontserratRomanMedium30WhiteA700"
                  >
                    FREE TRIAL
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[22px] mr-[65px] mt-[83px] md:text-5xl text-[100px] text-center text-white-A700"
                    size="txtMontserratRomanSemiBold100"
                  >
                    $0.00
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-[78px] mt-28 w-[72%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[89px] items-start justify-start w-[84%] md:w-full">
                        <Img
                          className="h-5 mt-1 w-5"
                          src="images/img_checkmark_white_a700.svg"
                          alt="checkmark_Five"
                        />
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                          size="txtMontserratRomanMedium30WhiteA700"
                        >
                          14 Days
                        </Text>
                      </div>
                      <CheckBox
                        className="font-medium leading-[normal] mt-14 md:pl-10 sm:pl-5 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                        inputClassName="mr-[5px]"
                        name="chatsupport_One"
                        id="chatsupport_One"
                        label="Chat Support"
                      ></CheckBox>
                      <CheckBox
                        className="font-medium leading-[normal] mt-[51px] md:pl-10 sm:pl-5 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                        inputClassName="mr-[5px]"
                        name="247support_One"
                        id="247support_One"
                        label="24/7 Support"
                      ></CheckBox>
                      <div className="flex flex-row gap-[62px] items-center justify-start mt-[61px] w-[95%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_checkmark_white_a700.svg"
                          alt="checkmark_Six"
                        />
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                          size="txtMontserratRomanMedium30WhiteA700"
                        >
                          Fingerprint
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:h-[1728px] h-[946px] relative w-[67%] md:w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-full">
                      <div className="bg-gradient10  flex flex-col md:gap-10 gap-[79px] items-center justify-start p-28 md:px-10 sm:px-5 rounded-[40px]">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                          size="txtMontserratRomanMedium30WhiteA700"
                        >
                          BASIC
                        </Text>
                        <Text
                          className="mb-[483px] md:text-5xl text-[100px] text-center text-white-A700"
                          size="txtMontserratRomanSemiBold100"
                        >
                          $5.00
                        </Text>
                      </div>
                      <div className="bg-gradient10  flex md:flex-1 flex-col md:gap-10 gap-[82px] items-center justify-center p-[75px] md:px-10 sm:px-5 rounded-[40px] shadow-bs w-[49%] md:w-full">
                        <Text
                          className="mt-[37px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                          size="txtMontserratRomanMedium30WhiteA700"
                        >
                          PREMIUM
                        </Text>
                        <div className="flex flex-col md:gap-10 gap-[123px] items-start justify-start mb-[85px] w-[92%] md:w-full">
                          <Text
                            className="md:text-5xl text-[100px] text-center text-white-A700"
                            size="txtMontserratRomanSemiBold100"
                          >
                            $10.00
                          </Text>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col md:gap-10 gap-[60px] justify-start w-full">
                              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[15px] w-[74%] md:w-full">
                                <div className="flex flex-row gap-[86px] items-start justify-start w-[85%] md:w-full">
                                  <Img
                                    className="h-5 mt-1 w-5"
                                    src="images/img_checkmark_white_a700.svg"
                                    alt="checkmark_Seven"
                                  />
                                  <Text
                                    className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                                    size="txtMontserratRomanMedium30WhiteA700"
                                  >
                                    30 Days
                                  </Text>
                                </div>
                                <CheckBox
                                  className="font-medium leading-[normal] mt-14 md:pl-10 sm:pl-5 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                                  inputClassName="mr-[5px]"
                                  name="chatsupport_Two"
                                  id="chatsupport_Two"
                                  label="Chat Support"
                                ></CheckBox>
                                <CheckBox
                                  className="font-medium leading-[normal] mt-[51px] md:pl-10 sm:pl-5 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                                  inputClassName="mr-[5px]"
                                  name="247support_Two"
                                  id="247support_Two"
                                  label="24/7 Support"
                                ></CheckBox>
                              </div>
                              <div className="h-[30px] relative w-full">
                                <Text
                                  className="m-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                                  size="txtMontserratRomanMedium30WhiteA700"
                                >
                                  Fingerprint,Face Recognition&Digital Bracelet
                                </Text>
                                <Img
                                  className="absolute bottom-[0] h-5 left-[4%] w-5"
                                  src="images/img_checkmark_white_a700.svg"
                                  alt="checkmark_Eight"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[17%] flex flex-col items-center justify-start left-[10%] w-[44%]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[86px] items-start justify-start w-[48%] md:w-full">
                        <Img
                          className="h-5 mt-1 w-5"
                          src="images/img_checkmark_white_a700.svg"
                          alt="checkmark_Nine"
                        />
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                          size="txtMontserratRomanMedium30WhiteA700"
                        >
                          30 Days
                        </Text>
                      </div>
                      <CheckBox
                        className="font-medium leading-[normal] mt-14 md:pl-10 sm:pl-5 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                        inputClassName="mr-[5px]"
                        name="chatsupport_Three"
                        id="chatsupport_Three"
                        label="Chat Support"
                      ></CheckBox>
                      <CheckBox
                        className="font-medium leading-[normal] mt-[51px] md:pl-10 sm:pl-5 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                        inputClassName="mr-[5px]"
                        name="247support_Three"
                        id="247support_Three"
                        label="24/7 Support"
                      ></CheckBox>
                      <CheckBox
                        className="font-medium leading-[normal] mt-[59px] sm:pl-5 text-3xl sm:text-[26px] md:text-[28px] text-left text-white-A700"
                        inputClassName="mr-[5px]"
                        name="fingerprintface_Three"
                        id="fingerprintface_Three"
                        label="Fingerprint&Face Recognition"
                      ></CheckBox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[914px] h-[975px] md:px-5 relative w-full">
          <Footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full" />
          <Img
            className="absolute h-[914px] object-cover right-[0] top-[0]"
            src="images/img_group12_914x456.png"
            alt="groupTwelve"
          />
        </div>
      </div>
    </>
  );
};

export default PricingPage;
