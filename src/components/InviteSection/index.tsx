import { Container } from "../../styles/Container"
import { Button } from "../Button/intex"
import { InviteSectionContainer, Title, Text } from "./styles"

const InviteSection = () => {
    return (
        <Container>
            <InviteSectionContainer>
                <Title>One Account. A Lifetime of Growth.</Title>
                <Text>Join thousands of families who are building their financial future with us.</Text>
                <Button size="md" variant="primary">Open your account</Button>
            </InviteSectionContainer>
        </Container>
    )
}

export default InviteSection