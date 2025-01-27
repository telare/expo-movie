import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FormT, FormStyles } from "../Form";
import { useFormContext } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter } from "expo-router";
import Button from "../Button";
import { registerUser } from "@/supabaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUp() {
  const router = useRouter();

  function sumbitData(data: FormT) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        AsyncStorage.setItem(
          "user",
          JSON.stringify({
            nickname: data.nickName ? data.nickName : "user",
            email: data.email,
          })
        );
        registerUser({
          nickname: data.nickName ? data.nickName : "user",
          email: data.email,
        });
      })
      .then(() =>
        AsyncStorage.setItem(
          "userNickName",
          data.nickName ? data.nickName : "user"
        )
      )
      .then(() => router.replace("/(tabs)/home"))
      .catch((error) => {
        const errorCode: string = error.code;
        const errorMessage: string = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useFormContext<FormT>();
  return (
    <View>
      <View style={FormStyles.fieldCon}>
        <Text style={FormStyles.inputLabel}>NickName</Text>
        <TextInput
          placeholder="simon12"
          style={FormStyles.input}
          {...register("nickName")}
          onChangeText={(nickName) => setValue("nickName", nickName)}
        />
      </View>
      {errors.nickName && (
        <Text style={FormStyles.error}>{errors.nickName.message}</Text>
      )}
      <View style={FormStyles.fieldCon}>
        <Text style={FormStyles.inputLabel}>Email</Text>
        <TextInput
          placeholder="example@gmail.com"
          style={FormStyles.input}
          {...register("email")}
          onChangeText={(email) => setValue("email", email)}
        />
      </View>
      {errors.email && (
        <Text style={FormStyles.error}>{errors.email.message}</Text>
      )}
      <View style={FormStyles.fieldCon}>
        <Text style={FormStyles.inputLabel}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="secure_password)1234"
          textContentType="password"
          style={FormStyles.input}
          {...register("password")}
          onChangeText={(password) => setValue("password", password)}
        />
      </View>
      {errors.password && (
        <Text style={FormStyles.error}>{errors.password.message}</Text>
      )}
      <Button
        title="Sign Up"
        fontSize={25}
        height={50}
        backgroundColor="#6C47DB"
        width={350}
        borderRadius={10}
        func={handleSubmit(sumbitData)}
      />
    </View>
  );
}
