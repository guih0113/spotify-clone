import { Play } from "lucide-react";
import Image from "next/image";
import { PlaylistSec1 } from "./PlaylistSec1";

export function FirstSection() {
    return (
        <section>
            <h1 className='font-semibold text-3xl mt-10 '>Good Afternoon</h1>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                <PlaylistSec1/>
                <PlaylistSec1/>
                <PlaylistSec1/>
                <PlaylistSec1/>
                <PlaylistSec1/>
                <PlaylistSec1/>
            </div>
        </section>
    )
}