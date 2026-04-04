import { z } from "zod";

export const contactFormSchema = z.object({
  user_name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  user_email: z
    .string()
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const donationFormSchema = z.object({
  amount: z
    .number()
    .positive("Amount must be greater than 0")
    .min(100, "Minimum donation is ₹100"),
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
});

export type DonationFormData = z.infer<typeof donationFormSchema>;
