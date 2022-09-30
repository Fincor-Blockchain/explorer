import React from 'react';
import colors from 'src/vars/colors';
import styled from 'styled-components';
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  ResponsiveContainer
} from 'recharts';

const Wrapper = styled.div`
  padding: 23px 28px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: ${colors.shaddow};
  margin-bottom: 1rem;
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
  height: 100%;
  min-height: 500px;

  tspan {
    font-family: GilroyRegular;
    font-size: 12px;
  }
  line.recharts-cartesian-axis-line {
    display: none;
  }
`;
const HeadingBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const Heading = styled.p`
  font-size: 18px;
  font-family: 'GilroyBold';
  color: #111827;
`;
const SubHeading = styled.p`
  font-family: 'GilroyMedium';
  margin: 10px 0px;
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

const RedIcon = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 25px;
  background-color: #ff2990;
  // opacity: 0.3;
`;

const Heading4 = styled.h3`
  font-family: 'GilroySemiBold';
  font-size: 12px;
  color: #24234d;
  margin-left: 10px;
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

// Tooltip Styling
const NodeRankingChart = () => {
  const data = [
    {
      name: 'United States',
      uv: 590,
      pv: 800,
      amt: 1400
    },
    {
      name: 'China',
      uv: 868,
      pv: 967,
      amt: 1506
    },
    {
      name: 'Russia',
      uv: 597,
      pv: 1098,
      amt: 789
    },
    {
      name: 'Germany',
      uv: 1480,
      pv: 1200,
      amt: 1228
    },
    {
      name: 'Pakistan',
      uv: 1520,
      pv: 1108,
      amt: 1100
    },
    {
      name: 'Singapore',
      uv: 1400,
      pv: 560,
      amt: 1700
    },
    {
      name: 'Hong Kong',
      uv: 1400,
      pv: 680,
      amt: 1700
    },
    {
      name: 'Japan',
      uv: 1400,
      pv: 680,
      amt: 1700
    },
    {
      name: 'South Korea',
      uv: 1400,
      pv: 680,
      amt: 1700
    },
    {
      name: 'united Kingdom',
      uv: 1400,
      pv: 680,
      amt: 1700
    },
    {
      name: 'Frace',
      uv: 1400,
      pv: 680,
      amt: 1700
    },
    {
      name: 'Ireland',
      uv: 1400,
      pv: 680,
      amt: 1700
    },
    {
      name: 'Netherland',
      uv: 1400,
      pv: 680,
      amt: 1700
    },
    {
      name: 'India',
      uv: 1400,
      pv: 680,
      amt: 1700
    },
    {
      name: 'Romania',
      uv: 1400,
      pv: 680,
      amt: 1700
    },
    {
      name: 'Other',
      uv: 1400,
      pv: 680,
      amt: 1700
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipWrapper>
          <TooltipContent>
            <TooltipLabel>
              <RedIcon />
              <TooltipText>{label}</TooltipText>
            </TooltipLabel>
            <TooltipValue>{payload[0].value}</TooltipValue>
          </TooltipContent>
        </TooltipWrapper>
      );
    }
    return null;
  };
  // CustomToolTip
  return (
    <Wrapper
    //  loading={+coinDataLoading}
    >
      <HeadingBox>
        <Heading>Nodes Ranking</Heading>
        <SubHeading>Nodes Ranking Rank by country and region</SubHeading>
      </HeadingBox>
      <Graph>
        <ResponsiveContainer>
          <ComposedChart
            layout="vertical"
            data={data}
            margin={{
              top: 20,
              right: 0,
              bottom: 0,
              left: 30
            }}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis tickLine={false} type="number" />
            <YAxis
              interval={0}
              tickLine={false}
              dataKey="name"
              type="category"
              scale="band"
            />
            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="pv"
              barSize={10}
              radius={[0, 10, 10, 0]}
              fill="#ff2990"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Graph>
    </Wrapper>
  );
};

export default NodeRankingChart;
