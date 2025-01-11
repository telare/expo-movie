import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useFormContext } from "react-hook-form";
import { FormT, FromStyles } from "../Form";
import { btnStyle } from "@/assets/styles/btn";
import { userStore } from "@/store/userStore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter } from "expo-router";

export default function LogIn() {
  const userInfo = userStore();
  const router = useRouter();
  function sumbitData(data: FormT) {
    console.log(data);

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        userInfo.setNickName("user");
        userInfo.setEmail(data.email);
        router.replace("/screens/home");
      })
      .catch((error) => {
        const errorCode: string = error.code;
        const errorMessage: string = error.message;
        console.log(errorCode, errorMessage);
      });
    const local = localStorage.getItem("user-store");
    if (local) {
      console.log(JSON.parse(local).state);
    }
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useFormContext<FormT>();
  return (
    <View>
      <View style={FromStyles.fieldCon}>
        <Text style={FromStyles.inputLabel}>E-mail</Text>
        <TextInput
          placeholder="example@gmail.com"
          style={FromStyles.input}
          {...register("email")}
          onChangeText={(email) => setValue("email", email)}
        />
      </View>
      {errors.email && (
        <Text style={FromStyles.error}>{errors.email.message}</Text>
      )}
      <View style={FromStyles.fieldCon}>
        <Text style={FromStyles.inputLabel}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="securepassword1234"
          textContentType="password"
          style={FromStyles.input}
          {...register("password")}
          onChangeText={(password) => setValue("password", password)}
        />
      </View>
      {errors.password && (
        <Text style={FromStyles.error}>{errors.password.message}</Text>
      )}

      <TouchableOpacity style={btnStyle.btn} onPress={handleSubmit(sumbitData)}>
        <Text style={btnStyle.text}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}
