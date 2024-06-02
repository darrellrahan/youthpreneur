import { ScrollView } from "react-native";
import CommunityEvent from "./CommunityEvent";

export default function CommunityEventTab() {
  const events = [
    {
      imageSource: require("../assets/images/community-events-1.png"),
      name: "Startup Summit",
      date: "June 2, 2024",
    },
    {
      imageSource: require("../assets/images/community-events-1.png"),
      name: "Profit to Purpose",
      date: "May 26, 2024",
    },
    {
      imageSource: require("../assets/images/community-events-1.png"),
      name: "Founder's Circle",
      date: "May 19, 2024",
    },
    {
      imageSource: require("../assets/images/community-events-1.png"),
      name: "Community Huddle",
      date: "May 12, 2024",
    },
  ];

  return (
    <ScrollView>
      {events.map((data) => (
        <CommunityEvent
          key={data.name}
          imageSource={data.imageSource}
          name={data.name}
          date={data.date}
        />
      ))}
    </ScrollView>
  );
}
