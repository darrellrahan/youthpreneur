import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function ProfileButton({
  icon,
  option,
  link,
}: {
  icon: React.JSX.Element;
  option: string;
  link: string;
}) {
  return (
    <Pressable
      onPress={() => {
        router.navigate(link);
      }}
      className="flex-row justify-between items-center pb-5 border-b border-[#7c7c7c50] mb-6"
    >
      <View className="flex-row items-center">
        <View className="w-12 h-12 items-center justify-center rounded-full border border-[#AEAEAE]">
          {icon}
        </View>
        <Text className="font-bold text-lg ml-5">{option}</Text>
      </View>
      <AntDesign name="arrowright" size={24} />
    </Pressable>
  );
}
