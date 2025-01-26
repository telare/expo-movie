import { Controller, useFormContext } from "react-hook-form";
import { Text } from "react-native";
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
type FormFiled = {
  placeHolder?: string;
  keyboardType: KeyboardTypeOptions;
  maxLength?: number;
  name: string;
  label: string;
  textContentType?: "nickname" | "username" | "password" | undefined;
};
export default function FormField({
  placeHolder,
  keyboardType,
  maxLength,
  name,
  textContentType,
  label,
}: FormFiled) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <View >
          <Text style={FormFieldStyles.title}>{label}</Text>
          <TextInput
            keyboardType={keyboardType}
            maxLength={maxLength}
            style={FormFieldStyles.field}
            textContentType={textContentType}
            placeholder={placeHolder}
          />
          {errors[name] && (
            <Text style={FormFieldStyles.error}>
              {errors[name]?.message?.toString()}
            </Text>
          )}
        </View>
      )}
    />
  );
}
const FormFieldStyles = StyleSheet.create({
  field: {
    backgroundColor: "#96ACB7",
    color: "black",
    borderRadius: 13,
    width: "100%",
    fontSize: 20,
    height: 57,
    padding: 16,
    fontFamily: "Inter_24pt-Regular.ttf",
    marginBottom: 10,
  },
  title: {
    color: "#96ACB7",
    fontSize: 25,
    fontWeight: "600",
    paddingLeft: 16,
    fontFamily: "Inter_24pt-Regular.ttf",
  },
  error: {
    color: "red",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 16,
    fontFamily: "Inter_24pt-Regular.ttf",
  },
});
