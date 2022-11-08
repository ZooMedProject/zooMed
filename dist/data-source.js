"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
const AppDataSource = new typeorm_1.DataSource(process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
    }
    : {
        type: "postgres",
        host: process.env.DB_HOST,
        database: process.env.DB,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        synchronize: false,
        logging: true,
        entities: process.env.NODE_ENV === "production"
            ? ["dist/entities/*.js"]
            : ["src/entities/*.ts"],
        migrations: process.env.NODE_ENV === "production"
            ? ["dist/migrations/*.js"]
            : ["src/migrations/*.ts"],
        ssl: true,
        extra: { ssl: { rejectUnauthorized: false } },
    });
exports.default = AppDataSource;
