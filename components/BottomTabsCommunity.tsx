import { FontAwesome6, Fontisto } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CommunityCard from "./CommunityCard";

export default function Community() {
  const communities = [
    {
      imageSource: require("../assets/images/community-2.png"),
      name: "Young on Top (YOT)",
      address: "Jl. Gatot Subroto No. 1, Bandung",
    },
    {
      imageSource: require("../assets/images/community-3.png"),
      name: "StartupLokal",
      address: "Jl. Ahmad Yani No. 2, Bandung",
    },
    {
      imageSource: require("../assets/images/community-4.png"),
      name: "Angin.id",
      address: "Jl. Katamso No. 3, Bandung",
    },
    {
      imageSource: require("../assets/images/community-5.png"),
      name: "Dailysocial.id",
      address: "Jl. Cikutra No. 4, Bandung",
    },
    {
      imageSource: require("../assets/images/community-6.png"),
      name: "IYE",
      address: "Jl. Dago No. 5, Bandung",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 32 }}>
          <View className="flex-row justify-between items-center mb-12">
            <Text className="text-2xl font-bold">Community</Text>
            <Link
              href="/my-community"
              className="bg-[#A21942] py-2.5 px-5 rounded-md"
            >
              <Text className="text-white font-bold text-center text-base">
                My Community
              </Text>
            </Link>
          </View>
          <View className="flex-row justify-between items-center p-4 border border-[#7C7C7C30] rounded-md mb-6">
            <View className="flex-row items-center">
              <View className="w-12 h-12 items-center justify-center rounded-full bg-[#A21942]">
                <FontAwesome6 name="crown" color="#fff" size={20} />
              </View>
              <Text className="font-bold text-base ml-5">
                Exclusive Community
              </Text>
            </View>
            <Fontisto name="locked" size={20} />
          </View>
          {communities.map((data) => (
            <CommunityCard
              key={data.name}
              imageSource={data.imageSource}
              name={data.name}
              address={data.address}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
