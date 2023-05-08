/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
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
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
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
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
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
export const createFeaturedContent = /* GraphQL */ `
  mutation CreateFeaturedContent(
    $input: CreateFeaturedContentInput!
    $condition: ModelFeaturedContentConditionInput
  ) {
    createFeaturedContent(input: $input, condition: $condition) {
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
export const updateFeaturedContent = /* GraphQL */ `
  mutation UpdateFeaturedContent(
    $input: UpdateFeaturedContentInput!
    $condition: ModelFeaturedContentConditionInput
  ) {
    updateFeaturedContent(input: $input, condition: $condition) {
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
export const deleteFeaturedContent = /* GraphQL */ `
  mutation DeleteFeaturedContent(
    $input: DeleteFeaturedContentInput!
    $condition: ModelFeaturedContentConditionInput
  ) {
    deleteFeaturedContent(input: $input, condition: $condition) {
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
export const createEmergency = /* GraphQL */ `
  mutation CreateEmergency(
    $input: CreateEmergencyInput!
    $condition: ModelEmergencyConditionInput
  ) {
    createEmergency(input: $input, condition: $condition) {
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
export const updateEmergency = /* GraphQL */ `
  mutation UpdateEmergency(
    $input: UpdateEmergencyInput!
    $condition: ModelEmergencyConditionInput
  ) {
    updateEmergency(input: $input, condition: $condition) {
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
export const deleteEmergency = /* GraphQL */ `
  mutation DeleteEmergency(
    $input: DeleteEmergencyInput!
    $condition: ModelEmergencyConditionInput
  ) {
    deleteEmergency(input: $input, condition: $condition) {
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
export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
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
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
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
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
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
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
