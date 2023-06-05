migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l5pn2r62899s5au")

  collection.name = "astuces"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fjxftkip",
    "name": "photoAstuce",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l5pn2r62899s5au")

  collection.name = "astuce"

  // remove
  collection.schema.removeField("fjxftkip")

  return dao.saveCollection(collection)
})
