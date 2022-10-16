import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../styles/Logo";
import axios from "axios"

export function SignIn(){

    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    async function handleSignIn(event: FormEvent){
        event.preventDefault()

        await axios.post(`/sessions`, {
            email:`test@jest.com`,
            password: `12345678`
        })

        setIsUserSignedIn(true)
    }

    return(
        <div className='w-screen h-screen bg-gray-900 flex flex-col justify-center items-center text-gray-100'>


            <header className='flex flex-col items-center mb-10'>
            <Logo className='w-20 h-20' />

            <Heading size='lg' className='mt-4'>
                Ignite Lab
            </Heading>

            <Text size='lg' className='text-gray-400 mt-1'>
                Login and start using!!
            </Text>
            </header>

            <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm'>

                {isUserSignedIn && <Text>You are logged on</Text>}
                <label htmlFor="email" className='flex flex-col gap-3'>
                    <Text className='font-semibold'> E-mail Address </Text>
                    <TextInput.Root>
                    <TextInput.Icon>
                        <Envelope/>
                    </TextInput.Icon>
                    <TextInput.Input type='email' id='email' placeholder='Your e-mail here!'/>
                    </TextInput.Root>
                </label>

                <label htmlFor="password" className='flex flex-col gap-3'>
                    <Text className='font-semibold'> Password </Text>
                    <TextInput.Root>
                    <TextInput.Icon>
                        <Lock/>
                    </TextInput.Icon>
                    <TextInput.Input type='password' id='password' placeholder='*******'/>
                    </TextInput.Root>
                </label>


                <label htmlFor="remember" className='flex gap-2 items-center'>
                    <Checkbox id='remember'/>
                    <Text size='sm' className='text-gray-200'>Remember me for 30 days</Text>
                </label>

                <Button type='submit' className='mt-8'>Login</Button>

            </form>

            <footer className='flex flex-col items-center gap-4 mt-6'>

            <Text size='sm' className='underline text-gray-400 hover:text-gray-200' asChild><a href='#'> Remember password </a></Text>
            <Text size='sm' className='underline text-gray-400 hover:text-gray-200' asChild><a href='#'> Dont have an account? Create one!</a></Text>

            </footer>

        </div>
    )
}