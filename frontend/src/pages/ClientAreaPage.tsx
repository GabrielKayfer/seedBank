import { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button/intex";
import { useAuth } from "../context/AuthContext";
import { navigateTo } from "../router/navigation";

const DashboardShell = styled.div`
  display: grid;
  gap: 20px;
`;

const HeroPanel = styled.section`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.9fr);
  gap: 18px;
  padding: 28px;
  border-radius: 32px;
  background:
    radial-gradient(circle at top left, rgba(14, 201, 132, 0.2), transparent 34%),
    linear-gradient(135deg, ${({ theme }) => theme.colors.DarkBlue} 0%, ${({ theme }) => theme.colors.PrimaryPurple} 100%);
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 28px 60px rgba(18, 47, 59, 0.18);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const HeroBackdrop = styled.div`
  position: absolute;
  right: -40px;
  top: -50px;
  width: 240px;
  height: 240px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  pointer-events: none;
`;

const HeroMain = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 18px;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 34px;
  max-height: 34px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const HeroTitleBlock = styled.div`
  display: grid;
  gap: 10px;

  h1 {
    margin: 0;
    font-size: clamp(2.2rem, 4vw, 3.6rem);
    line-height: 0.98;
  }

  p {
    margin: 0;
    max-width: 52ch;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
`;

const HeroHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const HeroHighlight = styled.div`
  padding: 16px 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  span {
    display: block;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    font-size: 1.15rem;
    line-height: 1.25;
  }
`;

const HeroAside = styled.aside`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 14px;
  align-content: start;
`;

const AssistantSpotlight = styled.div`
  display: grid;
  gap: 16px;
  padding: 20px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
`;

const AssistantSpotlightCopy = styled.div`
  display: grid;
  gap: 8px;

  span {
    display: inline-flex;
    width: fit-content;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.14);
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  strong {
    font-size: 1.08rem;
    line-height: 1.3;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.78);
    line-height: 1.55;
  }
`;

const AssistantPrimaryButton = styled(Button)`
  width: 100%;
  min-height: 48px;
  justify-content: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.components.button.radius.md};
  font-size: ${({ theme }) => theme.components.button.fontSize.md};
  box-shadow: 0 14px 28px rgba(10, 20, 40, 0.18);
`;

const UserBadgeCard = styled.div`
  padding: 20px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.11);
  backdrop-filter: blur(14px);
`;

const UserBadge = styled.div`
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  margin-bottom: 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.16);
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: 800;
`;

const UserName = styled.strong`
  display: block;
  font-size: 1.15rem;
`;

const UserEmail = styled.p`
  margin: 6px 0 0;
  color: rgba(255, 255, 255, 0.78);
  word-break: break-word;
`;

const HeaderActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.95fr);
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: grid;
  gap: 20px;
`;

const Card = styled.section`
  padding: 24px;
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 20px 48px rgba(18, 47, 59, 0.08);
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;

  h2,
  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.DarkBlue};
    font-size: clamp(1.2rem, 2vw, 1.5rem);
  }

  p {
    margin: 8px 0 0;
    color: rgba(18, 47, 59, 0.68);
    line-height: 1.5;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const InfoTile = styled.article`
  padding: 18px;
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.whiteCold};

  span {
    display: block;
    margin-bottom: 8px;
    color: rgba(18, 47, 59, 0.54);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  strong {
    display: block;
    color: ${({ theme }) => theme.colors.DarkBlue};
    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
    line-height: 1.15;
  }

  p {
    margin: 10px 0 0;
    color: rgba(18, 47, 59, 0.64);
    line-height: 1.45;
  }
`;

const TransactionList = styled.ul`
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
`;

const TransactionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 0;
  border-top: 1px solid rgba(18, 47, 59, 0.08);

  &:first-child {
    padding-top: 0;
    border-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const TransactionMeta = styled.div`
  display: grid;
  gap: 5px;

  strong {
    color: ${({ theme }) => theme.colors.DarkBlue};
    font-size: 1rem;
  }

  span {
    color: rgba(18, 47, 59, 0.58);
    font-size: 0.93rem;
  }
`;

const AmountPill = styled.strong<{ $negative?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 112px;
  padding: 10px 14px;
  border-radius: 999px;
  background: ${({ $negative }) => ($negative ? "rgba(242, 114, 68, 0.12)" : "rgba(14, 201, 132, 0.12)")};
  color: ${({ $negative, theme }) => ($negative ? theme.colors.Orange : theme.colors.Emerald)};
  font-size: 0.96rem;
`;

const ProfileList = styled.dl`
  display: grid;
  gap: 16px;
  margin: 0;
`;

const ProfileRow = styled.div`
  display: grid;
  gap: 6px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(18, 47, 59, 0.08);

  &:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  dt {
    color: rgba(18, 47, 59, 0.54);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    color: ${({ theme }) => theme.colors.DarkBlue};
    font-size: 1rem;
    line-height: 1.45;
  }
`;


const ActivityCard = styled(Card)`
  min-height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(18, 47, 59, 0.08);
`;

const PaginationButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.whiteCold};
  color: ${({ theme }) => theme.colors.DarkBlue};
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(18, 47, 59, 0.08);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: rgba(18, 47, 59, 0.04);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  color: rgba(18, 47, 59, 0.64);
  font-size: 0.9rem;
