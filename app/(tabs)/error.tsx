import { useSearchParams } from "expo-router/build/hooks";
import ErrorComponent from "../components/Error";

export default function Error() {
  const code = useSearchParams().get("code");
  const message = useSearchParams().get("message");
  return (
    <ErrorComponent  code={code} message={message}/>
  );
}

