// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { toast } from "@/components/ui/use-toast";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { useState } from "react";
// import { Textarea } from "@/components/ui/textarea";
import 'react-phone-input-2/lib/style.css'
import EnquireForm from "@/components/EnquireForm";

// const EnquireFormSchema = z.object({
//   FirstName: z.string().min(5, "First name should be at least 5 words longer"),
//   LastName: z.string().min(5, "Last name should be at least 5 words longer"),
//   Address: z.string().min(1, "Address cannot be empty"),
//   PhoneNo: z.string().min(1).max(10),
//   Age: z.number().min(18, "should be higher than 18"),
//   Country: z.string().optional(),
//   Text: z.string().optional(),
//   Email: z.string(),
// });

const Contact = () => {
  // const form = useForm<z.infer<typeof EnquireFormSchema>>({
  //   resolver: zodResolver(EnquireFormSchema),
  //   defaultValues: {
  //     FirstName: "",
  //     LastName: "",
  //     Address: "",
  //     Text: "",
  //     Age: 0,
  //     Country: "",
  //     Email: "@gmail.com",
  //   },
  // });

  // const onSubmit = () => {
  //   toast({
  //     title: "Enquiry Sent Successfully",
  //   });
  // };

  // const [value, setValue] = useState("in");

  return (
    <main className="bg-[#E8B587A1] p-8 flex flex-col gap-10">
      <h1 className="island text-4xl md:text-7xl text-yellow-700 px-8">
        Enquire Now
      </h1>
      <EnquireForm />
    </main>
  );
};

export default Contact;
