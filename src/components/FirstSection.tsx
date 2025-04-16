import { Play } from "lucide-react";
import Image from "next/image";

export function FirstSection() {
    return (
        <section>
            <h1 className='font-semibold text-3xl mt-10 '>Good Afternoon</h1>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                <a href='' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/333.jpg" width={104} height={104} alt="Capa do Álbm"/>
                    <strong>333</strong>
                    <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play fill='bg-black'/>
                    </button>
                </a>
                <a href='' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/333.jpg" width={104} height={104} alt="Capa do Álbm"/>
                    <strong>333</strong>
                    <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play fill='bg-black'/>
                    </button>
                </a>
                <a href='' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/333.jpg" width={104} height={104} alt="Capa do Álbm"/>
                    <strong>333</strong>
                    <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play fill='bg-black'/>
                    </button>
                </a>
                <a href='' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/333.jpg" width={104} height={104} alt="Capa do Álbm"/>
                    <strong>333</strong>
                    <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play fill='bg-black'/>
                    </button>
                </a>
                <a href='' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/333.jpg" width={104} height={104} alt="Capa do Álbm"/>
                    <strong>333</strong>
                    <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play fill='bg-black'/>
                    </button>
                </a>
                <a href='' className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/333.jpg" width={104} height={104} alt="Capa do Álbm"/>
                    <strong>333</strong>
                    <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play fill='bg-black'/>
                    </button>
                </a>
            </div>
        </section>
    )
}