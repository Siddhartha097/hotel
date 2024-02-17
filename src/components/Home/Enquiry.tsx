import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { toast } from '../ui/use-toast';


const formSchema = z.object({
    FirstName: z.string().min(5).max(20),
    LastName: z.string().min(5).max(30),
    Address: z.string(),
    PhoneNo: z.number().min(10).max(12),
    Text: z.string().min(1),
})


const Enquiry = () => {

    const form  = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            FirstName: '',
            LastName: '',
            Address: '',
            Text: '',
        },
    })

    const onSubmit = () => {
        toast({
            title: 'Enquiry Sent Successfully'
        })
    };


    return (
        <main className='bg-[#B22D020A] px-10 py-6 shadow-md rounded-lg'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="FirstName"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className='font-semibold'>First Name</FormLabel>
                            <FormControl>
                                <Input className='border border-neutral-500' placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </main>
    )
}

export default Enquiry