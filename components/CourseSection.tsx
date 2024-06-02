import { Entypo } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export default function CourseSection({
  title,
  duration,
}: {
  title: string;
  duration: string;
}) {
  return (
    <Pressable className="flex-row justify-between items-center p-4 border border-[#7C7C7C30] rounded-md mb-4">
      <View className="w-3/4">
        <Text className="text-lg font-bold leading-6 mb-2">{title}</Text>
        <Text className="text-[#7c7c7c80]">{duration}</Text>
      </View>
      <View className="w-8 h-8 items-center justify-center rounded-full border-[1px] border-[#A21942] pl-[2px] mr-2">
        <Entypo name="controller-play" size={20} color="#A21942" />
      </View>
    </Pressable>
  );
}
