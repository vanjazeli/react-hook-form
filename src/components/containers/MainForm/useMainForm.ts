import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mainFormSchema } from "./mainFormSchema";

export default function useMainForm() {
  return useForm<z.infer<typeof mainFormSchema>>({
    resolver: zodResolver(mainFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: false,
      signToNewsletter: true,
    },
    mode: "onChange",
  });
}
