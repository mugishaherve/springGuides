import React from "react";

import { Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

const FeaturesPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 font-montserrat h-[5282px] mx-auto relative w-full">
        <div className="md:h-[1306px] sm:h-[1972px] h-[5291px] m-auto md:px-5 w-full">
          <div className="flex flex-col m-auto w-full">
            <div className="bg-gradient3  flex flex-col items-center justify-start mx-auto p-10 sm:px-5 rounded-tl-[20px] rounded-tr-[20px] w-full">
              <div className="flex flex-col items-center justify-start mb-[637px] mt-[25px] w-[98%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[175px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                    <div className="font-inter h-[49px] md:h-[55px] mb-1.5 relative w-[13%] md:w-full">
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
                      className="mb-0.5 md:ml-[0] ml-[153px] md:mt-0 mt-[18px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtMontserratRomanRegular28"
                    >
                      Home{" "}
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[59px] md:mt-0 mt-[18px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtMontserratRomanRegular28"
                    >
                      About Us
                    </Text>
                    <Text
                      className="mb-0.5 md:ml-[0] ml-[62px] md:mt-0 mt-[18px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
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
                    <div className="flex md:flex-1 flex-row font-montserrat items-start justify-center mb-1.5 md:ml-[0] ml-[323px] md:mt-0 mt-[22px] w-[9%] md:w-full">
                      <Img
                        className="h-[25px] md:h-auto mb-0.5 object-cover w-[27%]"
                        src="images/img_ing1.png"
                        alt="ingOne"
                      />
                      <Text
                        className="ml-[7px] mt-1 text-lg text-white-A700"
                        size="txtMontserratRomanRegular18"
                      >
                        English
                      </Text>
                      <Img
                        className="h-6 mt-[3px] w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-row font-montserrat gap-3 items-start justify-start mb-1.5 md:ml-[0] ml-[57px] md:mt-0 mt-[19px] w-[8%] md:w-full">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_octiconperson24.svg"
                        alt="octiconpersonTwentyFour"
                      />
                      <a
                        href="javascript:"
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                      >
                        <Text size="txtMontserratRomanRegular23">Sign In</Text>
                      </a>
                    </div>
                  </div>
                  <Text
                    className="sm:text-[41px] md:text-[47px] text-[55px] text-center text-white-A700 w-[95%] sm:w-full"
                    size="txtMontserratRomanSemiBold55"
                  >
                    Now You can Manage Your Finances and Transactions In A Very
                    Simple Way
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gradient4  md:h-[1234px] sm:h-[1972px] h-[4230px] mt-[-47px] mx-auto p-[18px] w-full z-[1]">
              <div className="absolute flex flex-col items-center justify-start right-[0] top-[9%] w-[61%]">
                <div className="flex flex-col md:gap-10 gap-[1558px] justify-start w-full">
                  <Text
                    className="bg-clip-text bg-gradient3  md:text-5xl text-[65px] text-center text-transparent"
                    size="txtMontserratRomanSemiBold65Gray900"
                  >
                    How It Works
                  </Text>
                  <div className="flex flex-col md:gap-10 gap-[216px] items-center justify-start md:ml-[0] ml-[95px]">
                    <Text
                      className="bg-clip-text bg-gradient3  md:text-5xl text-[70px] text-transparent"
                      size="txtMontserratRomanSemiBold70Gray900"
                    >
                      We Help Clients Measure And Manage Their Daily
                      Transactions
                    </Text>
                    <Text
                      className="bg-clip-text bg-gradient6  sm:text-[21px] md:text-[23px] text-[25px] text-justify text-transparent w-full"
                      size="txtMontserratRomanRegular25Gray900b2"
                    >
                      Managing Finances and Transactions Had never been easier
                      from the beginning. Genuine Pay is there for you to walk
                      you through these difficulties and reduce your load
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[22%] md:h-[1228px] sm:h-[1410px] h-[1411px] inset-x-[0] mx-auto w-[94%] md:w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[222px] items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-[38%] md:w-full">
                      <Img
                        className="h-[570px] md:h-auto object-cover w-full"
                        src="images/img_screenshot2024.png"
                        alt="screenshot2024"
                      />
                    </div>
                    <div className="bg-gray-900 flex md:h-[618px] h-[619px] justify-end ml-0.5 md:ml-[0] relative w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 gap-[88px] h-full items-center justify-center mb-11 mt-auto mx-auto w-[53%]">
                        <div className="bg-black-900 flex flex-row gap-[15px] items-center justify-start p-[11px] rounded-[10px] w-[44%] md:w-full">
                          <Img
                            className="h-[75px] ml-[9px] mt-[3px] w-[75px]"
                            src="images/img_icoutlineapple.svg"
                            alt="icoutlineapple"
                          />
                          <Text
                            className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                            size="txtMontserratRomanBold30"
                          >
                            Apple Store
                          </Text>
                        </div>
                        <div className="bg-black-900 flex flex-row gap-[17px] items-end justify-end p-4 rounded-[10px] w-[47%] md:w-full">
                          <Img
                            className="h-[50px] mb-1 mt-3.5 w-[50px]"
                            src="images/img_television.svg"
                            alt="television"
                          />
                          <Text
                            className="mb-2 mt-[22px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                            size="txtMontserratRomanBold30"
                          >
                            Google Play Store
                          </Text>
                        </div>
                      </div>
                      <div className="absolute inset-[0] justify-center m-auto overflow-x-auto w-full">
                        <div className="flex h-[619px] md:h-[628px] justify-end relative w-full">
                          <Text
                            className="mb-[163px] mt-auto mx-auto text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                            size="txtMontserratRomanMedium30WhiteA700"
                          >
                            Get Your Own Mobile App:
                          </Text>
                          <div className="absolute bottom-[0] md:h-[628px] h-[671px] inset-x-[0] mx-auto w-full">
                            <div className="absolute flex flex-col items-center justify-start right-[20%] top-[19%] w-[54%]">
                              <div className="flex flex-col justify-start w-full">
                                <Text
                                  className="mr-[57px] md:text-5xl text-[65px] text-center text-white-A700 w-[94%] sm:w-full"
                                  size="txtMontserratRomanSemiBold65WhiteA700"
                                >
                                  Stay Up-To-Date With Your Finances
                                </Text>
                                <Text
                                  className="md:ml-[0] ml-[76px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                                  size="txtMontserratRomanRegular25"
                                >
                                  Download and get Genuine App Now, Manage your
                                  Own Transactions with genuine and trustworthy
                                  people
                                </Text>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[603px] left-[0] object-cover top-[0] w-[30%]"
                              src="images/img_wristbandremovebgpreview_603x509.png"
                              alt="wristbandremove"
                            />
                            <Img
                              className="absolute bottom-[0] h-[628px] object-cover right-[0] w-[26%]"
                              src="images/img_freemockupoffemale_628x447.png"
                              alt="freemockupoffem"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[622px] left-[15%] object-cover top-[12%] w-[26%]"
                  src="images/img_w1.png"
                  alt="w1"
                />
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[81px] items-start justify-center right-[14%] top-[19%] w-[38%]">
                <div className="bg-gradient8  flex flex-col md:gap-10 gap-[248px] items-center justify-start py-[127px] rounded-[5px] w-[2%] md:w-full">
                  <div className="bg-white-A700 h-[139px] rounded-[5px] w-full"></div>
                  <div className="bg-white-A700 h-[139px] mb-5 rounded-[5px] w-full"></div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start mb-[353px] md:mt-0 mt-[147px] p-[52px] md:px-10 sm:px-5 rounded-[40px] shadow-bs w-[86%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[27px] w-full">
                    <div className="flex sm:flex-col flex-row gap-[21px] items-start justify-start w-[99%] md:w-full">
                      <Img
                        className="h-[38px]"
                        src="images/img_settings_deep_purple_500.svg"
                        alt="settings"
                      />
                      <Text
                        className="sm:mt-0 mt-[3px] sm:text-[31px] md:text-[33px] text-[35px] text-deep_purple-500"
                        size="txtMontserratRomanMedium35"
                      >
                        Account Registration
                      </Text>
                    </div>
                    <Line className="bg-deep_purple-500 h-0.5 mt-[52px] w-full" />
                    <Line className="bg-deep_purple-500 h-0.5 mt-[63px] w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[622px] object-cover right-[0] top-[12%]"
            src="images/img_group8.png"
            alt="groupEight"
          />
          <Img
            className="absolute h-[298px] left-[0] object-cover top-[0]"
            src="images/img_group9.png"
            alt="groupNine"
          />
          <Img
            className="absolute h-[851px] left-[0] object-cover top-[28%]"
            src="images/img_group13.png"
            alt="groupThirteen"
          />
          <Img
            className="absolute bottom-[35%] h-[760px] object-cover right-[0]"
            src="images/img_group12.png"
            alt="groupTwelve"
          />
        </div>
        <Footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto md:px-5 w-full" />
        <div className="absolute flex flex-col justify-start md:px-5 right-[11%] top-[8%] w-[73%]">
          <div className="h-[1047px] md:h-[1050px] md:ml-[0] ml-[102px] relative w-[92%] md:w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[4%] w-full">
              <div className="flex flex-col justify-start w-full">
                <Img
                  className="h-[246px] md:h-auto md:ml-[0] ml-[139px] object-cover"
                  src="images/img_group72.png"
                  alt="groupSeventyTwo"
                />
                <div className="bg-gradient  border border-solid border-white-A700 flex flex-col h-[120px] items-center justify-end md:ml-[0] ml-[869px] mt-7 p-6 sm:px-5 rounded-[10px] shadow-bs w-[120px]">
                  <Img
                    className="h-[69px] mt-[3px]"
                    src="images/img_fontistowallet_white_a700.svg"
                    alt="fontistowallet"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[33px] w-full">
                  <div className="bg-gradient  border border-solid border-white-A700 flex flex-col h-[155px] items-end justify-start p-5 rounded-[10px] shadow-bs w-[155px]">
                    <Img
                      className="h-24 my-[9px]"
                      src="images/img_mdisecuritylock.svg"
                      alt="mdisecuritylock"
                    />
                  </div>
                  <div className="bg-white-A700 h-[429px] rounded-[40px] shadow-bs w-[51%]"></div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[1047px] inset-y-[0] left-[14%] my-auto object-cover w-[63%]"
              src="images/img_q1.png"
              alt="q1"
            />
          </div>
          <Img
            className="h-[622px] md:h-auto md:ml-[0] ml-[186px] mt-[119px] object-cover w-[33%]"
            src="images/img_mockrocketcapture.png"
            alt="mockrocketcaptu"
          />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[61px] items-start justify-start mt-[70px] w-[78%] md:w-full">
            <div className="bg-white-A700 flex flex-col gap-10 justify-start mb-[381px] p-11 md:px-10 sm:px-5 rounded-[40px] shadow-bs w-[53%] md:w-full">
              <Text
                className="md:ml-[0] ml-[23px] mr-[17px] sm:text-[31px] md:text-[33px] text-[35px] text-deep_purple-500"
                size="txtMontserratRomanMedium35"
              >
                Validate Transactions
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[101px] items-center justify-start mb-[26px] md:ml-[0] ml-[166px] w-[26%] md:w-full"
                style={{
                  backgroundImage: "url('images/img_group13_green_500.svg')",
                }}
              >
                <Img
                  className="h-[101px]"
                  src="images/img_group13_green_500.svg"
                  alt="groupSeventyEight"
                />
              </div>
            </div>
            <Img
              className="h-[622px] sm:h-auto md:mt-0 mt-[59px] object-cover w-[42%] md:w-full"
              src="images/img_31.png"
              alt="ThirtyOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesPage;
