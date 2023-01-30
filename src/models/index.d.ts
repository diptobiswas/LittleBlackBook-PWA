import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum Colour {
  RED = "RED",
  BLUE = "BLUE",
  BLACK = "BLACK",
  YELLOW = "YELLOW",
  GREEEN = "GREEEN",
  PURPLE = "PURPLE"
}



type EagerResource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Phone?: string | null;
  readonly Description?: string | null;
  readonly Website?: string | null;
  readonly Address?: string | null;
  readonly SaveStatus?: boolean | null;
  readonly Topic?: Topic | null;
  readonly Organization?: Organization | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly resourceTopicId?: string | null;
  readonly resourceOrganizationId?: string | null;
}

type LazyResource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Phone?: string | null;
  readonly Description?: string | null;
  readonly Website?: string | null;
  readonly Address?: string | null;
  readonly SaveStatus?: boolean | null;
  readonly Topic: AsyncItem<Topic | undefined>;
  readonly Organization: AsyncItem<Organization | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly resourceTopicId?: string | null;
  readonly resourceOrganizationId?: string | null;
}

export declare type Resource = LazyLoading extends LazyLoadingDisabled ? EagerResource : LazyResource

export declare const Resource: (new (init: ModelInit<Resource>) => Resource) & {
  copyOf(source: Resource, mutator: (draft: MutableModel<Resource>) => MutableModel<Resource> | void): Resource;
}

type EagerTopic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Topic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Icon?: string | null;
  readonly Colour?: Colour | keyof typeof Colour | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTopic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Topic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Icon?: string | null;
  readonly Colour?: Colour | keyof typeof Colour | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Topic = LazyLoading extends LazyLoadingDisabled ? EagerTopic : LazyTopic

export declare const Topic: (new (init: ModelInit<Topic>) => Topic) & {
  copyOf(source: Topic, mutator: (draft: MutableModel<Topic>) => MutableModel<Topic> | void): Topic;
}

type EagerOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Addres?: string | null;
  readonly Phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Addres?: string | null;
  readonly Phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Organization = LazyLoading extends LazyLoadingDisabled ? EagerOrganization : LazyOrganization

export declare const Organization: (new (init: ModelInit<Organization>) => Organization) & {
  copyOf(source: Organization, mutator: (draft: MutableModel<Organization>) => MutableModel<Organization> | void): Organization;
}

type EagerEmergency = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Emergency, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Phone?: string | null;
  readonly Icon?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmergency = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Emergency, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Phone?: string | null;
  readonly Icon?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Emergency = LazyLoading extends LazyLoadingDisabled ? EagerEmergency : LazyEmergency

export declare const Emergency: (new (init: ModelInit<Emergency>) => Emergency) & {
  copyOf(source: Emergency, mutator: (draft: MutableModel<Emergency>) => MutableModel<Emergency> | void): Emergency;
}

type EagerEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Events, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Organization?: Organization | null;
  readonly Day?: string | null;
  readonly Month?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventsOrganizationId?: string | null;
}

type LazyEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Events, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Organization: AsyncItem<Organization | undefined>;
  readonly Day?: string | null;
  readonly Month?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventsOrganizationId?: string | null;
}

export declare type Events = LazyLoading extends LazyLoadingDisabled ? EagerEvents : LazyEvents

export declare const Events: (new (init: ModelInit<Events>) => Events) & {
  copyOf(source: Events, mutator: (draft: MutableModel<Events>) => MutableModel<Events> | void): Events;
}