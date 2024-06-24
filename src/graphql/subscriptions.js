/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDonation = /* GraphQL */ `
  subscription OnCreateDonation($filter: ModelSubscriptionDonationFilterInput) {
    onCreateDonation(filter: $filter) {
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
export const onUpdateDonation = /* GraphQL */ `
  subscription OnUpdateDonation($filter: ModelSubscriptionDonationFilterInput) {
    onUpdateDonation(filter: $filter) {
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
export const onDeleteDonation = /* GraphQL */ `
  subscription OnDeleteDonation($filter: ModelSubscriptionDonationFilterInput) {
    onDeleteDonation(filter: $filter) {
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
export const onCreateRequisition = /* GraphQL */ `
  subscription OnCreateRequisition(
    $filter: ModelSubscriptionRequisitionFilterInput
  ) {
    onCreateRequisition(filter: $filter) {
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
export const onUpdateRequisition = /* GraphQL */ `
  subscription OnUpdateRequisition(
    $filter: ModelSubscriptionRequisitionFilterInput
  ) {
    onUpdateRequisition(filter: $filter) {
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
export const onDeleteRequisition = /* GraphQL */ `
  subscription OnDeleteRequisition(
    $filter: ModelSubscriptionRequisitionFilterInput
  ) {
    onDeleteRequisition(filter: $filter) {
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
export const onCreateDonor = /* GraphQL */ `
  subscription OnCreateDonor($filter: ModelSubscriptionDonorFilterInput) {
    onCreateDonor(filter: $filter) {
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
export const onUpdateDonor = /* GraphQL */ `
  subscription OnUpdateDonor($filter: ModelSubscriptionDonorFilterInput) {
    onUpdateDonor(filter: $filter) {
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
export const onDeleteDonor = /* GraphQL */ `
  subscription OnDeleteDonor($filter: ModelSubscriptionDonorFilterInput) {
    onDeleteDonor(filter: $filter) {
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
export const onCreateRecipient = /* GraphQL */ `
  subscription OnCreateRecipient(
    $filter: ModelSubscriptionRecipientFilterInput
  ) {
    onCreateRecipient(filter: $filter) {
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
export const onUpdateRecipient = /* GraphQL */ `
  subscription OnUpdateRecipient(
    $filter: ModelSubscriptionRecipientFilterInput
  ) {
    onUpdateRecipient(filter: $filter) {
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
export const onDeleteRecipient = /* GraphQL */ `
  subscription OnDeleteRecipient(
    $filter: ModelSubscriptionRecipientFilterInput
  ) {
    onDeleteRecipient(filter: $filter) {
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
export const onCreateStock = /* GraphQL */ `
  subscription OnCreateStock($filter: ModelSubscriptionStockFilterInput) {
    onCreateStock(filter: $filter) {
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
export const onUpdateStock = /* GraphQL */ `
  subscription OnUpdateStock($filter: ModelSubscriptionStockFilterInput) {
    onUpdateStock(filter: $filter) {
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
export const onDeleteStock = /* GraphQL */ `
  subscription OnDeleteStock($filter: ModelSubscriptionStockFilterInput) {
    onDeleteStock(filter: $filter) {
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
export const onCreateKit = /* GraphQL */ `
  subscription OnCreateKit($filter: ModelSubscriptionKitFilterInput) {
    onCreateKit(filter: $filter) {
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
export const onUpdateKit = /* GraphQL */ `
  subscription OnUpdateKit($filter: ModelSubscriptionKitFilterInput) {
    onUpdateKit(filter: $filter) {
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
export const onDeleteKit = /* GraphQL */ `
  subscription OnDeleteKit($filter: ModelSubscriptionKitFilterInput) {
    onDeleteKit(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
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
export const onCreateDepot = /* GraphQL */ `
  subscription OnCreateDepot($filter: ModelSubscriptionDepotFilterInput) {
    onCreateDepot(filter: $filter) {
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
export const onUpdateDepot = /* GraphQL */ `
  subscription OnUpdateDepot($filter: ModelSubscriptionDepotFilterInput) {
    onUpdateDepot(filter: $filter) {
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
export const onDeleteDepot = /* GraphQL */ `
  subscription OnDeleteDepot($filter: ModelSubscriptionDepotFilterInput) {
    onDeleteDepot(filter: $filter) {
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
