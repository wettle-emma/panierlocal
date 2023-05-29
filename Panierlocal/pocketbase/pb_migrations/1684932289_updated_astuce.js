migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l5pn2r62899s5au")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2ncgxptw",
    "name": "nbr_usages",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ecqsij2m",
    "name": "etape_1",
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
    "id": "rvpfqupe",
    "name": "etape_2",
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
    "id": "naxq7wmd",
    "name": "etape_3",
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
    "id": "iztbclns",
    "name": "etape_4",
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
  const collection = dao.findCollectionByNameOrId("l5pn2r62899s5au")

  // remove
  collection.schema.removeField("2ncgxptw")

  // remove
  collection.schema.removeField("5pozdkgf")

  // remove
  collection.schema.removeField("ecqsij2m")

  // remove
  collection.schema.removeField("rvpfqupe")

  // remove
  collection.schema.removeField("naxq7wmd")

  // remove
  collection.schema.removeField("iztbclns")

  return dao.saveCollection(collection)
})
