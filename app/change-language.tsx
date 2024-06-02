import SelectCountryButton from "@/components/SelectCountryButton";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function changeLanguage() {
  const languages = [
    { code: "CN", name: "Chinese Mandarin" },
    { code: "ES", name: "Spanish" },
    {
      code: "GB",
      name: "English",
    },
    { code: "SA", name: "Arabic" },
    { code: "BD", name: "Bengali" },
    { code: "IN", name: "Hindi" },
    { code: "PT", name: "Portuguese" },
    { code: "RU", name: "Russian" },
    { code: "JP", name: "Japanese" },
    { code: "DE", name: "German" },
    { code: "ID", name: "Indonesian" },
    { code: "KR", name: "Korean" },
    { code: "FR", name: "French" },
    { code: "TR", name: "Turkish" },
    { code: "PK", name: "Urdu" },
    { code: "IT", name: "Italian" },
    { code: "NL", name: "Dutch" },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 p-8">
        <View className="flex-row justify-between items-center mb-12">
          <Link href="/home">
            <AntDesign name="arrowleft" size={32} />
          </Link>
          <Text className="text-2xl font-bold">Change Language</Text>
          <View></View>
        </View>
        <ScrollView>
          {languages.map((data) => (
            <SelectCountryButton
              key={data.name}
              countryCode={data.code}
              countryName={data.name}
            />
          ))}
        </ScrollView>
        <Link
          href="/home"
          className="bg-[#A21942] text-center p-4 rounded-md mt-6"
        >
          <Text className="text-white font-medium text-xl">Save</Text>
        </Link>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
