from typing import List
import collections
# a a
class Solution:
	def subarraySum(self, nums: List[int], k: int) -> int:

		ans=0
		prefsum=0
        # prefix_sums = collections.defaultdict(int)
		prefix_sums = collections.defaultdict(int)

		for num in nums:
			prefsum = prefsum + num

			if prefsum-k in prefix_sums:
				ans = ans + prefix_sums[prefsum-k]
 
			if prefsum not in prefix_sums:
				prefix_sums[prefsum] = 1
			else:
				prefix_sums[prefsum] = prefix_sums[prefsum]+1
		print(prefix_sums)
		return ans
	
if __name__ == "__main__":
	assert Solution().subarraySum([5, 1, 2, 7, 3, 4], 8) == 3