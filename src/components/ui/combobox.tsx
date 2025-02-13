"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn, Venue } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


function Combobox({ venues, value, onChange }: { venues: Venue[]; value: string; onChange: (value: string) => void }) {
    const [open, setOpen] = React.useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? venues.find((venue) => venue.name === value)?.slug
                        : "Select Venue..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search venue..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No venue found.</CommandEmpty>
                        <CommandGroup>
                            {venues.map((venue) => (
                                <CommandItem
                                    key={venue.slug}
                                    value={venue.name}
                                    onSelect={(currentValue) => {
                                        onChange(currentValue === value ? "" : currentValue); // Update form value
                                        setOpen(false);
                                    }}
                                >
                                    {venue.name}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === venue.slug ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export { Combobox }