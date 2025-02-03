import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useFormContext } from "react-hook-form";
import { FormT } from "../Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter } from "expo-router";
import Or from "../Or";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import Button from "../Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GoogleSignin,
  statusCodes,
  isErrorWithCode,
  isSuccessResponse,
} from "@react-native-google-signin/google-signin";
import { showToast } from "@/notifConfig";
import { textStyles } from "@/assets/styles/shared/text";
import { formStyles } from "@/assets/styles/shared/form";
export default function LogIn() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<string>("");
  GoogleSignin.configure({
    webClientId:
      "592671068353-1ccfuic4evqfchuh2623vpqt05via1go.apps.googleusercontent.com",
  });
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        await AsyncStorage.setItem("user", JSON.stringify(response.data));
        showToast({
          message: "Successfully sign in!",
          type: "success",
          position: "top",
        });
      } else {
        showToast({
          message: "Sign in was cancelled by user",
          type: "error",
          position: "top",
        });
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            showToast({
              message: "Play services not available or outdated",
              type: "error",
              position: "top",
            });

            break;
          default:
          // some other error happened
        }
      } else {
        showToast({
          message: "Error that's not related to google sign in occurred",
          type: "error",
          position: "top",
        });
      }
    }
  };
  // async function socialAuth(provider: "google" | "x") {
  //   setIsLoading(true);
  //   if (provider === "google") {
  //     await googlePromptAsync();
  //     if (googleResponse?.type === "success") {
  //       const user = googleResponse.params;
  //       AsyncStorage.setItem("user", JSON.stringify(user));

  //     } else {

  //     }
  //   } else {
  //   }
  //   // signInWithPopup(
  //   //   auth,
  //   //   provider == "google" ? googleProvider : twitterProvider
  //   // )
  //   //   .then((result) => {
  //   //     const user = result.user;
  //   //     AsyncStorage.setItem(
  //   //       "user",
  //   //       JSON.stringify({
  //   //         nickname: user.displayName ? user.displayName : "user",
  //   //         email: user.email,
  //   //         photoUrl: user.photoURL ? user.photoURL : "",
  //   //       })
  //   //     );
  //   //     router.replace("/(tabs)/home");
  //   //   })
  //   //   .catch((error) => {
  //   //     router.push({
  //   //       pathname: "/(tabs)/error",
  //   //       params: { code: error.code, message: error.message },
  //   //     });
  //   //   })
  //   //   .finally(() => {
  //   //     setIsLoading(false);
  //   //   });
  // }
  function sumbitData(data: FormT) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        AsyncStorage.setItem(
          "user",
          JSON.stringify({
            nickname: "user",
            email: data.email,
          })
        );
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
        title="Log In"
        fontSize={25}
        backgroundColor="#6C47DB"
        height={50}
        width={350}
        borderRadius={10}
        func={handleSubmit(sumbitData)}
      />
      <Text style={[textStyles.text, { fontSize: 15 }]}>
        Don't you have account?{" "}
        <Button
          title="Sign Up"
          fontSize={15}
          height={35}
          width={55}
          borderRadius={10}
          color="#6C47DB"
          func={() =>
            router.push({
              pathname: "/screens/signup",
            })
          }
        />{" "}
      </Text>
      <Or />
      <View style={loginStyles.btnsCon}>
        <Button
          fontSize={25}
          height={50}
          width={160}
          backgroundColor="#6C47DB"
          borderRadius={10}
          func={signIn}
          // func={() => socialAuth("google")}
          image={require("../../../assets/images/google.png")}
        />
        <Button
          fontSize={25}
          height={50}
          width={160}
          backgroundColor="#6C47DB"
          borderRadius={10}
          func={signIn}
          // func={() => socialAuth("x")}
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
    flexDirection: "row",
    gap: 10,
  },
});
