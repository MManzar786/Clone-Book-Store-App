import React, { useState } from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import styles from "./style";
import { View, Text, TouchableOpacity, StatusBar, Image } from "react-native";

import { COLORS, FONTS, icons, SIZES, images } from "../../constants";
// import {
//   bookOtherWordsForHome,
//   bookTheMetropolis,
//   bookTheTinyDragon,
// } from "./booksObj";

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 1 }}>
      <View
        style={{ flex: 1, borderColor: COLORS.lightGray, borderLeftWidth: 1 }}
      ></View>
    </View>
  );
};

const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "Roboto-Black": require("../../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
  });

  const ProfileData = {
    userName: "Username",
    point: 200,
  };
  const bookOtherWordsForHome = {
    id: 1,
    bookName: "Other Words For Home",
    bookCover: images.otherWordsForHome,
    rating: 4.5,
    language: "Eng",
    pageNo: 341,
    author: "Jasmine Warga",
    genre: ["Romance", "Adventure", "Drama"],
    readed: "12k",
    description:
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000",
  };

  const bookTheMetropolis = {
    id: 2,
    bookName: "The Metropolis",
    bookCover: images.theMetropolist,
    rating: 4.1,
    language: "Eng",
    pageNo: 272,
    author: "Seith Fried",
    genre: ["Adventure", "Drama"],
    readed: "13k",
    description:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: "rgba(247,239,219,0.9)",
    navTintColor: "#000",
  };

  const bookTheTinyDragon = {
    id: 3,
    bookName: "The Tiny Dragon",
    bookCover: images.theTinyDragon,
    rating: 3.5,
    language: "Eng",
    pageNo: 110,
    author: "Ana C Bouvier",
    genre: ["Drama", "Adventure", "Romance"],
    readed: "13k",
    description:
      "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
    backgroundColor: "rgba(119,77,143,0.9)",
    navTintColor: "#FFF",
  };

  const booksData = [
    {
      ...bookOtherWordsForHome,
      completion: "75%",
      lastRead: "2d 7h",
    },
    {
      ...bookTheMetropolis,
      completion: "34%",
      lastRead: "3d 2h",
    },
    {
      ...bookTheTinyDragon,
      completion: "89%",
      lastRead: "23d 4h",
    },
  ];
  const categoriesData = [
    {
      id: 1,
      categoryName: "Best Seller",
      books: [bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon],
    },
    {
      id: 2,
      categoryName: "The Latest",
      books: [bookTheMetropolis],
    },
    {
      id: 3,
      categoryName: "Coming Soon",
      books: [bookTheTinyDragon],
    },
  ];
  const [name, setName] = useState(ProfileData);
  const [myBooks, setBooks] = useState(booksData);
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(1);

  const renderHeader = (profile) => {
    if (fontsLoaded) {
      return (
        <View style={styles.header}>
          {/* Greetings */}
          <View style={{ flex: 1 }}>
            <View>
              <Text
                style={{
                  fontFamily: "Roboto-Black",
                  ...FONTS.h3,
                  color: COLORS.lightGray2,
                }}
              >
                Good Morning
              </Text>
              <Text
                style={{
                  ...FONTS.h2,
                  fontFamily: "Roboto-Bold",
                  color: COLORS.lightGray2,
                }}
              >
                {profile.userName}
              </Text>
            </View>
          </View>
          {/* Points */}
          <TouchableOpacity
            style={styles.points}
            onPress={() => {
              console.log("Points clicked");
            }}
          >
            <View style={styles.pointPlusCircle}>
              <Image source={icons.plus_icon} style={styles.pointPlusSign} />
            </View>
            <Text style={styles.pointText}>{profile.point} </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  };

  const renderButton = () => {
    if (fontsLoaded) {
      return (
        <View style={styles.buttonSection}>
          <View style={styles.buttonInnerView}>
            {/* claim */}
            <View
              style={{
                alignItems: "center",
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                padding: 5,
              }}
            >
              <Image
                source={icons.claim_icon}
                style={{ height: 30, width: 30, resizeMode: "contain" }}
              />
              <Text
                style={{
                  color: COLORS.lightGray3,
                  fontSize: SIZES.base,
                  ...FONTS.body3,
                  fontFamily: "Roboto-Regular",
                }}
              >
                Claim
              </Text>
            </View>
            <LineDivider />
            {/* GET Point */}
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",

                padding: 5,
              }}
              onPress={() => {
                console.log("Get point called");
              }}
            >
              <Image
                source={icons.point_icon}
                style={{ height: 30, width: 30, resizeMode: "contain" }}
              />
              <Text
                style={{
                  color: COLORS.lightGray3,
                  fontSize: SIZES.base,
                  ...FONTS.body3,
                  fontFamily: "Roboto-Regular",
                }}
              >
                Get Point
              </Text>
            </TouchableOpacity>
            <LineDivider />
            {/* Card */}
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
              }}
            >
              <Image
                source={icons.card_icon}
                style={{ height: 30, width: 30, resizeMode: "contain" }}
              />
              <Text
                style={{
                  color: COLORS.lightGray3,
                  fontSize: SIZES.base,
                  ...FONTS.body3,
                  fontFamily: "Roboto-Regular",
                }}
              >
                My Card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else return <AppLoading />;
  };

  const renderMyBookSection = (myBooks) => {
    if (fontsLoaded) {
      const renderItem = ({ item, index }) => {
        return (
          <TouchableOpacity
            style={{
              flex: 1,
              marginLeft: index == 0 ? SIZES.padding : 0,
              marginRight: SIZES.radius,
            }}
            onPress={() => {
              navigation.navigate("BookDetails", {
                book: item,
              });
            }}
          >
            {/* Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{
                width: 180,
                height: 250,
                borderRadius: 20,
              }}
            />
            {/* Book Info */}
            <View
              style={{
                marginTop: SIZES.radius,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.clock_icon}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.lightGray,
                }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  ...FONTS.body3,
                  color: COLORS.lightGray,
                }}
              >
                {item.lastRead}
              </Text>
              <Image
                source={icons.page_icon}
                style={{
                  marginLeft: SIZES.radius,
                  tintColor: COLORS.lightGray,
                  height: 20,
                  width: 20,
                }}
              />
              <Text
                style={{
                  marginLeft: 5,
                  ...FONTS.body3,
                  color: COLORS.lightGray,
                }}
              >
                {item.completion}
              </Text>
            </View>
          </TouchableOpacity>
        );
      };
      return (
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.white,
                fontFamily: "Roboto-Regular",
              }}
            >
              My Books
            </Text>
            <TouchableOpacity
              onPress={() => {
                console.log("see more pressed");
              }}
            >
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.lightGray,
                  alignSelf: "flex-start",
                  textDecorationLine: "underline",
                  fontFamily: "Roboto-Thin",
                }}
              >
                see more
              </Text>
            </TouchableOpacity>
          </View>
          {/* my myBooks */}
          <View style={{ flex: 1, marginTop: SIZES.padding }}>
            <FlatList
              data={myBooks}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  };
  const renderCategoryHeader = () => {
    if (fontsLoaded) {
      const renderItem = ({ item }) => {
        return (
          <TouchableOpacity
            style={{
              flex: 1,
              marginRight: SIZES.padding,
            }}
            onPress={() => setSelectedCategory(item.id)}
          >
            {selectedCategory == item.id && (
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                {item.categoryName}
              </Text>
            )}
            {selectedCategory != item.id && (
              <Text style={{ color: COLORS.lightGray, ...FONTS.h3 }}>
                {item.categoryName}
              </Text>
            )}
          </TouchableOpacity>
        );
      };
      return (
        <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
          <FlatList
            data={categoriesData}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            renderItem={renderItem}
          />
        </View>
      );
    } else return <AppLoading />;
  };
  const renderCategoryData = () => {
    var books = [];
    let selectedCategoryBooks = categories.filter(
      (a) => a.id == selectedCategory
    );
    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    const renderItem = ({ item }) => {
      return (
        <View style={{ marginVertical: SIZES.base }}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() => {
              navigation.navigate("BookDetails", {
                book: item,
              });
            }}
          >
            {/* Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{ width: 100, height: 150, borderRadius: 10 }}
            />
            {/* Author and name */}
            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
              <Text
                style={{
                  paddingRight: SIZES.padding,
                  ...FONTS.h2,
                  color: COLORS.white,
                }}
              >
                {item.bookName}
              </Text>
              <Text style={{ ...FONTS.body3, color: COLORS.lightGray }}>
                {item.author}
              </Text>
              {/* boook info */}
              <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}
                >
                  {item.pageNo}
                </Text>
                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    paddingHorizontal: SIZES.radius,
                  }}
                >
                  {item.readed}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    };

    if (fontsLoaded) {
      return (
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
            paddingLeft: SIZES.padding,
          }}
        >
          <FlatList
            data={books}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={false}
          />
        </View>
      );
    } else {
      return <AppLoading />;
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      {/* Header Section */}
      <View style={{ height: 160 }}>
        <StatusBar backgroundColor={COLORS.black}></StatusBar>
        {renderHeader(name)}
        {renderButton()}
      </View>
      {/* Body Section */}
      <ScrollView style={{ marginTop: SIZES.radius }}>
        {/*Books Section  */}
        <View>{renderMyBookSection(myBooks)}</View>
        {/* My Categories Section */}
        <View style={{ marginTop: SIZES.padding }}>
          {renderCategoryHeader()}
        </View>
        <View>{renderCategoryData()}</View>
      </ScrollView>
    </View>
  );
};

export default Home;
