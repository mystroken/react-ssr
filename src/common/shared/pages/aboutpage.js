import React from 'react';

import Page from './page';

const AboutPage = () => {

  return (
    <Page>
      <div className='container'>
        <h1>Some text about me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum obcaecati tempore nobis debitis.
          Odio voluptatibus illum magni quis, illo minima sequi iste,
          repellat architecto obcaecati quasi consequatur voluptate sapiente dicta! Alias ad repudiandae esse enim,
          voluptatem repellendus aliquam temporibus illum.
        </p>
      </div>
    </Page>
  );
};

export default {
  component: AboutPage
};
