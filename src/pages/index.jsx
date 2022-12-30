import Link from 'next/link'

export default function Index() {
    return (
        <div className='flex items-center flex-col justify-center h-screen'>
            <h1 className='font-medium leading-tight text-5xl mt-0 mb-2 text-green-600'>Spilo Coaching</h1>
            <p className='font-light text-gray-500 dark:text-gray-800'>Choose your coaching style</p>
            <div className="border grid grid-cols-2 gap-4 justify-between">
                <div className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    <Link href="/book/in-depth" legacyBehavior>
                        <div>
                            <button>In Depth</button>
                            <p> Description about type here... </p>
                        </div>
                    </Link>    
                </div>
                
                <div className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    <Link href="/book/gameplay" legacyBehavior>
                        <div>
                            <button>30 Minute Gameplay</button>
                            <p> Description about type here... </p>
                        </div>
                    </Link>    
                </div>
                
                <div className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    <Link href="/book/private" legacyBehavior>
                        <div>
                            <button>Private</button>
                            <p> Description about type here... </p>
                        </div>
                    </Link>    
                </div>
                
                <div className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    <Link href="/book/team" legacyBehavior>
                        <div>
                            <button>Team</button>
                            <p> Description about type here... </p>
                        </div>
                    </Link>     
                </div>
               
            </div>
        </div>
    )
}