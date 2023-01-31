// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Colour = {
  "RED": "RED",
  "BLUE": "BLUE",
  "BLACK": "BLACK",
  "YELLOW": "YELLOW",
  "GREEEN": "GREEEN",
  "PURPLE": "PURPLE"
};

const { FeaturedContent, Resource, Topic, Organization, Emergency, Events } = initSchema(schema);

export {
  FeaturedContent,
  Resource,
  Topic,
  Organization,
  Emergency,
  Events,
  Colour
};