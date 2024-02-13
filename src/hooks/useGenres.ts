import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

export default function useGenres() {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results)
      })
      .catch((err) => {
        if (err instanceof CanceledError === false) {
          setError(err.message)
        }
      });
    setLoading(false);

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
}