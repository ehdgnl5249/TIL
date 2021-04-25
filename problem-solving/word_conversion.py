def solution(begin, target, words):
    answer = 0
    stacks = []
    stacks.append(begin)
    visited = { i:0 for i in words }
    if target not in words:
        return 0
    
    while stacks:
        stack = stacks.pop()
        if stack == target:
            return answer
        
        for word in words:
            for i in range(len(word)):
                copy = list(word)
                start = list(stack)
                copy[i] = 0
                start[i] = 0
                if copy == start:
                    if visited[word] == 1:
                        continue
                    visited[word] = 1
                    stacks.append(word)
                    break
        answer += 1
        
    return answer

    # 단어 변환
    # 두 개의 단어 begin, target과 단어의 집합 words
    ## 규칙 
    #1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
    #2. words에 있는 단어로만 변환할 수 있습니다.
    ##
    #두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 
    # 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성