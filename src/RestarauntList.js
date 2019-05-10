import React from 'react';

const RestarauntList = ({ restaraunts }) => (
  <ul>
    {
      restaraunts.map(restarauntName => (
        <li key={restarauntName}>{restarauntName}</li>
      ))
    }
  </ul>
);

export default RestarauntList;
