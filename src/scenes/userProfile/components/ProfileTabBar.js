import React from 'react';
import { string } from 'prop-types';
import TabBar, { Item as TapbarItem } from 'components/TabBar';

function ProfileTabBar({ urlBase }) {
  return (
    <TabBar>
      <TapbarItem to={urlBase}>Tracks</TapbarItem>
      <TapbarItem to={`${urlBase}/favorites`}>Likes</TapbarItem>
    </TabBar>
  );
}

ProfileTabBar.propTypes = {
  urlBase: string.isRequired,
};

export default ProfileTabBar;
