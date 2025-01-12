import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { withRepeat, withTiming } from "react-native-reanimated";

export default function Loading() {
  const translateX = useSharedValue(0);
  translateX.value = withRepeat(
    withTiming(300, { duration: 1000, easing: Easing.linear }),
    -1,
    true
  );
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  return (
    <View style={loadingStyles.mainCon}>
      <Text style={loadingStyles.text}>Please, wait ...</Text>
      <View style={loadingStyles.animCon}>
        <Animated.View style={[animatedStyles, loadingStyles.animElement]} />
      </View>
    </View>
  );
}
const loadingStyles = StyleSheet.create({
  mainCon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 34,
  },
  animCon: {
    marginTop: 20,
    width: 357,
    height: 50,
    borderRadius: 30,
  },
  animElement: {
    width: 50,
    height: 50,
    backgroundColor: "#6C47DB",
    borderRadius: 10,
  },
});
