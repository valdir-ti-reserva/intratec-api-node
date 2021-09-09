module.exports = {
  "type": "sqlite",
  "database": `${process.env.FOLDER_APP}/database/database.sqlite`,
  "migrations": [`${process.env.FOLDER_APP}/database/migrations/*.${process.env.EXTENSION_APP}`],
  "entities": [`${process.env.FOLDER_APP}/entities/*.${process.env.EXTENSION_APP}`],
  "cli": {
    "migrationsDir": `${process.env.FOLDER_APP}/database/migrations`,
    "entitiesDir": `${process.env.FOLDER_APP}/entities`  
  }
}
