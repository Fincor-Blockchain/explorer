import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 2000 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 400 },
  { name: 'Group E', value: 600 },
  { name: 'Group F', value: 200 },
  { name: 'Group G', value: 200 },
  { name: 'Group H', value: 300 },
  { name: 'Group I', value: 150 },
  { name: 'Group J', value: 200 },
  { name: 'Group K', value: 400 },
  { name: 'Group L', value: 200 },
  { name: 'Group M', value: 185 },
  { name: 'Group N', value: 216 },
  { name: 'Group O', value: 200 },
  { name: 'Group P', value: 120 }
];

const COLORS = [
  '#FFB800',
  '#D5DA43',
  '#FF2990',
  '#F3D652',
  '#EF2546',
  '#38F378',
  '#627EEA',
  '#50AF95',
  '#2FDCDC',
  '#3651DE',
  '#B025E1',
  '#FA5656',
  '#25DDA6',
  '#3BB8FE',
  '#F83EC4',
  '#A5A5A5'
];

export default function RepresentativesPieChart() {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          labelLine={false}
          outerRadius={130}
          innerRadius={25}
          fill="#8884d8"
          dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
