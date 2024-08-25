import HorizontalRule from "@/components/HorizontalRule";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import PrimaryButton from "@/components/PrimaryButton";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function MenuScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ebafbb", dark: "#1D3D47" }}
      headerImage={
        <View className="relative flex-1 justify-center flex-col h-full w-full">
          <Image
            className="absolute w-full h-full"
            source={require("@/assets/images/menu-screen-hero.png")}
          />
          <View className="bg-black/70 absolute left-0 top-0 right-0 bottom-0" />
          <Text className="text-5xl font-bold uppercase text-center text-white z-20 p-2 tracking-tighter">
            Brunchin' is a habit
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
      <ScrollView horizontal className="p-4 flex-row space-x-4">
        <View>
          <PrimaryButton>
            <Text className="uppercase font-bold text-white">
              Coffee & Pastries
            </Text>
          </PrimaryButton>
        </View>
        <View>
          <PrimaryButton>
            <Text className="uppercase font-bold text-white">Main Menu</Text>
          </PrimaryButton>
        </View>
        <View>
          <PrimaryButton>
            <Text className="uppercase font-bold text-white">
              Cocktails, Wine & Beer
            </Text>
          </PrimaryButton>
        </View>
      </ScrollView>
      <View className="flex-1 space-y-8 p-4 my-4">
        <View className="space-y-2">
          <Text className="text-5xl font-bold uppercase tracking-tighter text-slate-600">
            Try a show stopper...
          </Text>
          <Text className="text-slate-600 font-bold">
            AKA killer hot chocolate $5 | 12oz
          </Text>
        </View>
        <View className="h-1 bg-pink-400" />
        <View className="space-y-2">
          <Text className="text-5xl font-bold uppercase tracking-tighter text-slate-600">
            Coffee & Such
          </Text>
          <Text className="text-slate-600 font-bold text-lg">
            Provided in partnership with our good friends at the DOMA Coffee
            Roasting Co.
          </Text>
        </View>
        <ScrollView
          horizontal
          className="flex-row space-x-6"
          showsHorizontalScrollIndicator={false}
        >
          <View className="space-y-3">
            <View className="aspect-square bg-white w-48" />
            <View>
              <Text className="text-xl text-slate-800 font-semibold">
                Drip Coffee
              </Text>
              <Text className="text-slate-700 font-light">Bottomless</Text>
              <Text className="text-lg text-slate-800 font-bold">$5.00</Text>
            </View>
          </View>
          <View className="space-y-3">
            <View className="aspect-square bg-white w-48" />
            <View>
              <Text className="text-xl text-slate-800 font-semibold">
                Drip Coffee
              </Text>
              <Text className="text-slate-700 font-light">Bottomless</Text>
              <Text className="text-lg text-slate-800 font-bold">$5.00</Text>
            </View>
          </View>
          <View className="space-y-3">
            <View className="aspect-square bg-white w-48" />
            <View>
              <Text className="text-xl text-slate-800 font-semibold">
                Drip Coffee
              </Text>
              <Text className="text-slate-700 font-light">Bottomless</Text>
              <Text className="text-lg text-slate-800 font-bold">$5.00</Text>
            </View>
          </View>
        </ScrollView>
        <View className="h-1 bg-pink-400" />
        <Text className="text-5xl font-bold uppercase tracking-tighter text-slate-600">
          Juice & Soda
        </Text>
        <ScrollView
          horizontal
          className="flex-row space-x-6"
          showsHorizontalScrollIndicator={false}
        >
          <View className="space-y-3">
            <View className="aspect-square bg-white w-48" />
            <View>
              <Text className="text-xl text-slate-800 font-semibold">
                Drip Coffee
              </Text>
              <Text className="text-slate-700 font-light">Bottomless</Text>
              <Text className="text-lg text-slate-800 font-bold">$5.00</Text>
            </View>
          </View>
          <View className="space-y-3">
            <View className="aspect-square bg-white w-48" />
            <View>
              <Text className="text-xl text-slate-800 font-semibold">
                Drip Coffee
              </Text>
              <Text className="text-slate-700 font-light">Bottomless</Text>
              <Text className="text-lg text-slate-800 font-bold">$5.00</Text>
            </View>
          </View>
          <View className="space-y-3">
            <View className="aspect-square bg-white w-48" />
            <View>
              <Text className="text-xl text-slate-800 font-semibold">
                Drip Coffee
              </Text>
              <Text className="text-slate-700 font-light">Bottomless</Text>
              <Text className="text-lg text-slate-800 font-bold">$5.00</Text>
            </View>
          </View>
        </ScrollView>
        <View className="h-1 bg-pink-400" />
        <Text className="text-5xl font-bold uppercase tracking-tighter text-slate-600">
          Seasonal Mocktails
        </Text>
        <ScrollView
          horizontal
          className="flex-row space-x-6"
          showsHorizontalScrollIndicator={false}
        >
          <View className="space-y-3">
            <View className="aspect-square bg-white w-48" />
            <View>
              <Text className="text-xl text-slate-800 font-semibold">
                Drip Coffee
              </Text>
              <Text className="text-slate-700 font-light">Bottomless</Text>
              <Text className="text-lg text-slate-800 font-bold">$5.00</Text>
            </View>
          </View>
          <View className="space-y-3">
            <View className="aspect-square bg-white w-48" />
            <View>
              <Text className="text-xl text-slate-800 font-semibold">
                Drip Coffee
              </Text>
              <Text className="text-slate-700 font-light">Bottomless</Text>
              <Text className="text-lg text-slate-800 font-bold">$5.00</Text>
            </View>
          </View>
          <View className="space-y-3">
            <View className="aspect-square bg-white w-48" />
            <View>
              <Text className="text-xl text-slate-800 font-semibold">
                Drip Coffee
              </Text>
              <Text className="text-slate-700 font-light">Bottomless</Text>
              <Text className="text-lg text-slate-800 font-bold">$5.00</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ParallaxScrollView>
  );
}
