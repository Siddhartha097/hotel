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

const EnquireFormSchema = z.object({
  FirstName: z.string().min(5).max(20),
  LastName: z.string().min(5).max(30),
  Address: z.string(),
  PhoneNo: z.number().min(1).max(10),
  Age: z.number().min(18),
  Country: z.string().min(1),
  Text: z.string().min(1),
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
    },
  });

  const onSubmit = () => {
    toast({
      title: "Enquiry Sent Successfully",
    });
  };

  return (
    <main className="bg-[#E8B587A1] p-8 flex flex-col gap-10">
      <h1 className="island text-4xl md:text-7xl text-yellow-700 px-8">
        Enquire Now
      </h1>
      <div className="container w-3/4 py-8 border-white border-2 rounded-lg shadow-md">
        <Form {...form}>
          <form className="w-full space-y-7" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center justify-evenly">
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
