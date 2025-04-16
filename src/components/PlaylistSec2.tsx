import Image from "next/image";

export function PlaylistSec2() {
    return (
        <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image className='w-full' src="/333.jpg" width={120} height={120} alt="Capa do Álbm"/>
            <strong className='font-semibold'>333</strong>
            <span className='text-sm text-zinc-400'>Matuê, 30PRAUM</span>
        </a>
    );
}