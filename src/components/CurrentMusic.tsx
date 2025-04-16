import Image from "next/image";

export function CurrentMusic() {
    return (
        <div className='flex items-center gap-3'>
            <Image className='w-full' src="/333.jpg" width={56} height={56} alt="Capa do Álbum"/>
            <div className='flex flex-col'>
                <strong className='font-normal'>04AM</strong>
                <span className='text-xs text-zinc-400'>Matuê</span>
            </div>
        </div>
    );
}