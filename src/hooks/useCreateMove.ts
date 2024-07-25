import {useMutation, useQueryClient} from "@tanstack/react-query";
import {API_URL} from "@/constants";

export const useCreateMove = (gameId?: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (move: any) => fetch(`${API_URL}/api/games/` + gameId + '/moves', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(move), // {player: 1|-1, position: 1}
        }).then((res) => res.json()),
        onSuccess: (data: any) => {
            if (gameId) {
                // run again the query for the game
                queryClient.invalidateQueries({queryKey: ['games', gameId]});
            }
        },
    })
}