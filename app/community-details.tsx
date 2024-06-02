import { ImageBackground, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import CommunityEventTab from "@/components/CommunityEventTab";
import CommunityMessageTab from "@/components/CommunityMessageTab";
import { useState } from "react";

const renderScene = SceneMap({
  first: CommunityEventTab,
  second: CommunityMessageTab,
});

export default function Index() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Event" },
    { key: "second", title: "Message" },
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ImageBackground
          source={require("../assets/images/block71-banner.jpeg")}
          resizeMode="cover"
          className="h-[320px] relative justify-between p-8 mb-4"
        >
          <View className="absolute top-0 bottom-0 right-0 left-0 bg-black/50"></View>
          <Link href="/my-community">
            <AntDesign name="arrowleft" color="#fff" size={32} />
          </Link>
          <View>
            <Text className="text-white font-bold text-4xl mb-2">Block 71</Text>
            <View className="flex-row items-center -translate-x-1">
              <Entypo name="location-pin" color="#fff" size={18} />
              <Text className="font-semibold text-white ml-1">
                Jl. Ir. H. Juanda No.108, Bandung
              </Text>
            </View>
          </View>
        </ImageBackground>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          style={{ paddingHorizontal: 32 }}
          sceneContainerStyle={{ paddingVertical: 32 }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{ backgroundColor: "transparent" }}
              labelStyle={{
                color: "#A21942",
                fontSize: 18,
                textTransform: "capitalize",
                paddingBottom: 4,
                fontWeight: "semibold",
              }}
              indicatorStyle={{ backgroundColor: "#A21942", height: 1.5 }}
              inactiveColor="#AEAEAE"
            />
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
