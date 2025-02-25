"use client";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters").max(255),
    email: z.string().email("Invalid email address"),
    services: z.string().min(2, "Please select a service").nonempty("Service is required"),
    type: z.enum(["Basic", "Advanced", "Enterprise"], {
        required_error: "Please select a plan type",
    }),
    message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            services: "",
            type: undefined, // Explicitly type as one of the enum values or undefined
            message: "",
        },
    });

    const { control, handleSubmit, reset, formState: { isSubmitting } } = form;

    const servicePlans = [
        "Web Development",
        "Digital Marketing",
        "Social Media Management",
        "UI/UX & Graphic Design",
        "AI Chatbot Integration",
        "App Development",
    ];

    const onSubmit = async (values: FormValues) => {
        console.log("Submitting values:", values);
        try {
            const response = await axios.post("/api/contact", values, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            });

            toast.success(`Thanks ${values.fullName} for contacting us! We'll get back to you soon!`);
            reset();
        } catch (error) {
            const errorMessage = axios.isAxiosError(error)
                ? error.response?.data?.error || error.response?.data?.message || error.message
                : String(error);
            console.error("Submission error:", errorMessage);
            toast.error(`Failed to submit: ${errorMessage}`);
        }
    };

    return (
        <Card className="bg-muted/60 dark:bg-card">
            <CardHeader className="text-primary text-2xl">Contact Us</CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid w-full gap-y-4">
                        <FormField
                            control={control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="example@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="services"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Services</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your services" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {servicePlans.map((service) => (
                                                <SelectItem key={service} value={service}>
                                                    {service}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Basic">Basic</SelectItem>
                                            <SelectItem value="Advanced">Advanced</SelectItem>
                                            <SelectItem value="Enterprise">Enterprise</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea rows={4} placeholder="Your message..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="mt-4" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send message"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}