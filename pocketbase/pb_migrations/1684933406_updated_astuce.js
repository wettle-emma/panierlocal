migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l5pn2r62899s5au")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5pozdkgf",
    "name": "produits",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 11,
      "values": [
        "eau",
        "citron",
        "recipient",
        "eponge",
        "balai",
        "torchon",
        "brosse",
        "savon",
        "bicarbonate de soude",
        "vinaigre blanc",
        "liquide vaisselle"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l5pn2r62899s5au")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5pozdkgf",
    "name": "produits",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "eau",
        "citron",
        "recipient",
        "eponge",
        "balai",
        "torchon",
        "brosse",
        "savon",
        "bicarbonate de soude",
        "vinaigre blanc",
        "liquide vaisselle"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
