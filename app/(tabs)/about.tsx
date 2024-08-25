import ParallaxScrollView from "@/components/ParallaxScrollView";
import ReservationButton from "@/components/ReservationButton";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ebafbb", dark: "#1D3D47" }}
      headerImage={
        <View className="relative flex-1 justify-center flex-col h-full w-full">
          <View className="bg-black/70 absolute left-0 top-0 right-0 bottom-0" />
          <Image
            className="absolute w-full h-full"
            source={require("@/assets/images/about-hero.png")}
          />
          <Text className="text-5xl font-bold uppercase text-center text-white z-20 p-2 tracking-tighter">
            Challenging the Status Quo
          </Text>
        </View>
      }
    >
      <View className="p-4" style={{ backgroundColor: "#f8eb98" }}>
        <Image
          style={{ width: "100%", height: 45 }}
          source={require("@/assets/images/brunch-me-hard-marquee.png")}
          resizeMode="contain"
        />
      </View>
      <View className="flex-1 gap-4 p-8">
        <Text className="text-base font-semibold text-yellow-200 leading-6 text-justify">
          From the resort-style atmosphere, to the chef-crafted, all day brunch
          menu, you'll feel like you've been transported to an ocean side oasis,
          right in the heart of Sandy, UT. Sunday's Best is that sun shining,
          birds chirping, champagne popping, kind of place. So, let's tell the
          DJ to turn it up, grab some inventive cocktails, fresh oysters on the
          rocks, and see where the vibes take us. There's only one mandate here
          at Sunday's Best, everyone must be prepared to #BrunchHard.
        </Text>
        <View className="relative w-full h-96">
          <Image
            source={require("@/assets/images/michael-mchenry.png")}
            className="h-96 absolute w-full"
            resizeMode="contain"
          />
        </View>
        <Text className="text-base font-semibold text-yellow-200 leading-6 text-justify">
          Michael McHenry is creatively transforming the dining experience
          throughout his beloved state of Utah, the Southwest and soon to be
          nationwide as a celebrity restaurateur. He’s passionately serving
          Pancakes & Champagne to his capital city, Salt Lake. He's an
          innovative trailblazer not only elevating the industry but responsible
          for inspiring future leaders and igniting passion for success in his
          teams.
        </Text>
        <Text className="text-base font-semibold text-yellow-200 leading-6 text-justify">
          He has won Restaurateur of the Year, won Best Restaurant Concept 5x,
          recognized as Top 40 under 40, opened 7 viable brands, donated 2M
          meals to his community, helped create more than 3000+ jobs, opened 70+
          restaurants, and shows no signs of slowing down.
        </Text>
        <TouchableOpacity>
          <View className="flex-row items-center gap-2 ">
            <Ionicons name="logo-instagram" color="#abfbe1" size={24} />
            <Text className="text-teal-200 font-bold text-lg">
              Follow Michael on Instagram.
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <ReservationButton />
        </View>
        <View className="relative w-full h-96">
          <Image
            source={require("@/assets/images/tyler-stokes.png")}
            className="h-96 absolute w-full"
            resizeMode="contain"
          />
        </View>
        <Text className="text-base font-semibold text-yellow-200 leading-6 text-justify">
          Tyler Stokes is an award winning, published chef and proven
          restaurateur with over 28 years of restaurant experience, honing his
          skills under some of the most talented chefs in the industry and
          pursuing his mission of providing truly exceptional dining
          experiences.
        </Text>
        <Text className="text-base font-semibold text-yellow-200 leading-6 text-justify">
          His restaurants have won many local and regional awards, building a
          devoted following of craft food lovers that have made him a success
          and allowed him to do what he loves, connecting with people through
          food.
        </Text>
        <TouchableOpacity>
          <View className="flex-row items-center gap-2 ">
            <Ionicons name="logo-instagram" color="#abfbe1" size={24} />
            <Text className="text-teal-200 font-bold text-lg">
              Follow Tyler on Instagram.
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <ReservationButton />
        </View>
      </View>
    </ParallaxScrollView>
  );
}
