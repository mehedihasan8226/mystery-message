import { Message } from "@/model/User";
import { boolean, string } from "zod/v4"
export interface ApiResponse{
    success: boolean;
    message: string;
    isAcceptingMessage?: boolean;
    messages?: Array<Message>;
}