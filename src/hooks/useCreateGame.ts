import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from '@/constants';

export const useCreateGame = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      fetch(`${API_URL}/api/games`, { method: 'POST' }).then(res => res.json()),
    onSuccess: (data: any) => {
      queryClient.setQueryData(['games', data.id], data);
    },
  });
};
