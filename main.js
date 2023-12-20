const resize = () => {
    size.width = window.innerWidth * (fullScreen ? 0.92 : 0.6);
    size.height = window.innerHeight * (fullScreen ? 0.9 : 0.4);
    
    
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
  
    
    renderer.setSize(size.width, size.height);
  };
  
  
  window.addEventListener("resize", resize);
  