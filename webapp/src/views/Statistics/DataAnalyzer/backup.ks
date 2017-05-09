
export const CATEGORY_ME = [
  { label: 'All categories',
    value: 'Total' ,
  },
  { label: 'Food And Live Animals', value: 'FoodAndLiveAnimals',
    topics:["RETA"],
    instruments: [{name:"Australian Agricultural Company", id:"AAC.AX"},{name:"Elders Ltd",id:"ELD.AX"},
      {name:"Graincorp Ltd",id:"GNC.AX"},{name: "Ridley Corporation Ltd",id:"RIC.AX"},
      {name:"Tassal Group Limited",id:"TGR.AX"},{name:"Webster Ltd",id:"WBA.AX"}]
   },
  { label: 'Beverages And Tobacco', value: 'BeveragesAndTobacco',
    topics: ['RETA'],
    instruments: [{name:"Coca Cola",id:"CCL.AX"}, {name:"Australian Whiskey Holdings",id:"AWY.AX"},
      {name:"Tianmei Beverage Group Corporation Limited",id:"TB8.AX"}]
  },
  { label: 'Crud Material And Inedible',
    value: 'CrudMaterialAndInedible',
    topics: ['RETA'],
    instruments: [{name:"Alicanto Minerals Limited",id:"AQI.AX"}, {name:"Alara Resources Limited",id:"AUQ.AX"},
      {name:"Atc Alloys Ltd",id:"ATA.AX"}, {name:"Woollongong Coal Limited",id:"WLC.AX"}]

  },
  { label: 'Mineral Fuel Lubricent And related material',
    value: 'MineralFuelLubricentAndRelatedMaterial',
    topics:['RETA'],
    instruments: [{name:"Ceramic Fuel Cells Limited",id:"CFU.AX"}, {name:"Antilles Oil And Gas",id:"AZZ.AX"},
      {name:"Austex Oil Limited",id:"AOK.AX"}, {name:"Freedom Oil And Gas Limited",id:"FDM.AX"}, {name:"BHP Billiton Limited",id:"BHP.AX"}]
   },
  { label: 'Animal and vegitable oil fat and waxes',
    value: 'AnimalAndVegitableOilFatAndWaxes',
    topics:['RETA'],
    instruments: [{name:"Australian Agricultural Company", id:"AAC.AX"},{name:"Elders Ltd",id:"ELD.AX"},
      {name:"Graincorp Ltd",id:"GNC.AX"},{name: "Ridley Corporation Ltd",id:"RIC.AX"},{name:"Tassal Group Limited",id:"TGR.AX"},{name:"Webster Ltd",id:"WBA.AX"}]
  },
  { label: 'Chemicals And Related Products',
    value: 'ChemicalsAndRelatedProducts',
    topics:['RETA'],
    instruments: [{name:"Acrux Limited",id:"ACR.AX"}, {name:"Bioxyne Limited",id:"BXN.AX"},
      {name:"Living Cell Technologies",id:"LCT.AX"}, {name:"Medlab Clinical Limited",id:"MDC.AX"}, {name:"Suda Ltd",id:"SUD.AX"}]

   },
  { label: 'Manufacture Goods',
    value: 'ManufacturedGoods' ,
    topics:['RETA'],
    instruments: [{name:"Ookami Limited",id:"OOK.AX"}, {name:"Advanced Braking Technology",id:"ABV.AX"},
      {name:"Bluglass Limited",id:"BLG.AX"}]
  },
  { label: 'Machinery And Transport Equipments',
    value: 'MachineryAndTransportEquipments',
    topics:['RETA'],
    instruments: [{name:"Traffic Technologies Limited",id:"TTI.AX"}, {name:"Macquarie Atlas Roads Group",id:"MQA.AX"},
      {name:"Sydney Airport",id:"SYD.AX"}, {name:"Aurizon Holdings Limited",id:"AZJ.AX"}]
  },
  { label: 'Other Manufactured Articles',
    value: 'OtherManufacturedArticles' ,
    topics:['RETA'],
    instruments: [{name:"Silex Systems Limited",id:"SLX.AX"}, {name:"Netcomm Wireless Limited",id:"NTC.AX"},
      {name:"Group Limited",id:"NASDAQ"}]
  },
  { label: 'Unclassified',
    value: 'Unclassified' ,
    topics: ['RETA'],
    instruments: [{name:"Coca Cola",id:"CCL.AX"}, {name:"Australian Whiskey Holdings",id:"AWY.AX"},
      {name:"Tianmei Beverage Group Corporation Limited",id:"TB8.AX"}]
  },
];

export const CATEGORY_RT = [
  { label: 'All categories',
    value: 'Total'
  },
  { label: 'Food related category',
    value: 'Food' ,
    topics: ['RET'],
    instruments: [{name:"Freedom Foods",id:"FNP.AX"}, {name:"Inghams Group Limited",id:"ING.AX"}, {name:"Tassal Group Limited",id:"TGR.AX"}, {name:"Seafarms Group Limited",id:"SFG.AX"}, {name:"Woolsworths",id:"WOW.AX"}]
  },
  { label: 'HouseholdGood category',
    value: 'HouseholdGood' ,
    topics: ['FOD'],
    instruments: [{name:"Home Depot",id:"HD"}, {name:"Nick Scali",id:"NCK.AX"}, {name:"Harvey Norman",id:"HVN.AX"}, {name:"Ennis Inc",id:"EBF"}, {name:"Bed Bath And Beyond",id:"BBBY"}]
  },
  { label: 'Clothing Footware And Personal Accessory category',
    value: 'ClothingFootwareAndPersonalAccessory',
    topics:['TEX'],
    instruments: [{name:"Gap Inc",id:"GPS"}, {name:"Footlocker",id:"FL"}, {name:"Billabong International",id:"BBG.AX"}, {name:"Michael Hill International Limited",id:"MHJ.AX"}]
   },
  { label: 'Stores',
    value: 'DepartmentStores' ,
    topics: ['WHO'],
    instruments: [{name:"Walmart Stores",id:"WMT"}, {name:"Costco Wholesale Corporation",id:"COST"}, {name:"Myer Holdings",id:"MYR.AX"}, {name:"Nick Scali",id:"NCK.AX"}, {name:"Harvey Norman",id:"HVN.AX"}]
  },
  { label: 'Restaurants',
    value: 'CafesResturantsAndTakeawayFood',
    topics:['LEI'],
    instruments: [{name:"Mcdonalds",id:"MCD"}, {name:"Ark Restaurants Corp",id:"ARKR"}, {name:"BJ Resutaurants Inc",id:"BJRI"}, {name:"Starbucks",id:"SBUX"}]
   },
  { label: 'others',
    value: 'Other' ,
    topics:['RET'],
    instruments: [{name:"Jb Hifi",id:"JBH.AX"}, {name:"Activistic Limited",id:"ACU.AX"}, {name:"Dropsuite Limited",id:"DSE.AX"}, {name:"Get Swift Limited",id:"GSW.AX"}]
  },
];
