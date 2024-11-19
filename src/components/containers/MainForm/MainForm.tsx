import * as z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Checkbox } from '../../ui/checkbox';
import { Label } from '../../ui/label';
import { mainFormSchema } from './mainFormSchema';
import { Dialog, DialogContent, DialogHeader, DialogDescription } from '@/components/ui/dialog';

export default function MainForm() {
	const [isOpen, setIsOpen] = useState(false);

	const form = useForm<z.infer<typeof mainFormSchema>>({
		resolver: zodResolver(mainFormSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
			termsAndConditions: false,
		},
		mode: 'onBlur',
	});

	const handleSubmit = (values: z.infer<typeof mainFormSchema>) => {
		setIsOpen(true);
	};

	return (
		<Form {...form}>
			<form className="flex flex-col gap-5 max-w-[400px] mx-auto" onSubmit={form.handleSubmit(handleSubmit)}>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Username" {...field} />
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
							<FormControl>
								<Input placeholder="Email" type="email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Password" type="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Confirm password" type="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="termsAndConditions"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<div className="flex items-center gap-2">
									<Checkbox id="terms-and-conditions" checked={field.value} onCheckedChange={field.onChange} onBlur={field.onBlur} />
									<Label htmlFor="terms-and-conditions">I accept and agree to terms and conditions.</Label>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent>
					<DialogHeader>Success!</DialogHeader>
					<DialogDescription>You have successfully submitted your form.</DialogDescription>
				</DialogContent>
			</Dialog>
		</Form>
	);
}
