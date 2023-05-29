migrate((db) => {
  const collection = new Collection({
    "id": "l5pn2r62899s5au",
    "created": "2023-05-22 08:04:30.311Z",
    "updated": "2023-05-22 08:04:30.311Z",
    "name": "astuce",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4qkojsuf",
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
        "id": "bxywcohr",
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
  const collection = dao.findCollectionByNameOrId("l5pn2r62899s5au");

  return dao.deleteCollection(collection);
})
