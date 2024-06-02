import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { AntDesign, Octicons } from "@expo/vector-icons";

export default function editProfile() {
  const [name, onChangeName] = useState("Nathan Lee");
  const [email, onChangeEmail] = useState("nathan.lee@gmail.com");

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 p-8">
        <View className="flex-row justify-between items-center mb-12">
          <Link href="/home">
            <AntDesign name="arrowleft" size={32} />
          </Link>
          <Text className="text-2xl font-bold">Edit Profile</Text>
          <View></View>
        </View>
        <View className="flex-row items-center mb-12">
          <View className="w-16 h-16 rounded-full bg-[#D1D1D140] items-center justify-center">
            <Octicons name="person-fill" color="#AEAEAE" size={40} />
          </View>
          <Pressable className="ml-4">
            <Text className="text-[#A21942] underline text-lg">
              Upload photo +
            </Text>
          </Pressable>
        </View>
        <View className="flex-row items-center mb-12">
          <Text className="text-lg font-bold w-[25%]">Name</Text>
          <TextInput
            className="text-lg w-[75%] border-b border-[#7C7C7C50] pb-2"
            value={name}
            onChangeText={onChangeName}
          />
        </View>
        <View className="flex-row items-center mb-12">
          <Text className="text-lg font-bold w-[25%]">Email</Text>
          <TextInput
            className="text-lg w-[75%] border-b border-[#7C7C7C50] pb-2"
            value={email}
            onChangeText={onChangeEmail}
            textContentType="emailAddress"
          />
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
