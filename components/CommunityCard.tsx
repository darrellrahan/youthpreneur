import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, Image } from "react-native";

export default function CommunityCard({
  imageSource,
  name,
  address,
  isMyCommunity,
}: {
  imageSource: any;
  name: string;
  address: string;
  isMyCommunity?: boolean;
}) {
  return (
    <View className="p-4 border border-[#7C7C7C30] rounded-md mb-6">
      <View className="flex-row items-center mb-6">
        <Image
          source={imageSource}
          className="w-14 h-14"
          resizeMode="contain"
        />
        <View className="ml-4">
          <Text className="font-semibold text-base mb-1">{name}</Text>
          <View className="flex-row items-center -translate-x-1">
            <Entypo name="location-pin" color="#7c7c7c" size={14} />
            <Text className="font-semibold text-[#7c7c7c] text-[13px] ml-1">
              {address}
            </Text>
          </View>
        </View>
      </View>
      <Link
        href={`/${isMyCommunity ? "community-details" : "my-community"}`}
        className="text-center bg-[#A21942] p-2.5 rounded-md"
      >
        <Text className="text-white font-bold text-base">
          {isMyCommunity ? "Open" : "Join"}
        </Text>
      </Link>
    </View>
  );
}
