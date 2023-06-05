migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("obi4vwrfiw2sarq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2vduhc0i",
    "name": "lienproduit",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("obi4vwrfiw2sarq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2vduhc0i",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
