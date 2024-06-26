import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Colour {
  RED = "RED",
  BLUE = "BLUE",
  BLACK = "BLACK",
  YELLOW = "YELLOW",
  GREEEN = "GREEEN",
  PURPLE = "PURPLE"
}



type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly ProfilePicture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly ProfilePicture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerResource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Description?: string | null;
  readonly Phone?: string | null;
  readonly Website?: string | null;
  readonly organizationID?: string | null;
  readonly topicID?: string | null;
  readonly SaveStatus?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Description?: string | null;
  readonly Phone?: string | null;
  readonly Website?: string | null;
  readonly organizationID?: string | null;
  readonly topicID?: string | null;
  readonly SaveStatus?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Resource = LazyLoading extends LazyLoadingDisabled ? EagerResource : LazyResource

export declare const Resource: (new (init: ModelInit<Resource>) => Resource) & {
  copyOf(source: Resource, mutator: (draft: MutableModel<Resource>) => MutableModel<Resource> | void): Resource;
}

type EagerFeaturedContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FeaturedContent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFeaturedContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FeaturedContent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FeaturedContent = LazyLoading extends LazyLoadingDisabled ? EagerFeaturedContent : LazyFeaturedContent

export declare const FeaturedContent: (new (init: ModelInit<FeaturedContent>) => FeaturedContent) & {
  copyOf(source: FeaturedContent, mutator: (draft: MutableModel<FeaturedContent>) => MutableModel<FeaturedContent> | void): FeaturedContent;
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
  readonly Image?: string | null;
  readonly Description?: string | null;
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
  readonly Image?: string | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventsOrganizationId?: string | null;
}

export declare type Events = LazyLoading extends LazyLoadingDisabled ? EagerEvents : LazyEvents

export declare const Events: (new (init: ModelInit<Events>) => Events) & {
  copyOf(source: Events, mutator: (draft: MutableModel<Events>) => MutableModel<Events> | void): Events;
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
  readonly Resources?: (Resource | null)[] | null;
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
  readonly Resources: AsyncCollection<Resource>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Organization = LazyLoading extends LazyLoadingDisabled ? EagerOrganization : LazyOrganization

export declare const Organization: (new (init: ModelInit<Organization>) => Organization) & {
  copyOf(source: Organization, mutator: (draft: MutableModel<Organization>) => MutableModel<Organization> | void): Organization;
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
  readonly Resources?: (Resource | null)[] | null;
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
  readonly Resources: AsyncCollection<Resource>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Topic = LazyLoading extends LazyLoadingDisabled ? EagerTopic : LazyTopic

export declare const Topic: (new (init: ModelInit<Topic>) => Topic) & {
  copyOf(source: Topic, mutator: (draft: MutableModel<Topic>) => MutableModel<Topic> | void): Topic;
}