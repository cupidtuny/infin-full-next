import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleArticle extends Schema.Component {
  collectionName: 'components_article_articles';
  info: {
    displayName: 'article';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    descritpion: Attribute.String;
    title: Attribute.Text;
    avata: Attribute.Media<'images'>;
  };
}

export interface BusinessBusinessDescription extends Schema.Component {
  collectionName: 'components_business_business_descriptions';
  info: {
    displayName: 'business-description';
  };
  attributes: {
    descritpion: Attribute.Text;
  };
}

export interface BusinessCanUsed extends Schema.Component {
  collectionName: 'components_business_can_useds';
  info: {
    displayName: 'can-used';
  };
  attributes: {
    title1: Attribute.String;
    title2: Attribute.String;
    descritpion: Attribute.Component<'article.article'>;
  };
}

export interface BusinessLandingpage extends Schema.Component {
  collectionName: 'components_business_landingpages';
  info: {
    displayName: 'landingpage';
  };
  attributes: {
    text: Attribute.Text;
    image: Attribute.Media<'images'>;
    title: Attribute.String;
    scheduleBtn: Attribute.Component<'button.button'>;
  };
}

export interface BusinessLeaderDream extends Schema.Component {
  collectionName: 'components_business_leader_dreams';
  info: {
    displayName: 'leader-dream';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    title: Attribute.Text;
    yourself: Attribute.Component<'button.button'>;
  };
}

export interface BusinessVideo extends Schema.Component {
  collectionName: 'components_business_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    video: Attribute.Component<'article.article'>;
    play: Attribute.Component<'button.button'>;
  };
}

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
  };
}

export interface CapitalismDescription1 extends Schema.Component {
  collectionName: 'components_capitalism_description_1s';
  info: {
    displayName: 'description-1';
  };
  attributes: {
    image: Attribute.Media<'images'>;
  };
}

export interface CapitalismDescription2 extends Schema.Component {
  collectionName: 'components_capitalism_description_2s';
  info: {
    displayName: 'description-2';
  };
  attributes: {
    title: Attribute.Text;
    descritpion: Attribute.Text;
  };
}

export interface CapitalismDescription3 extends Schema.Component {
  collectionName: 'components_capitalism_description_3s';
  info: {
    displayName: 'description-3';
  };
  attributes: {
    title: Attribute.Text;
    descritpion: Attribute.Text;
  };
}

export interface CapitalismLandingpage extends Schema.Component {
  collectionName: 'components_capitalism_landingpages';
  info: {
    displayName: 'landingpage';
  };
  attributes: {
    title: Attribute.Text;
    quesion: Attribute.Text;
    demo: Attribute.Component<'button.button'>;
  };
}

