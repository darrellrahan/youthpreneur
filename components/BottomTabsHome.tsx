import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CourseCategory from "./CourseCategory";

export default function Home() {
  const categories = [
    {
      icon: <FontAwesome6 name="handshake" size={28} color="#A21942" />,
      category: "Business Fundamental",
    },
    {
      icon: <FontAwesome5 name="building" size={28} color="#A21942" />,
      category: "Industry Knowledge",
    },
    {
      icon: (
        <MaterialCommunityIcons name="chart-line" size={28} color="#A21942" />
      ),
      category: "Business Analysis",
    },
    {
      icon: (
        <MaterialCommunityIcons name="strategy" size={28} color="#A21942" />
      ),
      category: "Strategy Execution",
    },
    {
      icon: <Entypo name="globe" size={28} color="#A21942" />,
      category: "Geopolitics Businesses",
    },
    {
      icon: <FontAwesome name="money" size={28} color="#A21942" />,
      category: "Modern finacial system",
    },
    {
      icon: <FontAwesome6 name="handshake" size={28} color="#A21942" />,
      category: "Business Fundamentals",
    },
    {
      icon: <FontAwesome5 name="building" size={28} color="#A21942" />,
      category: "Industry Knowledges",
    },
    {
      icon: (
        <MaterialCommunityIcons name="chart-line" size={28} color="#A21942" />
      ),
      category: "Business Analysiss",
    },
    {
      icon: (
        <MaterialCommunityIcons name="strategy" size={28} color="#A21942" />
      ),
      category: "Strategy Executions",
    },
    {
      icon: <Entypo name="globe" size={28} color="#A21942" />,
      category: "Geopolitic Businesses",
    },
    {
      icon: <FontAwesome name="money" size={28} color="#A21942" />,
      category: "Modern finacial systems",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 32 }}>
          <View className="relative mb-8">
            <View className="absolute top-5 left-5">
              <AntDesign name="search1" size={20} color="#7C7C7C" />
            </View>
            <TextInput
              className="rounded-md border-[1.5px] border-[#D3D3D3] text-base py-4 pl-14 pr-6 font-semibold"
              placeholder="Search course"
              placeholderTextColor="#7C7C7C"
            />
          </View>
          <Text className="text-2xl font-bold mb-8">Categories</Text>
          {categories.map((data) => (
            <CourseCategory
              key={data.category}
              icon={data.icon}
              category={data.category}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
