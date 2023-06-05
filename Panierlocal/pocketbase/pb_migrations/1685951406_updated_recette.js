migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pidcddwz",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj")

  // remove
  collection.schema.removeField("pidcddwz")

  return dao.saveCollection(collection)
})
