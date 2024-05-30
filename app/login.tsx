import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [isShowPassword, setIsShowPassword] = useState(true);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ScrollView className="px-8 relative">
          <Link href="/" className="absolute top-8 left-0">
            <AntDesign name="arrowleft" size={32} />
          </Link>
          <View className="items-center mb-12">
            <Image
              source={require("../assets/images/adaptive-icon.png")}
              className="w-[120px] h-[120px]"
            />
            <Text className="font-bold text-4xl mb-2">Welcome Back!</Text>
            <Text className="text-base">Please login to use our services</Text>
          </View>
          <View className="gap-4 mb-4">
            <TextInput
              className="rounded-md border-[2.5px] border-[#A21942] text-base py-3 px-5"
              placeholder="Enter your email"
              placeholderTextColor="#D1D1D1"
              textContentType="emailAddress"
            />
            <View className="relative">
              <TextInput
                className="rounded-md border-[2.5px] border-[#A21942] text-base py-3 px-5"
                placeholder="Password"
                placeholderTextColor="#D1D1D1"
                secureTextEntry={isShowPassword}
                textContentType="password"
              />
              <Pressable
                onPress={() => {
                  setIsShowPassword(!isShowPassword);
                }}
                className="absolute top-4 right-4"
              >
                <Feather
                  name={isShowPassword ? "eye" : "eye-off"}
                  size={28}
                  color="#D1D1D1"
                />
              </Pressable>
            </View>
            <Link
              href="/choose-language"
              className="bg-[#A21942] text-center p-3 rounded-md"
            >
              <Text className="text-white font-bold text-base">Sign In</Text>
            </Link>
          </View>
          <View className="flex-row justify-between items-center mb-4">
            <View className="w-[45%] h-[2px] bg-[#D1D1D1]" />
            <Text className="text-[#D1D1D1] text-base font-medium">or</Text>
            <View className="w-[45%] h-[2px] bg-[#D1D1D1]" />
          </View>
          <Pressable className="border-[1.5px] border-[#A21942] p-3 rounded-md flex-row justify-center items-center mb-52">
            <Image source={require("../assets/images/google.png")} />
            <Text className="text-[#A21942] font-bold text-lg ml-4">
              Continue with Google
            </Text>
          </Pressable>
          <Text className="text-[#7C7C7C] text-center font-bold text-lg">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#A21942]">
              Sign Up
            </Link>
          </Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
