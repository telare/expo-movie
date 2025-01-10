import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { btnStyle } from "@/assets/styles/btn";
const FormSchema = z.object({
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
type FormT = z.infer<typeof FormSchema>;
type FormProp = { type: "login" | "signup" };
export default function Form({ type }: FormProp) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormT>({
    resolver: zodResolver(FormSchema),
  });
  function sumbitData(data: FormT) {
    console.log(data);
  }

  return (
    <View style={styles.formCon}>
      {type == "signup" ? (
        <View>
          <View style={styles.fieldCon}>
            <Text style={styles.inputLabel}>NickName</Text>
            <TextInput
              defaultValue="simon12"
              style={styles.input}
              {...register("nickName")}
              onChangeText={(nickName) => setValue("nickName", nickName)}
            />
          </View>
          {errors.nickName && (
            <Text style={styles.error}>{errors.nickName.message}</Text>
          )}
          <View style={styles.fieldCon}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              defaultValue="example@gmail.com"
              style={styles.input}
              {...register("email")}
              onChangeText={(email) => setValue("email", email)}
            />
          </View>
          {errors.email && (
            <Text style={styles.error}>{errors.email.message}</Text>
          )}
          <View style={styles.fieldCon}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              defaultValue="secure_password)1234"
              style={styles.input}
              {...register("password")}
              onChangeText={(password) => setValue("password", password)}
            />
          </View>
          {errors.password && (
            <Text style={styles.error}>{errors.password.message}</Text>
          )}
          <TouchableOpacity
            style={btnStyle.btn}
            onPress={handleSubmit(sumbitData)}
          >
            <Text style={btnStyle.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.fieldCon}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              defaultValue="example@gmail.com"
              style={styles.input}
              {...register("email")}
              onChangeText={(email) => setValue("email", email)}
            />
          </View>
          {errors.email && (
            <Text style={styles.error}>{errors.email.message}</Text>
          )}
          <View style={styles.fieldCon}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              defaultValue="securepassword1234"
              style={styles.input}
              {...register("password")}
              onChangeText={(password) => setValue("password", password)}
            />
          </View>
          {errors.password && (
            <Text style={styles.error}>{errors.password.message}</Text>
          )}

          <TouchableOpacity
            style={btnStyle.btn}
            onPress={handleSubmit(sumbitData)}
          >
            <Text style={btnStyle.text}>Log In</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  formCon: {
    backgroundColor: "#36558F",
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
  },
  input: {
    backgroundColor: "#96ACB7",
    color: "black",
    borderRadius: 13,
    width: 351,
    fontSize: 20,
    height: 57,
    padding: 16,
  },
  error: {
    color: "red",
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 16,
  },
});
