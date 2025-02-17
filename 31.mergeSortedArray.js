// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 ,Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0 ,Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

var merge = function(nums1, m, nums2, n) {
    let i=m-1;   //pointer nums1-end
    let j=n-1;   //pointer nums2-end
    let k=m+n-1;  //pointer nums1-full length
    while(j>=0)
    {
        if(i>=0 && nums1[i]>nums2[j])
        {
            nums1[k]=nums1[i];
            i--;
        }
        else
        {
            nums1[k]=nums2[j];
            j--;
        }
        k--;
    }
};
 let nums1=[1,2,3,0,0,0],m=3;
 let nums2=[2,5,6],n=3;
 merge(nums1,m,nums2,n);
 console.log(nums1);
     nums3=[1],m=1;
     nums4=[],n=0;
     merge(nums3,m,nums4,n);
     console.log(nums3);
