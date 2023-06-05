migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj")

  collection.name = "recettes"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9zar018x",
    "name": "photoRecette",
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
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj")

  collection.name = "recette"

  // remove
  collection.schema.removeField("9zar018x")

  return dao.saveCollection(collection)
})
