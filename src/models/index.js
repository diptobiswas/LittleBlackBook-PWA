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

const { Resource, FeaturedContent, Emergency, Events, Organization, Topic } = initSchema(schema);

export {
  Resource,
  FeaturedContent,
  Emergency,
  Events,
  Organization,
  Topic,
  Colour
};