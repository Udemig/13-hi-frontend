// Girdi: Furkan Mehmet Evin
// Çıktı: @furkan_mehmet_evin

export const getUserName = (name) => {
  return "@" + name.trim().toLowerCase().replaceAll(" ", "_");
};
