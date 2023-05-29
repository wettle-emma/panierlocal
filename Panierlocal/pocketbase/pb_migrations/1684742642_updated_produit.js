migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj")

  collection.name = "recette"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj")

  collection.name = "produit"

  return dao.saveCollection(collection)
})
