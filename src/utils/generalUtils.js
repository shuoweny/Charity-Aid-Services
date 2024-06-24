export const addDict = (dict, key, val) => {
  if (dict[key] == null) dict[key] = val;
  else dict[key] += val;
}

export const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
}

export const top10ItemDist = (data, type) => {
  const [items, categories, kits, stocks, requisitions, donations] = [...data], X = 0, Y = 1, topCount = 10;
  var output = [], itemDistCount = {};
  requisitions.forEach(r => {
    for (var i=0; i<r.items.length; i++) {
      if (r.items[i] != null) addDict(itemDistCount, r.items[i], r.itemQuantity[i]);
    }
    
    for (var i=0; i<r.kits.length; i++) {
      var curKit = kits.filter(k => k.id == r.kits[i])[0];
      if (curKit != null) for (var j=0; j<curKit.itemIDs.length; j++) {
        addDict(itemDistCount, curKit.itemIDs[j], curKit.itemQuantities[j] * r.kitQuantity[i]);
      }
    }
  });

  // console.log(itemDistCount);
  Object.keys(itemDistCount).forEach(iID => {
    var curItem = items.filter(i => i.id == iID)[0];
    if (curItem != null) output.push([curItem.name, itemDistCount[iID]])
  })

  output.sort((a, b) => b[Y] - a[Y]);

  var topX = [...output.slice(0, topCount).map(o => o[X]), "(Others)"],
  topY = [...output.slice(0, topCount).map(o => o[Y]), output.slice(topCount).reduce((a, b) => a + b[Y], 0)];

  return (
    {
      x: topX,
      y: topY,
      labels: topX,
      values: topY,
      type: type,
  })
}

export const top5CategDist = (data, type) => {
  const [items, categories, kits, stocks, requisitions, donations] = [...data], X = 0, Y = 1, topCount = 5;
  var output = [], itemDistCount = {}, categDistCount = {};
  requisitions.forEach(r => {
    for (var i=0; i<r.items.length; i++) {
      if (r.items[i] != null) addDict(itemDistCount, r.items[i], r.itemQuantity[i]);
    }
    
    for (var i=0; i<r.kits.length; i++) {
      var curKit = kits.filter(k => k.id == r.kits[i])[0];
      if (curKit != null) for (var j=0; j<curKit.itemIDs.length; j++) {
        addDict(itemDistCount, curKit.itemIDs[j], curKit.itemQuantities[j] * r.kitQuantity[i]);
      }
    }
  });

  // console.log(itemDistCount);
  Object.keys(itemDistCount).forEach(iID => {
    var curItem = items.filter(i => i.id == iID)[0];
    if (curItem != null) addDict(categDistCount, curItem.categoryId, itemDistCount[iID]);
  })

  Object.keys(categDistCount).forEach(cID => {
    var curCateg = categories.filter(c => c.id == cID)[0];
    if (curCateg != null) output.push([curCateg.name, categDistCount[cID]]);
  })

  output.sort((a, b) => b[Y] - a[Y]);

  var topX = [...output.slice(0, topCount).map(o => o[X]), "(Others)"],
  topY = [...output.slice(0, topCount).map(o => o[Y]), output.slice(topCount).reduce((a, b) => a + b[Y], 0)];

  return (
    {
      x: topX,
      y: topY,
      labels: topX,
      values: topY,
      type: type,
  })
}

export const top5LeastStock = (data, type) => {
  const [items, categories, kits, stocks, requisitions, donations] = [...data], X = 0, Y = 1, topCount = 5;
  var output = [], itemStockCount = {};
  stocks.forEach(s => {
    addDict(itemStockCount, s.itemID, s.quantity);
  });

  Object.keys(itemStockCount).forEach(iID => {
    // console.log(itemStockCount);
    var curItem = items.filter(i => i.id == iID)[0];
    if (curItem != null) output.push([curItem.name, itemStockCount[iID]])
  })

  output.sort((a, b) => a[Y] - b[Y]);

  var topX = output.slice(0, topCount).map(o => o[X]),
  topY = output.slice(0, topCount).map(o => o[Y]);

  // console.log(output);

  return (
  {
    x: topX,
    y: topY,
    labels: topX,
    values: topY,
    type: type,
  })
}

export const top5ItemDonat = (data, type) => {
  const [items, categories, kits, stocks, requisitions, donations] = [...data], X = 0, Y = 1, topCount = 5;
  var output = [], itemDonatCount = {};
  donations.forEach(d => {
    addDict(itemDonatCount, d.itemID, d.quantity);
  });

  Object.keys(itemDonatCount).forEach(iID => {
    var curItem = items.filter(i => i.id == iID)[0];
    if (curItem != null) output.push([curItem.name, itemDonatCount[iID]])
  })

  output.sort((a, b) => b[Y] - a[Y]);

  var topX = [...output.slice(0, topCount).map(o => o[X]), "(Others)"],
  topY = [...output.slice(0, topCount).map(o => o[Y]), output.slice(topCount).reduce((a, b) => a + b[Y], 0)];

  // console.log(output);

  return (
  {
    x: topX,
    y: topY,
    labels: topX,
    values: topY,
    type: type,
  })
}