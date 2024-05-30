import { Entypo, FontAwesome6, Fontisto } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Community() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 32 }}>
          <View className="flex-row justify-between items-center mb-12">
            <Text className="text-2xl font-bold">Community</Text>
            <Pressable className="bg-[#A21942] py-2.5 px-5 rounded-md">
              <Text className="text-white font-bold text-center text-base">
                My Community
              </Text>
            </Pressable>
          </View>
          <View className="flex-row justify-between items-center p-4 border border-[#7C7C7C30] rounded-md mb-6">
            <View className="flex-row items-center">
              <View className="w-12 h-12 items-center justify-center rounded-full bg-[#A21942]">
                <FontAwesome6 name="crown" color="#fff" size={20} />
              </View>
              <Text className="font-bold text-base ml-5">
                Exclusive Community
              </Text>
            </View>
            <Fontisto name="locked" size={20} />
          </View>
          <View className="p-4 border border-[#7C7C7C30] rounded-md mb-6">
            <View className="flex-row items-center mb-6">
              <View className="w-14 h-14 items-center justify-center rounded-full border border-[#7c7c7c30]">
                <Text className="font-bold text-2xl">71</Text>
              </View>
              <View className="ml-4">
                <Text className="font-semibold text-base mb-1">Block 71</Text>
                <View className="flex-row items-center -translate-x-1">
                  <Entypo name="location-pin" color="#7c7c7c" size={14} />
                  <Text className="font-semibold text-[#7c7c7c] text-[13px] ml-1">
                    Jl. Ir. H. Juanda No.108, Bandung
                  </Text>
                </View>
              </View>
            </View>
            <Pressable className="bg-[#A21942] p-2.5 rounded-md">
              <Text className="text-white font-bold text-center text-base">
                Join
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
