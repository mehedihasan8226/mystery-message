import {z} from 'zod'


export const AcceptMessageSchema = z.object({
    accetpMessages: z.boolean(),
})