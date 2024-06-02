import { Entypo, FontAwesome, Fontisto, Octicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProfileButton from "./ProfileButton";

export default function Profile() {
  const options = [
    {
      icon: <Octicons name="person-fill" color="#A21942" size={24} />,
      option: "Edit Profile",
      link: "/edit-profile",
    },
    {
      icon: <Fontisto name="locked" color="#A21942" size={24} />,
      option: "Change Password",
      link: "/change-password",
    },
    {
      icon: <Entypo name="location-pin" color="#A21942" size={24} />,
      option: "Change Location",
      link: "/change-location",
    },
    {
      icon: <FontAwesome name="language" color="#A21942" size={24} />,
      option: "Change Language",
      link: "/change-language",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 p-8">
        <Text className="text-2xl font-bold mb-12">My Profile</Text>
        <View className="flex-row items-center mb-12">
          <View className="w-16 h-16 rounded-full bg-[#D1D1D140] items-center justify-center">
            <Octicons name="person-fill" color="#AEAEAE" size={40} />
          </View>
          <Text className="font-bold text-xl ml-4">Nathan Lee</Text>
        </View>
        {options.map((data) => (
          <ProfileButton
            key={data.option}
            icon={data.icon}
            option={data.option}
            link={data.link}
          />
        ))}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
