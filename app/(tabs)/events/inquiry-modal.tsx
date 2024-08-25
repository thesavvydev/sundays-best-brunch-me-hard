import { Text, View } from "react-native";

export default function EventInquiryModal() {
  return (
    <View className="flex-1 bg-zinc-800 p-8 space-y-6">
      <Text className="text-4xl text-white uppercase font-bold text-center">
        Contact Us About Your Private Event
      </Text>
      <View className="space-y-2">
        <Text className="text-white font-bold text-base">
          Email
          <Text className="text-zinc-300 italic"> - Required</Text>
        </Text>
      </View>
    </View>
  );
}
