import styled from "styled-components";
import CountsCard from "../components/card/CountsCard";
import WeeklyStatCard from "../components/card/WeeklyStatCard";
import ActivityPieChart from "../components/card/ActivityPieChart";
import HeartRateChart from "../components/card/HeartRateChart";
import {
  counts,
  weeklyStatsData,
  activityPieData,
  heartRateData,
} from "../utils/data";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  padding: 22px 0;
`;

const Wrapper = styled.div`
  max-width: 1400px;
  margin-top: 20px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 600px) {
    margin-left: 16px;
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;


const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0 16px;

  @media (max-width: 600px) {
    gap: 12px;
  }
`;



const Dashboard = () => {
  return (
    <Container>
      
      <Content>
        <Wrapper>
          <Title>Dashboard</Title>

          <FlexWrap>
            {counts.map((item) => (
              <CountsCard key={item.id} item={item} />
            ))}
          </FlexWrap>

          <FlexWrap>
            <WeeklyStatCard data={weeklyStatsData} />
            <ActivityPieChart data={activityPieData} />
            <HeartRateChart data={heartRateData} />
          </FlexWrap>

          
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Dashboard;
