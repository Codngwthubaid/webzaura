"use client";
import React from "react";
import { Building2, Mail, Phone, Instagram, MessageCircleMore } from "lucide-react";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import ContactForm from "./form";


export const ContactSection = () => {
  interface RouteProps {
    title: string;
    icon: React.ReactNode;
    desc: string;
  }

  const contactList: RouteProps[] = [
    { title: "Email", icon: <Mail />, desc: "webzaura@gmail.com" },
    { title: "Instagram", icon: <Instagram />, desc: "WebZaura | WebDev Agency" },
    { title: "Phone", icon: <Phone />, desc: "+91-91490-97947" },
    { title: "WhatsApp", icon: <MessageCircleMore />, desc: "+91-90685-07572" },
    { title: "Location", icon: <Building2 />, desc: "Uttar Pradesh, India" },
  ];

  return (
    <section id="contact" className="container py-24 px-10 sm:py-32 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
{/* 
        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"></CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="abc" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="xyz" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
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
                          {servicePlans.map((service) => (
                            <SelectItem key={service.category} value={service.category}>
                              {service.category}
                            </SelectItem>
                          ))}
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
                          <SelectItem value="Advanced">Advanced</SelectItem>
                          <SelectItem value="Enterprise">Enterprise</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea rows={5} placeholder="Your message..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="couponCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Coupon Code</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={`Enter "${VALID_COUPON_CODE}" for 33% off`}
                          {...field}
                          disabled={couponUses >= MAX_COUPON_USES}
                        />
                      </FormControl>
                      <p className="text-sm text-muted-foreground mt-1">
                        {couponUses < MAX_COUPON_USES
                          ? `${MAX_COUPON_USES - couponUses} uses remaining out of ${MAX_COUPON_USES}`
                          : "Coupon limit reached (100 uses)"}
                      </p>
                      {couponMessage && (
                        <p className="text-sm text-green-600 mt-1">{couponMessage}</p>
                      )}
                    </FormItem>
                  )}
                />

                <Button type="submit" className="mt-4" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card> */}
        <ContactForm />
      </div>
    </section>
  );
};





























