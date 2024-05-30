import { Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <View className="h-1/2 bg-red-600">
          <Image
            source={require("../assets/images/intro-slider.png")}
            className="w-full h-full"
          />
        </View>
        <View className="h-1/2 p-8 justify-between">
          <View>
            <Text className="font-bold text-3xl mb-4">
              Build your business and reflect on your journey
            </Text>
            <Text className="text-[#AEAEAE] text-base">
              Join our community of innovative entrepreneurs and start shaping
              your success story today!
            </Text>
          </View>
          <View>
            <Link
              href="/register"
              className="bg-[#A21942] text-center p-4 rounded-md"
            >
              <Text className="text-white font-medium text-xl">
                Get Started
              </Text>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
