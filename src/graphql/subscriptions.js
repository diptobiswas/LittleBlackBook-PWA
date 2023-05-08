/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource($filter: ModelSubscriptionResourceFilterInput) {
    onCreateResource(filter: $filter) {
      id
      Name
      Address
      Description
      Phone
      Website
      organizationID
      topicID
      SaveStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource($filter: ModelSubscriptionResourceFilterInput) {
    onUpdateResource(filter: $filter) {
      id
      Name
      Address
      Description
      Phone
      Website
      organizationID
      topicID
      SaveStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource($filter: ModelSubscriptionResourceFilterInput) {
    onDeleteResource(filter: $filter) {
      id
      Name
      Address
      Description
      Phone
      Website
      organizationID
      topicID
      SaveStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateFeaturedContent = /* GraphQL */ `
  subscription OnCreateFeaturedContent(
    $filter: ModelSubscriptionFeaturedContentFilterInput
  ) {
    onCreateFeaturedContent(filter: $filter) {
      id
      Title
      Description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateFeaturedContent = /* GraphQL */ `
  subscription OnUpdateFeaturedContent(
    $filter: ModelSubscriptionFeaturedContentFilterInput
  ) {
    onUpdateFeaturedContent(filter: $filter) {
      id
      Title
      Description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteFeaturedContent = /* GraphQL */ `
  subscription OnDeleteFeaturedContent(
    $filter: ModelSubscriptionFeaturedContentFilterInput
  ) {
    onDeleteFeaturedContent(filter: $filter) {
      id
      Title
      Description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEmergency = /* GraphQL */ `
  subscription OnCreateEmergency(
    $filter: ModelSubscriptionEmergencyFilterInput
  ) {
    onCreateEmergency(filter: $filter) {
      id
      Name
      Phone
      Icon
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEmergency = /* GraphQL */ `
  subscription OnUpdateEmergency(
    $filter: ModelSubscriptionEmergencyFilterInput
  ) {
    onUpdateEmergency(filter: $filter) {
      id
      Name
      Phone
      Icon
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEmergency = /* GraphQL */ `
  subscription OnDeleteEmergency(
    $filter: ModelSubscriptionEmergencyFilterInput
  ) {
    onDeleteEmergency(filter: $filter) {
      id
      Name
      Phone
      Icon
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onCreateEvents(filter: $filter) {
      id
      Name
      Address
      Organization {
        id
        Name
        Addres
        Phone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Day
      Month
      Image
      Description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      eventsOrganizationId
    }
  }
`;
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onUpdateEvents(filter: $filter) {
      id
      Name
      Address
      Organization {
        id
        Name
        Addres
        Phone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Day
      Month
      Image
      Description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      eventsOrganizationId
    }
  }
`;
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents($filter: ModelSubscriptionEventsFilterInput) {
    onDeleteEvents(filter: $filter) {
      id
      Name
      Address
      Organization {
        id
        Name
        Addres
        Phone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Day
      Month
      Image
      Description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      eventsOrganizationId
    }
  }
`;
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onCreateTopic(filter: $filter) {
      id
      Name
      Icon
      Colour
      Resources {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onUpdateTopic(filter: $filter) {
      id
      Name
      Icon
      Colour
      Resources {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic($filter: ModelSubscriptionTopicFilterInput) {
    onDeleteTopic(filter: $filter) {
      id
      Name
      Icon
      Colour
      Resources {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
      id
      Name
      Addres
      Phone
      Resources {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
      id
      Name
      Addres
      Phone
      Resources {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
      id
      Name
      Addres
      Phone
      Resources {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
