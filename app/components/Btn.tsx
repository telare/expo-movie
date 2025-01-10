import { Text, TouchableOpacity } from "react-native";
import { btnStyle } from "../../assets/styles/btn";
type BtnProps = {
  message: string;
};
export default function Btn({ message }: BtnProps) {
  return (
    <TouchableOpacity style={btnStyle.btn}>
      <Text style={btnStyle.text}>{message}</Text>
    </TouchableOpacity>
  );
}
