const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// apis: ["./routes/*.js"],
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.exmaple.com/support",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url: "https://be-quincey.vercel.app/api/v1",
        description: "My API Documentation",
      },
    ],
  },
  // This is to call all the file
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc({
  definition: swaggerDocument,
  apis: ["./routes/*.js"],
});

function swaggerDocs(app, port) {
  // Swagger Page
  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // Documentation in JSON format
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerDocument);
  });
  // app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  // app.use("/posts", postRouter);
}

module.exports = swaggerDocs;
