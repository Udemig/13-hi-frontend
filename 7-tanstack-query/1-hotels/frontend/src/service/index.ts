import { useQuery } from "@tanstack/react-query";
import api from "./api";
import type { FilterParams, PlaceResponse, PlacesResponse } from "../types";

/*
 ! useQuery
 * useQuery hook'una api isteiğinin ismini (queryKey) ve api'a istek atan fonksiyonu (queryFn) veriyoruz.
 * useQuery otomatik  olarak sayfa yüklenince api isteğini atıyor ve gelen cevabın state'ini yönetiyor.
  
 * isLoading, error, data gibi state'leri bizim için yönetiyor
 * * sayesinde gereksiz kod kalabalığının önlemiş oluruz 

 * hata durumunda 3 kez api isteği atılır ve 3'ünde de olumsuz cevap gelirse error state'ini günceller.
 * * anlık sunucu hataalarının önüne geçer.
  
 * useQuery() api'dan gelen cevabı cache'de saklar
 * * aynı isteği birden fazla component'ta kullandığımızda ilk isteğin ardından atılan bütün isteklerde cach'deki veri kullanılır
 * * bunula redux ve context gibi state yönetim kütüphanelerine gerek kalmaz 
 */

export const usePlaces = (params: FilterParams) =>
  useQuery({
    queryKey: ["places", params], // params her değiştiğinde api isteği tekrar atılır
    queryFn: () => api.get<PlacesResponse>("/api/places", { params }),
    select: (res) => res.data.places, // data state'inde tutulacak veriyi belirliyoruz.
    retry: 2, // hata durumunda 2 kez daha api isteği atılır
    retryDelay: 1000, // hata durumunda tekrar istek atmadan önce 1 saniye beklenir.
  });

// id'sine göre konaklama noktasını al
export const usePlace = (id: string | undefined) =>
  useQuery({
    enabled: !!id, // id varsa api isteği atılır
    queryKey: ["place", id],
    queryFn: () => api.get<PlaceResponse>(`/api/place/${id}`),
    select: (res) => res.data.place,
  });
