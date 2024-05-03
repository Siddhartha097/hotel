import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";

const formSchema = z.object({
  FirstName: z.string().min(5).max(20),
  LastName: z.string().min(5).max(30),
  Address: z.string(),
  PhoneNo: z.number().min(10).max(12),
  Text: z.string().min(1),
});

const Enquiry = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FirstName: "",
      LastName: "",
      Address: "",
      Text: "",
    },
  });

  const onSubmit = () => {
    toast({
      title: "Enquiry Sent Successfully",
    });
  };

  return (
    <main className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="FirstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">First Name</FormLabel>
                <FormControl>
                  <Input
                    className="border border-neutral-500"
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
                    className="border border-neutral-500"
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
            name="Address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Address</FormLabel>
                <FormControl>
                  <Input
                    className="border border-neutral-500"
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
              <FormItem>
                <FormLabel className="font-semibold">Phone No.</FormLabel>
                <FormControl>
                  <Input
                    className="border border-neutral-500"
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
            name="Text"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="font-semibold">Your Enquiry</FormLabel>
                <FormControl>
                  <textarea
                    className="border border-neutral-500 rounded-md"
                    placeholder=""
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-[#B26C02] font-semibold text-black transition-all hover:bg-[#B26C02]/70 w-full text-lg"
            type="submit"
          >
            Send
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default Enquiry;
