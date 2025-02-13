"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Combobox } from "./ui/combobox"
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
    selectedVenue: z.string()
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
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            venueName: "",
            selectedVenue: "",
        },
    })
    const { watch } = form;

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    // console.log('venues update venue', venues)

    const values = watch();
    return (
        <div className="flex flex-col flex-1">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mb-5 p-5 border border-gray-400 flex flex-col">
                    <FormField
                        control={form.control}
                        name="selectedVenue"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select venue</FormLabel>
                                <FormControl>
                                    <Combobox
                                        venues={venues}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="venueName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Venue Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
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
        </div>
    )
}

export { AddSpecialsForm };