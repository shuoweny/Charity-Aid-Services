import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum CategoryTypes {
  GENERAL = "GENERAL",
  FOOD = "FOOD",
  CLOTHING = "CLOTHING"
}

type EagerFamilyMember = {
  readonly name: string;
  readonly age: number;
  readonly nationality: string;
  readonly idDocuments?: IdDocument[] | null;
}

type LazyFamilyMember = {
  readonly name: string;
  readonly age: number;
  readonly nationality: string;
  readonly idDocuments?: IdDocument[] | null;
}

export declare type FamilyMember = LazyLoading extends LazyLoadingDisabled ? EagerFamilyMember : LazyFamilyMember

export declare const FamilyMember: (new (init: ModelInit<FamilyMember>) => FamilyMember)

type EagerIdDocument = {
  readonly type: string;
  readonly documentID: string;
  readonly expiry: string;
  readonly imageLink?: string | null;
}

type LazyIdDocument = {
  readonly type: string;
  readonly documentID: string;
  readonly expiry: string;
  readonly imageLink?: string | null;
}

export declare type IdDocument = LazyLoading extends LazyLoadingDisabled ? EagerIdDocument : LazyIdDocument

export declare const IdDocument: (new (init: ModelInit<IdDocument>) => IdDocument)

type EagerAmountPerCount = {
  readonly valu: number;
  readonly unit: string;
}

type LazyAmountPerCount = {
  readonly valu: number;
  readonly unit: string;
}

export declare type AmountPerCount = LazyLoading extends LazyLoadingDisabled ? EagerAmountPerCount : LazyAmountPerCount

export declare const AmountPerCount: (new (init: ModelInit<AmountPerCount>) => AmountPerCount)

type EagerObjectQuantity = {
  readonly objectID: string;
  readonly quantity: number;
}

type LazyObjectQuantity = {
  readonly objectID: string;
  readonly quantity: number;
}

export declare type ObjectQuantity = LazyLoading extends LazyLoadingDisabled ? EagerObjectQuantity : LazyObjectQuantity

export declare const ObjectQuantity: (new (init: ModelInit<ObjectQuantity>) => ObjectQuantity)

type EagerDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly donorID: string;
  readonly itemID?: string | null;
  readonly quantity?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly donorID: string;
  readonly itemID?: string | null;
  readonly quantity?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Donation = LazyLoading extends LazyLoadingDisabled ? EagerDonation : LazyDonation

export declare const Donation: (new (init: ModelInit<Donation>) => Donation) & {
  copyOf(source: Donation, mutator: (draft: MutableModel<Donation>) => MutableModel<Donation> | void): Donation;
}

type EagerRequisition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Requisition, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipientID: string;
  readonly depotID: string;
  readonly fulfilled: boolean;
  readonly kits?: (string | null)[] | null;
  readonly kitQuantity?: (number | null)[] | null;
  readonly items?: (string | null)[] | null;
  readonly itemQuantity?: (number | null)[] | null;
  readonly notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRequisition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Requisition, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly recipientID: string;
  readonly depotID: string;
  readonly fulfilled: boolean;
  readonly kits?: (string | null)[] | null;
  readonly kitQuantity?: (number | null)[] | null;
  readonly items?: (string | null)[] | null;
  readonly itemQuantity?: (number | null)[] | null;
  readonly notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Requisition = LazyLoading extends LazyLoadingDisabled ? EagerRequisition : LazyRequisition

export declare const Requisition: (new (init: ModelInit<Requisition>) => Requisition) & {
  copyOf(source: Requisition, mutator: (draft: MutableModel<Requisition>) => MutableModel<Requisition> | void): Requisition;
}

