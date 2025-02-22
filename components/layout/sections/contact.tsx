// "use client";
// import React, { useEffect } from "react";
// import axios from "axios";
// import { Building2, Mail, Phone, Instagram, MessageCircleMore } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { z } from "zod";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { SparklesText } from "@/components/magicui/sparkles-text";
// import { TypingAnimation } from "@/components/magicui/typing-animation";

// // Updated schema with couponCode
// const formSchema = z.object({
//   firstName: z.string().min(2, "First name must be at least 2 characters").max(255),
//   lastName: z.string().min(2, "Last name must be at least 2 characters").max(255),
//   email: z.string().email("Invalid email address"),
//   services: z.string().min(2, "Please select a service"),
//   type: z.enum(["Basic", "Advanced", "Enterprise"], { // Updated to only Basic, Advanced, Enterprise
//     required_error: "Please select a plan type",
//   }),
//   message: z.string().min(5, "Message must be at least 5 characters"),
//   couponCode: z.string().optional(),
// });

// export const ContactSection = () => {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       services: "",
//       type: undefined,
//       message: "",
//       couponCode: "",
//     },
//   });

//   // Coupon usage state (stored in localStorage)
//   const [couponUses, setCouponUses] = React.useState<number>(() => {
//     const saved = localStorage.getItem("couponUses");
//     return saved ? parseInt(saved, 10) : 0;
//   });
//   const [couponMessage, setCouponMessage] = React.useState<string>("");

//   // Update localStorage when couponUses changes
//   useEffect(() => {
//     localStorage.setItem("couponUses", couponUses.toString());
//   }, [couponUses]);

