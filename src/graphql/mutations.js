/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDonation = /* GraphQL */ `
  mutation CreateDonation(
    $input: CreateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    createDonation(input: $input, condition: $condition) {
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
export const updateDonation = /* GraphQL */ `
  mutation UpdateDonation(
    $input: UpdateDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    updateDonation(input: $input, condition: $condition) {
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
export const deleteDonation = /* GraphQL */ `
  mutation DeleteDonation(
    $input: DeleteDonationInput!
    $condition: ModelDonationConditionInput
  ) {
    deleteDonation(input: $input, condition: $condition) {
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
export const createRequisition = /* GraphQL */ `
  mutation CreateRequisition(
    $input: CreateRequisitionInput!
    $condition: ModelRequisitionConditionInput
  ) {
    createRequisition(input: $input, condition: $condition) {
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
export const updateRequisition = /* GraphQL */ `
  mutation UpdateRequisition(
    $input: UpdateRequisitionInput!
    $condition: ModelRequisitionConditionInput
  ) {
    updateRequisition(input: $input, condition: $condition) {
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
export const deleteRequisition = /* GraphQL */ `
  mutation DeleteRequisition(
    $input: DeleteRequisitionInput!
    $condition: ModelRequisitionConditionInput
  ) {
    deleteRequisition(input: $input, condition: $condition) {
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
export const createDonor = /* GraphQL */ `
  mutation CreateDonor(
    $input: CreateDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    createDonor(input: $input, condition: $condition) {
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
export const updateDonor = /* GraphQL */ `
  mutation UpdateDonor(
    $input: UpdateDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    updateDonor(input: $input, condition: $condition) {
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
export const deleteDonor = /* GraphQL */ `
  mutation DeleteDonor(
    $input: DeleteDonorInput!
    $condition: ModelDonorConditionInput
  ) {
    deleteDonor(input: $input, condition: $condition) {
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
export const createRecipient = /* GraphQL */ `
  mutation CreateRecipient(
    $input: CreateRecipientInput!
    $condition: ModelRecipientConditionInput
  ) {
    createRecipient(input: $input, condition: $condition) {
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
export const updateRecipient = /* GraphQL */ `
  mutation UpdateRecipient(
    $input: UpdateRecipientInput!
    $condition: ModelRecipientConditionInput
  ) {
    updateRecipient(input: $input, condition: $condition) {
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
export const deleteRecipient = /* GraphQL */ `
  mutation DeleteRecipient(
    $input: DeleteRecipientInput!
    $condition: ModelRecipientConditionInput
  ) {
    deleteRecipient(input: $input, condition: $condition) {
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
export const createStock = /* GraphQL */ `
  mutation CreateStock(
    $input: CreateStockInput!
    $condition: ModelStockConditionInput
  ) {
    createStock(input: $input, condition: $condition) {
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
export const updateStock = /* GraphQL */ `
  mutation UpdateStock(
    $input: UpdateStockInput!
    $condition: ModelStockConditionInput
  ) {
    updateStock(input: $input, condition: $condition) {
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
export const deleteStock = /* GraphQL */ `
  mutation DeleteStock(
    $input: DeleteStockInput!
    $condition: ModelStockConditionInput
  ) {
    deleteStock(input: $input, condition: $condition) {
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
export const createKit = /* GraphQL */ `
  mutation CreateKit(
    $input: CreateKitInput!
    $condition: ModelKitConditionInput
  ) {
    createKit(input: $input, condition: $condition) {
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
export const updateKit = /* GraphQL */ `
  mutation UpdateKit(
    $input: UpdateKitInput!
    $condition: ModelKitConditionInput
  ) {
    updateKit(input: $input, condition: $condition) {
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
export const deleteKit = /* GraphQL */ `
  mutation DeleteKit(
    $input: DeleteKitInput!
    $condition: ModelKitConditionInput
  ) {
    deleteKit(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createDepot = /* GraphQL */ `
  mutation CreateDepot(
    $input: CreateDepotInput!
    $condition: ModelDepotConditionInput
  ) {
    createDepot(input: $input, condition: $condition) {
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
export const updateDepot = /* GraphQL */ `
  mutation UpdateDepot(
    $input: UpdateDepotInput!
    $condition: ModelDepotConditionInput
  ) {
    updateDepot(input: $input, condition: $condition) {
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
export const deleteDepot = /* GraphQL */ `
  mutation DeleteDepot(
    $input: DeleteDepotInput!
    $condition: ModelDepotConditionInput
  ) {
    deleteDepot(input: $input, condition: $condition) {
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
