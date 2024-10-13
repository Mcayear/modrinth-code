import tags from "~/generated/state.json";

export const useTags = () =>
  useState("tags", () => ({
    categories: tags.categories,
    loaders: tags.loaders,
    gameVersions: tags.gameVersions,
    donationPlatforms: tags.donationPlatforms,
    reportTypes: tags.reportTypes,
    projectTypes: [
      {
        actual: "mod",
        id: "mod",
        display: "mod",
      },
      {
        actual: "mod",
        id: "plugin",
        display: "plugin",
      },
      {
        actual: "mod",
        id: "datapack",
        display: "data pack",
      },
      {
        actual: "shader",
        id: "shader",
        display: "shader",
      },
      {
        actual: "resourcepack",
        id: "resourcepack",
        display: "resource pack",
      },
      {
        actual: "modpack",
        id: "modpack",
        display: "modpack",
      },
    ],
    loaderData: {
      pluginLoaders: ["nukkit", "pmmp", "endstone", "allay"],
      pluginPlatformLoaders: ["Java", "JS/TS", "Lua"],
      allPluginLoaders: [
        "nukkit",
        "nukkit-mot",
        "pmmp",
        "endstone",
        "allay"
      ],
      dataPackLoaders: ["datapack"],
      modLoaders: ["forge", "fabric", "quilt", "liteloader", "modloader", "rift", "neoforge"],
      hiddenModLoaders: ["liteloader", "modloader", "rift"],
    },
    projectViewModes: ["list", "grid", "gallery"],
    approvedStatuses: ["approved", "archived", "unlisted", "private"],
    rejectedStatuses: ["rejected", "withheld"],
    staffRoles: ["moderator", "admin"],
  }));
