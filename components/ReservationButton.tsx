import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import PrimaryButton from "./PrimaryButton";

export default function ReservationButton() {
  const router = useRouter();

  return (
    <PrimaryButton onPress={() => router.push("/reservation")}>
      <View className="flex-row space-x-2">
        <Text className="uppercase font-bold text-white">
          Make a Reservation
        </Text>
      </View>
    </PrimaryButton>
  );
}
