import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FormT, FormStyles } from "../Form";
import { btnStyle } from "@/assets/styles/btn";
import { useFormContext } from "react-hook-form";
import { userStore } from "@/store/userStore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();
  const userInfo = userStore((state) => state);
  function sumbitData(data: FormT) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (data.nickName) {
          userInfo.setNickName(data.nickName);
          userInfo.setEmail(data.email);
        } else {
          userInfo.setEmail(data.email);
        }
        router.replace("/screens/home");
      })
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
      <TouchableOpacity style={btnStyle.btn} onPress={handleSubmit(sumbitData)}>
        <Text style={btnStyle.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
