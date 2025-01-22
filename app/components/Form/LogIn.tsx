import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useFormContext } from "react-hook-form";
import { FormT, FormStyles } from "../Form";
import { userStore } from "@/store/userStore";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, twitterProvider } from "@/firebaseConfig";
import { useRouter } from "expo-router";
import Or from "../Or";
import Loading from "../Loading";
import { useState } from "react";
import Button from "../Button";

export default function LogIn() {
  const userInfo = userStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  function socialAuth(provider: "google" | "x") {
    setIsLoading(true);
    signInWithPopup(
      auth,
      provider == "google" ? googleProvider : twitterProvider
    )
      .then((result) => {
        const user = result.user;
        console.log(user);
        userInfo.setProfileURL(user.photoURL);
        userInfo.setNickName(user.displayName ? user.displayName : "user");
        userInfo.setEmail(
          user.email ? user.email : "email-non-found@gmail.com"
        );
        userInfo.setAuth(true);
        router.replace("/(tabs)/home");
      })
      .catch((error) => {
        router.push({
          pathname: "/(tabs)/error",
          params: { code: error.code, message: error.message },
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function sumbitData(data: FormT) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        userInfo.setNickName("user");
        userInfo.setEmail(data.email);
        router.replace("/(tabs)/home");
      })
      .catch((error) => {
        router.push({
          pathname: "/(tabs)/error",
          params: { code: error.code, message: error.message },
        });
      });
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useFormContext<FormT>();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <View>
      <View style={FormStyles.fieldCon}>
        <Text style={FormStyles.inputLabel}>E-mail</Text>
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
          placeholder="securepassword1234"
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
        title="Log In"
        fontSize={25}
        backgroundColor="#6C47DB"
        height={50}
        width={350}
        borderRadius={10}
        func={handleSubmit(sumbitData)}
      />
      <Or />
      <View style={loginStyles.btnsCon}>
        <Text>Login with</Text>
        <Button
          title="Google"
          fontSize={25}
          height={50}
          width={350}
          backgroundColor="#6C47DB"
          borderRadius={10}
          func={() => socialAuth("google")}
          image={require("../../../assets/images/google.png")}
        />
        <Button
          title="X"
          fontSize={25}
          height={50}
          width={350}
          backgroundColor="#6C47DB"
          borderRadius={10}
          func={() => socialAuth("x")}
          image={require("../../../assets/images/twitter.png")}
        />
      </View>
    </View>
  );
}
const loginStyles = StyleSheet.create({
  socialImg: {
    width: 20,
    height: 20,
  },
  btnsCon: {
    marginTop: 10,
    justifyContent: "space-around",
    gap: 10,
  },
});
