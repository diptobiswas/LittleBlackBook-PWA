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

const { Resource, Topic, Organization, Emergency, Events, OrganizationResource } = initSchema(schema);

export {
  Resource,
  Topic,
  Organization,
  Emergency,
  Events,
  OrganizationResource,
  Colour
};