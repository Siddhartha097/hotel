import "react-phone-input-2/lib/style.css";
import EnquireForm from "@/components/EnquireForm";

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
  return (
    <main className="bg-[#E8B587A1] p-8 flex flex-col gap-10">
      <h1 className="island text-4xl md:text-7xl text-yellow-700 px-8">
        Enquire Now
      </h1>
      <EnquireForm className="md:w-2/3" />
    </main>
  );
};

export default Contact;
