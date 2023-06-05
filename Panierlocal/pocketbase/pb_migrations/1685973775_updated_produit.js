migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("obi4vwrfiw2sarq")

  collection.name = "produits"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2e6t58di",
    "name": "photoProduit",
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
  const collection = dao.findCollectionByNameOrId("obi4vwrfiw2sarq")

  collection.name = "produit"

  // remove
  collection.schema.removeField("2e6t58di")

  return dao.saveCollection(collection)
})
