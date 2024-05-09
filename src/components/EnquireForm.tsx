import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { toast } from "./ui/use-toast";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import PhoneInput from "react-phone-input-2";
import { Textarea } from "./ui/textarea";
import ReactFlagsSelect from "react-flags-select";
import { cn } from "@/lib/utils";

const EnquireFormSchema = z.object({
  FirstName: z.string().min(5, "First name should be at least 5 words longer"),
  LastName: z.string().min(5, "Last name should be at least 5 words longer"),
  Address: z.string().min(1, "Address cannot be empty"),
  PhoneNo: z.string().min(1).max(13),
  Age: z.string().optional(),
  Country: z.string().optional(),
  Text: z.string().optional(),
  Email: z.string(),
});

interface EnquireFormProps {
    className?: string;
}

const EnquireForm: React.FC<EnquireFormProps> = ({ className }) => {
  const form = useForm<z.infer<typeof EnquireFormSchema>>({
    resolver: zodResolver(EnquireFormSchema),
    defaultValues: {
      FirstName: "",
      LastName: "",
      Address: "",
      Text: "",
      Age: "",
      Country: "",
      Email: "@gmail.com",
    },
  });

  const onSubmit = (data: z.infer<typeof EnquireFormSchema>) => {
    // toast({
    //   title: "Enquiry Sent Successfully",
    // });
    console.log(JSON.stringify(data));
    
  };

  const [selected, setSelected] = useState("");

  return (
    <div className={cn("container w-1/2 py-8 border-white border-2 rounded-lg shadow-md", className)}>
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
          <div className="grid grid-cols-2 gap-8">
            <div className="grid gap-5">
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-neutral-500 w-full shadow-inner shadow-black row-span-1"
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
                render={({ field }) => (
                  <FormItem className="w-full rounded-md">
                    <FormLabel className="font-semibold">Phone No.</FormLabel>
                    <FormControl>
                      <PhoneInput
                        country="in"
                        placeholder="Enter your phone number"
                        countryCodeEditable={false}
                        inputClass=""
                        buttonClass="border border-neutral-500"
                        {...field}
                        enableSearch
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="Address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Address</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border border-neutral-500 h-full p-3 shadow-inner shadow-black resize-none"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* age and country */}
          <div className="grid grid-cols-2 gap-8 pt-5">
            <FormField
              control={form.control}
              name="Age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Age</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-neutral-500 w-full shadow-inner shadow-black"
                      placeholder=""
                      {...field}
                      type="number"
                      max={100}
                      min={1}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Country</FormLabel>
                  <FormControl>
                    {/* <Input
                      className="border border-neutral-500 shadow-inner shadow-black"
                      placeholder=""
                      {...field}
                    /> */}
                    <ReactFlagsSelect
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                      {...field}
                      className="border border-neutral-500 shadow-inner shadow-black bg-white rounded-lg menu-flags"
                      searchable
                      searchPlaceholder="search countries"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* text */}
          <FormField
            control={form.control}
            name="Text"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Text</FormLabel>
                <FormControl>
                  <Textarea
                    className="border row-span-2 border-neutral-500 w-full shadow-inner shadow-black resize-none"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-[#B26C02] font-semibold shadow-md transition-all hover:bg-[#B26C02]/70 w- p-8 text-lg tracking-wid uppercase"
            type="submit"
          >
            Enquire Now
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default EnquireForm;
