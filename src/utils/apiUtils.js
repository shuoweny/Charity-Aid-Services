import {
  listDepots, listItems, listCategories,
  listKits, listStocks, listDonors, listRecipients,
  listDonations, listRequisitions
} from "../graphql/queries";
import { API } from "aws-amplify";
import {
  // createDepot as createDepotMutation,
  createItem as createItemMutation,
  createCategory as createCategoryMutation,
  createKit as createKitMutation,
  createStock as createStockMutation,
  createDonor as createDonorMutation,
  createRecipient as createRecipientMutation,
  createDonation as createDonationMutation,
  createRequisition as createRequisitionMutation,
  updateItem as updateItemMutation,
  updateCategory as updateCategoryMutation,
  updateKit as updateKitMutation,
  updateStock as updateStockMutation,
  updateDonor as updateDonorMutation,
  updateRecipient as updateRecipientMutation,
  updateDonation as updateDonationMutation,
  updateRequisition as updateRequisitionMutation,
  // deleteDepot as deleteDepotMutation,
} from "../graphql/mutations";


//////////////// CREATE DATA ////////////////
const createData = async (query, data) => {
  console.log(data);
  await API.graphql({
    query: query,
    variables: { input: data }
  });
}

export const createItem = async (formData) => {
  var data = {...formData}
  createData(createItemMutation, data);
}

export const createCategory = async (formData) => {
  createData(createCategoryMutation, formData);
}

export const createKit = async (formData) => {
  createData(createKitMutation, formData);
}

export const createStock = async (formData) => {
  createData(createStockMutation, formData);
}

export const createDonor = async (data) => {
  createData(createDonorMutation, data);
}

export const createRecipient = async (formData) => {
  var data = {...formData};
  for (var i=0; i<data.idDocuments.length; i++) {
    if (data.idDocuments[i] == null) continue;
    var imgName = `${data.name.replace(" ", "")}-self-${i}`;
    data.idDocuments[i].imageLink = imgName;
    // await Storage.put(imgName, data.idDocuments[i].image);
    delete data.idDocuments[i].image;
  }
  if (data.partner != null) {
    for (var i=0; i<data.partner.idDocuments.length; i++) {
      if (data.partner.idDocuments[i] == null) continue;
      var imgName = `${data.name.replace(" ", "")}-partner-${i}`;
      data.partner.idDocuments[i].imageLink = imgName;
      // await Storage.put(imgName, data.partner.idDocuments[i].image);
      delete data.partner.idDocuments[i].image;
    }
  }
  if (data.children != null) {
    for (var i=0; i<data.children.length; i++) {
      for (var j=0; j<data.children[i].idDocuments.length; j++) {
        if (data.children[i].idDocuments[j] == null) continue;
        var imgName = `${data.name.replace(" ", "")}-children${i}-${j}`;
        data.children[i].idDocuments[j].imageLink = imgName;
        // await Storage.put(imgName, data.children[i].idDocuments[j].image);
        delete data.children[i].idDocuments[j].image;
      }
    }
  }
  createData(createRecipientMutation, data);
}

export const createDonation = async (data) => {
  // var data = {};
  // const formData = new FormData(form);
  // for (var [key, value] of formData) {
  //   data[key] = value;
  // }
  createData(createDonationMutation, data);
}

export const createRequisition = async (data) => {
  // var data = {};
  // const formData = new FormData(form);
  // for (var [key, value] of formData) {
  //   data[key] = value;
  // }
  createData(createRequisitionMutation, data);
}

//////////////// FETCH DATA ////////////////
const fetchData = async (query, queryName, setData) => {
  const apiData = await API.graphql({ query: query });
  const dataFromAPI = apiData.data[queryName].items;
  await setData(dataFromAPI);
}

export const fetchDepots = async (setDepots) => {
  await fetchData(listDepots, "listDepots", setDepots);
};

export const fetchStocks = async (setStocks) => {
  await fetchData(listStocks, "listStocks", setStocks);
}

export const fetchItems = async (setItems) => {
  await fetchData(listItems, "listItems", setItems);
}

export const fetchCategories = async (setCategories) => {
  await fetchData(listCategories, "listCategories", setCategories);
}

export const fetchKits = async (setKits) => {
  await fetchData(listKits, "listKits", setKits);
}

export const fetchDonors = async (setDonors) => {
  await fetchData(listDonors, "listDonors", setDonors);
}

export const fetchRecipients = async (setRecipients) => {
  await fetchData(listRecipients, "listRecipients", setRecipients);
}

export const fetchDonations = async (setDonations) => {
  await fetchData(listDonations, "listDonations", setDonations);
}

export const fetchRequisitions = async (setRequisitions) => {
  await fetchData(listRequisitions, "listRequisitions", setRequisitions);
}

//////////////// UPDATE DATA ////////////////
const updateData = async (query, id, data, extraData) => {
  await API.graphql({
    query: query,
    variables: { input: data }
  });
}

export const updateStock = async (id, form, extraData) => {
  updateData(updateStockMutation, id, form);
}

export const updateRequisition = async (id, form, extraData) => {
  console.log(form);
  updateData(updateRequisitionMutation, id, form);
}

//////////////// DELETE DATA ////////////////
// export const deleteDepot = async (toDelId) => {
//   // const newDepots = depots.filter((d) => d.id !== toDelId);
//   // setDepots(newDepots);
//   console.log(toDelId);
//   await API.graphql({
//     query: deleteDepotMutation,
//     variables: { input: { id: toDelId } },
//   });
// };