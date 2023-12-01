var isSameTree = function(p, q) {
    const queue = [p, q];
  
    while (queue.length > 0) {
      const nodeP = queue.shift();
      const nodeQ = queue.shift();
  
      if (!nodeP && !nodeQ) continue;
      if (!nodeP || !nodeQ || nodeP.val !== nodeQ.val) return false;
  
      queue.push(nodeP.left, nodeQ.left);
      queue.push(nodeP.right, nodeQ.right);
    }
  
    return true;
  };