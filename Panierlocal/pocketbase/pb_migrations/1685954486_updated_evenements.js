migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfuumg1omekkgvf")

  // remove
  collection.schema.removeField("fpap1bzb")

  // remove
  collection.schema.removeField("bya3s3gb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mxl2ok42",
    "name": "dateEvent",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "znskiqyl",
    "name": "heure",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfuumg1omekkgvf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fpap1bzb",
    "name": "dateEvent",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bya3s3gb",
    "name": "heure",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("mxl2ok42")

  // remove
  collection.schema.removeField("znskiqyl")

  return dao.saveCollection(collection)
})
