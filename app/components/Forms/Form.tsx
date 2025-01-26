import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { DimensionValue, StyleSheet, View } from "react-native";
import Button from "../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";

type Form = {
  onSubmit: <T extends FieldValues>(data: T) => void;
  children: React.ReactNode[] | React.ReactNode;
  height: DimensionValue;
  flex?: 1 | 0;
  schema: ZodType;
  btn: {
    title: string;
    width: DimensionValue;
    height: DimensionValue;
  };
};
export default function Form({
  children,
  onSubmit,
  btn,
  height,
  flex,
  schema,
}: Form) {
  

  type Schema = z.infer<typeof schema>;

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <View style={[FormStyles.formCon, { height: height, flex: flex }]}>
        {children}
        <Button
          func={handleSubmit((data: Schema) => {
            console.log(data);
          })}
          title={btn.title}
          height={btn.height}
          width={btn.width}
          borderRadius={10}
          backgroundColor="#6C47DB"
          fontSize={25}
        />
      </View>
    </FormProvider>
  );
}
const FormStyles = StyleSheet.create({
  formCon: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
  },
});
