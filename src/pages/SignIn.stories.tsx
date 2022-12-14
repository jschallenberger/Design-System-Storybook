import { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { SignIn } from './SignIn'
import { rest } from 'msw'

export default {
    'title':'Pages/Sign In',
    component: SignIn,
    args:{ },
    argTypes:{ },
    parameters:{
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(
                      ctx.json({
                        token: `123446`
                      })
                    )
                    })
                ]
            },
        }
    } as Meta

export const Default: StoryObj = {

    play: async ({ canvasElement })=>{
        const canvas = within(canvasElement);

        userEvent.type(canvas.getByPlaceholderText("Your e-mail here!"), 'jest@test.com')
        userEvent.type(canvas.getByPlaceholderText("*******"), '12345678')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(()=>{
            return expect(canvas.getByText(`You are logged on`)).toBeInTheDocument()
        })
    }
}
