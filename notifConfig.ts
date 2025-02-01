import Toast from "react-native-toast-message";
type Toast = {
  message: string;
  type: "success" | "error";
  position: "top" | "bottom";
};
export const showToast = ({ message, type, position }: Toast) => {
  Toast.show({
    text1: message,
    type: type,
    position: position,
    visibilityTime: 3000,
  });
};
