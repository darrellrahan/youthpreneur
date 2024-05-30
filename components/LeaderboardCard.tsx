import { View, Text } from "react-native";
import CountryFlag from "react-native-country-flag";

export default function LeaderboardCard({
  rank,
  flag,
  name,
  points,
}: {
  rank: number;
  flag: string;
  name: string;
  points: number;
}) {
  return (
    <View className="flex-row justify-between items-center px-4 py-6 border border-[#7C7C7C30] rounded-md mb-6">
      <View className="flex-row items-center">
        <Text className="font-bold text-lg">{rank}.</Text>
        <View className="ml-4">
          <CountryFlag isoCode={flag} size={18} />
        </View>
        <Text className="font-bold text-lg ml-4">{name}</Text>
      </View>
      <Text>{points}pt</Text>
    </View>
  );
}
