// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CategoryTypes = {
  "GENERAL": "GENERAL",
  "FOOD": "FOOD",
  "CLOTHING": "CLOTHING"
};

const { Donation, Requisition, Donor, Recipient, Stock, Kit, Category, Item, Depot, FamilyMember, IdDocument, AmountPerCount, ObjectQuantity } = initSchema(schema);

export {
  Donation,
  Requisition,
  Donor,
  Recipient,
  Stock,
  Kit,
  Category,
  Item,
  Depot,
  CategoryTypes,
  FamilyMember,
  IdDocument,
  AmountPerCount,
  ObjectQuantity
};