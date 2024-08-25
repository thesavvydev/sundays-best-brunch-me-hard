import { PropsWithChildren } from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

export default function PrimaryButton({
  children,
  onPress,
}: PropsWithChildren<{ onPress: (event: GestureResponderEvent) => void }>) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-slate-700 p-4 px-6 z-10 shadow-pink-400"
      style={{
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 10,
        shadowRadius: 0,
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
