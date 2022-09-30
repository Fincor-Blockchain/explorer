import React from 'react';
import colors from 'src/vars/colors';
import { hamburger } from 'src/assets/fincoreassests';
import styled from 'styled-components';
import { ChartsHeading, ComingSoon } from 'src/components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: ${colors.shaddow};
  background-color: ${colors.white};
  height: calc(100% - 16px);
  min-height: 380px;
  ${({ loading }) =>
    loading &&
    `
position:relative;
&:before {
position: absolute;
content: '';
top: 0;
left: 0;
background: rgba(255,255,255,.8);
width: 100%;
height: 100%;
border-radius: .28571429rem;
z-index: 100;
}
&:after {
position: absolute;
content: '';
top: 50%;
left: 50%;
margin: -1.3em 0 0 -1.3em;
width: 2.5em;
height: 2.5em;
-webkit-animation: segment-spin .6s linear;
animation: segment-spin .6s linear;
-webkit-animation-iteration-count: infinite;
animation-iteration-count: infinite;
border-radius: 500rem;
border-color: #d5da43 rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.1);
border-style: solid;
border-width: .2em;
-webkit-box-shadow: 0 0 0 1px transparent;
box-shadow: 0 0 0 1px transparent;
visibility: visible;
z-index: 101;
}
`};
  @-webkit-keyframes segment-spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes segment-spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
const Graph = styled.div`
  width: 100%;
  height: 80%;
  tspan {
    font-family: PoppinsRegular;
    font-size: 12px;
  }
  line.recharts-cartesian-axis-line {
    display: none;
  }
`;

const HeadingBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  border-radius: 37px;
  margin: 8px 4px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  border: solid 1px #f3f4f6;
  background-color: #ffffff;
`;
const CoinTags = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 8px 0px;
  flex-wrap: wrap;
`;

const RedIcon = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 25px;
  background-color: red;
`;

const YellowIcon = styled(RedIcon)`
  background-color: #d5da43;
`;
const Heading4 = styled.h3`
  font-family: 'GilroySemiBold';
  font-size: 12px;
  color: #24234d;
  margin-left: 10px;
`;

const MoreWrapper = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;
const Icon = styled.img`
  margin: 4px;
  width: 20px;
  height: 20px;
`;
// Tooltip Styling
const TooltipWrapper = styled.div`
  position: relative;
  width: 150px;
  padding: 10px 0px;
  box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.11);
  border: solid 1px #f3f4f6;
  background-color: #ffffff;
  border-radius: 10px;
  // :after {
  //   top: 100%;
  //   left: 50%;
  //   border: solid transparent;
  //   content: '';
  //   height: 0;
  //   width: 0;
  //   position: absolute;
  //   pointer-events: none;
  //   border-color: rgba(255, 255, 255, 0);
  //   border-top-color: #ffffff;
  //   border-width: 8px;
  //   margin-left: -8px;
  // }

  // box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.11);
  // border: solid 1px #f3f4f6;
  // background-color: #ffffff;
  // border-radius: 10px;
`;
const TooltipHead = styled.p`
  opacity: 0.4;
  margin-top: 10px;
  font-family: GilroyMedium;
  font-size: 8px;
  text-align: center;
  color: #24234d;
`;
const TooltipLabel = styled(FlexBox)`
  margin: 0;
  height: auto;
  box-shadow: none;
  padding: 0;
  border: none;
`;

const TooltipContent = styled.div`
  display: flex;
  padding: 8px 8px;
  align-items: center;
  justify-content: space-around;
`;
const TooltipText = styled(Heading4)`
  margin-left: 5px;
`;
const TooltipValue = styled.p`
  font-family: GilroyMedium;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #6ac367;
`;
const HorizontalLine = styled.span`
  height: 1px;
  width: 100%;
  border: 0.5px solid black;
  opacity: 0.1;
  display: inline-block;
  vertical-align: middle;
  color: #f3f4f6;
`;
// Tooltip Styling

const AccountGrowthChart = () => {
  const data = [
    {
      name: 'Main Chain',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipWrapper>
          <TooltipHead>Daily Txns (2021-05-02 (UTC))</TooltipHead>
          <HorizontalLine />
          <TooltipContent>
            <TooltipLabel>
              <YellowIcon />
              <TooltipText>{label}</TooltipText>
            </TooltipLabel>
            <TooltipValue>{payload[0].value}</TooltipValue>
          </TooltipContent>
        </TooltipWrapper>
      );
    }
    return null;
  };
  // custom tootip
  return (
    <Wrapper
    // loading={+coinDataLoading}
    >
      <ComingSoon />
      <HeadingBox>
        <ChartsHeading title="Contract Triggers" subtitle="(14 days)" />
        <MoreWrapper>
          <Icon src={hamburger} alt="arrow right" />
        </MoreWrapper>
      </HeadingBox>
      <Graph>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0
            }}>
            <CartesianGrid strokeDashArray="4" vertical={false} />
            <XAxis
              style={{ fontSize: '14px' }}
              dataKey="name"
              tickLine={false}
              tick={true}
            />
            <YAxis
              style={{ fontSize: '14px' }}
              domain={['auto', 'auto']}
              interval={0}
              tickLine={false}
              tick={true}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              dot={{
                fill: '#ff2990',
                stroke: '#ff2990',
                strokeWidth: 3,
                r: 3
              }}
              type="monotone"
              dataKey="uv"
              stroke="#ff2990"
              fill="transparent"
              strokeWidth={3}
            />
            <Line
              dot={{
                fill: '#ffb800',
                stroke: '#ffb800',
                strokeWidth: 3,
                r: 3
              }}
              type="monotone"
              dataKey="pv"
              stroke="#ffb800"
              fill="transparent"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Graph>
      <CoinTags>
        <FlexBox>
          <RedIcon />
          <Heading4>Numbers of calls</Heading4>
        </FlexBox>

        <FlexBox>
          <YellowIcon />
          <Heading4>Calling Accounts</Heading4>
        </FlexBox>
      </CoinTags>
    </Wrapper>
  );
};

export default AccountGrowthChart;
