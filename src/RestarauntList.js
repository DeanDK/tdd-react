import React from 'react';
import {
  Collection,
  CollectionItem,
} from 'react-materialize';

const RestarauntList = ({ restaraunts }) => (
  <Collection>
    {
      restaraunts.map(restarauntName => (
        <CollectionItem key={restarauntName}>
          {restarauntName}
        </CollectionItem>
      ))
    }
  </Collection>
);

export default RestarauntList;
