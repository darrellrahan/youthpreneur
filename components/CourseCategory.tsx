import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function CourseCategory({
  icon,
  category,
}: {
  icon: React.JSX.Element;
  category: string;
}) {
  return (
    <Pressable
      onPress={() => {
        router.navigate("/course");
      }}
      className="flex-row items-center p-4 border border-[#7C7C7C30] rounded-md mb-4"
    >
      <View className="w-14 h-14 rounded-full bg-[#A2194210] items-center justify-center">
        {icon}
      </View>
      <Text className="font-bold text-lg ml-4">{category}</Text>
    </Pressable>
  );
}
