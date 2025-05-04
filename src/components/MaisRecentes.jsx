import { Clock8 } from 'lucide-react';

import Card from './Card';


function maisRecentes(){
    return(
        <section className="w-full">
            <h2 className='text-center text-3xl'>Postagens Recentes</h2>
            <div className='flex justify-around mt-10'>
                <Card/>
            </div>
            
        </section>
    )
}
export default maisRecentes