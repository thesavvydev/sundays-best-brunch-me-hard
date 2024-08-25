import { Image, StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import ReservationButton from "@/components/ReservationButton";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ebafbb", dark: "#1D3D47" }}
      headerImage={
        <View className="relative flex-1 justify-center flex-col h-full w-full">
          <View className="bg-black/50 absolute left-0 top-0 right-0 bottom-0 z-10" />
          <Image
            className="absolute w-full h-full"
            source={require("@/assets/images/home-hero.png")}
          />
          <Image
            className="mx-auto z-20"
            style={{ width: 200, height: 200 }}
            source={require("@/assets/images/glass-logo.png")}
          />
          <Image
            className="mx-auto z-20"
            style={{ width: 250, height: 75 }}
            source={require("@/assets/images/sunday-best-logo.png")}
          />
        </View>
      }
    >
      <View className="p-4" style={{ backgroundColor: "#f8eb98" }}>
        <Image
          style={{ width: "100%", height: 45 }}
          source={require("@/assets/images/brunch-me-hard-marquee.png")}
        />
      </View>

      <View className="p-8 flex-1 gap-4">
        <ReservationButton />
        <Image
          style={{ width: "100%", height: 45 }}
          source={require("@/assets/images/easy-like-sunday-morning.png")}
        />
        <Image
          style={{ height: 350, width: "100%" }}
          className="aspect-square mx-auto"
          source={require("@/assets/images/stokes-mchenry.png")}
        />
        <Text className="text-base font-semibold text-slate-800 leading-6">
          Award Winning Restaurateurs Michael McHenry and Chef Tyler Stokes have
          done it again! From the resort-style atmosphere, to the chef-crafted,
          all day brunch menu, you'll feel like you've been transported to an
          ocean side oasis, right in the heart of Sandy, UT. Sunday's Best is
          that sun shining, birds chirping, champagne popping, kind of place.
          So, let's tell the DJ to turn it up, grab some inventive cocktails,
          fresh oysters on the rocks, and see where the vibes take us.
        </Text>
        <Text>
          There's only one mandate here at Sunday's Best, everyone must be
          prepared to #BrunchHard
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: "absolute",
  // },
});
