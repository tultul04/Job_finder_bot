import { Award, CheckSquare, FileText, Mic, Send, Square, Trophy, UserCheck } from "lucide-react";

export const jobs = [
  {
    title: 'Frontend Developer',
    company: 'Vercel',
    location: 'Remote',
    salary: '$120,000 - $150,000',
    source: 'LinkedIn',
    logo: 'https://placehold.co/50x50.png',
    dataAiHint: 'company logo',
  },
  {
    title: 'Full Stack Engineer',
    company: 'Stripe',
    location: 'San Francisco, CA',
    salary: '$140,000 - $180,000',
    source: 'LinkedIn',
    logo: 'https://placehold.co/50x50.png',
    dataAiHint: 'company logo',
  },
  {
    title: 'DevOps Engineer Intern',
    company: 'Amazon',
    location: 'Seattle, WA',
    salary: 'Competitive Stipend',
    source: 'Internshala',
    logo: 'https://placehold.co/50x50.png',
    dataAiHint: 'company logo',
  },
  {
    title: 'Backend Developer (Python)',
    company: 'Google',
    location: 'Mountain View, CA',
    salary: '$130,000 - $170,000',
    source: 'LinkedIn',
    logo: 'https://placehold.co/50x50.png',
    dataAiHint: 'company logo',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Microsoft',
    location: 'Redmond, WA',
    salary: 'Competitive Stipend',
    source: 'Internshala',
    logo: 'https://placehold.co/50x50.png',
    dataAiHint: 'company logo',
  },
]

export const news = [
  {
    emoji: '🚀',
    title: 'The Rise of AI in Software Development',
    description: 'Explore how artificial intelligence is revolutionizing the way we build, test, and deploy software, from code generation to automated testing.',
    source: 'TechCrunch',
    time: '2h ago',
  },
  {
    emoji: '💼',
    title: 'Hiring Trends for 2024: What to Expect',
    description: 'A deep dive into the most in-demand tech roles, remote work statistics, and salary benchmarks for the upcoming year.',
    source: 'Forbes',
    time: '5h ago',
  },
  {
    emoji: '📈',
    title: 'Web3 and the Future of the Internet',
    description: 'Understand the core concepts of Web3, including decentralization, blockchain, and NFTs, and their potential impact on the digital landscape.',
    source: 'Wired',
    time: '1d ago',
  },
    {
    emoji: '🔐',
    title: 'Cybersecurity jobs are booming. Here is how to get one.',
    description: 'With the increasing number of cyber threats, the demand for cybersecurity professionals is at an all-time high. Learn the skills you need to enter this field.',
    source: 'TechRadar',
    time: '2d ago',
  },
]

export const roadmapSteps = [
  {
    title: 'Master the Basics',
    description: 'Learn HTML, CSS, and JavaScript. Understand core concepts like the DOM, events, and responsive design.',
    status: 'completed',
  },
  {
    title: 'Learn a Frontend Framework',
    description: 'Pick a popular framework like React, Vue, or Svelte. Build several projects to solidify your knowledge.',
    status: 'in_progress',
  },
  {
    title: 'Understand Backend Development',
    description: 'Learn a backend language (Node.js, Python, Go) and understand databases (SQL, NoSQL), APIs, and authentication.',
    status: 'todo',
  },
    {
    title: 'Explore DevOps & Cloud',
    description: 'Get familiar with CI/CD, Docker, and a cloud provider like AWS or Google Cloud.',
    status: 'todo',
  },
  {
    title: 'Prepare for Interviews',
    description: 'Practice data structures, algorithms, and system design. Use the AI Interview Simulator to get ready.',
    status: 'todo',
  },
]

