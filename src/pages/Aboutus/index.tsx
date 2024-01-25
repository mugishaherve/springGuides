import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";

const AboutusPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 font-montserrat h-[7570px] mx-auto relative w-full">
        <div className="sm:h-[6311px] h-[7577px] md:h-[7846px] m-auto md:px-5 w-full">
          <div className="absolute bottom-[0] sm:h-[6311px] h-[6467px] md:h-[7846px] inset-x-[0] mx-auto w-full">
            <div className="sm:h-[6311px] h-[6467px] md:h-[7846px] m-auto w-full">
              <div className="bg-gradient4  flex flex-col h-full items-center justify-start m-auto p-[30px] sm:px-5 w-full">
                <div className="h-[1450px] sm:h-[1492px] md:h-[2087px] mt-[63px] relative w-full">
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
                      <div className="flex flex-col md:gap-10 gap-[60px] justify-start">
                        <div className="flex flex-col gap-[43px] justify-start w-full">
                          <Text
                            className="md:text-5xl text-6xl text-black-900 w-full"
                            size="txtMontserratRomanSemiBold60Black900"
                          >
                            Our Vision Towards The Digital Finances
                          </Text>
                          <Text
                            className="bg-clip-text bg-gradient6  ml-2.5 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-transparent w-[82%] sm:w-full"
                            size="txtMontserratRomanRegular25Gray900b2"
                          >
                            Make it simple to make transactions with just one
                            tap on phone.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-11 md:ml-[0] w-[10%] md:w-full">
                          <Button
                            className="flex h-[65px] items-center justify-center rounded-[32px] w-[65px]"
                            size="md"
                          >
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </Button>
                          <Button
                            className="flex items-center justify-center mt-[62px] rounded-[33px] w-[65px]"
                            size="md"
                          >
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark_One"
                            />
                          </Button>
                          <Button
                            className="flex items-center justify-center mt-[70px] rounded-[33px] w-[65px]"
                            size="md"
                          >
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark_Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <Img
                        className="h-[659px] md:h-auto object-cover rounded-[30px]"
                        src="images/img_theeem1.png"
                        alt="theeemOne"
                      />
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[99%]">
                    <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col md:gap-10 gap-[453px] items-center justify-start w-[54%] md:w-full">
                        <Img
                          className="h-[659px] sm:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
                          src="images/img_theeem1.png"
                          alt="theeemOne_One"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="bg-clip-text bg-gradient6  text-3xl sm:text-[26px] md:text-[28px] text-transparent"
                            size="txtMontserratRomanMedium30"
                          >
                            Pioneering Financial Inclusion
                          </Text>
                          <Text
                            className="bg-clip-text bg-gradient6  mt-[71px] text-3xl sm:text-[26px] md:text-[28px] text-transparent w-full"
                            size="txtMontserratRomanMedium30"
                          >
                            Shaping a Transparent Financial Landscape
                          </Text>
                          <Text
                            className="bg-clip-text bg-gradient6  mt-[60px] text-3xl sm:text-[26px] md:text-[28px] text-transparent w-full"
                            size="txtMontserratRomanMedium30"
                          >
                            Leading the Evolution of User-Centric Fintech
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[5px] w-[45%] md:w-full">
                        <Text
                          className="md:text-5xl text-[65px] text-black-900 w-full"
                          size="txtMontserratRomanSemiBold65"
                        >
                          Our Mission For The Future
                        </Text>
                        <Text
                          className="bg-clip-text bg-gradient6  mt-[51px] sm:text-[21px] md:text-[23px] text-[25px] text-transparent w-[82%] sm:w-full"
                          size="txtMontserratRomanRegular25Gray900b2"
                        >
                          Make it simple to make transactions with just one tap
                          on phone.
                        </Text>
                        <div className="flex md:flex-col flex-row gap-[15px] items-center justify-start ml-1.5 md:ml-[0] mt-[54px] w-[94%] md:w-full">
                          <Img
                            className="h-[332px]"
                            src="images/img_group52.svg"
                            alt="groupFiftyTwo"
                          />
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="bg-clip-text bg-gradient6  text-3xl sm:text-[26px] md:text-[28px] text-transparent"
                              size="txtMontserratRomanMedium30"
                            >
                              Empowering Seamless Transactions
                            </Text>
                            <Text
                              className="bg-clip-text bg-gradient6  mt-[88px] text-3xl sm:text-[26px] md:text-[28px] text-transparent"
                              size="txtMontserratRomanMedium30"
                            >
                              Innovating Trust in Fintech
                            </Text>
                            <Text
                              className="bg-clip-text bg-gradient6  mt-[106px] text-3xl sm:text-[26px] md:text-[28px] text-transparent"
                              size="txtMontserratRomanMedium30"
                            >
                              Connecting Global Economies Securely
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="mt-[1316px] md:text-5xl text-[65px] text-black-900 text-center w-[54%] sm:w-full"
                  size="txtMontserratRomanSemiBold65"
                >
                  Our Values Determine Our Success To Our Goals
                </Text>
                <div className="md:h-[1371px] sm:h-[687px] h-[729px] mt-1 relative w-[87%] md:w-full">
                  <div className="absolute md:h-[1367px] sm:h-[683px] h-[701px] inset-[0] justify-center m-auto w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto sm:pl-5 pl-8 py-8 rounded-[20px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group100.svg')",
                      }}
                    >
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-3.5 mt-[299px] w-full">
                        <List
                          className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[203px] grid md:grid-cols-1 grid-cols-2 w-[64%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                            <div className="bg-deep_purple-500 flex flex-col h-[90px] items-center justify-start p-[23px] sm:px-5 rounded-[50%] w-[90px]">
                              <Img
                                className="h-[39px] my-0.5"
                                src="images/img_bitransparency.svg"
                                alt="bitransparency"
                              />
                            </div>
                            <Text
                              className="mt-[65px] text-center text-deep_purple-500 text-xl"
                              size="txtMontserratRomanBold20"
                            >
                              Transparency
                            </Text>
                            <Text
                              className="bg-clip-text bg-gradient6  mt-[27px] text-transparent text-xl w-full"
                              size="txtMontserratRomanMedium20Gray900b2"
                            >
                              Our platform seamlessly integrates diverse
                              financial services, offering you a unified
                              experience.{" "}
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start sm:ml-[0] w-full">
                            <div className="bg-deep_purple-500 flex flex-col h-[90px] items-center justify-start mr-[154px] p-[30px] sm:px-5 rounded-[50%] w-[90px]">
                              <Img
                                className="h-[26px] my-0.5"
                                src="images/img_vector_white_a700_26x30.svg"
                                alt="vector"
                              />
                            </div>
                            <Text
                              className="mt-16 text-center text-deep_purple-500 text-xl"
                              size="txtMontserratRomanBold20"
                            >
                              Intergrity
                            </Text>
                            <Text
                              className="bg-clip-text bg-gradient6  mt-7 text-transparent text-xl w-full"
                              size="txtMontserratRomanMedium20Gray900b2"
                            >
                              Our platform seamlessly integrates diverse
                              financial services, offering you a unified
                              experience.{" "}
                            </Text>
                          </div>
                        </List>
                        <div className="flex md:flex-1 flex-col items-center justify-start w-1/4 md:w-full">
                          <Img
                            className="h-[90px] w-[90px]"
                            src="images/img_user.svg"
                            alt="user"
                          />
                          <Text
                            className="mt-[62px] text-center text-deep_purple-500 text-xl"
                            size="txtMontserratRomanBold20"
                          >
                            Innovation
                          </Text>
                          <Text
                            className="bg-clip-text bg-gradient6  mt-[30px] text-transparent text-xl w-full"
                            size="txtMontserratRomanMedium20Gray900b2"
                          >
                            Our platform seamlessly integrates diverse financial
                            services, offering you a unified experience.{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col justify-start left-[3%] top-[0] w-[52%]">
                      <div className="bg-deep_purple-500 flex flex-col h-[90px] items-center justify-start md:ml-[0] ml-[644px] p-3.5 rounded-[50%] w-[90px]">
                        <Img
                          className="h-[60px] w-[60px]"
                          src="images/img_dashiconsprivacy_white_a700.svg"
                          alt="dashiconsprivac"
                        />
                      </div>
                      <Text
                        className="md:ml-[0] ml-[66px] mt-[51px] text-center text-deep_purple-500 text-xl"
                        size="txtMontserratRomanBold20"
                      >
                        Customer care
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient6  mr-[389px] mt-[29px] text-transparent text-xl w-[48%] sm:w-full"
                        size="txtMontserratRomanMedium20Gray900b2"
                      >
                        Our platform seamlessly integrates diverse financial
                        services, offering you a unified experience.{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col justify-start left-[10%] top-[0] w-[54%]">
                    <div className="bg-deep_purple-500 flex flex-col h-[90px] items-center justify-start mr-[679px] p-5 rounded-[50%] w-[90px]">
                      <Img
                        className="h-[46px] mb-1"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[479px] mt-[82px] text-center text-deep_purple-500 text-xl"
                      size="txtMontserratRomanBold20"
                    >
                      Security&Privacy
                    </Text>
                    <Text
                      className="bg-clip-text bg-gradient6  md:ml-[0] ml-[424px] mt-7 text-transparent text-xl w-[45%] sm:w-full"
                      size="txtMontserratRomanMedium20Gray900b2"
                    >
                      Our platform seamlessly integrates diverse financial
                      services, offering you a unified experience.{" "}
                    </Text>
                  </div>
                  <div className="absolute flex flex-col gap-7 justify-start right-[0] top-[23%]">
                    <Text
                      className="md:ml-[0] ml-[49px] text-center text-deep_purple-500 text-xl"
                      size="txtMontserratRomanBold20"
                    >
                      Global connectivity
                    </Text>
                    <Text
                      className="bg-clip-text bg-gradient6  text-transparent text-xl w-full"
                      size="txtMontserratRomanMedium20Gray900b2"
                    >
                      Our platform seamlessly integrates diverse financial
                      services, offering you a unified experience.{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[46px] items-center justify-start mb-[869px] mt-[72px] w-[94%] md:w-full">
                  <Text
                    className="sm:text-[35px] md:text-[37px] text-[39px] text-black-900 text-center"
                    size="txtMontserratRomanSemiBold39"
                  >
                    <span className="text-black-900 font-montserrat font-normal">
                      Frequently Asked
                    </span>
                    <span className="text-black-900 font-montserrat font-light">
                      {" "}
                    </span>
                    <span className="text-black-900 font-montserrat font-semibold">
                      Questions
                    </span>
                  </Text>
                  <List
                    className="bg-gray-300_99 flex flex-col gap-[46px] items-center p-[63px] md:px-10 sm:px-5 rounded-[30px] w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row md:gap-10 items-start justify-between p-[45px] md:px-10 sm:px-5 rounded-[30px] shadow-bs w-full">
                      <Text
                        className="sm:mt-0 mt-[29px] sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
                        size="txtMontserratRomanMedium34"
                      >
                        What is GenuinePay ?
                      </Text>
                      <div className="md:h-[109px] h-[50px] sm:h-[67px] mb-[17px] sm:mt-0 mt-[42px] relative w-[50px]">
                        <div className="absolute bg-deep_purple-500 h-[50px] inset-[0] justify-center m-auto rounded-[50%] w-[50px]"></div>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 w-max"
                          size="txtMontserratRomanMedium39"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between p-[45px] md:px-10 sm:px-5 rounded-[30px] shadow-bs w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
                        size="txtMontserratRomanMedium34"
                      >
                        How does GenuinePay ensure the security of my
                        transactions?
                      </Text>
                      <div className="h-[50px] md:h-[78px] mb-7 md:mt-0 mt-[31px] relative w-[50px]">
                        <div className="absolute bg-deep_purple-500 h-[50px] inset-[0] justify-center m-auto rounded-[50%] w-[50px]"></div>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 w-max"
                          size="txtMontserratRomanMedium39"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between p-[45px] md:px-10 sm:px-5 rounded-[30px] shadow-bs w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
                        size="txtMontserratRomanMedium34"
                      >
                        Can I use GenuinePay for international transactions?
                      </Text>
                      <div className="h-[50px] md:h-[79px] md:mt-0 my-[29px] relative w-[50px]">
                        <div className="absolute bg-deep_purple-500 h-[50px] inset-[0] justify-center m-auto rounded-[50%] w-[50px]"></div>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 w-max"
                          size="txtMontserratRomanMedium39"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between p-[45px] md:px-10 sm:px-5 rounded-[30px] shadow-bs w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
                        size="txtMontserratRomanMedium34"
                      >
                        <>
                          How can I contact GenuinePay&#39;s customer support?
                        </>
                      </Text>
                      <div className="h-[50px] md:h-[82px] mb-8 md:mt-0 mt-[27px] relative w-[50px]">
                        <div className="absolute bg-deep_purple-500 h-[50px] inset-[0] justify-center m-auto rounded-[50%] w-[50px]"></div>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 w-max"
                          size="txtMontserratRomanMedium39"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-10 gap-[68px] items-center justify-end p-[45px] md:px-10 sm:px-5 rounded-[30px] shadow-bs w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
                        size="txtMontserratRomanMedium34"
                      >
                        Can I link multiple bank accounts or cards to my
                        GenuinePay account?
                      </Text>
                      <div className="h-[50px] md:h-[85px] mb-[35px] md:mt-0 mt-7 relative w-[50px]">
                        <div className="absolute bg-deep_purple-500 h-[50px] inset-[0] justify-center m-auto rounded-[50%] w-[50px]"></div>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 w-max"
                          size="txtMontserratRomanMedium39"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between p-[45px] md:px-10 sm:px-5 rounded-[30px] shadow-bs w-full">
                      <Text
                        className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 text-center"
                        size="txtMontserratRomanMedium34"
                      >
                        Are there any fees for using GenuinePay?
                      </Text>
                      <div className="h-[50px] md:h-[79px] mb-[29px] md:mt-0 mt-[34px] relative w-[50px]">
                        <div className="absolute bg-deep_purple-500 h-[50px] inset-[0] justify-center m-auto rounded-[50%] w-[50px]"></div>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[35px] md:text-[37px] text-[39px] text-center text-white-A700 w-max"
                          size="txtMontserratRomanMedium39"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <Img
                className="absolute h-[914px] object-cover right-[0] top-[27%]"
                src="images/img_group12_914x456.png"
                alt="groupTwelve"
              />
            </div>
            <div className="absolute flex flex-col items-center justify-start left-[13%] top-1/4 w-[68%]">
              <Text
                className="md:text-5xl text-[65px] text-black-900"
                size="txtMontserratRomanSemiBold65"
              >
                Why Choose GenuinePay?
              </Text>
              <Text
                className="bg-clip-text bg-gradient6  mt-14 sm:text-[21px] md:text-[23px] text-[25px] text-center text-transparent w-[79%] sm:w-full"
                size="txtMontserratRomanRegular25Gray900b2"
              >
                {" "}
                Where Innovation Meets Security, Redefining Digital Transactions
                for a Seamless and Trustworthy Experience.
              </Text>
              <div className="h-[784px] md:h-[804px] mt-5 relative w-full">
                <Img
                  className="absolute h-[784px] inset-y-[0] left-[0] my-auto object-cover w-[79%]"
                  src="images/img_phoneremovebgpreview_784x909.png"
                  alt="phoneremovebgpr"
                />
                <Img
                  className="absolute bottom-[0] h-[660px] object-cover right-[0] w-[66%]"
                  src="images/img_phoneremovebg.png"
                  alt="phoneremovebg"
                />
              </div>
            </div>
          </div>
          <List
            className="absolute sm:flex-col flex-row md:gap-10 gap-[805px] grid md:grid-cols-1 grid-cols-2 inset-x-[0] justify-center mx-auto top-[39%] w-[89%]"
            orientation="horizontal"
          >
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col justify-start w-full">
                <Img
                  className="h-[90px] md:ml-[0] ml-[259px] w-[90px]"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Text
                  className="md:ml-[0] ml-[115px] mt-[21px] text-deep_purple-500 text-right text-xl"
                  size="txtMontserratRomanBold20"
                >
                  All In One Transactions
                </Text>
                <Text
                  className="bg-clip-text bg-gradient6  mt-2 text-justify text-transparent text-xl w-full"
                  size="txtMontserratRomanMedium20Gray900b2"
                >
                  Our platform seamlessly integrates diverse financial services,
                  offering you a unified experience.{" "}
                </Text>
              </div>
              <div className="flex flex-col items-end justify-start mt-[78px] w-full">
                <Img
                  className="h-[90px] w-[90px]"
                  src="images/img_user_deep_purple_500.svg"
                  alt="user"
                />
                <Text
                  className="mt-[21px] text-deep_purple-500 text-right text-xl"
                  size="txtMontserratRomanBold20"
                >
                  Escrow Services
                </Text>
                <Text
                  className="bg-clip-text bg-gradient6  mt-2 text-justify text-transparent text-xl w-full"
                  size="txtMontserratRomanMedium20Gray900b2"
                >
                  Our platform seamlessly integrates diverse financial services,
                  offering you a unified experience.{" "}
                </Text>
              </div>
              <div className="flex flex-col items-end justify-start mt-16 w-full">
                <Img
                  className="h-[90px] w-[90px]"
                  src="images/img_clock.svg"
                  alt="clock"
                />
                <Text
                  className="mt-[23px] text-deep_purple-500 text-right text-xl"
                  size="txtMontserratRomanBold20"
                >
                  Privacy&Security
                </Text>
                <Text
                  className="bg-clip-text bg-gradient6  mt-1.5 text-justify text-transparent text-xl w-full"
                  size="txtMontserratRomanMedium20Gray900b2"
                >
                  Our platform seamlessly integrates diverse financial services,
                  offering you a unified experience.{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Img
                  className="h-[90px] w-[90px]"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Text
                  className="mt-[23px] text-deep_purple-500 text-right text-xl"
                  size="txtMontserratRomanBold20"
                >
                  Pricing&Subscriptions
                </Text>
                <Text
                  className="bg-clip-text bg-gradient6  ml-0.5 md:ml-[0] mt-1.5 text-justify text-transparent text-xl w-full"
                  size="txtMontserratRomanMedium20Gray900b2"
                >
                  Our platform seamlessly integrates diverse financial services,
                  offering you a unified experience.{" "}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mt-[78px] w-full">
                <Img
                  className="h-[90px] w-[90px]"
                  src="images/img_user_deep_purple_500.svg"
                  alt="user"
                />
                <Text
                  className="mt-6 text-deep_purple-500 text-right text-xl"
                  size="txtMontserratRomanBold20"
                >
                  Customer Care &Help Center
                </Text>
                <Text
                  className="bg-clip-text bg-gradient6  ml-0.5 md:ml-[0] mt-[5px] text-justify text-transparent text-xl w-full"
                  size="txtMontserratRomanMedium20Gray900b2"
                >
                  Our platform seamlessly integrates diverse financial services,
                  offering you a unified experience.{" "}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start mt-16 w-full">
                <Img
                  className="h-[90px] ml-1.5 md:ml-[0] w-[90px]"
                  src="images/img_clock.svg"
                  alt="clock"
                />
                <Text
                  className="ml-0.5 md:ml-[0] mt-[23px] text-deep_purple-500 text-right text-xl"
                  size="txtMontserratRomanBold20"
                >
                  Ease of Use and Portablilty
                </Text>
                <Text
                  className="bg-clip-text bg-gradient6  mt-1.5 text-justify text-transparent text-xl w-full"
                  size="txtMontserratRomanMedium20Gray900b2"
                >
                  Our platform seamlessly integrates diverse financial services,
                  offering you a unified experience.{" "}
                </Text>
              </div>
            </div>
          </List>
          <Footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full" />
          <div className="absolute flex flex-col md:gap-10 gap-[539px] inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
            <div className="sm:h-[1108px] h-[1110px] md:h-[1287px] relative w-full">
              <div className="sm:h-[1108px] h-[1110px] md:h-[1287px] m-auto w-full">
                <div className="bg-gradient3  flex flex-col h-full items-center justify-start m-auto p-10 sm:px-5 rounded-tl-[20px] rounded-tr-[20px] w-full">
                  <div className="flex flex-col items-center justify-start mb-[542px] mt-[25px] w-[98%] md:w-full">
                    <div className="flex flex-col md:gap-10 gap-[203px] justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                        <div className="font-inter md:h-14 h-[49px] mb-[7px] relative w-[13%] md:w-full">
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
                            alt="gameiconstakemy_One"
                          />
                        </div>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[153px] md:mt-0 mt-[18px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtMontserratRomanRegular28"
                        >
                          Home{" "}
                        </Text>
                        <Text
                          className="mb-1 md:ml-[0] ml-[59px] md:mt-0 mt-[18px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtMontserratRomanRegular28"
                        >
                          About Us
                        </Text>
                        <Text
                          className="mb-[3px] md:ml-[0] ml-[62px] md:mt-0 mt-[18px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtMontserratRomanRegular28"
                        >
                          Features
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[57px] md:mt-0 mt-5 sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtMontserratRomanRegular28"
                        >
                          Pricing
                        </Text>
                        <div className="flex md:flex-1 flex-row font-montserrat gap-[7px] items-start justify-center md:ml-[0] ml-[264px] md:mt-0 mt-[22px] w-[10%] md:w-full">
                          <Img
                            className="h-[25px] md:h-auto object-cover w-[22%]"
                            src="images/img_ing1.png"
                            alt="ingOne"
                          />
                          <div className="h-[31px] md:h-[35px] mt-1 relative w-[74%]">
                            <Img
                              className="absolute h-7 right-[0] top-[0] w-7"
                              src="images/img_arrowdown.svg"
                              alt="arrowdown"
                            />
                            <Text
                              className="absolute h-full inset-y-[0] left-[0] my-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                              size="txtMontserratRomanRegular25"
                            >
                              English
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-row font-montserrat gap-3 items-start justify-start mb-2 md:ml-[0] ml-[88px] md:mt-0 mt-[19px] w-[8%] md:w-full">
                          <Img
                            className="h-[30px] w-[30px]"
                            src="images/img_octiconperson24.svg"
                            alt="octiconpersonTwentyFour"
                          />
                          <a
                            href="javascript:"
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                          >
                            <Text size="txtMontserratRomanRegular23">
                              Sign In
                            </Text>
                          </a>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[845px] sm:text-[41px] md:text-[47px] text-[55px] text-right text-white-A700 w-[46%] sm:w-full"
                        size="txtMontserratRomanSemiBold55"
                      >
                        GenuinePay, The Game Changer in Digital Transactions
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[298px] left-[0] object-cover top-[0]"
                  src="images/img_group9.png"
                  alt="groupNine"
                />
              </div>
              <div className="absolute md:h-[568px] h-[623px] sm:h-[769px] inset-y-[0] left-[1%] my-auto w-[49%] md:w-full">
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[73px] w-[86%] md:w-full">
                      <Img
                        className="h-[86px] md:h-auto mb-[43px] object-cover rounded-[36px]"
                        src="images/img_paying2.png"
                        alt="payingTwo"
                      />
                      <Img
                        className="h-[86px] md:h-auto mt-[43px] object-cover rounded-[36px]"
                        src="images/img_her32.png"
                        alt="herThirtyTwo"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[83px] w-full">
                      <Img
                        className="sm:flex-1 h-[90px] md:h-auto sm:mt-0 mt-1.5 object-cover rounded-[36px] w-[9%] sm:w-full"
                        src="images/img_screenshot20240113.png"
                        alt="screenshot20240"
                      />
                      <Img
                        className="h-[83px] sm:ml-[0] ml-[329px]"
                        src="images/img_thumbsup_white_a700.svg"
                        alt="thumbsup"
                      />
                      <Img
                        className="sm:flex-1 h-[95px] md:h-auto sm:ml-[0] ml-[302px] sm:mt-0 mt-3 object-cover rounded-[36px] w-[9%] sm:w-full"
                        src="images/img_screenshot20240113_95x73.png"
                        alt="screenshot20240_One"
                      />
                    </div>
                    <div className="flex flex-row sm:gap-10 gap-[594px] items-start justify-end md:ml-[0] ml-[75px] mt-[126px] w-[88%] md:w-full">
                      <Img
                        className="h-[86px] md:h-auto mt-9 object-cover rounded-[36px] w-[10%]"
                        src="images/img_her32.png"
                        alt="herThirtyOne"
                      />
                      <Img
                        className="h-[99px] md:h-auto mb-[23px] object-cover rounded-[36px] w-[10%]"
                        src="images/img_her12.png"
                        alt="herTwelve"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[540px] inset-x-[0] mx-auto top-[0]"
                  src="images/img_group48.svg"
                  alt="groupFortyEight"
                />
              </div>
            </div>
            <Img
              className="h-[1122px] md:h-auto object-cover"
              src="images/img_group30.png"
              alt="groupThirty"
            />
          </div>
          <Img
            className="absolute h-[902px] object-cover right-[0] top-[9%]"
            src="images/img_group8_white_a700.png"
            alt="groupEight"
          />
        </div>
        <div className="absolute flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:px-5 right-[4%] top-[8%] w-[36%]">
          <div className="flex md:h-[253px] h-[255px] justify-end relative w-[43%] sm:w-full">
            <Text
              className="mb-[37px] ml-[51px] mt-auto sm:text-[19px] md:text-[21px] text-[23px] text-center text-white-A700"
              size="txtMontserratRomanRegular23"
            >
              <>
                Happy
                <br />
                Active users
              </>
            </Text>
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto outline outline-[1px] outline-white-A700 p-[35px] sm:px-5 rounded-[15px] w-full">
              <Text
                className="mb-[97px] md:text-5xl text-[70px] text-white-A700"
                size="txtMontserratRomanSemiBold70"
              >
                15K+
              </Text>
            </div>
          </div>
          <div className="flex md:h-[253px] h-[255px] justify-end relative w-[43%] sm:w-full">
            <Text
              className="mb-[46px] mt-auto mx-auto sm:text-[19px] md:text-[21px] text-[23px] text-center text-white-A700"
              size="txtMontserratRomanRegular23"
            >
              <>
                Investors & partners
                <br />
                across the world
              </>
            </Text>
            <div className="absolute flex flex-col h-full inset-[0] items-end justify-center m-auto outline outline-[1px] outline-white-A700 p-[37px] sm:px-5 rounded-[15px] w-full">
              <Text
                className="mb-[93px] mr-[18px] md:text-5xl text-[70px] text-white-A700"
                size="txtMontserratRomanSemiBold70"
              >
                5K+
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusPage;
