// 关于二分查找的细节问题，主要是关于搜素边界的考虑。（开闭区间）

// 正常的二分查找
function binary_search(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // 避免值类型溢出问题（可写可不写）
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
  }
  return -1;
}

// 查找左边界
function binary_search(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // 避免值类型溢出问题（可写可不写）
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] == target) {
      right = mid - 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
  }
  if (left > arr.length || arr[left] !== target) return -1;
  return left;
}

// 查找右边界
function binary_search(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // 避免值类型溢出问题（可写可不写）
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] == target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
  }
  if (right < 0 || arr[right] !== target) return -1;
  return right;
}
