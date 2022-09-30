import React from 'react';
import colors from 'src/vars/colors';
import { arrowrightblack } from 'src/assets/fincoreassests';
import styled from 'styled-components';
import dayjs from 'dayjs';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useSelector } from 'react-redux';
import { ChartsHeading } from 'src/components';
const Wrapper = styled.div`
  padding: 16px 0px 6px 16px;
  border-radius: 10px;
  box-shadow: ${colors.shaddow};
  background-color: ${colors.white};
  height: 100%;
  min-height: 300px;
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
  // padding: 0px 25px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    // margin-bottom: 0px;
  }
`;
const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  flex-wrap: wrap;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  margin: 0px 15px;
  border-radius: 37px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  border: solid 1px #f3f4f6;
  background-color: #ffffff;
  @media (max-width: 768px) {
    padding: 4px 4px;
    margin: 0px 7px;
  }
`;

const RedIcon = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 25px;
  background-color: red;
  opacity: 0.3;
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
const Heading5 = styled(Heading4)`
  color: #24234d;
  opacity: 0.4;
`;
const MoreText = styled(Heading5)`
  font-family: 'GilroyMedium';
  font-size: 14px;
  margin: 0px 6px;
  opacity: 1;
`;

const MoreWrapper = styled.div`
  display: flex;
  margin-right: 24px;
  align-items: center;
  cursor: pointer;
`;
const Icon = styled.img`
  // opacity: 0.4;
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
const DailyTransactionsChart = () => {
  const { coinData } = useSelector((state) => state.graph);
  const arr = [];
  coinData &&
    coinData.map((item) =>
      arr.push({
        price: item.price,
        time: item.time
      })
    );
  let totalLength = arr.length;
  let x = totalLength / 60;
  x = Math.floor(x);
  let arr1 = [];
  let arrValue = 0;
  for (let i = 0; i < x; i++) {
    arr1.push(arr[arrValue]);
    arrValue = arrValue + 60;
  }
  const arr2 = [];
  arr1.map((item) =>
    arr2.push({ Price: item.price, Time: dayjs(item.time).format('hh A') })
  );
  arr2.reverse();
  const data = [
    {
      name: 'Main Chain',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Sun network',
      uv: 3000,
      pv: 1356,
      amt: 2210
    },
    {
      name: 'Tron',
      uv: 2000,
      pv: 1354,
      amt: 2290
    },
    {
      name: 'Sun network',
      uv: 2780,
      pv: 1674,
      amt: 2000
    },
    {
      name: 'Main Chain',
      uv: 1890,
      pv: 456,
      amt: 2181
    }
    // will be used later👇
    // {
    //   name: 'Test Net',
    //   uv: 2390,
    //   pv: 33858,
    //   amt: 2500
    // },
    // {
    //   name: 'Tron',
    //   uv: 3490,
    //   pv: 335456,
    //   amt: 2100
    // }
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
    //  loading={+coinDataLoading}
    >
      <HeadingBox>
        <HeadingRow>
          <ChartsHeading title="Daily Transactions" />
        </HeadingRow>
        <MoreWrapper>
          <MoreText>More</MoreText>
          <Icon src={arrowrightblack} alt="arrow right" />
        </MoreWrapper>
      </HeadingBox>
      <Graph>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: -26,
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
                fill: '#d5da43',
                stroke: '#d5da43',
                strokeWidth: 3,
                r: 3
              }}
              type="monotone"
              dataKey="pv"
              stroke="#d5da43"
              fill="transparent"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </Graph>
    </Wrapper>
  );
};

export default DailyTransactionsChart;
