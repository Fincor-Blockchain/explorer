import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import colors from 'src/vars/colors';
import { hamburger } from 'src/assets/fincoreassests';
import { ChartsHeading, ComingSoon } from 'src/components';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
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
  height: 80%;
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
  opacity: 0.3;
`;
const OrangeIcon = styled(RedIcon)`
  background-color: #ffb800;
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
const Drop = styled(DropdownToggle)`
  font-family: GilroySemiBold;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #24234d !important;
  text-transform: uppercase;
  letter-spacing: 0.69px;
`;

const DropdownMenuExp = styled(DropdownMenu)`
  background-color: #ffffff;
  width: 100%;
  padding: 8px 14px;
  min-width: 113px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  border: solid 1px #f3f4f6;
  top: 30px;
`;
const DropdownItemExp = styled(DropdownItem)`
  font-family: 'GilroySemiBold';
  font-stretch: normal;
  text-align: left;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: normal;
  font-size: 14px;
  padding: 0;
  transition: all 0.2s ease-out;
  :hover {
    background-color: #ffffff;
    color: #d5da43;
  }
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  // CustomToolTip
  const data = [
    {
      name: '4/28',
      uv: 4000,
      pv: 2400
    },
    {
      name: '4/28',
      uv: 4000,
      pv: 2400
    },
    {
      name: '4/28',
      uv: 4000,
      pv: 2400
    },
    {
      name: '4/28',
      uv: 4000,
      pv: 2400
    },
    {
      name: '4/28',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: '4/28',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: '4/28',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: '4/28',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: '4/28',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: '4/28',
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
  // CustomToolTip
  return (
    <Wrapper
    //  loading={+coinDataLoading}
    >
      <ComingSoon />
      <HeadingBox>
        <ChartsHeading title="Account Growth" subtitle="(14 days)" />
        <MoreWrapper>
          <Dropdown isOpen={dropdownOpen} size="sm" toggle={toggle}>
            <Drop nav caret>
              Tron
            </Drop>
            <DropdownMenuExp>
              <DropdownItemExp>Blocks</DropdownItemExp>
              <DropdownItemExp>Nodes</DropdownItemExp>
              <DropdownItemExp>Transactions</DropdownItemExp>
            </DropdownMenuExp>
          </Dropdown>
          <Icon src={hamburger} alt="arrow right" />
        </MoreWrapper>
      </HeadingBox>
      <Graph>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={730} height={250} data={data}>
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
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
            />
            <Bar
              dataKey="pv"
              fill="#ff2990"
              barSize={16}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="uv"
              barSize={16}
              fill="#ffb800"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Graph>
      <CoinTags>
        <FlexBox>
          <RedIcon />
          <Heading5>TRON</Heading5>
        </FlexBox>
        <FlexBox>
          <OrangeIcon />
          <Heading5>SUN Network</Heading5>
        </FlexBox>
        <FlexBox>
          <YellowIcon />
          <Heading4>Main Chain</Heading4>
        </FlexBox>
      </CoinTags>
    </Wrapper>
  );
};

export default AccountGrowthChart;
