import React from 'react';
import TabBar, { Item as TapbarItem } from 'components/TabBar';

function ProfileTabBar() {
  return (
    <TabBar>
      <TapbarItem to="tracks">Tracks</TapbarItem>
      <TapbarItem to="likes">Likes</TapbarItem>
    </TabBar>
  );
}

export default ProfileTabBar;
