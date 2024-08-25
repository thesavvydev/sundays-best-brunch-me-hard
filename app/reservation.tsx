import PrimaryButton from "@/components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function ReservationModal() {
  const router = useRouter();
  const isPresented = router.canGoBack();
  return (
    <View className="flex-1 bg-zinc-800 p-8 space-y-6">
      {!isPresented && <Link href="../">Dismiss</Link>}
      <Text className="text-4xl text-white uppercase font-bold text-center">
        Reservations
      </Text>
      <View className="space-y-2">
        <Text className="text-white font-bold text-base">
          Location
          <Text className="text-zinc-300 italic"> - Required</Text>
        </Text>

        <View className="bg-zinc-100 border-4 border-zinc-300 p-4">
          <Dropdown
            data={[
              { label: "Sandy", value: "sandy" },
              { label: "St George", value: "stgeorge" },
            ]}
            labelField="label"
            valueField="value"
            placeholder="Select a location"
            onChange={console.log}
          />
        </View>
      </View>
      <View className="space-y-2">
        <Text className="text-white font-bold text-base">
          Number of People
          <Text className="text-zinc-300 italic"> - Optional</Text>
        </Text>

        <View className="bg-zinc-100 border-4 border-zinc-300 p-4">
          {" "}
          <Dropdown
            data={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
              { label: "6", value: "6" },
              { label: "7", value: "7" },
              { label: "8+", value: "8+" },
            ]}
            labelField="label"
            valueField="value"
            placeholder="Select a number of people"
            onChange={console.log}
          />
        </View>
      </View>
      <View className="space-y-2">
        <Text className="text-white font-bold text-base">
          Date
          <Text className="text-zinc-300 italic"> - Required</Text>
        </Text>
        <View className="bg-zinc-100 border-4 border-zinc-300 p-2 flex-row items-center space-x-2">
          <Ionicons name="calendar-outline" size={18} />
          <RNDateTimePicker mode="date" value={new Date()} />
          <View className="grow" />
          <Ionicons name="time-outline" size={18} />
          <RNDateTimePicker
            mode="time"
            value={new Date()}
            minuteInterval={15}
          />
        </View>
      </View>
      <View>
        <PrimaryButton onPress={console.log}>
          <Text className="uppercase font-bold text-white text-center">
            Find a Table
          </Text>
        </PrimaryButton>
      </View>
      <Text className="text-base text-white font-semibold">
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </Text>
    </View>
  );
}
