import { supabase } from "../services/supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("Cabins").select("*");
  if (error) throw new Error("Cabins could not be loaded");
  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) throw new Error("Error is ,", error);

  return data;
};
