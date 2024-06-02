import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CommunityEvent({
  imageSource,
  name,
  date,
}: {
  imageSource: any;
  name: string;
  date: string;
}) {
  return (
    <View className="mb-8">
      <Image source={imageSource} className="mb-4 h-[270px]" />
      <Text className="text-2xl font-bold mb-2">{name}</Text>
      <View className="flex-row items-center">
        <AntDesign name="clockcircleo" color="#AEAEAE" size={16} />
        <Text className="text-[#AEAEAE] ml-2 font-medium">{date}</Text>
      </View>
    </View>
  );
}
