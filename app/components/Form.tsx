import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {  View } from "react-native";
import SignUp from "./Forms/SignUp";
import LogIn from "./Forms/LogIn";
import {formStyles} from "../../assets/styles/shared/form"
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
    <View style={formStyles.formCon}>
      <FormProvider {...methods}>
        {type == "signup" ? <SignUp /> : <LogIn/>}
      </FormProvider>
    </View>
  );
}


