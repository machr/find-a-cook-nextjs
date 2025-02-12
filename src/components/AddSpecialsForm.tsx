"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', ' Friday', 'Saturday', 'Sunday'] as const;
const PRICE_RANGE = ['cheap', 'average', 'exxy'] as const;
const formSchema = z.object({
    venueName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    specialsDay: z.enum(DAYS),
    priceRange: z.enum(PRICE_RANGE)
})

interface Venue {
    description: string
    id: number
    location?: string
    logo_url?: string
    name: string
    slug: string
}

function AddSpecialsForm({ venues }: { venues: Venue[] }) {
    console.log('from special', venues[0])
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            venueName: "",
            specialsDay: "Monday",
            priceRange: "average"
        },
    })
    const { watch } = form;

    function onSubmit(values: z.infer<typeof formSchema>) {
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    // Watch all fields
    const values = watch();
    return (
        <>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mb-5 bg-gray-200 border border-gray-400">
                    <FormField
                        control={form.control}
                        name="venueName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Venue Name</FormLabel>
                                <FormControl>
                                    <Select>

                                    </Select>
                                </FormControl>
                                <FormDescription>
                                    This is the public venue name
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="mb-5" type="submit">Submit</Button>
                </form>
            </Form>

            <pre>{JSON.stringify(values, null, 2)}</pre>
        </>
    )
}

export { AddSpecialsForm };