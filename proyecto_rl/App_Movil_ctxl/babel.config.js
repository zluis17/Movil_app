module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Desactiva temporalmente nativewind para probar si es el causante
    // plugins: ["nativewind/babel"],
  };
};
