export async function POST(request) {
    try {
      const data = await request.json();
  
      const { username, email, message } = data;
  
      if (!username || !email || !message) {
        return new Response(JSON.stringify({ error: "All fields are required" }), {
          status: 400,
        });
      }
  
      // Example: log message to server console (replace with DB or email logic)
      console.log("New contact message:", data);
  
      return new Response(JSON.stringify({ success: true, message: "Message sent!" }), {
        status: 200,
      });
    } catch (error) {
      console.error(error);
      return new Response(
        JSON.stringify({ error: "Server error. Please try again later." }),
        { status: 500 }
      );
    }
  }
  