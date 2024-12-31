
import { Sidebar } from "@/components/Sidebar";
import { ToggleDarkMode } from "@/components/ToggleDarkMode";

export default function HomePage() {

  return (
    <main>
      <div className="flex justify-between items-center">
        <Sidebar />
        <ToggleDarkMode />
      </div>
    </main>

  );
}
