import React, { useState } from 'react';
import { lgBContainer, lgBRating } from 'lgbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const RatingPage = () => {
  const [basic] = useState([
    {
      tooltip: 'Very Bad'
    },
    {
      tooltip: 'Poor'
    },
    {
      tooltip: 'Ok',
      choosed: true
    },
    {
      tooltip: 'Good'
    },
    {
      tooltip: 'Excellent'
    }
  ]);

  return (
    <lgBContainer>
      <DocsLink
        title='Rating'
        href='https://lgbootstrap.com/plugins/react/rating/'
      />

      <SectionContainer header='Basic Example' flexCenter>
        <lgBRating data={basic} />
      </SectionContainer>

      <SectionContainer header='Empty five stars' flexCenter>
        <lgBRating iconSize='2x' iconRegular />
      </SectionContainer>

      <SectionContainer header='Faces rating' flexCenter>
        <lgBRating
          iconFaces
          fillClassName='black-text'
          iconSize='2x'
          iconRegular
        />
      </SectionContainer>

      <SectionContainer header='Fill color on hover' flexCenter>
        <lgBRating iconSize='2x' fillColors />
      </SectionContainer>

      <SectionContainer header='Custom fill colors on hover' flexCenter>
        <lgBRating
          iconFaces
          iconSize='2x'
          iconRegular
          fillColors={[
            'red-text',
            'orange-text',
            'yellow-text',
            'lime-text',
            'light-green-text'
          ]}
        />
      </SectionContainer>

      <SectionContainer header='With feedback' flexCenter>
        <lgBRating iconSize='2x' feedback submitHandler={e => console.log(e)} />
      </SectionContainer>
    </lgBContainer>
  );
};

export default RatingPage;