export interface CapitalismSecondPart extends Schema.Component {
  collectionName: 'components_capitalism_second_parts';
  info: {
    displayName: 'secondPart';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface CapitalismThirdPart extends Schema.Component {
  collectionName: 'components_capitalism_third_parts';
  info: {
    displayName: 'thirdPart';
  };
  attributes: {
    title: Attribute.Text;
    text: Attribute.Text;
    descritpion: Attribute.String;
  };
}

export interface HomeHomeBusiness extends Schema.Component {
  collectionName: 'components_home_home_businesses';
  info: {
    displayName: 'home-business';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    image: Attribute.Media<'images'>;
    button: Attribute.Component<'button.button'>;
    topleft: Attribute.Text;
    topright: Attribute.String;
    bottomleft: Attribute.String;
    bottomright: Attribute.Text;
  };
}

export interface HomeHomeChoose extends Schema.Component {
  collectionName: 'components_home_home_chooses';
  info: {
    displayName: 'home-choose';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    article: Attribute.Component<'article.article'>;
  };
}

export interface HomeHomeEmployer extends Schema.Component {
  collectionName: 'components_home_home_employers';
  info: {
    displayName: 'home-employer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    image: Attribute.Media<'images'>;
    button: Attribute.Component<'button.button'>;
    topleft: Attribute.String;
    topright: Attribute.String;
    bottomright: Attribute.String;
    bottomleft: Attribute.String;
  };
}

export interface HomeHomeHero extends Schema.Component {
  collectionName: 'components_home_home_heroes';
  info: {
    displayName: 'home-hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images'>;
    descritpion: Attribute.Text;
    button: Attribute.Component<'button.button', true>;
  };
}

export interface HomeHomeObjective extends Schema.Component {
  collectionName: 'components_home_home_objectives';
  info: {
    displayName: 'home-objective';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    descritpionTop: Attribute.Text;
    descritpionBottom: Attribute.Text;
    article: Attribute.Component<'article.article', true>;
  };
}

export interface HomeHomeStarted extends Schema.Component {
  collectionName: 'components_home_home_starteds';
  info: {
    displayName: 'home-started';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    title: Attribute.String;
    button: Attribute.Component<'button.button', true>;
  };
}

export interface IndividualChart extends Schema.Component {
  collectionName: 'components_individual_charts';
  info: {
    displayName: 'chart';
  };
  attributes: {
    title: Attribute.Text;
    descritpionOne: Attribute.Text;
    descritpionTwo: Attribute.Text;
    organizationTitle: Attribute.String;
    organizationContent: Attribute.Text;
    device: Attribute.Component<'button.button'>;
  };
}

export interface IndividualLandingpage extends Schema.Component {
  collectionName: 'components_individual_landingpages';
  info: {
    displayName: 'landingpage';
    icon: 'alien';
  };
  attributes: {
    title: Attribute.Text;
    image: Attribute.Media<'images'>;
    demo: Attribute.Component<'button.button'>;
    descritpionOne: Attribute.Text;
    descritpionTwo: Attribute.Text;
  };
}

export interface IndividualStep extends Schema.Component {
  collectionName: 'components_individual_steps';
  info: {
    displayName: 'step';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    step: Attribute.Component<'step.step'>;
  };
}

export interface IndividualSuch extends Schema.Component {
  collectionName: 'components_individual_suches';
  info: {
    displayName: 'such';
  };
  attributes: {
    title: Attribute.Text;
    descritpion: Attribute.Component<'article.article'>;
  };
}

export interface IndividualYourSelf extends Schema.Component {
  collectionName: 'components_individual_yourselves';
  info: {
    displayName: 'yourSelf';
  };
  attributes: {
    descritpionOne: Attribute.Text;
    descritpionTwo: Attribute.Text;
    image: Attribute.Media<'images'>;
    yourself: Attribute.Component<'button.button'>;
  };
}

export interface MarketingLandingpage extends Schema.Component {
  collectionName: 'components_marketing_landingpage_s';
  info: {
    displayName: 'landingpage';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    question1: Attribute.Text;
    question2: Attribute.Text;
    answer: Attribute.Text;
    image: Attribute.Media<'images'>;
    call: Attribute.Component<'button.button'>;
  };
}

export interface MarketingSection2 extends Schema.Component {
  collectionName: 'components_marketing_section2s';
  info: {
    displayName: 'section2';
  };
  attributes: {
    title: Attribute.Text;
    descritpion: Attribute.Text;
    question: Attribute.Text;
    discover: Attribute.Enumeration<['first', 'second', 'third', 'fourth']>;
  };
}

export interface MarketingSection3 extends Schema.Component {
  collectionName: 'components_marketing_section3s';
  info: {
    displayName: 'section3';
  };
  attributes: {
    question: Attribute.String;
    descritpionOne: Attribute.Text;
    descritpionTwo: Attribute.Text;
    descritpionThree: Attribute.Text;
    image: Attribute.Media<'images', true>;
  };
}

export interface MarketingSection4 extends Schema.Component {
  collectionName: 'components_marketing_section4s';
  info: {
    displayName: 'section4';
  };
  attributes: {
    title: Attribute.Text;
    step: Attribute.Component<'step.step'>;
  };
}

export interface MarketingSection5 extends Schema.Component {
  collectionName: 'components_marketing_section5s';
  info: {
    displayName: 'section5';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    descritpionOne: Attribute.Text;
    descritpionTwo: Attribute.Text;
    descritpionThree: Attribute.Text;
    descritpionFour: Attribute.Text;
    call: Attribute.Component<'button.button'>;
    quesiton: Attribute.Text;
    property: Attribute.Enumeration<
      ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']
    >;
    descBtn: Attribute.Text;
  };
}

export interface StepStep extends Schema.Component {
  collectionName: 'components_step_steps';
  info: {
    displayName: 'step';
    description: '';
  };
  attributes: {
    stepNumber: Attribute.BigInteger;
    content: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.article': ArticleArticle;
      'business.business-description': BusinessBusinessDescription;
      'business.can-used': BusinessCanUsed;
      'business.landingpage': BusinessLandingpage;
      'business.leader-dream': BusinessLeaderDream;
      'business.video': BusinessVideo;
      'button.button': ButtonButton;
      'capitalism.description-1': CapitalismDescription1;
      'capitalism.description-2': CapitalismDescription2;
      'capitalism.description-3': CapitalismDescription3;
      'capitalism.landingpage': CapitalismLandingpage;
      'capitalism.second-part': CapitalismSecondPart;
      'capitalism.third-part': CapitalismThirdPart;
      'home.home-business': HomeHomeBusiness;
      'home.home-choose': HomeHomeChoose;
      'home.home-employer': HomeHomeEmployer;
      'home.home-hero': HomeHomeHero;
      'home.home-objective': HomeHomeObjective;
      'home.home-started': HomeHomeStarted;
      'individual.chart': IndividualChart;
      'individual.landingpage': IndividualLandingpage;
      'individual.step': IndividualStep;
      'individual.such': IndividualSuch;
      'individual.your-self': IndividualYourSelf;
      'marketing.landingpage': MarketingLandingpage;
      'marketing.section2': MarketingSection2;
      'marketing.section3': MarketingSection3;
      'marketing.section4': MarketingSection4;
      'marketing.section5': MarketingSection5;
      'step.step': StepStep;
    }
  }
}
