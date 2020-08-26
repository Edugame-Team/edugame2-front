import * as React from 'react';
import { ScrollView } from 'react-native';

import Reward from './Reward';

const messageType = {
  BADGE: {
    name: 'check-circle-outline',
  },
  HABILLAGE: {
    name: 'hanger',
  },
};

const Rewards = () => {
  const data = [
    {
      id: 1,
      date: '10/06/2020',
      message: 'Badge - Explorateur',
      type: messageType.BADGE,
    },
    {
      id: 2,
      date: '10/06/2020',
      message: 'Habillage - chwapo',
      type: messageType.HABILLAGE,
    },
    {
      id: 3,
      date: '10/06/2020',
      message: 'Badge - Explorateur',
      type: messageType.BADGE,
    },
    {
      id: 4,
      date: '10/06/2020',
      message: 'Habillage - chwapo',
      type: messageType.HABILLAGE,
    },
    {
      id: 5,
      date: '10/06/2020',
      message: 'Badge - Explorateur',
      type: messageType.BADGE,
    },
    {
      id: 6,
      date: '10/06/2020',
      message: 'Habillage - chwapo',
      type: messageType.HABILLAGE,
    },
    {
      id: 7,
      date: '10/06/2020',
      message: 'Badge - Explorateur',
      type: messageType.BADGE,
    },
    {
      id: 8,
      date: '10/06/2020',
      message: 'Habillage - chwapo',
      type: messageType.HABILLAGE,
    },
    {
      id: 9,
      date: '10/06/2020',
      message: 'Badge - Explorateur',
      type: messageType.BADGE,
    },
    {
      id: 10,
      date: '10/06/2020',
      message: 'Habillage - chwapo',
      type: messageType.HABILLAGE,
    },
    {
      id: 11,
      date: '10/06/2020',
      message: 'Badge - Explorateur',
      type: messageType.BADGE,
    },
    {
      id: 12,
      date: '10/06/2020',
      message: 'Habillage - chwapo',
      type: messageType.HABILLAGE,
    },
    {
      id: 13,
      date: '10/06/2020',
      message: 'Badge - Explorateur',
      type: messageType.BADGE,
    },
  ];

  return (
    <ScrollView>
      {data.map((reward) => (
        <Reward reward={reward} key={reward.id} />
      ))}
    </ScrollView>
  );
};

export default Rewards;
