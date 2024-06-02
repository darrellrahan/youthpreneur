import CourseSection from "@/components/CourseSection";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function course() {
  const sections = [
    {
      title: "Definition and nature of business",
      duration: "15.14",
    },
    {
      title: "Types of businesses",
      duration: "25.31",
    },
    {
      title: "The role of business in the economy",
      duration: "19.20",
    },
    {
      title: "Nature of business and Definition",
      duration: "15.14",
    },
    {
      title: "Business Types",
      duration: "25.31",
    },
    {
      title: "Business' role in economy",
      duration: "19.20",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 32 }}>
          <View className="flex-row justify-between items-center mb-12">
            <Link href="/home">
              <AntDesign name="arrowleft" size={32} />
            </Link>
            <Text className="text-2xl font-bold">Course</Text>
            <View></View>
          </View>
          <ImageBackground
            source={require("../assets/images/course-introduction.png")}
            resizeMode="cover"
            className="w-full h-[230px] relative items-center justify-center rounded-md mb-8"
          >
            <View className="absolute top-0 bottom-0 right-0 left-0 bg-black/30 rounded-md"></View>
            <View className="items-center">
              <View className="w-10 h-10 items-center justify-center rounded-full bg-white pl-1 mb-2">
                <Entypo name="controller-play" size={32} />
              </View>
              <Text className="text-white text-base font-semibold">
                Introduction
              </Text>
            </View>
          </ImageBackground>
          <View className="mb-8">
            <Text className="text-2xl font-bold mb-3">
              Business Fundamental
            </Text>
            <Text className="text-[#A21942] font-medium text-base">
              Course by Fira Smith
            </Text>
            <Text className="text-[#A21942] font-medium text-base mb-3">
              Graduated From Harvard Business School
            </Text>
            <Text className="text-[#7C7C7C80] font-medium">
              12h 13mins • 35 Lesson
            </Text>
          </View>
          {sections.map((data) => (
            <CourseSection
              key={data.title}
              title={data.title}
              duration={data.duration}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
