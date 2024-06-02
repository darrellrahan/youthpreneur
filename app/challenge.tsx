import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 32 }}>
          <View className="flex-row justify-between items-center mb-12">
            <Link href="/home">
              <AntDesign name="arrowleft" size={32} />
            </Link>
            <Text className="text-2xl font-bold">Challenge</Text>
            <View></View>
          </View>
          <View className="h-[200px] mb-8">
            <ScrollView persistentScrollbar={true} nestedScrollEnabled={true}>
              <Text className="text-lg font-bold pr-8 text-justify">
                You are a business analyst for "EcoSmart Innovations," a company
                specializing in eco-friendly home products. Recently, EcoSmart
                has seen a decline in market share despite the growing demand
                for sustainable products. The CEO has tasked you with conducting
                a comprehensive business analysis to identify the reasons behind
                this decline and to recommend strategies for improvement.
                Perform a SWOT analysis to evaluate EcoSmart's internal
                strengths and weaknesses, and its external opportunities and
                threats
              </Text>
            </ScrollView>
          </View>
          <TextInput
            style={{ textAlignVertical: "top" }}
            className="rounded-md border border-[#7C7C7C50] text-base p-4 mb-4"
            placeholder="Your answer..."
            placeholderTextColor="#7C7C7C50"
            multiline={true}
            numberOfLines={8}
          />
          <View className="flex-row justify-between items-center mb-4">
            <View className="w-[45%] h-[2px] bg-[#D1D1D190]" />
            <Text className="text-[#D1D1D190] text-base font-medium">or</Text>
            <View className="w-[45%] h-[2px] bg-[#D1D1D190]" />
          </View>
          <Pressable className="border border-[#7c7c7c50] p-3 rounded-md flex-row justify-center items-center mb-20">
            <AntDesign name="pdffile1" color="#A21942" size={28} />
            <Text className="text-[#A21942] font-bold text-lg ml-3">
              Upload File
            </Text>
          </Pressable>
          <Pressable className="bg-[#A21942] p-3 rounded-md">
            <Text className="text-white text-center font-medium text-lg">
              Submit
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
