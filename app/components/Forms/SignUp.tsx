import { Text, TextInput, View } from "react-native";
import { FormT } from "../Form";
import { useFormContext } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter } from "expo-router";
import Button from "../Button";
import { registerUser } from "@/supabaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToast } from "@/notifConfig";
import { textStyles } from "@/assets/styles/shared/text";
import { formStyles } from "@/assets/styles/shared/form";

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
        AsyncStorage.setItem(
          "userNickName",
          data.nickName ? data.nickName : "user"
        );
        registerUser({
          nickname: data.nickName ? data.nickName : "user",
          email: data.email,
        });
      })
      .then(() =>{
        showToast({
          message: "Successfully signed in!",
          type: "success",
          position: "top",
        })
        setTimeout(() => {
          router.replace("/(tabs)/home")
        }, 4000)}
      )
      .catch((error) => {
        showToast({ message: error.message, type: "error", position: "top" });
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
      <View style={formStyles.fieldCon}>
        <TextInput
          placeholder="Name"
          style={formStyles.input}
          {...register("nickName")}
          onChangeText={(nickName) => setValue("nickName", nickName)}
        />

        {errors.nickName && (
          <Text style={textStyles.fieldError}>{errors.nickName.message}</Text>
        )}
      </View>
      <View style={formStyles.fieldCon}>
        <TextInput
          placeholder="Email"
          style={formStyles.input}
          {...register("email")}
          onChangeText={(email) => setValue("email", email)}
        />

        {errors.email && (
          <Text style={textStyles.fieldError}>{errors.email.message}</Text>
        )}
      </View>
      <View style={formStyles.fieldCon}>
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          textContentType="password"
          style={formStyles.input}
          {...register("password")}
          onChangeText={(password) => setValue("password", password)}
        />

        {errors.password && (
          <Text style={textStyles.fieldError}>{errors.password.message}</Text>
        )}
      </View>
      <Button
        title="Create account"
        fontSize={25}
        height={50}
        backgroundColor="#6C47DB"
        width={350}
        borderRadius={10}
        func={handleSubmit(sumbitData)}
      />
      <Text style={[textStyles.text, { fontSize: 15 }]}>
        Do you have account?{" "}
        <Button
          title="Log In"
          fontSize={15}
          height={35}
          width={55}
          borderRadius={10}
          color="#6C47DB"
          func={() =>
            router.push({
              pathname: "/screens/login",
            })
          }
        />{" "}
      </Text>
    </View>
  );
}
