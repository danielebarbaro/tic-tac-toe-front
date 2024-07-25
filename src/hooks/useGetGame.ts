import { useMutation, useQuery } from '@tanstack/react-query';
import { API_URL } from '@/constants';

export const useGetGame = (gameId?: string) => {
  return useQuery({
    queryKey: ['games', gameId],
    queryFn: () =>
      fetch(`${API_URL}/api/games/` + gameId).then(res => res.json()),
    enabled: !!gameId,
  });
};
