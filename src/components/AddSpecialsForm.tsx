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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', ' Friday', 'Saturday', 'Sunday'] as const;
const PRICE_RANGE = ['cheap', 'average', 'exxy'] as const;
const formSchema = z.object({
    venueName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    specialsDay: z.enum(DAYS),
    priceRange: z.enum(PRICE_RANGE)
})

function AddSpecialsForm() {
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
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mb-5">
                    <FormField
                        control={form.control}
                        name="venueName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Venue Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Add venue name" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the public venue name
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="specialsDay"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Day of special</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select which day the special is on" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {DAYS.map((day) => (
                                            <SelectItem key={day} value={day.toLowerCase()}>{day}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Which day is the special on?
                                </FormDescription>
                            </FormItem>
                        )}
                    />

                    <FormField control={form.control} name="priceRange" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price Range</FormLabel>
                            <RadioGroup defaultValue={field.value} onChange={field.onChange}>
                                {PRICE_RANGE.map(option => (
                                    <div key={option} className="flex items-center space-x-2">
                                        <RadioGroupItem value={option} id={option} />
                                        <Label className="capitalize" htmlFor={option}>{option}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </FormItem>
                    )} />
                    <Button className="mb-5" type="submit">Submit</Button>
                </form>
            </Form>

            <pre>{JSON.stringify(values, null, 2)}</pre>
        </>
    )
}

export { AddSpecialsForm };