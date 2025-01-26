import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyleSheet, View } from "react-native";
import SignUp from "./Forms/SignUp";
import LogIn from "./Forms/LogIn";
export const FormSchema = z.object({
  nickName: z
    .string()
    .min(3, { message: "At least 3 characters" })
    .max(10, { message: "Maximum 10 characters" })
    .optional(),
  email: z.string().email(),
  password: z.string().refine((val) => val.length >= 4 && val.length <= 10, {
    message: "At least 4 maximum 10 characters",
  }),
});
export type FormT = z.infer<typeof FormSchema>;
type FormProp = { type: "login" | "signup" };

export default function Form({ type }: FormProp) {
  const methods = useForm<FormT>({
    resolver: zodResolver(FormSchema),
  });
  

  return (
    <View style={FormStyles.formCon}>
      <FormProvider {...methods}>
        {type == "signup" ? <SignUp /> : <LogIn/>}
      </FormProvider>
    </View>
  );
}

export const FormStyles = StyleSheet.create({
  formCon: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  fieldCon: {
    marginBottom: 10,
  },
  inputLabel: {
    color: "#96ACB7",
    fontSize: 25,
    fontWeight: "600",
    paddingLeft: 16,
    fontFamily: "Inter_24pt-Regular.ttf",
  },
  input: {
    backgroundColor: "#96ACB7",
    color: "black",
    borderRadius: 13,
    width: 351,
    fontSize: 20,
    height: 57,
    padding: 16,
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
