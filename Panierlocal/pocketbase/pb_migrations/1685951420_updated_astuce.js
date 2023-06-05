migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l5pn2r62899s5au")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v02kyx18",
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
  const collection = dao.findCollectionByNameOrId("l5pn2r62899s5au")

  // remove
  collection.schema.removeField("v02kyx18")

  return dao.saveCollection(collection)
})
