const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.darrellrahan.youthpreneur.dev";
  }

  if (IS_PREVIEW) {
    return "com.darrellrahan.youthpreneur.preview";
  }

  return "com.darrellrahan.youthpreneur";
};

const getAppName = () => {
  if (IS_DEV) {
    return "YouthPreneur (Dev)";
  }

  if (IS_PREVIEW) {
    return "YouthPreneur (Preview)";
  }

  return "YouthPreneur";
};

export default {
  expo: {
    name: getAppName(),
    slug: "youthpreneur",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/adaptive-icon.png",
    scheme: "YouthPreneur",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: getUniqueIdentifier(),
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "1c860336-a9a0-4de4-b6dc-885d70d851fa",
      },
    },
  },
};
