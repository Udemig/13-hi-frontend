import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/index";

// dil listesini getiricek asenkron thunk aksiyonunu oluştur
export const getLanguages = createAsyncThunk("language/getLanguages", async () => {
  // api isteği
  const res = await api.get("/languages");

  // aksiyonun payload'ını return et
  return res.data.languages;
});

// çeviri işlemini gerçekleştiricek asenkron thunk askiyonu
export const translateText = createAsyncThunk("translate/translateText", async (_, { getState }) => {
  // getState: store'da tutulan verilere aksiyon içerisinde erişmeye yarar
  const { translate } = getState();

  // api'a çeviri için istek at
  const res = await api.post("", {
    q: translate.textToTranslate,
    source: translate.sourceLang.value,
    target: translate.targetLang.value,
  });

  // aksiyonun payload'ı olarak çeviri sonucunu return ediyoruz
  return res.data.data.translations.translatedText[0];
});
