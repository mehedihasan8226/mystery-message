import { Html, Button
    ,Head,Font,Preview, Heading,Row,Section,Text
    
 } from "@react-email/components";

interface VerificationEmailProps{
    username: string,
    otp: string
}

export default function VerificationEmail({username,otp}
    : VerificationEmailProps){
        return (
            <Html>
                <Head>
                <title>Verification Code</title>
                </Head>
                <Preview>Here&apos;s your verificaion code: {otp}</Preview>
                <section>
                    <Row>
                        <Heading as="h2">Hello {username},</Heading>
                    </Row>
                    <Row>
                        <Text>
                            Thank you for registering. Please use the 
                            following verificaion
                            code to complete your registration:
                        </Text>
                    </Row>
                    <Row>
                        <Text>{otp}</Text>
                    </Row>
                    <Row>
                        <Text>
                            If you did not request this code, please ignore 
                            this email.
                        </Text>
                    </Row>
                </section>


            </Html>
        )
    }
