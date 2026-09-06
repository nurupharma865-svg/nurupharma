import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "/app.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-gray-500">Redirection vers PharmaSys...</p>
    </div>
  );
}

export default App;
