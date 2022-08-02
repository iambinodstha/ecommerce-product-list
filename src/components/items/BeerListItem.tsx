import { useMemo, memo } from 'react';
import { Tooltip } from 'flowbite-react';
import { BeerListItems } from '../../utils/types'

type Props = BeerListItems;

const BeerListItem = memo(({ name, tagline, image_url, description, ingredients }: Props) => {
    const tooltipText = useMemo(() => {
        let keys = Object.keys(ingredients);
        return 'ingredients: ' + keys.join(', ');
    }, [ingredients]);

    return (
        <div className="flex col-span-6 lg:col-span-3 border cursor-pointer rounded-md p-5 items-center shadow-md hover:bg-sky-50 hover:shadow-none hover:border-sky-50">

            <Tooltip
                content={<p className='px-2 w-[150px] text-center'>{tooltipText}</p>}
            >
                <div className="h-32 w-20 flex-shrink-0 overflow-hidden">
                    <img className="w-full h-full object-contain" src={image_url} alt={name} />
                </div>
            </Tooltip>

            <div className="ml-6">
                <h1 className="text-xl font-medium text-gray-900">{name}</h1>
                <h2 className="text-sm font-medium text-yellow-500 my-1">{tagline}</h2>
                <p className="text-sm font-normal text-gray-700">{description}</p>

            </div>

        </div >
    )
});

export { BeerListItem };