export const challenges = [
  {
    title: 'Two Sum',
    slug: 'two-sum',
    difficulty: 'Easy',
    status: 'Solved',
    description: 'Given an array of integers `nums` and a integer `target`, return indices of the two numbers such that they add up to `target`.',
    details: `<p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
             <p>You can return the answer in any order.</p>
             <p>&nbsp;</p>
             <p><strong>Example 1:</strong></p>
             <pre><strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].</pre>
             <p>&nbsp;</p>
             <p><strong>Example 2:</strong></p>
             <pre><strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]</pre>
             <p>&nbsp;</p>
             <p><strong>Constraints:</strong></p>
             <ul>
                <li><code>2 <= nums.length <= 10<sup>4</sup></code></li>
                <li><code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code></li>
                <li><code>-10<sup>9</sup> <= target <= 10<sup>9</sup></code></li>
                <li><strong>Only one valid answer exists.</strong></li>
            </ul>`,
    boilerplate: `function twoSum(nums, target) {\n  // Write your code here\n};`
  },
  {
    title: 'Valid Parentheses',
    slug: 'valid-parentheses',
    difficulty: 'Easy',
    status: 'Attempted',
    description: 'Given a string `s` containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
    details: `<p>An input string is valid if:</p>
            <ol>
            <li>Open brackets must be closed by the same type of brackets.</li>
            <li>Open brackets must be closed in the correct order.</li>
            <li>Every close bracket has a corresponding open bracket of the same type.</li>
            </ol>
            <p>&nbsp;</p>
            <p><strong>Example 1:</strong></p>
            <pre><strong>Input:</strong> s = "()"
<strong>Output:</strong> true</pre>
            <p><strong>Example 2:</strong></p>
            <pre><strong>Input:</strong> s = "()[]{}"
<strong>Output:</strong> true</pre>
            <p>&nbsp;</p>
            <p><strong>Constraints:</strong></p>
            <ul>
                <li><code>1 <= s.length <= 10<sup>4</sup></code></li>
                <li><code>s</code> consists of parentheses only <code>'()[]{}'</code>.</li>
            </ul>`,
    boilerplate: `function isValid(s) {\n  // Write your code here\n};`
  },
  {
    title: 'Merge Two Sorted Lists',
    slug: 'merge-two-sorted-lists',
    difficulty: 'Easy',
    status: 'Not Started',
    description: 'Merge two sorted linked lists and return it as a new sorted list.',
    details: `<p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p>
             <p>Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p>
             <p>Return <em>the head of the merged linked list</em>.</p>
             <p>&nbsp;</p>
             <p><strong>Example 1:</strong></p>
             <pre><strong>Input:</strong> list1 = [1,2,4], list2 = [1,3,4]
<strong>Output:</strong> [1,1,2,3,4,4]</pre>
             <p>&nbsp;</p>
             <p><strong>Constraints:</strong></p>
             <ul>
                <li>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li>
                <li><code>-100 <= Node.val <= 100</code></li>
                <li>Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</strong> order.</li>
            </ul>`,
    boilerplate: `function mergeTwoLists(list1, list2) {\n  // Write your code here\n};`
  },
    {
    title: 'Palindrome Number',
    slug: 'palindrome-number',
    difficulty: 'Easy',
    status: 'Not Started',
    description: 'Given an integer x, return true if x is a palindrome, and false otherwise.',
    details: `<p><strong>Example 1:</strong></p>
             <pre><strong>Input:</strong> x = 121
<strong>Output:</strong> true
<strong>Explanation:</strong> 121 reads as 121 from left to right and from right to left.</pre>
             <p><strong>Example 2:</strong></p>
             <pre><strong>Input:</strong> x = -121
<strong>Output:</strong> false
<strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.</pre>
             <p>&nbsp;</p>
             <p><strong>Constraints:</strong></p>
            <ul>
                <li><code>-2<sup>31</sup> <= x <= 2<sup>31</sup> - 1</code></li>
            </ul>`,
    boilerplate: `function isPalindrome(x) {\n  // Write your code here\n};`
  },
  {
    title: 'Longest Substring Without Repeating Characters',
    slug: 'longest-substring-without-repeating-characters',
    difficulty: 'Medium',
    status: 'Not Started',
    description: 'Given a string `s`, find the length of the longest substring without repeating characters.',
    details: `<p><strong>Example 1:</strong></p>
             <pre><strong>Input:</strong> s = "abcabcbb"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "abc", with the length of 3.</pre>
             <p><strong>Example 2:</strong></p>
             <pre><strong>Input:</strong> s = "bbbbb"
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is "b", with the length of 1.</pre>
             <p>&nbsp;</p>
             <p><strong>Constraints:</strong></p>
            <ul>
                <li><code>0 <= s.length <= 5 * 10<sup>4</sup></code></li>
                <li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
            </ul>`,
    boilerplate: `function lengthOfLongestSubstring(s) {\n  // Write your code here\n};`
  },
  {
    title: 'Container With Most Water',
    slug: 'container-with-most-water',
    difficulty: 'Medium',
    status: 'Not Started',
    description: 'Find two lines that together with the x-axis form a container, such that the container contains the most water.',
    details: `<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i</code>th line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>
    <p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>
    <p>Return the maximum amount of water a container can store.</p>
    <p><strong>Notice</strong> that you may not slant the container.</p>
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>
    <pre><strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]
<strong>Output:</strong> 49
<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.</pre>
    <p>&nbsp;</p>
    <p><strong>Constraints:</strong></p>
    <ul>
        <li><code>n == height.length</code></li>
        <li><code>2 <= n <= 10<sup>5</sup></code></li>
        <li><code>0 <= height[i] <= 10<sup>4</sup></code></li>
    </ul>`,
    boilerplate: `function maxArea(height) {\n  // Write your code here\n};`
  },
    {
    title: '3Sum',
    slug: '3sum',
    difficulty: 'Medium',
    status: 'Not Started',
    description: 'Find all unique triplets in the array which gives the sum of zero.',
    details: `<p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>
             <p><strong>Notice</strong> that the solution set must not contain duplicate triplets.</p>
             <p>&nbsp;</p>
             <p><strong>Example 1:</strong></p>
             <pre><strong>Input:</strong> nums = [-1,0,1,2,-1,-4]
<strong>Output:</strong> [[-1,-1,2],[-1,0,1]]</pre>
             <p>&nbsp;</p>
             <p><strong>Constraints:</strong></p>
             <ul>
                <li><code>3 <= nums.length <= 3000</code></li>
                <li><code>-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup></code></li>
            </ul>`,
    boilerplate: `function threeSum(nums) {\n  // Write your code here\n};`
  },
  {
    title: 'Median of Two Sorted Arrays',
    slug: 'median-of-two-sorted-arrays',
    difficulty: 'Hard',
    status: 'Not Started',
    description: 'Given two sorted arrays `nums1` and `nums2`, return the median of the two sorted arrays.',
    details: `<p>Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return <strong>the median</strong> of the two sorted arrays.</p>
    <p>The overall run time complexity should be <code>O(log (m+n))</code>.</p>
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>
    <pre><strong>Input:</strong> nums1 = [1,3], nums2 = [2]
<strong>Output:</strong> 2.00000
<strong>Explanation:</strong> merged array = [1,2,3] and median is 2.</pre>
    <p><strong>Example 2:</strong></p>
    <pre><strong>Input:</strong> nums1 = [1,2], nums2 = [3,4]
<strong>Output:</strong> 2.50000
<strong>Explanation:</strong> merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.</pre>
    <p>&nbsp;</p>
    <p><strong>Constraints:</strong></p>
    <ul>
        <li><code>nums1.length == m</code></li>
        <li><code>nums2.length == n</code></li>
        <li><code>0 <= m <= 1000</code></li>
        <li><code>0 <= n <= 1000</code></li>
        <li><code>1 <= m + n <= 2000</code></li>
        <li><code>-10<sup>6</sup> <= nums1[i], nums2[i] <= 10<sup>6</sup></code></li>
    </ul>`,
    boilerplate: `function findMedianSortedArrays(nums1, nums2) {\n  // Write your code here\n};`
  },
  {
    title: 'Trapping Rain Water',
    slug: 'trapping-rain-water',
    difficulty: 'Hard',
    status: 'Not Started',
    description: 'Given `n` non-negative integers representing an elevation map, compute how much water it can trap after raining.',
    details: `<p>Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is <code>1</code>, compute how much water it can trap after raining.</p>
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>
    <pre><strong>Input:</strong> height = [0,1,0,2,1,0,1,3,2,1,2,1]
<strong>Output:</strong> 6
<strong>Explanation:</strong> The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.</pre>
    <p><strong>Example 2:</strong></p>
    <pre><strong>Input:</strong> height = [4,2,0,3,2,5]
<strong>Output:</strong> 9</pre>
    <p>&nbsp;</p>
    <p><strong>Constraints:</strong></p>
    <ul>
        <li><code>n == height.length</code></li>
        <li><code>1 <= n <= 2 * 10<sup>4</sup></code></li>
        <li><code>0 <= height[i] <= 10<sup>5</sup></code></li>
    </ul>`,
    boilerplate: `function trap(height) {\n  // Write your code here\n};`
  },
    {
    title: 'Largest Rectangle in Histogram',
    slug: 'largest-rectangle-in-histogram',
    difficulty: 'Hard',
    status: 'Not Started',
    description: 'Given an array of integers `heights` representing the histogram\'s bar height, find the area of the largest rectangle in the histogram.',
    details: `<p>Given an array of integers <code>heights</code> representing the histogram's bar height where the width of each bar is 1, return <em>the area of the largest rectangle in the histogram</em>.</p>
             <p>&nbsp;</p>
             <p><strong>Example 1:</strong></p>
             <pre><strong>Input:</strong> heights = [2,1,5,6,2,3]
<strong>Output:</strong> 10
<strong>Explanation:</strong> The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.</pre>
             <p>&nbsp;</p>
             <p><strong>Constraints:</strong></p>
             <ul>
                <li><code>1 <= heights.length <= 10<sup>5</sup></code></li>
                <li><code>0 <= heights[i] <= 10<sup>4</sup></code></li>
            </ul>`,
    boilerplate: `function largestRectangleArea(heights) {\n  // Write your code here\n};`
  },
]

