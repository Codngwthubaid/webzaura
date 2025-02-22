"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Mail, Phone,Instagram ,MessageCircleMore} from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner"
import { z } from "zod";
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
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(255),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(255),
  email: z.string().email("Invalid email address"),
  services: z.string().min(2, "Please select a services").max(255),
  type: z.string().min(2, "Please select a services").max(255),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export const ContactSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      services: "Web Development",
      type: "Basic",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { data } = await axios.post("/api/FormDB", values, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      });
      toast(`Thanks ${values.firstName} for contacting us, our team will contact you soon asap !❤️`);
      form.reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = axios.isAxiosError(error) ? error.response?.data || error.message : String(error);
        alert(`Request failed: ${errorMessage}`);
      } else {
        alert(`Request failed: ${error}`);
      }
    }
  }

  if (!mounted) {
    return null;
  }


  interface RouteProps {
    title: string;
    icon: React.ReactNode;
    desc: string;
  }

  const contactList: RouteProps[] = [
    {
      title: "Email",
      icon: <Mail />,
      desc: "webzaura@gmail.com",
    },
    {
      title: "Instagram",
      icon:  <Instagram />,
      desc: "WebZaura | WebDev Agency",
    },
    {
      title: "Phone",
      icon: <Phone />,
      desc: "+91-91490-97947",
    },
    {
      title: "WhatsApp",
      icon:  <MessageCircleMore />,
      desc: "+91-90685-07572",
    },
    {
      title: "Location",
      icon: <Building2 />,
      desc: "Uttar Pradesh, India",
    },
  ]




  return (
    <section id="contact" className="container py-24 px-10 sm:py-32 mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <SparklesText text="Contact" className="mb-4 text-start text-primary text-4xl sm:text-5xl" />
          <TypingAnimation className="text-2xl sm:text-3xl">Connect With Us</TypingAnimation>
          <p className="my-8 text-muted-foreground lg:w-5/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div>
            {contactList.map(({ title, icon, desc }) => (
              <div key={title} className="mb-5">
                <div className="font-bold text-base flex gap-2">
                  <span>{icon}</span>
                  <span>{title}</span>
                </div>
                <div className="hover:text-primary">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"></CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-4">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="xyz" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField
                  control={form.control}
                  name="services"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Services</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your services" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Web Development">Web Development</SelectItem>
                          <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                          <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
                          <SelectItem value="UI/UX & Graphic Designing">UI/UX & Graphic Designing</SelectItem>
                          <SelectItem value="Ai Chatbot Integration">Ai Chatbot Integration</SelectItem>
                          <SelectItem value="App Development">App Development</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Basic">Basic</SelectItem>
                          <SelectItem value="Standard">Standard</SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                          <SelectItem value="Pro">Pro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="Your message..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button type="submit" className="mt-4" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
