import { useAddRatingMutation } from "@/dataFetching.ts/APISlice";
import { StyleSheet, Text, View } from "react-native";
import Button from "../Button";
import { useContext, useState } from "react";
import { paramsContext } from "@/app/(tabs)/details";
import { showToast } from "@/notifConfig";

export default function Rating() {
  const params = useContext(paramsContext);
  const [rating, setRating] = useState<number>(5.0);
  const [addRating] = useAddRatingMutation();

  function IncreaseRating() {
    if (rating !== 10.0) {
      setRating((prev) => parseFloat((prev + 0.5).toFixed(1)));
    }
  }
  function DecreaseRating() {
    if (rating !== 0) {
      setRating((prev) => parseFloat((prev - 0.5).toFixed(1)));
    }
  }
  function submitRating() {
    const id: number = params.id;
    const type = params.type;

    addRating({ id: id, to: type, body: { value: rating } })
      .unwrap()
      .then(() => {
        showToast({
          message: "Rating added succesfully!",
          position: "top",
          type: "success",
        });
      })
      .catch(() => {
        showToast({
          message: "Error in adding a rating operation",
          position: "top",
          type: "error",
        });
      });
  }

  return (
    <View style={addRatingStyles.mainCon}>
      <View style={addRatingStyles.form}>
        <Text
          style={
            rating < 8.0
              ? [{ color: "orange" }, addRatingStyles.rating]
              : [{ color: "green" }, addRatingStyles.rating]
          }
        >
          {rating}
        </Text>

        <View style={addRatingStyles.formBtnsCon}>
          <View style={{ gap: 5 }}>
            <Button
              func={IncreaseRating}
              height={25}
              width={50}
              backgroundColor="#6C47DB"
              title="&#8593;"
              borderRadius={13}
              fontSize={25}
            />
            <Button
              func={DecreaseRating}
              height={25}
              width={50}
              backgroundColor="#6C47DB"
              title="&#8595;"
              borderRadius={13}
              fontSize={25}
            />
          </View>
          <Button
            func={submitRating}
            height={50}
            width={100}
            backgroundColor="#6C47DB"
            title="Rate"
            borderRadius={13}
            fontSize={25}
          />
        </View>
      </View>
    </View>
  );
}
const addRatingStyles = StyleSheet.create({
  mainCon: {
    height: "10%",
    marginTop: "5%",
  },
  rating: {
    fontWeight: "700",
    fontSize: 40,
  },
  form: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: "10%",
  },
  formBtnsCon: {
    flexDirection: "row",
    alignItems: "center",
    gap: "5%",
  },
});
