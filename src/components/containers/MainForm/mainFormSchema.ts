import * as z from 'zod';

export const mainFormSchema = z
	.object({
		username: z.string().min(5),
		email: z.string().email(),
		password: z.string().min(8),
		confirmPassword: z.string(),
		termsAndConditions: z.boolean(),
		signToNewsletter: z.boolean(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	})
	.refine((data) => data.termsAndConditions === true, {
		message: 'This field is required.',
		path: ['termsAndConditions'],
	});
