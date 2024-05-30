import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import LeaderboardCard from "./LeaderboardCard";

export default function Challenge() {
  const leaderboard = [
    {
      flag: "kr",
      name: "Hyeri Kim",
      points: 1400,
    },
    {
      flag: "id",
      name: "Dadang Darmaji",
      points: 1200,
    },
    {
      flag: "us",
      name: "Gilbert Sam",
      points: 1000,
    },
    {
      flag: "jp",
      name: "Haruko",
      points: 900,
    },
    {
      flag: "ca",
      name: "Julian Max",
      points: 800,
    },
    {
      flag: "in",
      name: "Priyanka Rahini",
      points: 750,
    },
    {
      flag: "cn",
      name: "The Rock",
      points: 700,
    },
    {
      flag: "kr",
      name: "Son Heung Min",
      points: 650,
    },
    {
      flag: "id",
      name: "Maman",
      points: 600,
    },
    {
      flag: "us",
      name: "The Undertaker",
      points: 550,
    },
    {
      flag: "jp",
      name: "Shinji Kagawa",
      points: 500,
    },
    {
      flag: "ca",
      name: "Kendrick Lamar",
      points: 450,
    },
    {
      flag: "in",
      name: "Rajesh",
      points: 400,
    },
    {
      flag: "cn",
      name: "John Cena",
      points: 350,
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 32 }}>
          <View className="flex-row justify-between items-center mb-12">
            <Text className="text-2xl font-bold">Leaderboard</Text>
            <Pressable className="bg-[#A21942] py-2.5 px-5 rounded-md">
              <Text className="text-white font-bold text-center text-base">
                Play
              </Text>
            </Pressable>
          </View>
          {leaderboard.map((data, index) => (
            <LeaderboardCard
              key={data.name}
              rank={index + 1}
              flag={data.flag}
              name={data.name}
              points={data.points}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
