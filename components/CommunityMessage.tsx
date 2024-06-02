import { View, Text } from "react-native";
import React from "react";

export default function CommunityMessage({
  message,
  date,
}: {
  message: string;
  date: string;
}) {
  return (
    <View className="mb-8">
      <Text className="mb-4 w-[80%]">{message}</Text>
      <View className="h-[1.5px] bg-[#d1d1d1] mb-2"></View>
      <Text className="text-[#AEAEAE] text-xs">{date}</Text>
    </View>
  );
}
