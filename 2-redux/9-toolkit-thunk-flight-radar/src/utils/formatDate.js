const formatDate = (unixTime) => {
  // değer yoksa null dön
  if (!unixTime || unixTime === 0) return null;

  // saniye formatındaki veriyi milisaniye formatına çevir
  const formatted = new Date(unixTime * 1000);

  // tarihi kullanıcı dostu formata getir
  return formatted.toLocaleTimeString("tr", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default formatDate;
