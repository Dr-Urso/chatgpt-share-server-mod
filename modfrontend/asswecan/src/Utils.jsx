
function rootdomain() {
    // 获取当前页面的协议，如'http:'或'https:'
    const protocol = window.location.protocol;
    
    // 获取当前页面的主机名，如'example.com'
    const hostname = window.location.hostname;
    
    // 获取端口号（如果URL中指定了端口）
    const port = window.location.port;
  
    // 构造根域名，如果存在端口号，则包括端口号
    const rootDomain = `${protocol}//${hostname}${port ? `:${port}` : ''}`;
  
    return (rootDomain);

  }
  
  export default rootdomain;