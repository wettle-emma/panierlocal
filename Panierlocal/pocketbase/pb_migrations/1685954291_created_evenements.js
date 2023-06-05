migrate((db) => {
  const collection = new Collection({
    "id": "tfuumg1omekkgvf",
    "created": "2023-06-05 08:38:11.008Z",
    "updated": "2023-06-05 08:38:11.008Z",
    "name": "evenements",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jcuffmll",
        "name": "imageEvent",
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
      },
      {
        "system": false,
        "id": "8qttrdzc",
        "name": "nameEvent",
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
        "id": "fpap1bzb",
        "name": "dateEvent",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "bya3s3gb",
        "name": "heure",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "c6gzxexf",
        "name": "adresseEvent",
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
        "id": "uqghwkkb",
        "name": "tel",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("tfuumg1omekkgvf");

  return dao.deleteCollection(collection);
})
