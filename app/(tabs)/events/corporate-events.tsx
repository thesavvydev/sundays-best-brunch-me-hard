import EventInquiryButton from "@/components/EventInquiryButton";
import { Text, View } from "react-native";

export default function CorporteEvents() {
  return (
    <View className="flex-1 p-8 space-y-6">
      <Text className="text-base font-semibold text-slate-600 text-center">
        Are you ready to throw the wildest birthday party around? Forget about
        heading out to a crowded bar or restaurant - this year, why not host
        your own epic birthday bash at Sunday's Best? With their exceptional
        space and incredible atmosphere, coupled with amazing music and
        delicious drinks, it'll be an unforgettable event that all of your
        friends will remember for years to come!
      </Text>
      <Text className="text-base font-semibold text-slate-600 text-center">
        Whether it's a sophisticated soirée or a raucous night of dancing,
        Sunday's Best is the perfect place to celebrate your special day. Let's
        get this party started - let's go wild at Sunday's Best for your
        upcoming birthday celebration!
      </Text>
      <View>
        <EventInquiryButton />
      </View>
    </View>
  );
}
