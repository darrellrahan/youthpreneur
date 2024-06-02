import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function changePassword() {
  const [isShowPassword, setIsShowPassword] = useState({
    first: true,
    second: true,
    third: true,
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 p-8">
        <View className="flex-row justify-between items-center mb-12">
          <Link href="/home">
            <AntDesign name="arrowleft" size={32} />
          </Link>
          <Text className="text-2xl font-bold">Change Password</Text>
          <View></View>
        </View>
        <View className="flex-row items-center mb-6">
          <Text className="text-lg font-bold w-[35%]">Current Password</Text>
          <View className="relative w-[65%]">
            <TextInput
              secureTextEntry={isShowPassword.first}
              textContentType="password"
              className="text-lg border-b border-[#7C7C7C50] pb-2 pr-10"
            />
            <Pressable
              onPress={() => {
                setIsShowPassword({
                  ...isShowPassword,
                  first: !isShowPassword.first,
                });
              }}
              className="absolute top-0 right-0"
            >
              <Feather
                name={isShowPassword.first ? "eye" : "eye-off"}
                size={28}
                color="#D1D1D1"
              />
            </Pressable>
          </View>
        </View>
        <View className="flex-row items-center mb-6">
          <Text className="text-lg font-bold w-[35%]">New Password</Text>
          <View className="relative w-[65%]">
            <TextInput
              secureTextEntry={isShowPassword.second}
              textContentType="password"
              className="text-lg border-b border-[#7C7C7C50] pb-2 pr-10"
            />
            <Pressable
              onPress={() => {
                setIsShowPassword({
                  ...isShowPassword,
                  second: !isShowPassword.second,
                });
              }}
              className="absolute top-0 right-0"
            >
              <Feather
                name={isShowPassword.second ? "eye" : "eye-off"}
                size={28}
                color="#D1D1D1"
              />
            </Pressable>
          </View>
        </View>
        <View className="flex-row items-center mb-12">
          <Text className="text-lg font-bold w-[35%]">Confirm Password</Text>
          <View className="relative w-[65%]">
            <TextInput
              secureTextEntry={isShowPassword.third}
              textContentType="password"
              className="text-lg border-b border-[#7C7C7C50] pb-2 pr-10"
            />
            <Pressable
              onPress={() => {
                setIsShowPassword({
                  ...isShowPassword,
                  third: !isShowPassword.third,
                });
              }}
              className="absolute top-0 right-0"
            >
              <Feather
                name={isShowPassword.third ? "eye" : "eye-off"}
                size={28}
                color="#D1D1D1"
              />
            </Pressable>
          </View>
        </View>
        <Pressable className="bg-[#A21942] p-3 rounded-md">
          <Text className="text-white text-center font-medium text-lg">
            Save
          </Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
