import { Path, Svg } from "react-native-svg";

export default function OpenTableIcon({ fill = "white" }: { fill?: string }) {
  return (
    <Svg width="64" height="64" style={{ transform: [{ scale: 0.5 }] }}>
      <Path
        fill={fill}
        d="M40.776 8.776C27.95 8.776 17.553 19.173 17.553 32S27.95 55.224 40.776 55.224 64 44.827 64 32 53.603 8.776 40.776 8.776zm0 29.03A5.76 5.76 0 0134.97 32a5.76 5.76 0 015.806-5.806A5.76 5.76 0 0146.582 32c0 3.105-2.7 5.806-5.806 5.806zM0 32a5.76 5.76 0 015.806-5.806A5.76 5.76 0 0111.612 32a5.76 5.76 0 01-5.806 5.806C2.565 37.806 0 35.105 0 32"
      />
    </Svg>
  );
}
