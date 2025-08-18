import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCallToActionButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_call_to_action_buttons';
  info: {
    description: '';
    displayName: 'Call to Action Button';
    icon: 'oneWay';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    open_in: Schema.Attribute.Enumeration<
      ['THIS_TAB', 'NEW_TAB', 'NEW_WINDOW']
    >;
    url: Schema.Attribute.String;
  };
}

export interface SharedInstagramEmbed extends Struct.ComponentSchema {
  collectionName: 'components_shared_instagram_embeds';
  info: {
    displayName: 'Instagram embed';
    icon: 'landscape';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    embed_code: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedInstagramList extends Struct.ComponentSchema {
  collectionName: 'components_shared_instagram_lists';
  info: {
    displayName: 'Instagram list';
    icon: 'grid';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.instagram-embed', true>;
  };
}

export interface SharedManga extends Struct.ComponentSchema {
  collectionName: 'components_shared_manga';
  info: {
    description: '';
    displayName: 'manga';
    icon: 'discuss';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    content: Schema.Attribute.Media<'images' | 'files'>;
    page: Schema.Attribute.Integer;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    height: Schema.Attribute.Integer;
    max_width: Schema.Attribute.String;
    title: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
  };
}

export interface SharedMediaGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_groups';
  info: {
    displayName: 'Media Group';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.media-list', true>;
  };
}

export interface SharedMediaList extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_lists';
  info: {
    description: '';
    displayName: 'Media List';
    icon: 'apps';
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    description: '';
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedYoutubeEmbed extends Struct.ComponentSchema {
  collectionName: 'components_shared_youtube_embeds';
  info: {
    displayName: 'Youtube embed';
    icon: 'play';
  };
  attributes: {
    embed_code: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.call-to-action-button': SharedCallToActionButton;
      'shared.instagram-embed': SharedInstagramEmbed;
      'shared.instagram-list': SharedInstagramList;
      'shared.manga': SharedManga;
      'shared.media': SharedMedia;
      'shared.media-group': SharedMediaGroup;
      'shared.media-list': SharedMediaList;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.youtube-embed': SharedYoutubeEmbed;
    }
  }
}
