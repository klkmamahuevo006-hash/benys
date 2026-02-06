const { REST, Routes } = require("discord.js");
const config = require("./config");

// PON ESTOS DATOS:
const CLIENT_ID = "1469096173997396115";
const GUILD_ID = "1327386366203662446";

const rest = new REST({ version: "10" }).setToken(config.discord.token);

(async () => {
  try {
    console.log("🧹 Deleting slash commands from your server...");

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: [] }
    );

    console.log("✅ Slash commands deleted successfully!");
  } catch (err) {
    console.error("❌ Error deleting commands:", err);
  }
})();
