import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Öğretmen Asistanı. Bir <Link to={"https://www.esmaogretmen.com"}>www.esmaogretmen.com</Link> girişimidir.
        </div>
      </div>
    </footer>
  );
}