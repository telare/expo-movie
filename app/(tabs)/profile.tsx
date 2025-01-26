import { SafeAreaView } from "react-native-safe-area-context";
import PersonalInfo from "../components/Profile/PersonalInfo";
import Statistic from "../components/Profile/Statistic";

export default function Profile() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
      <PersonalInfo />
      <Statistic />
    </SafeAreaView>
  );
}
