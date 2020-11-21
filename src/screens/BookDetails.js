import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

const BookDetail = ({ route, navigation }) => {
  const [book, setBook] = useState("");
  useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book]);

  const renderBookCoverSection = () => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={book.bookCover}
          resizeMode="cover"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        />
        {/* color overlay */}
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: book.backgroundColor,
          }}
        ></View>
        {/* nav header */}
        <View
          style={{
            flexDirection: "row",
            height: 40,
            paddingHorizontal: SIZES.radius,
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: SIZES.base,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: book.navTintColor,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                color: book.navTintColor,
                fontWeight: "bold",
              }}
            >
              Book Detail
            </Text>
          </View>
          <TouchableOpacity style={{ marginRight: SIZES.base }}>
            <Image
              source={icons.more_icon}
              style={{
                height: 30,
                width: 30,
                tintColor: book.navTintColor,
                alignItems: "flex-end",
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 5, alignItems: "center", paddingTop: SIZES.padding2 }}
        >
          <Image
            source={book.bookCover}
            resizeMode="contain"
            style={{
              flex: 1,
              height: "auto",
              width: 150,
            }}
          />
        </View>
        {/* author name and book name */}
        <View
          style={{
            flex: 1.8,
            alignContent: "center",
            justifyContent: "center",
            // flexDirection: "column",
            // width: "100%"
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              ...FONTS.h3,
              color: book.navTintColor,
            }}
          >
            {book.bookName}
          </Text>
          <Text
            style={{
              textAlign: "center",
              ...FONTS.body3,
              fontWeight: "700",
              color: book.navTintColor,
            }}
          >
            {book.author}
          </Text>
        </View>
      </View>
    );
  };
  const renderDescriptionSec = () => {
    return (
      <View style={{ flex: 1, flexDirection: "row", padding: SIZES.padding }}>
        {/* custom scroll bar  */}
        <View
          style={{ width: 4, height: "100%", backgroundColor: COLORS.gray1 }}
        ></View>
        <ScrollView
          contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
          showsHorizontalScrollIndicator={false}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              marginBottom: SIZES.padding,
            }}
          >
            Description
          </Text>
          <Text style={{ ...FONTS.body3, color: COLORS.lightGray }}>
            {book.description}
          </Text>
        </ScrollView>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      {/* book cover section */}
      <View style={{ flex: 3 }}>{renderBookCoverSection()}</View>
      {/* description section */}
      <View style={{ flex: 2 }}>{renderDescriptionSec()}</View>
    </View>
  );
};
export default BookDetail;
