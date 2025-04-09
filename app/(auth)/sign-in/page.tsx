"use client";


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { signInSchema } from "@/lib/auth-schema";
import GoogleIcon from "@/components/google-icon";
import { GithubIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";



export default function SignIn() {

    // 1. Define your form.
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof signInSchema>) {
        console.log(values)
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Welcome back! Please sign in to continue.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="johndoe@gmail.com" {...field} />
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
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Sign In</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground w-full">
                    Don&apos;t have an yet {' '}
                    <Link href="/sign-up" className="text-primary hover:underline">
                        Sign up
                    </Link>
                    <Separator className="my-4" />
                    <div className="text-sm text-muted-foreground w-full flex items-center justify-center">Ou continuer avec </div>
                    <div className="flex items-center justify-between gap-2 ">
                        <Button variant="outline" className="mt-4 w-1/2">
                            <GoogleIcon />
                            Google
                        </Button>
                        <Button variant="outline" className="mt-4 w-1/2">
                            <GithubIcon />
                            Github
                        </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
