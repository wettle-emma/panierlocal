migrate((db) => {
  const collection = new Collection({
    "id": "obi4vwrfiw2sarq",
    "created": "2023-05-22 08:05:12.138Z",
    "updated": "2023-05-22 08:05:12.138Z",
    "name": "produit",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mhkwquwa",
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
        "id": "8uhhsac9",
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
  const collection = dao.findCollectionByNameOrId("obi4vwrfiw2sarq");

  return dao.deleteCollection(collection);
})
