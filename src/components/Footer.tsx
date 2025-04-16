import { CurrentMusic } from "./CurrentMusic";
import { Player } from "./Player";
import { Settings } from "./Settings";

export function Footer() {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
            <CurrentMusic/>
            <Player/>
            <Settings/>
        </footer>
    );
}