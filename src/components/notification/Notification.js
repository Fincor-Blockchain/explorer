import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import styled from 'styled-components';

const List = styled.ul``;

const CustomAlert = styled(Alert)`
  margin-bottom: 0;
`;

const Heading = styled.h6`
  font-family: PoppinsMedium;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.54px;
  padding: 5px 0px;
`;
const ListItem = styled.li`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
`;
const Link = styled.a`
  padding: 0px 6px;
`;
const Notification = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  return (
    <CustomAlert color="info" isOpen={visible} toggle={() => onDismiss()}>
      <Heading className="alert-heading">
        Important: Fincore is currently under maintenance, you might face some
        service issues until our next upgrade is released.
      </Heading>
      <List>
        <ListItem>
          If you have any questions feel free to contact us on our Community
          Group
          <Link href="https://discord.com/invite/6P9SX5c">Community Group</Link>
        </ListItem>
      </List>
    </CustomAlert>
  );
};

export default Notification;