export const badgeIcons: { [key: string]: React.ElementType } = {
  UserCheck,
  Send,
  Mic,
  FileText,
  Award,
  Trophy,
}

export const userBadges = [
    { name: 'Profile Pro', icon: 'UserCheck', completed: true },
    { name: 'First Five', icon: 'Send', completed: true },
    { name: 'Interview Ace', icon: 'Mic', completed: true },
    { name: 'Resume Rockstar', icon: 'FileText', completed: false },
    { name: 'Apprentice', icon: 'Award', completed: true },
]

export const badges = [
  {
    name: 'Profile Pro',
    icon: 'UserCheck',
    description: 'Complete your user profile to 100%.',
    completed: true,
  },
  {
    name: 'First Five',
    icon: 'Send',
    description: 'Apply to your first five job postings.',
    completed: true,
  },
  {
    name: 'Interview Ace',
    icon: 'Mic',
    description: 'Complete five sessions with the AI Interview Simulator.',
    completed: true,
  },
  {
    name: 'Resume Rockstar',
    icon: 'FileText',
    description: 'Achieve a resume score of 90 or higher.',
    completed: false,
  },
  {
    name: 'Challenge Champion',
    icon: 'Trophy',
    description: 'Solve five coding challenges.',
    completed: false,
  },
  {
    name: 'Apprentice',
    icon: 'Award',
    description: 'Reach user level 5.',
    completed: true,
  },
]

export const sliderImages = [
  {
    src: 'https://placehold.co/1920x1080.png',
    alt: 'Abstract background image 1',
    dataAiHint: 'dark abstract'
  },
  {
    src: 'https://placehold.co/1920x1080.png',
    alt: 'Abstract background image 2',
    dataAiHint: 'dark code'
  },
  {
    src: 'https://placehold.co/1920x1080.png',
    alt: 'Abstract background image 3',
    dataAiHint: 'dark geometric'
  },
];
