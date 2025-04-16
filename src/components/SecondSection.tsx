import Image from "next/image"
import { PlaylistSec2 } from "./PlaylistSec2";

export function SecondSection() {
    return (
        <section>
            <h2 className='font-semibold text-2xl mt-10 '>Made for Guilherme Henrique</h2>
            <div className='grid grid-cols-8 gap-4 mt-4'>
                <PlaylistSec2/>
                <PlaylistSec2/>
                <PlaylistSec2/>
                <PlaylistSec2/>
                <PlaylistSec2/>
                <PlaylistSec2/>
            </div>
        </section>
    );
}