migrate((db) => {
  const collection = new Collection({
    "id": "hy9obtpq6gj8ilj",
    "created": "2023-05-22 08:02:58.740Z",
    "updated": "2023-05-22 08:02:58.740Z",
    "name": "produit",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mm7fdrss",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xl9xhogo",
        "name": "image",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj");

  return dao.deleteCollection(collection);
})
