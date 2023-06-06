migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("obi4vwrfiw2sarq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ckccb5vn",
    "name": "datePublication",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("obi4vwrfiw2sarq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ckccb5vn",
    "name": "publier",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