//   const MAX_COUPON_USES = 100;
//   const VALID_COUPON_CODE = "SAVE33"; // Example coupon code
//   const DISCOUNT_PERCENTAGE = 33;

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     try {
//       let discountApplied = false;
//       let finalPrice = 0;

//       // Find selected plan price
//       const selectedService = servicePlans.find(s => s.category === values.services);
//       const selectedPlan = selectedService?.plans.find(p => p.title === values.type);
//       const originalPrice = selectedPlan?.price || 0;

//       // Check coupon code
//       if (values.couponCode) {
//         if (couponUses >= MAX_COUPON_USES) {
//           toast.error("Coupon code limit reached (100 uses).");
//         } else if (values.couponCode.toUpperCase() === VALID_COUPON_CODE) {
//           setCouponUses(prev => prev + 1);
//           discountApplied = true;
//           finalPrice = originalPrice * (1 - DISCOUNT_PERCENTAGE / 100);
//           setCouponMessage(`Coupon applied! 33% off - Final price: ₹${finalPrice.toLocaleString()}`);
//         } else {
//           toast.error("Invalid coupon code.");
//         }
//       }

//       const submissionData = {
//         ...values,
//         originalPrice: originalPrice || undefined,
//         finalPrice: discountApplied ? finalPrice : undefined,
//         discountApplied,
//       };

//       await axios.post("/api/FormDB", submissionData, {
//         headers: {
//           "Accept": "application/json",
//           "Content-Type": "application/json",
//         },
//       });

//       toast(`Thanks ${values.firstName} for contacting us, our team will contact you soon! ❤️${discountApplied ? " Coupon applied successfully!" : ""}`);
//       form.reset();
//       if (!discountApplied) setCouponMessage("");
//     } catch (error) {
//       const errorMessage = axios.isAxiosError(error)
//         ? error.response?.data?.message || error.message
//         : String(error);
//       toast.error(`Request failed: ${errorMessage}`);
//     }
//   }

//   interface RouteProps {
//     title: string;
//     icon: React.ReactNode;
//     desc: string;
//   }

//   const contactList: RouteProps[] = [
//     { title: "Email", icon: <Mail />, desc: "webzaura@gmail.com" },
//     { title: "Instagram", icon: <Instagram />, desc: "WebZaura | WebDev Agency" },
//     { title: "Phone", icon: <Phone />, desc: "+91-91490-97947" },
//     { title: "WhatsApp", icon: <MessageCircleMore />, desc: "+91-90685-07572" },
//     { title: "Location", icon: <Building2 />, desc: "Uttar Pradesh, India" },
//   ];

//   const servicePlans = [
//     {
//       category: "Web Development",
//       plans: [
//         { title: "Basic", price: 19999 },
//         { title: "Enterprise", price: 99999 },
//         { title: "Advanced", price: 54999 },
//       ],
//     },
//     {
//       category: "Digital Marketing",
//       plans: [
//         { title: "Basic", price: 17999 },
//         { title: "Enterprise", price: 39999 },
//         { title: "Advanced", price: 29999 },
//       ],
//     },
//     {
//       category: "Social Media Management",
//       plans: [
//         { title: "Basic", price: 17999 },
//         { title: "Enterprise", price: 39999 },
//         { title: "Advanced", price: 34999 },
//       ],
//     },
//     {
//       category: "UI/UX & Graphic Design",
//       plans: [
//         { title: "Basic", price: 34999 },
//         { title: "Enterprise", price: 149999 },
//         { title: "Advanced", price: 74999 },
//       ],
//     },
//     {
//       category: "AI Chatbot Integration",
//       plans: [
//         { title: "Basic", price: 17999 },
//         { title: "Enterprise", price: 99999 },
//         { title: "Advanced", price: 34999 },
//       ],
//     },
//     {
//       category: "App Development",
//       plans: [
//         { title: "Basic", price: 49999 },
//         { title: "Enterprise", price: 99999 },
//         { title: "Advanced", price: 149999 },
//       ],
//     },
//   ];

//   return (
//     <section id="contact" className="container py-24 px-10 sm:py-32 mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <SparklesText text="Contact" className="mb-4 text-start text-primary text-4xl sm:text-5xl" />
//           <TypingAnimation className="text-2xl sm:text-3xl">Connect With Us</TypingAnimation>
//           <p className="my-8 text-muted-foreground lg:w-5/6">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </p>
//           <div>
//             {contactList.map(({ title, icon, desc }) => (
//               <div key={title} className="mb-5">
//                 <div className="font-bold text-base flex gap-2">
//                   <span>{icon}</span>
//                   <span>{title}</span>
//                 </div>
//                 <div className="hover:text-primary">{desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <Card className="bg-muted/60 dark:bg-card">
//           <CardHeader className="text-primary text-2xl"></CardHeader>
//           <CardContent>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-4">
//                 <FormField
//                   control={form.control}
//                   name="firstName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>First Name</FormLabel>
//                       <FormControl>
//                         <Input placeholder="abc" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="lastName"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Last Name</FormLabel>
//                       <FormControl>
//                         <Input placeholder="xyz" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Email</FormLabel>
//                       <FormControl>
//                         <Input type="email" placeholder="example@gmail.com" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="services"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Services</FormLabel>
//                       <Select onValueChange={field.onChange} value={field.value}>
//                         <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select your services" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           {servicePlans.map((service) => (
//                             <SelectItem key={service.category} value={service.category}>
//                               {service.category}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="type"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Type</FormLabel>
//                       <Select onValueChange={field.onChange} value={field.value}>
//                         <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select your type" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectItem value="Basic">Basic</SelectItem>
//                           <SelectItem value="Advanced">Advanced</SelectItem>
//                           <SelectItem value="Enterprise">Enterprise</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="message"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Message</FormLabel>
//                       <FormControl>
//                         <Textarea rows={5} placeholder="Your message..." {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="couponCode"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Coupon Code</FormLabel>
//                       <FormControl>
//                         <Input
//                           placeholder={`Enter "${VALID_COUPON_CODE}" for 33% off`}
//                           {...field}
//                           disabled={couponUses >= MAX_COUPON_USES}
//                         />
//                       </FormControl>
//                       <p className="text-sm text-muted-foreground mt-1">
//                         {couponUses < MAX_COUPON_USES
//                           ? `${MAX_COUPON_USES - couponUses} uses remaining out of ${MAX_COUPON_USES}`
//                           : "Coupon limit reached (100 uses)"}
//                       </p>
//                       {couponMessage && (
//                         <p className="text-sm text-green-600 mt-1">{couponMessage}</p>
//                       )}
//                     </FormItem>
//                   )}
//                 />

//                 <Button type="submit" className="mt-4" disabled={form.formState.isSubmitting}>
//                   {form.formState.isSubmitting ? "Sending..." : "Send message"}
//                 </Button>
//               </form>
//             </Form>
//           </CardContent>
//           <CardFooter></CardFooter>
//         </Card>
//       </div>
//     </section>
//   );
// };



"use client";
import React from "react";
import axios from "axios";
import { Building2, Mail, Phone, Instagram, MessageCircleMore } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardFooter,
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
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";

// Updated schema with couponCode
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(255),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(255),
  email: z.string().email("Invalid email address"),
  services: z.string().min(2, "Please select a service"),
  type: z.enum(["Basic", "Advanced", "Enterprise"], { // Updated to only Basic, Advanced, Enterprise
    required_error: "Please select a plan type",
  }),
  message: z.string().min(5, "Message must be at least 5 characters"),
  couponCode: z.string().optional(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      services: "",
      type: undefined,
      message: "",
      couponCode: "",
    },
  });

  // Coupon usage state (no longer using localStorage)
  const [couponUses, setCouponUses] = React.useState<number>(0);
  const [couponMessage, setCouponMessage] = React.useState<string>("");

  const MAX_COUPON_USES = 100;
  const VALID_COUPON_CODE = "SAVE33"; // Example coupon code
  const DISCOUNT_PERCENTAGE = 33;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      let discountApplied = false;
      let finalPrice = 0;

      // Find selected plan price
      const selectedService = servicePlans.find(s => s.category === values.services);
      const selectedPlan = selectedService?.plans.find(p => p.title === values.type);
      const originalPrice = selectedPlan?.price || 0;

      // Check coupon code
      if (values.couponCode) {
        if (couponUses >= MAX_COUPON_USES) {
          toast.error("Coupon code limit reached (100 uses).");
        } else if (values.couponCode.toUpperCase() === VALID_COUPON_CODE) {
          setCouponUses(prev => prev + 1);
          discountApplied = true;
          finalPrice = originalPrice * (1 - DISCOUNT_PERCENTAGE / 100);
          setCouponMessage(`Coupon applied! 33% off - Final price: ₹${finalPrice.toLocaleString()}`);
        } else {
          toast.error("Invalid coupon code.");
        }
      }

      const submissionData = {
        ...values,
        originalPrice: originalPrice || undefined,
        finalPrice: discountApplied ? finalPrice : undefined,
        discountApplied,
      };

      await axios.post("/api/FormDB", submissionData, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      });

      toast(`Thanks ${values.firstName} for contacting us, our team will contact you soon! ❤️${discountApplied ? " Coupon applied successfully!" : ""}`);
      form.reset();
      if (!discountApplied) setCouponMessage("");
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : String(error);
      toast.error(`Request failed: ${errorMessage}`);
    }
  }

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

  const servicePlans = [
    {
      category: "Web Development",
      plans: [
        { title: "Basic", price: 19999 },
        { title: "Enterprise", price: 99999 },
        { title: "Advanced", price: 54999 },
      ],
    },
    {
      category: "Digital Marketing",
      plans: [
        { title: "Basic", price: 17999 },
        { title: "Enterprise", price: 39999 },
        { title: "Advanced", price: 29999 },
      ],
    },
    {
      category: "Social Media Management",
      plans: [
        { title: "Basic", price: 17999 },
        { title: "Enterprise", price: 39999 },
        { title: "Advanced", price: 34999 },
      ],
    },
    {
      category: "UI/UX & Graphic Design",
      plans: [
        { title: "Basic", price: 34999 },
        { title: "Enterprise", price: 149999 },
        { title: "Advanced", price: 74999 },
      ],
    },
    {
      category: "AI Chatbot Integration",
      plans: [
        { title: "Basic", price: 17999 },
        { title: "Enterprise", price: 99999 },
        { title: "Advanced", price: 34999 },
      ],
    },
    {
      category: "App Development",
      plans: [
        { title: "Basic", price: 49999 },
        { title: "Enterprise", price: 99999 },
        { title: "Advanced", price: 149999 },
      ],
    },
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
        </Card>
      </div>
    </section>
  );
};