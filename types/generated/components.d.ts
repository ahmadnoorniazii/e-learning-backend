import type { Schema, Struct } from '@strapi/strapi';

export interface UserProfile extends Struct.ComponentSchema {
  collectionName: 'components_user_profiles';
  info: {
    description: 'User profile information';
    displayName: 'Profile';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    bio: Schema.Attribute.Text;
    firstName: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    website: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'user.profile': UserProfile;
    }
  }
}