`;


const GoalCard = styled(Card)`
  background:
    linear-gradient(180deg, rgba(14, 201, 132, 0.08) 0%, rgba(45, 114, 143, 0.04) 100%),
    ${({ theme }) => theme.colors.white};
`;

const GoalTop = styled.div`
  display: grid;
  gap: 10px;

  strong {
    color: ${({ theme }) => theme.colors.DarkBlue};
    font-size: clamp(1.5rem, 2.7vw, 2.1rem);
    line-height: 1.1;
  }

  p {
    margin: 0;
    color: rgba(18, 47, 59, 0.66);
    line-height: 1.5;
  }
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 14px;
  margin-top: 18px;
  border-radius: 999px;
  background: rgba(18, 47, 59, 0.08);
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $value: number }>`
  width: ${({ $value }) => `${$value}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.Emerald} 0%, ${({ theme }) => theme.colors.PrimaryPurple} 100%);
`;

const GoalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
  color: rgba(18, 47, 59, 0.66);
  font-size: 0.93rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

function formatCurrency(value: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
}

function getInitials(fullName: string) {
  return fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

const ClientAreaPage = () => {
  const { profile, logout, user, isLoadingAuth } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoadingAuth || !profile) {
    return null;
  }

  const itemsPerPage = 5;
  const totalPages = Math.ceil(profile.recentTransactions.length / itemsPerPage);
  const paginatedTransactions = profile.recentTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  if (isLoadingAuth || !profile) {
    return null;
  }

  const displayName = user?.fullName ?? profile.fullName;

  return (
    <DashboardShell>
      <HeroPanel>
        <HeroBackdrop />

        <HeroMain>
          <Eyebrow>CLIENT ACCOUNT</Eyebrow>

          <HeroTitleBlock>
            <h1>Welcome back, {displayName}</h1>
            <p>
              Manage your balance, account activity, and financial goals in one place.
            </p>
          </HeroTitleBlock>

          <HeroHighlights>
            <HeroHighlight>
              <span>AVAILABLE BALANCE</span>
              <strong>{formatCurrency(profile.availableBalance, profile.currency)}</strong>
            </HeroHighlight>
            <HeroHighlight>
              <span>ACCOUNT TYPE</span>
              <strong>{profile.accountType}</strong>
            </HeroHighlight>
            <HeroHighlight>
              <span>CARD STATUS</span>
              <strong>{profile.cardStatus}</strong>
            </HeroHighlight>
          </HeroHighlights>
        </HeroMain>

        <HeroAside>
          <HeaderActions>
            <Button
              as="button"
              type="button"
              size="sm"
              variant="ghost"
              style={{ maxHeight: "32px", minHeight: "32px" }}
              onClick={() => void logout()}
            >
              Log out
            </Button>
          </HeaderActions>

          <AssistantSpotlight>
            <AssistantSpotlightCopy>
              <span>SeedBank AI</span>
              <strong>Talk to my AI Manager</strong>
              <p>
                Receive guidance on your balance, recent transactions, and your financial goal.
              </p>
            </AssistantSpotlightCopy>

            <AssistantPrimaryButton
              as="button"
              type="button"
              size="md"
              variant="primary"
              onClick={() => navigateTo("/app/assistant")}
            >
              Open
            </AssistantPrimaryButton>
          </AssistantSpotlight>

          <UserBadgeCard>
            <UserBadge>{getInitials(displayName)}</UserBadge>
            <UserName>{displayName}</UserName>
            <UserEmail>{profile.email}</UserEmail>
          </UserBadgeCard>
        </HeroAside>
      </HeroPanel>

      <SectionGrid>
        <Column>
          <Card>
            <SectionHeader>
              <div>
                <h2>Financial overview</h2>
                <p>A clear view of the details that matter most in your account.</p>
              </div>
            </SectionHeader>

            <InfoGrid>
              <InfoTile>
                <span>BALANCE</span>
                <strong>{formatCurrency(profile.availableBalance, profile.currency)}</strong>
                <p>Available for your everyday transactions.</p>
              </InfoTile>
              <InfoTile>
                <span>CURRENT PLAN</span>
                <strong>{profile.accountType}</strong>
                <p>Your current account plan and profile settings.</p>
              </InfoTile>
              <InfoTile>
                <span>CARD</span>
                <strong>{profile.cardStatus}</strong>
                <p>Your card is active and ready to use.</p>
              </InfoTile>
            </InfoGrid>
          </Card>

          <ActivityCard>
            <SectionHeader>
              <div>
                <h2>Transactions History</h2>
                <p>Your latest account transactions.</p>
              </div>
            </SectionHeader>

            <TransactionList>
              {paginatedTransactions.map((transaction) => (
                <TransactionItem key={transaction.id}>
                  <TransactionMeta>
                    <strong>{transaction.label}</strong>
                    <span>{transaction.date}</span>
                  </TransactionMeta>
                  <AmountPill $negative={transaction.amount < 0}>
                    {formatCurrency(transaction.amount, profile.currency)}
                  </AmountPill>
                </TransactionItem>
              ))}
            </TransactionList>

            <PaginationContainer>
              <PaginationButton onClick={handlePrev} disabled={currentPage === 1}>
                Previous
              </PaginationButton>
              <PageInfo>
                Page {currentPage} of {totalPages || 1}
              </PageInfo>
              <PaginationButton onClick={handleNext} disabled={currentPage >= totalPages}>
                Next
              </PaginationButton>
            </PaginationContainer>
          </ActivityCard>
        </Column>

        <Column>
          <GoalCard>
            <SectionHeader>
              <div>
                <h3>Financial goal</h3>
                <p>Follow the progress of your main financial goal.</p>
              </div>
            </SectionHeader>

            <GoalTop>
              <strong>{profile.goalName}</strong>
              <p>{profile.goalProgress}% completed.</p>
            </GoalTop>

            <ProgressTrack>
              <ProgressFill $value={profile.goalProgress} />
            </ProgressTrack>

            <GoalFooter>
              <span>Current progress: {profile.goalProgress}%</span>
              <span>Stay on track with the goal linked to your account</span>
            </GoalFooter>
          </GoalCard>

          <Card>
            <SectionHeader>
              <div>
                <h3>Account profile</h3>
                <p>Your main account information and personal details.</p>
              </div>
            </SectionHeader>

            <ProfileList>
              <ProfileRow>
                <dt>NAME</dt>
                <dd>{profile.fullName}</dd>
              </ProfileRow>
              <ProfileRow>
                <dt>E-MAIL</dt>
                <dd>{profile.email}</dd>
              </ProfileRow>
              <ProfileRow>
                <dt>CLIENT ID</dt>
                <dd>{profile.id}</dd>
              </ProfileRow>
              <ProfileRow>
                <dt>ACCOUNT TYPE</dt>
                <dd>{profile.accountType}</dd>
              </ProfileRow>
            </ProfileList>
          </Card>
        </Column>
      </SectionGrid>
    </DashboardShell>
  );
};

export default ClientAreaPage;
