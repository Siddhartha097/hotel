import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

const EnquireFormSchema = z.object({
  FirstName: z.string().min(5, "First name should be at least 5 words longer"),
  LastName: z.string().min(5, "Last name should be at least 5 words longer"),
  Address: z.string().min(1, "Address cannot be empty"),
  PhoneNo: z.string().min(1).max(10),
  Age: z.number().min(18, "should be higher than 18"),
  Country: z.string().optional(),
  Text: z.string().optional(),
  Email: z.string(),
});

const Contact = () => {
  const form = useForm<z.infer<typeof EnquireFormSchema>>({
    resolver: zodResolver(EnquireFormSchema),
    defaultValues: {
      FirstName: "",
      LastName: "",
      Address: "",
      Text: "",
      Age: 0,
      Country: "",
      Email: "@gmail.com",
    },
  });

  const onSubmit = () => {
    toast({
      title: "Enquiry Sent Successfully",
    });
  };

  const [value, setValue] = useState("in");

  return (
    <main className="bg-[#E8B587A1] p-8 flex flex-col gap-10">
      <h1 className="island text-4xl md:text-7xl text-yellow-700 px-8">
        Enquire Now
      </h1>
      <div className="container w-1/2 py-8 border-white border-2 rounded-lg shadow-md">
        <Form {...form}>
          <form
            className="w-full space-y-7 grid"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* first and last name */}
            <div className="grid grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="FirstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">First Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-neutral-500 w-full shadow-inner shadow-black"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="LastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-neutral-500 shadow-inner shadow-black"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* phone number, email and address     */}
            <div className="grid grid-cols-2 grid-rows-2 gap-8">
              <div className="grid gap-5">
                <FormField
                  control={form.control}
                  name="Email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="border border-neutral-500 w-full shadow-inner shadow-black"
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="PhoneNo"
                  render={() => (
                    <FormItem className="w-full rounded-md">
                      <FormLabel className="font-semibold">Phone No.</FormLabel>
                      <FormControl>
                        {/* <Input
                          className="border border-neutral-500 w-full shadow-inner shadow-black"
                          placeholder=""
                          {...field}
                        /> */}
                        <PhoneInput
                          country={value}
                          placeholder="Enter your phone number"
                          onChange={(country) => {
                            setValue(country);
                          }}
                          countryCodeEditable={false}
                          inputClass="border border-neutral-500 w-full shadow-inner shadow-black w-max"
                          containerClass="w-full"
                          buttonClass="border border-neutral-500"
                          
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              className="bg-[#B26C02] font-semibold shadow-md transition-all hover:bg-[#B26C02]/70 w- p-8 text-lg tracking-wid uppercase"
              type="submit"
            >
              Enquire Now
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default Contact;
