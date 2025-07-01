import React from "react";
import styled from "styled-components";
import { LineChart } from "@mui/x-charts/LineChart";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.primary};
`;

const HeartRateChart = ({ data }) => {
  return (
    <Card>
      <Title>Heart Rate Trend</Title>
      <LineChart
        xAxis={[{ scaleType: "point", data: data.time }]}
        series={[{ data: data.heartRate, label: "Heart Rate (bpm)" }]}
        width={400}
        height={300}
      />
    </Card>
  );
};

export default HeartRateChart;
