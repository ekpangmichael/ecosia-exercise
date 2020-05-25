export async function healthCheck() {
  const message = "app is online"
    return {
      data: message,
      success: true,
      status: 200,
    };
  }
  
  