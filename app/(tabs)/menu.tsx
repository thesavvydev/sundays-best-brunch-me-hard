import ParallaxScrollView from "@/components/ParallaxScrollView";
import PrimaryButton from "@/components/PrimaryButton";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

function CocktailsWinAndBeer() {
  return (
    <View className="flex-1 space-y-8 p-4 my-4">
      <Text className="text-5xl font-bold uppercase tracking-tighter text-slate-600">
        BTG & Cans
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
              Monkey Bread
            </Text>
            <Text className="text-slate-700 font-light">Serves 2 or more</Text>
            <Text className="text-lg text-slate-800 font-bold">$13.00</Text>
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
  );
}

function MainMenu() {
  return (
    <View className="flex-1 space-y-8 p-4 my-4">
      <View className="space-y-2">
        <Text className="text-5xl font-bold uppercase tracking-tighter text-slate-600">
          SHARABLES & SNACKS
        </Text>
        <Text className="text-slate-600 font-bold text-lg">
          Enjoy with a latte or mimosa for maximum brunch vibes!
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
              Monkey Bread
            </Text>
            <Text className="text-slate-700 font-light">Serves 2 or more</Text>
            <Text className="text-lg text-slate-800 font-bold">$13.00</Text>
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
        Breakfast
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
        Meat, Fish & Others
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
        Grain
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
  );
}

function CoffeeAndPastries() {
  return (
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
  );
}

export default function MenuScreen() {
  const [activeTab, setActiveTab] = useState("coffee-and-pastries");

  const tabs: { [k: string]: () => React.JSX.Element } = {
    "coffee-and-pastries": CoffeeAndPastries,
    main: MainMenu,
    "cocktails-wine-beer": CocktailsWinAndBeer,
  };
  const ActiveTab: () => React.JSX.Element =
    tabs[activeTab] ?? tabs["coffee-and-pastries"];

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
          resizeMode="contain"
        />
      </View>
      <ScrollView
        horizontal
        className="p-4 flex-row space-x-4"
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <PrimaryButton onPress={() => setActiveTab("coffee-and-pastries")}>
            <Text className="uppercase font-bold text-white">
              Coffee & Pastries
            </Text>
          </PrimaryButton>
        </View>
        <View>
          <PrimaryButton onPress={() => setActiveTab("main")}>
            <Text className="uppercase font-bold text-white">Main Menu</Text>
          </PrimaryButton>
        </View>
        <View>
          <PrimaryButton onPress={() => setActiveTab("cocktails-wine-beer")}>
            <Text className="uppercase font-bold text-white">
              Cocktails, Wine & Beer
            </Text>
          </PrimaryButton>
        </View>
        <View className="w-4" />
      </ScrollView>
      <ActiveTab />
    </ParallaxScrollView>
  );
}
