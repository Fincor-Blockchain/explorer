import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'reactstrap';
import classnames from 'classnames';
const TimeWrapper = styled.div`
  padding: 23px 28px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: none;
  margin: 4px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0px;
  min-height: 70px;
  @media (max-width: 768px) {
    padding: 12px 12px;
    margin: 6px 0px;
  }
`;
const TimeContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 6px 0px;
  min-width: 200px;
`;
const TimeText = styled.p`
  font-size: 18px;
  font-family: GilroyBold;
  text-align: center;
  :hover {
    color: #d5da43;
  }
`;
const LightText = styled.p`
  font-family: GilroyLight;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  line-height: 1.2;
  color: #24234d;
  font-size: 14px;
`;
const DurationWrapper = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <TimeWrapper>
      <TimeContent>
        <NavLink
          className={classnames({ active: activeTab === '1' })}
          onClick={() => {
            toggle('1');
          }}>
          <TimeText>{props.hour}</TimeText>
        </NavLink>
        <NavLink
          className={classnames({ active: activeTab === '2' })}
          onClick={() => {
            toggle('2');
          }}>
          <TimeText>{props.day}</TimeText>
        </NavLink>
        <NavLink
          className={classnames({ active: activeTab === '3' })}
          onClick={() => {
            toggle('3');
          }}>
          <TimeText>{props.week}</TimeText>
        </NavLink>
      </TimeContent>
      <LightText>{props.time}</LightText>
    </TimeWrapper>
  );
};

export default DurationWrapper;
