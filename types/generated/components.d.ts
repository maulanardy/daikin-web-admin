import type { Schema, Struct } from '@strapi/strapi';

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

export interface SharedManga extends Struct.ComponentSchema {
  collectionName: 'components_shared_manga';
  info: {
    displayName: 'manga';
    icon: 'discuss';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    content: Schema.Attribute.Media<'images' | 'files'>;
    external_link: Schema.Attribute.Text;
    page: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
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
      'shared.instagram-embed': SharedInstagramEmbed;
      'shared.manga': SharedManga;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.youtube-embed': SharedYoutubeEmbed;
    }
  }
}
