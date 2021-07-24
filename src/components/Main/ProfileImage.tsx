import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { FluidObject } from 'gatsby-image';

export interface ProfileImageProps {
  profileImage: FluidObject;
}

const PROFILE_IMAGE_LINK = `https://avatars.githubusercontent.com/u/66353903?v=4`;

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper src={profileImage} alt="Profile Image" />;
};

export default ProfileImage;
