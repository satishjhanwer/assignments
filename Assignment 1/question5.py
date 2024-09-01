from collections import defaultdict, deque

MOD = 10**9 + 7

def count_paths(vertices, source, edges):
    # Initialize graph adjacency list
    graph = defaultdict(list)
    for u, v in edges:
        graph[u].append(v)
    
    # Initialize path counts
    path_count = [0] * (vertices + 1)
    path_count[source] = 1
    
    # BFS initialization
    queue = deque([source])
    
    # BFS traversal
    while queue:
        u = queue.popleft()
        for v in graph[u]:
            if path_count[v] == 0:  # Node v hasn't been visited yet
                queue.append(v)
            path_count[v] = (path_count[v] + path_count[u]) % MOD
    
    # Calculate total number of paths
    total_paths = sum(path_count) % MOD
    return total_paths

def main():
    V, E, S = map(int, input().split())
    
    edges = [tuple(map(int, input().split())) for _ in range(E)]
    
    print(count_paths(V, S, edges))

main()
