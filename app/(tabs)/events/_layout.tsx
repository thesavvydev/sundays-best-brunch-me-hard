import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout() {
  const { top } = useSafeAreaInsets();
  return (
    <Stack
      screenOptions={{
        header(props) {
          return (
            <TouchableOpacity
              className="px-4 flex-row items-center space-x-2"
              style={{ paddingTop: top + 10 }}
              onPress={props.navigation.goBack}
            >
              <Ionicons name="chevron-back" size={24} />
              <Text className="text-4xl text-slate-800 uppercase font-extrabold text-center">
                {props.options.title}
              </Text>
            </TouchableOpacity>
          );
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="birthday-party"
        options={{ title: "Birthday Party", animation: "none" }}
      />
      <Stack.Screen
        name="vip-events"
        options={{ title: "VIP Events", animation: "none" }}
      />
      <Stack.Screen
        name="corporate-events"
        options={{ title: "Corporate Events", animation: "none" }}
      />
      <Stack.Screen
        name="weddings"
        options={{ title: "Weddings", animation: "none" }}
      />
      <Stack.Screen
        name="inquiry-modal"
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
