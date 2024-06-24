/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDonation = /* GraphQL */ `
  query GetDonation($id: ID!) {
    getDonation(id: $id) {
      id
      donorID
      itemID
      quantity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDonations = /* GraphQL */ `
  query ListDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        donorID
        itemID
        quantity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDonations = /* GraphQL */ `
  query SyncDonations(
    $filter: ModelDonationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDonations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        donorID
        itemID
        quantity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRequisition = /* GraphQL */ `
  query GetRequisition($id: ID!) {
    getRequisition(id: $id) {
      id
      recipientID
      depotID
      fulfilled
      kits
      kitQuantity
      items
      itemQuantity
      notes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRequisitions = /* GraphQL */ `
  query ListRequisitions(
    $filter: ModelRequisitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequisitions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipientID
        depotID
        fulfilled
        kits
        kitQuantity
        items
        itemQuantity
        notes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRequisitions = /* GraphQL */ `
  query SyncRequisitions(
    $filter: ModelRequisitionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRequisitions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        recipientID
        depotID
        fulfilled
        kits
        kitQuantity
        items
        itemQuantity
        notes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDonor = /* GraphQL */ `
  query GetDonor($id: ID!) {
    getDonor(id: $id) {
      id
      isOrganisation
      email
      phone
      preferredContactMode
      nationality
      idDocuments {
        type
        documentID
        expiry
        imageLink
      }
      donorName
      mailingAddress
      organisationName
      principalContactNam
      headquartersAddress
      ABN
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDonors = /* GraphQL */ `
  query ListDonors(
    $filter: ModelDonorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isOrganisation
        email
        phone
        preferredContactMode
        nationality
        idDocuments {
          type
          documentID
          expiry
          imageLink
        }
        donorName
        mailingAddress
        organisationName
        principalContactNam
        headquartersAddress
        ABN
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDonors = /* GraphQL */ `
  query SyncDonors(
    $filter: ModelDonorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDonors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        isOrganisation
        email
        phone
        preferredContactMode
        nationality
        idDocuments {
          type
          documentID
          expiry
          imageLink
        }
        donorName
        mailingAddress
        organisationName
        principalContactNam
        headquartersAddress
        ABN
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRecipient = /* GraphQL */ `
  query GetRecipient($id: ID!) {
    getRecipient(id: $id) {
      id
      name
      previousAddress
      age
      nationality
      familyCount
      idDocuments {
        type
        documentID
        expiry
        imageLink
      }
      partner {
        name
        age
        nationality
        idDocuments {
          type
          documentID
          expiry
          imageLink
        }
      }
      children {
        name
        age
        nationality
        idDocuments {
          type
          documentID
          expiry
          imageLink
        }
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRecipients = /* GraphQL */ `
  query ListRecipients(
    $filter: ModelRecipientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        previousAddress
        age
        nationality
        familyCount
        idDocuments {
          type
          documentID
          expiry
          imageLink
        }
        partner {
          name
          age
          nationality
        }
        children {
          name
          age
          nationality
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRecipients = /* GraphQL */ `
  query SyncRecipients(
    $filter: ModelRecipientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRecipients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        previousAddress
        age
        nationality
        familyCount
        idDocuments {
          type
          documentID
          expiry
          imageLink
        }
        partner {
          name
          age
          nationality
        }
        children {
          name
          age
          nationality
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStock = /* GraphQL */ `
  query GetStock($id: ID!) {
    getStock(id: $id) {
      id
      itemID
      depotID
      quantity
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listStocks = /* GraphQL */ `
  query ListStocks(
    $filter: ModelStockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemID
        depotID
        quantity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStocks = /* GraphQL */ `
  query SyncStocks(
    $filter: ModelStockFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStocks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        itemID
        depotID
        quantity
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getKit = /* GraphQL */ `
  query GetKit($id: ID!) {
    getKit(id: $id) {
      id
      name
      itemIDs
      itemQuantities
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listKits = /* GraphQL */ `
  query ListKits(
    $filter: ModelKitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        itemIDs
        itemQuantities
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncKits = /* GraphQL */ `
  query SyncKits(
    $filter: ModelKitFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncKits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        itemIDs
        itemQuantities
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      stockLevels
      type
      items
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        stockLevels
        type
        items
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        stockLevels
        type
        items
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      categoryId
      size
      expiry
      brand
      amountPerCount
      mainIngredients
      allergens
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        categoryId
        size
        expiry
        brand
        amountPerCount
        mainIngredients
        allergens
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncItems = /* GraphQL */ `
  query SyncItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        categoryId
        size
        expiry
        brand
        amountPerCount
        mainIngredients
        allergens
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDepot = /* GraphQL */ `
  query GetDepot($id: ID!) {
    getDepot(id: $id) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDepots = /* GraphQL */ `
  query ListDepots(
    $filter: ModelDepotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDepots = /* GraphQL */ `
  query SyncDepots(
    $filter: ModelDepotFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDepots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
