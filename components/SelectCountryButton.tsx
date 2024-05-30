import { Pressable, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";

export default function SelectCountryButton({
  countryCode,
  countryName,
}: {
  countryCode: string;
  countryName: string;
}) {
  return (
    <Pressable className="flex-row justify-between items-center border-b border-[#7c7c7c80] pb-5 mb-6">
      <View className="flex-row items-center gap-4">
        <CountryFlag isoCode={countryCode} size={24} />
        <Text className="text-lg font-semibold">{countryName}</Text>
      </View>
      <View className="w-7 h-7 rounded-full border border-[#7C7C7C50]" />
    </Pressable>
  );
}
