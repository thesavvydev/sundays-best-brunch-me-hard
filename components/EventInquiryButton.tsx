import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import PrimaryButton from "./PrimaryButton";

export default function EventInquiryButton() {
  const router = useRouter();

  return (
    <PrimaryButton onPress={() => router.push("/(tabs)/events/inquiry-modal")}>
      <View className="flex-row space-x-2">
        <Text className="uppercase font-bold text-white">Inquire Now</Text>
      </View>
    </PrimaryButton>
  );
}
