import ParallaxScrollView from "@/components/ParallaxScrollView";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

export default function EventsScreen() {
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ebafbb", dark: "#1D3D47" }}
      headerImage={
        <View className="relative flex-1 justify-center flex-col h-full w-full">
          <Image
            className="absolute w-full h-full"
            source={require("@/assets/images/events-screen-hero.png")}
          />
          <View className="bg-black/70 absolute left-0 top-0 right-0 bottom-0" />
          <Text className="text-5xl font-bold uppercase text-center text-white z-20 p-2 tracking-tighter">
            Private Events
          </Text>
        </View>
      }
    >
      <View className="p-4" style={{ backgroundColor: "#f8eb98" }}>
        <Image
          style={{ width: "100%", height: 45 }}
          source={require("@/assets/images/brunch-me-hard-marquee.png")}
        />
      </View>
      <View className="p-8 space-y-6">
        <Text className="text-4xl font-bold uppercase tracking-tighter text-slate-700">
          Book your next private event with us!
        </Text>
        <Text className="text-base font-semibold text-slate-600 text-center">
          We always felt the need to Brunch Hard and that's why we Brunch After
          Dark! A private, after-hours venue space for rent with over 4,500 sq
          ft of eclectic, mid-century styled rooms and a 1,000 sq ft patio to
          host your next Private Event! Look no further for a memorable space
          for your special occasion. Perfect for Birthdays, Corporate Party,
          Holiday Party, VIP Events, Banquet, Weddings and more!
        </Text>
        <Text className="text-base font-semibold text-slate-600 text-center">
          Feel free to stop by and see the space for yourself. We look forward
          to having you! For all inquiries, fill out the form below and we’ll be
          in touch soon.
        </Text>
        <View>
          <PrimaryButton
            onPress={() => router.push("/(tabs)/events/birthday-party")}
          >
            <Text className="uppercase font-bold text-white">
              Birthday Party
            </Text>
          </PrimaryButton>
        </View>
        <View>
          <PrimaryButton
            onPress={() => router.push("/(tabs)/events/vip-events")}
          >
            <Text className="uppercase font-bold text-white">VIP Events</Text>
          </PrimaryButton>
        </View>
        <View>
          <PrimaryButton
            onPress={() => router.push("/(tabs)/events/corporate-events")}
          >
            <Text className="uppercase font-bold text-white">
              Corporate Events
            </Text>
          </PrimaryButton>
        </View>
        <View>
          <PrimaryButton onPress={() => router.push("/(tabs)/events/weddings")}>
            <Text className="uppercase font-bold text-white">Weddings</Text>
          </PrimaryButton>
        </View>
      </View>
    </ParallaxScrollView>
  );
}
