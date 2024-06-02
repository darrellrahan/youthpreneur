import { Text, ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CommunityCard from "@/components/CommunityCard";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function myCommunity() {
  const communities = [
    {
      imageSource: require("../assets/images/community-1.png"),
      name: "Block 71",
      address: "Jl. Ir. H. Juanda, Bandung",
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
            <Text className="text-2xl font-bold">My Community</Text>
            <View></View>
          </View>
          {communities.map((data) => (
            <CommunityCard
              key={data.name}
              imageSource={data.imageSource}
              name={data.name}
              address={data.address}
              isMyCommunity
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
