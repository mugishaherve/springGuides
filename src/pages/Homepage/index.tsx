import React from "react";

import { Img, Input, Line, Text } from "components";

const HomepagePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat mx-auto relative w-full">
        <div className="md:h-[2072px] sm:h-[4183px] h-[5456px] mx-auto md:px-5 w-full">
          <div className="md:h-[2072px] sm:h-[4183px] h-[5456px] m-auto w-full">
            <div className="absolute md:h-[2072px] sm:h-[4183px] h-[5291px] inset-[0] justify-center m-auto w-full">
              <div className="md:h-[2072px] sm:h-[4183px] h-[5291px] m-auto w-full">
                <div className="md:h-[2072px] sm:h-[4183px] h-[5291px] m-auto w-full">
                  <div className="md:h-[2072px] sm:h-[4183px] h-[5291px] m-auto w-full">
                    <div className="absolute md:h-[2072px] sm:h-[4183px] h-[5291px] inset-[0] justify-center m-auto w-full">
                      <div className="md:h-[2072px] sm:h-[4183px] h-[5291px] m-auto w-full">
                        <div className="flex flex-col m-auto w-full">
                          <div className="bg-gradient3  flex flex-col items-center justify-start mx-auto p-[50px] md:px-10 sm:px-5 rounded-tl-[20px] rounded-tr-[20px] w-full">
                            <div className="flex flex-col items-center justify-start my-[15px] w-[99%] md:w-full">
                              <div className="flex flex-col justify-start w-full">
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
                                      alt="gameiconstakemy"
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
                                  <div className="flex md:flex-1 flex-row font-montserrat sm:gap-10 items-start justify-between md:ml-[0] ml-[57px] md:mt-0 mt-5 w-[35%] md:w-full">
                                    <Text
                                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                                      size="txtMontserratRomanRegular28"
                                    >
                                      Pricing
                                    </Text>
                                    <div className="flex flex-row gap-[7px] items-start justify-between w-[30%]">
                                      <Img
                                        className="h-[25px] md:h-auto object-cover"
                                        src="images/img_ing1.png"
                                        alt="ingOne"
                                      />
                                      <div className="h-[31px] md:h-[35px] mt-1 relative w-[74%]">
                                        <Img
                                          className="absolute bottom-[0] h-7 right-[0] w-7"
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
                                  </div>
                                  <div className="flex md:flex-1 flex-row font-montserrat gap-[11px] items-start justify-start mb-0.5 md:ml-[0] ml-[51px] md:mt-0 mt-[21px] w-[9%] md:w-full">
                                    <Img
                                      className="h-[30px] w-[30px]"
                                      src="images/img_octiconperson24.svg"
                                      alt="octiconpersonTwentyFour"
                                    />
                                    <Text
                                      className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                                      size="txtMontserratRomanRegular25"
                                    >
                                      Sign In
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[31px] mt-[227px]">
                                  <Text
                                    className="md:text-5xl text-6xl text-white-A700 w-full"
                                    size="txtMontserratRomanSemiBold60"
                                  >
                                    The All In One For Your Transactions
                                  </Text>
                                  <Text
                                    className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700 w-[83%] sm:w-full"
                                    size="txtMontserratRomanLight23"
                                  >
                                    With GenuinePay,Make deals with reliable and
                                    trustworthy parties.{" "}
                                  </Text>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[25px] mt-16 w-[43%] md:w-full">
                                  <Text
                                    className="bg-amber-500 h-[84px] justify-center sm:px-5 px-[35px] py-[23px] rounded-[10px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[350px]"
                                    size="txtMontserratRomanBold30"
                                  >
                                    Create Account
                                  </Text>
                                  <Text
                                    className="md:ml-[0] ml-[76px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                                    size="txtMontserratRomanRegular30"
                                  >
                                    Learn More
                                  </Text>
                                  <Img
                                    className="h-[42px] md:ml-[0] ml-[7px]"
                                    src="images/img_pharrowupthin.svg"
                                    alt="pharrowupthin"
                                  />
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[86px] items-center justify-start md:ml-[0] ml-[34px] mt-[70px] w-[38%] md:w-full">
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
                            </div>
                          </div>
                          <div className="bg-gradient4  flex flex-col items-end justify-start mt-[-47px] mx-auto p-[88px] md:px-10 sm:px-5 w-full z-[1]">
                            <div className="flex flex-col md:gap-10 gap-[2151px] justify-start mb-[1333px] mt-[432px] w-1/4 md:w-full">
                              <Img
                                className="h-24 md:ml-[0] ml-[152px]"
                                src="images/img_fontistowallet.svg"
                                alt="fontistowallet"
                              />
                              <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                                <Text
                                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                                  size="txtMontserratRomanRegular30Black900"
                                >
                                  View All Comments
                                </Text>
                                <Img
                                  className="h-[42px]"
                                  src="images/img_pharrowupthin_black_900.svg"
                                  alt="pharrowupthin_One"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[622px] object-cover right-[0] top-[12%]"
                          src="images/img_group8.png"
                          alt="groupEight"
                        />
                      </div>
                      <Img
                        className="absolute h-[298px] left-[0] object-cover top-[0]"
                        src="images/img_group9.png"
                        alt="groupNine"
                      />
                      <div className="absolute bg-gradient5  flex flex-col font-inter items-center justify-start p-[13px] right-[0] rounded-[30px] shadow-bs top-[6%] w-[49%]">
                        <div className="flex flex-col justify-start mb-[22px] mt-9 w-[97%] md:w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mr-[22px] w-[98%] md:w-full">
                            <div className="h-[49px] relative w-[28%] sm:w-full">
                              <Text
                                className="absolute bottom-[0] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-max"
                                size="txtInterRegular30WhiteA700"
                              >
                                <span className="text-white-A700 font-montserrat text-left font-extrabold">
                                  Genu ne
                                </span>
                                <span className="text-white-A700 font-montserrat text-left font-normal">
                                  Pay
                                </span>
                              </Text>
                              <Img
                                className="absolute h-[49px] inset-y-[0] left-[37%] my-auto"
                                src="images/img_gameiconstakemymoney_white_a700.svg"
                                alt="gameiconstakemy_One"
                              />
                            </div>
                            <Img
                              className="h-[65px] md:h-auto object-cover"
                              src="images/img_chip1.png"
                              alt="chipOne"
                            />
                          </div>
                          <div className="flex flex-col font-montserrat gap-[17px] items-start justify-start md:ml-[0] ml-[7px] mt-[139px]">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                              size="txtMontserratRomanBold30"
                            >
                              0123 4567 8990 2006
                            </Text>
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                              size="txtMontserratRomanBold30"
                            >
                              21/12 123
                            </Text>
                          </div>
                          <Img
                            className="h-[78px] sm:h-auto md:ml-[0] ml-[479px] mt-[37px] object-cover w-[39%] md:w-full"
                            src="images/img_theseremovebgpreview.png"
                            alt="theseremovebgpr"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute border border-solid border-white-A700 flex flex-col h-[155px] items-end justify-start p-[22px] sm:px-5 right-[23%] rounded-[10px] shadow-bs top-[14%] w-[155px]">
                      <Img
                        className="h-24 mb-[15px]"
                        src="images/img_mdisecuritylock.svg"
                        alt="mdisecuritylock"
                      />
                    </div>
                    <div className="absolute border border-solid border-white-A700 h-[120px] inset-x-[0] mx-auto rounded-[10px] shadow-bs top-[8%] w-[120px]"></div>
                    <div className="absolute border border-solid border-white-A700 flex flex-col h-[120px] items-start justify-end p-6 sm:px-5 right-[13%] rounded-[10px] shadow-bs top-[5%] w-[120px]">
                      <Img
                        className="h-[69px] md:ml-[0] ml-[3px] mt-[3px]"
                        src="images/img_fontistowallet_white_a700.svg"
                        alt="fontistowallet_One"
                      />
                    </div>
                    <Img
                      className="absolute h-[246px] right-[41%] top-[7%]"
                      src="images/img_exchange.svg"
                      alt="exchange"
                    />
                    <Img
                      className="absolute h-[851px] left-[0] object-cover top-[28%]"
                      src="images/img_group13.png"
                      alt="groupThirteen"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[35%] h-[760px] object-cover right-[0]"
                    src="images/img_group12.png"
                    alt="groupTwelve"
                  />
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[24%] w-[81%]">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex flex-col gap-[52px] items-center justify-start md:mt-0 mt-[122px]">
                        <Text
                          className="md:text-5xl text-[65px] text-black-900"
                          size="txtMontserratRomanSemiBold65"
                        >
                          <>
                            Best Payment Services For <br />
                            Your Transactions
                          </>
                        </Text>
                        <Text
                          className="bg-clip-text bg-gradient6  sm:text-[21px] md:text-[23px] text-[25px] text-transparent w-full"
                          size="txtMontserratRomanRegular25Gray900b2"
                        >
                          Make it simple to make transactions with just one tap
                          on phone.
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[39px] justify-start w-[47%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mr-[13px] w-[98%] md:w-full">
                          <div className="flex flex-col md:gap-10 gap-[103px] items-center justify-start w-[36%] sm:w-full">
                            <div className="flex h-60 justify-end relative w-full">
                              <Text
                                className="mb-4 mt-auto mx-auto text-black-900 text-center text-xl"
                                size="txtMontserratRomanMedium20"
                              >
                                <>
                                  Escrow Services
                                  <br />{" "}
                                </>
                              </Text>
                              <div className="absolute border border-solid flex flex-col gray_900_indigo_900_border h-full inset-[0] items-center justify-center m-auto p-[50px] md:px-10 sm:px-5 rounded-[10px] w-full">
                                <Img
                                  className="h-[102px] mb-[38px] w-[102px]"
                                  src="images/img_carbonibmclou.svg"
                                  alt="carbonibmclou"
                                />
                              </div>
                            </div>
                            <Img
                              className="h-[87px]"
                              src="images/img_vector_deep_purple_500_87x102.svg"
                              alt="vector"
                            />
                          </div>
                          <div className="flex flex-col gap-4 items-center justify-start sm:mt-0 mt-[31px] w-[30%] sm:w-full">
                            <Img
                              className="h-[120px]"
                              src="images/img_dashiconsprivacy.svg"
                              alt="dashiconsprivac"
                            />
                            <Text
                              className="text-black-900 text-center text-xl"
                              size="txtMontserratRomanMedium20"
                            >
                              <>
                                Privacy & Security <br />
                                Guaranteed
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[27px] w-[96%] md:w-full">
                          <Text
                            className="text-black-900 text-center text-xl"
                            size="txtMontserratRomanMedium20"
                          >
                            <>
                              Contract&Parties
                              <br /> Validation
                            </>
                          </Text>
                          <Text
                            className="text-[19px] text-black-900 text-center"
                            size="txtMontserratRomanMedium19"
                          >
                            <>
                              All in One Transaction
                              <br /> management
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col items-center justify-start right-[0] top-[37%]">
                  <Text
                    className="md:text-5xl text-[65px] text-black-900 w-full"
                    size="txtMontserratRomanSemiBold65"
                  >
                    One Tap For All Your Transactions
                  </Text>
                </div>
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[92%]">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex flex-col gap-[21px] items-start justify-start md:mt-0 mt-[37px]">
                      <Text
                        className="md:text-5xl text-[65px] text-black-900 w-full"
                        size="txtMontserratRomanSemiBold65"
                      >
                        What Else Can You Do With GenuinePay Services?
                      </Text>
                      <Text
                        className="bg-clip-text bg-gradient6  sm:text-[21px] md:text-[23px] text-[25px] text-transparent w-[85%] sm:w-full"
                        size="txtMontserratRomanRegular25Gray900b2"
                      >
                        Make it simple to make transactions with just one tap on
                        phone.
                      </Text>
                    </div>
                    <div className="flex md:h-[284px] h-[313px] justify-end md:ml-[0] ml-[45px] relative w-[313px]">
                      <div className="border border-solid gray_900_indigo_900_border2 h-[200px] mb-[41px] ml-[21px] mt-auto rounded-[10px] w-[200px]"></div>
                      <div className="absolute flex flex-col gap-[18px] h-full inset-[0] items-start justify-center m-auto p-[66px] md:px-10 sm:px-5 rotate-[60deg] w-[313px]">
                        <div className="md:h-[110px] h-[94px] ml-3 md:ml-[0] mt-[43px] relative w-[49%]">
                          <Img
                            className="absolute bottom-[0] h-[67px] right-[0]"
                            src="images/img_vector.svg"
                            alt="vector_One"
                          />
                          <Img
                            className="absolute h-16 left-[0] top-[0]"
                            src="images/img_vector.svg"
                            alt="vector_Two"
                          />
                        </div>
                        <Text
                          className="md:ml-[0] ml-[11px] rotate-[-60deg] text-[19px] text-black-900 text-center"
                          size="txtMontserratRomanMedium19"
                        >
                          Transfer
                        </Text>
                      </div>
                    </div>
                    <div className="border border-solid flex flex-col gap-5 gray_900_indigo_900_border3 h-[200px] items-center justify-end md:ml-[0] ml-[11px] md:mt-0 mt-[72px] p-6 sm:px-5 rounded-[10px] w-[200px]">
                      <Img
                        className="h-20 mt-[26px]"
                        src="images/img_fontistowallet.svg"
                        alt="fontistowallet_Two"
                      />
                      <Text
                        className="text-[19px] text-black-900 text-center"
                        size="txtMontserratRomanMedium19"
                      >
                        E-wallet
                      </Text>
                    </div>
                    <div className="flex md:h-[199px] h-[200px] justify-end md:ml-[0] ml-[104px] md:mt-0 mt-[72px] relative w-[200px]">
                      <Text
                        className="mb-[23px] mt-auto mx-auto text-[19px] text-black-900 text-center"
                        size="txtMontserratRomanMedium19"
                      >
                        Analysis
                      </Text>
                      <div className="absolute border border-solid flex flex-col gray_900_indigo_900_border4 h-full inset-[0] items-end justify-center m-auto p-[43px] md:px-10 sm:px-5 rounded-[10px] w-[200px]">
                        <Img
                          className="h-[59px] mb-9 mt-[18px]"
                          src="images/img_vector_deep_purple_500.svg"
                          alt="vector_Three"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[29%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[99%]">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                  <Img
                    className="md:flex-1 h-[997px] sm:h-auto object-cover w-[48%] md:w-full"
                    src="images/img_wristbandremovebgpreview.png"
                    alt="wristbandremove"
                  />
                  <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[411px] w-[53%] md:w-full">
                    <Text
                      className="md:text-5xl text-[65px] text-black-900 w-full"
                      size="txtMontserratRomanSemiBold65"
                    >
                      Choose Your Own Unique Digital Bracelet
                    </Text>
                    <Text
                      className="bg-clip-text bg-gradient6  md:ml-[0] ml-[13px] mt-9 sm:text-[21px] md:text-[23px] text-[25px] text-justify text-transparent w-[66%] sm:w-full"
                      size="txtMontserratRomanRegular25Gray900b2"
                    >
                      Fully customizable, beautiful and elegant bracelets that
                      are available at a best price allowing you to make
                      transactions anywhere at anytime{" "}
                    </Text>
                    <Img
                      className="h-6 md:ml-[0] ml-[557px] mt-[234px] w-6"
                      src="images/img_refresh.svg"
                      alt="refresh"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="absolute bottom-[29%] left-[8%] md:text-5xl text-[65px] text-black-900 w-[62%] sm:w-full"
              size="txtMontserratRomanSemiBold65"
            >
              What Our Happy Customers Say About GenuinePay
            </Text>
            <div className="absolute bottom-[0] h-[1169px] inset-x-[0] mx-auto w-[98%] md:w-full">
              <div className="h-[1169px] m-auto w-full">
                <div className="absolute bg-gray-900 flex flex-col h-max inset-y-[0] items-start justify-start my-auto p-[47px] md:px-10 sm:px-5 right-[0]">
                  <Text
                    className="md:ml-[0] ml-[645px] mt-[51px] md:text-5xl text-[65px] text-white-A700 w-[58%] sm:w-full"
                    size="txtMontserratRomanSemiBold65WhiteA700"
                  >
                    Take A Step To Join GenuinePay Community?
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[645px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtMontserratRomanRegular25"
                  >
                    Download and get Genuine App Now, Manage your Own
                    Transactions with genuine and trustworthy people
                  </Text>
                  <Text
                    className="mb-[149px] md:ml-[0] ml-[652px] mt-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtMontserratRomanMedium25"
                  >
                    Download With:
                  </Text>
                </div>
                <Img
                  className="absolute h-[1169px] inset-y-[0] left-[0] my-auto object-cover w-[64%]"
                  src="images/img_phoneremovebgpreview.png"
                  alt="phoneremovebgpr"
                />
              </div>
              <div className="absolute bottom-[30%] flex md:flex-col flex-row md:gap-10 items-center justify-between right-[5%] w-1/2">
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
            </div>
          </div>
          <div className="absolute bottom-[19%] flex flex-col items-center justify-start left-[3%] w-3/5">
            <div className="overflow-x-auto w-full">
              <div className="flex overflow-auto relative w-full">
                <div className="h-[425px] m-auto w-full">
                  <div className="absolute flex h-[425px] inset-y-[0] justify-end left-[0] my-auto w-[92%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[19px] h-full items-center justify-start mb-[34px] ml-[65px] mt-auto w-[46%]">
                      <Img
                        className="h-[82px] md:h-auto rounded-[50%] w-[21%] sm:w-full"
                        src="images/img_screenshot20230915.png"
                        alt="screenshot20230"
                      />
                      <div className="flex flex-col gap-[7px] justify-start">
                        <Text
                          className="md:ml-[0] ml-[5px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                          size="txtMontserratRomanSemiBold30"
                        >
                          Angele Marie
                        </Text>
                        <Text
                          className="text-black-900 text-lg"
                          size="txtMontserratRomanLight18"
                        >
                          CEO&Product Designer At Maas Ltd{" "}
                        </Text>
                      </div>
                    </div>
                    <div className="absolute border border-solid flex flex-col gray_900_indigo_900_border5 h-full inset-[0] items-start justify-center m-auto p-[65px] md:px-10 sm:px-5 rounded-[30px] w-full">
                      <Text
                        className="mb-[77px] mt-[107px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[94%] sm:w-full"
                        size="txtMontserratRomanRegular30Black900"
                      >
                        Amazing app! User-friendly interface, seamless
                        navigation, and a game-changer for productivity. Highly
                        recommend!
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute bg-clip-text bg-gradient7  right-[0] sm:text-[40px] md:text-[46px] text-[50px] text-transparent top-[9%]"
                    size="txtMontserratRomanSemiBold50"
                  >
                    <>
                      “The Best Customer Services,
                      <br />
                      Period”
                    </>
                  </Text>
                </div>
                <div className="border border-solid flex flex-col gray_900_indigo_900_border6 items-start justify-end ml-[-66px] my-auto p-[65px] md:px-10 sm:px-5 rounded-[30px] z-[1]">
                  <Text
                    className="mb-[77px] mt-[107px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[94%] sm:w-full"
                    size="txtMontserratRomanRegular30Black900"
                  >
                    Amazing app! User-friendly interface, seamless navigation,
                    and a game-changer for productivity. Highly recommend!
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end mb-[1666px] ml-auto mt-[-NaNpx] pl-[34px] md:px-5 py-[34px] w-[42%] z-[1]">
          <div className="flex flex-col md:gap-10 gap-[210px] items-start justify-start mt-1 w-[96%] md:w-full">
            <Text
              className="bg-clip-text bg-gradient7  sm:text-[40px] md:text-[46px] text-[50px] text-transparent"
              size="txtMontserratRomanSemiBold50"
            >
              <>
                “The Best Customer Services,
                <br />
                Period”
              </>
            </Text>
            <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-start w-[65%] md:w-full">
              <Img
                className="h-[82px] md:h-auto rounded-[50%] w-[21%] sm:w-full"
                src="images/img_screenshot20230915.png"
                alt="screenshot20230_One"
              />
              <div className="flex flex-col gap-[7px] justify-start">
                <Text
                  className="md:ml-[0] ml-[5px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtMontserratRomanSemiBold30"
                >
                  Angele Marie
                </Text>
                <Text
                  className="text-black-900 text-lg"
                  size="txtMontserratRomanLight18"
                >
                  CEO&Product Designer At Maas Ltd{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center mt-[-165px] mx-auto md:px-5 w-full z-[1]">
          <div className="md:h-[1634px] sm:h-[804px] h-[805px] relative w-full">
            <div className="bg-gradient3  flex flex-col h-full items-center justify-start m-auto p-[42px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[121px] items-center justify-start mb-5 mt-3.5 w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-8 justify-start mb-0.5 w-[39%] md:w-full">
                    <div className="flex flex-col items-start justify-start ml-3.5 md:ml-[0] w-[77%] md:w-full">
                      <div className="font-inter md:h-[85px] h-[92px] relative w-full">
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto md:text-5xl text-[70px] text-deep_purple-500_b2 w-max"
                          size="txtInterRegular70"
                        >
                          <span className="text-deep_purple-500_b2 font-montserrat text-left font-extrabold">
                            Genu ne
                          </span>
                          <span className="text-deep_purple-500_b2 font-montserrat text-left font-medium">
                            Pay
                          </span>
                        </Text>
                        <Img
                          className="absolute h-20 left-[39%] top-[0] w-20"
                          src="images/img_gameiconstakemymoney.svg"
                          alt="gameiconstakemy_Two"
                        />
                      </div>
                      <Text
                        className="mt-[17px] sm:text-[29px] md:text-[31px] text-[33px] text-white-A700 w-[66%] sm:w-full"
                        size="txtMontserratRomanMedium33"
                      >
                        Where Trust Meets Transactions!
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[21px] mt-[178px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                        size="txtMontserratRomanRegular25"
                      >
                        Take Control Of Your Finances Now
                      </Text>
                    </div>
                    <Input
                      name="groupSixtySix"
                      placeholder="Enter Your Email"
                      className="leading-[normal] md:text-[23px] p-0 placeholder:text-black-900 sm:text-[21px] text-[25px] text-left w-full"
                      wrapClassName="rounded-[50px] w-full"
                      type="email"
                      color="white_A700"
                      size="2xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[49px] justify-start md:mt-0 mt-[57px] w-[57%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[21px] w-[85%] md:w-full">
                      <Text
                        className="sm:mt-0 mt-1 sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                        size="txtMontserratRomanSemiBold45"
                      >
                        Legal
                      </Text>
                      <Text
                        className="mb-1 sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                        size="txtMontserratRomanSemiBold45"
                      >
                        Reach Out{" "}
                      </Text>
                    </div>
                    <ul className="flex flex-col items-start justify-start w-full common-column-list">
                      <li>
                        <a href="javascript:">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                            <Text
                              className="md:mt-0 mt-1.5 text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                              size="txtMontserratRomanRegular30"
                            >
                              Privacy Policy
                            </Text>
                            <Img
                              className="h-[45px] md:ml-[0] ml-[345px] w-[45px]"
                              src="images/img_call.svg"
                              alt="call"
                            />
                            <Text
                              className="md:ml-[0] ml-[15px] md:mt-0 mt-1.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                              size="txtMontserratRomanRegular25"
                            >
                              +250798978831
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-9">
                            <Text
                              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                              size="txtMontserratRomanRegular30"
                            >
                              Terms Of Use
                            </Text>
                            <Img
                              className="h-[45px] md:ml-[0] ml-[349px] md:mt-0 mt-[18px] w-[45px]"
                              src="images/img_clarityemailline.svg"
                              alt="clarityemaillin"
                            />
                            <Text
                              className="md:ml-[0] ml-[15px] md:mt-0 mt-7 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                              size="txtMontserratRomanRegular25"
                            >
                              genuinepay@gmail.com
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[17px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        >
                          <Text size="txtMontserratRomanRegular30">
                            Refund Policy
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[21px]">
                            <Text
                              className="sm:mt-0 mt-[23px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                              size="txtMontserratRomanRegular30"
                            >
                              Terms Of Services
                            </Text>
                            <Text
                              className="mb-[5px] sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                              size="txtMontserratRomanSemiBold45"
                            >
                              Follow Us:
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[30px]">
                            <Text
                              className="md:mt-0 mt-[19px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                              size="txtMontserratRomanRegular30"
                            >
                              Data Protection Addendum
                            </Text>
                            <Img
                              className="h-[45px] mb-[11px] md:ml-[0] ml-[130px] w-[45px]"
                              src="images/img_lucidelinkedin.svg"
                              alt="lucidelinkedin"
                            />
                            <Img
                              className="h-[45px] mb-[11px] md:ml-[0] ml-[51px] w-[45px]"
                              src="images/img_devicontwitter.svg"
                              alt="devicontwitter"
                            />
                            <Img
                              className="h-[45px] mb-[11px] ml-9 md:ml-[0] w-[45px]"
                              src="images/img_riinstagramline.svg"
                              alt="riinstagramline"
                            />
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-[31px] relative w-[39%] md:w-full">
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-max"
                    size="txtMontserratRomanRegular25"
                  >
                    Copyright 2024 GenuinePay.All Rights Reserved
                  </Text>
                  <Img
                    className="absolute h-[30px] left-[31%] top-[0] w-[30px]"
                    src="images/img_phcopyright.svg"
                    alt="phcopyright"
                  />
                </div>
              </div>
            </div>
            <Line className="absolute bg-white-A700_4c bottom-[19%] h-px inset-x-[0] mx-auto w-full" />
          </div>
        </footer>
        <Img
          className="h-[640px] ml-[34px] mt-[-NaNpx] object-cover w-2/5 z-[1]"
          src="images/img_freemockupoffemale.png"
          alt="freemockupoffem"
        />
      </div>
    </>
  );
};

export default HomepagePage;