type EagerDonor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isOrganisation: boolean;
  readonly email: string;
  readonly phone: string;
  readonly preferredContactMode: string;
  readonly nationality: string;
  readonly idDocuments?: IdDocument[] | null;
  readonly donorName?: string | null;
  readonly mailingAddress?: string | null;
  readonly organisationName?: string | null;
  readonly principalContactNam?: string | null;
  readonly headquartersAddress?: string | null;
  readonly ABN?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly isOrganisation: boolean;
  readonly email: string;
  readonly phone: string;
  readonly preferredContactMode: string;
  readonly nationality: string;
  readonly idDocuments?: IdDocument[] | null;
  readonly donorName?: string | null;
  readonly mailingAddress?: string | null;
  readonly organisationName?: string | null;
  readonly principalContactNam?: string | null;
  readonly headquartersAddress?: string | null;
  readonly ABN?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Donor = LazyLoading extends LazyLoadingDisabled ? EagerDonor : LazyDonor

export declare const Donor: (new (init: ModelInit<Donor>) => Donor) & {
  copyOf(source: Donor, mutator: (draft: MutableModel<Donor>) => MutableModel<Donor> | void): Donor;
}

type EagerRecipient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly previousAddress: string;
  readonly age: number;
  readonly nationality: string;
  readonly familyCount: number;
  readonly idDocuments?: IdDocument[] | null;
  readonly partner?: FamilyMember | null;
  readonly children?: (FamilyMember | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipient, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly previousAddress: string;
  readonly age: number;
  readonly nationality: string;
  readonly familyCount: number;
  readonly idDocuments?: IdDocument[] | null;
  readonly partner?: FamilyMember | null;
  readonly children?: (FamilyMember | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Recipient = LazyLoading extends LazyLoadingDisabled ? EagerRecipient : LazyRecipient

export declare const Recipient: (new (init: ModelInit<Recipient>) => Recipient) & {
  copyOf(source: Recipient, mutator: (draft: MutableModel<Recipient>) => MutableModel<Recipient> | void): Recipient;
}

type EagerStock = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stock, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemID: string;
  readonly depotID: string;
  readonly quantity: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStock = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stock, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemID: string;
  readonly depotID: string;
  readonly quantity: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Stock = LazyLoading extends LazyLoadingDisabled ? EagerStock : LazyStock

export declare const Stock: (new (init: ModelInit<Stock>) => Stock) & {
  copyOf(source: Stock, mutator: (draft: MutableModel<Stock>) => MutableModel<Stock> | void): Stock;
}

type EagerKit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Kit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly itemIDs?: string[] | null;
  readonly itemQuantities?: number[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyKit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Kit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly itemIDs?: string[] | null;
  readonly itemQuantities?: number[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Kit = LazyLoading extends LazyLoadingDisabled ? EagerKit : LazyKit

export declare const Kit: (new (init: ModelInit<Kit>) => Kit) & {
  copyOf(source: Kit, mutator: (draft: MutableModel<Kit>) => MutableModel<Kit> | void): Kit;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly stockLevels?: number[] | null;
  readonly type: CategoryTypes | keyof typeof CategoryTypes;
  readonly items?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly stockLevels?: number[] | null;
  readonly type: CategoryTypes | keyof typeof CategoryTypes;
  readonly items?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly categoryId: string;
  readonly size?: string | null;
  readonly expiry?: string | null;
  readonly brand?: string | null;
  readonly amountPerCount?: string | null;
  readonly mainIngredients?: (string | null)[] | null;
  readonly allergens?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly categoryId: string;
  readonly size?: string | null;
  readonly expiry?: string | null;
  readonly brand?: string | null;
  readonly amountPerCount?: string | null;
  readonly mainIngredients?: (string | null)[] | null;
  readonly allergens?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

type EagerDepot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Depot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDepot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Depot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Depot = LazyLoading extends LazyLoadingDisabled ? EagerDepot : LazyDepot

export declare const Depot: (new (init: ModelInit<Depot>) => Depot) & {
  copyOf(source: Depot, mutator: (draft: MutableModel<Depot>) => MutableModel<Depot> | void): Depot;
}