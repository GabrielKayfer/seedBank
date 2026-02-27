import { Container } from "../../styles/Container"
import { InviteSectionContainer, Title, Text } from "./styles"

const InviteSection = () => {
    return (
        <Container>
            <InviteSectionContainer>
                <Title>One Account. A Lifetime of Growth.</Title>
                <Text>Join thousands of families who are building their financial future with us.</Text>
                <button>Open Account</button>
            </InviteSectionContainer>
        </Container>
    )
}

export default InviteSection