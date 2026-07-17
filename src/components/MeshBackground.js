import React from "react";

const MeshBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      {/* Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-dot-matrix opacity-100" />

      {/* Decorative Radial Gradients / Lighting Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/10 dark:bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/10 dark:bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-indigo-400/5 dark:bg-purple-500/5 blur-[100px] pointer-events-none" />
    </div>
  );
};

export default MeshBackground;
