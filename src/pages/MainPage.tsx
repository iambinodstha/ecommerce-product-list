import { Fragment } from "react";
import {
    useInfiniteQuery,
} from "@tanstack/react-query";

import { BeerListItems } from "../utils/types";
import { ReactComponent as DownArrowIcon } from '../assets/svg/down-arrow.svg';
import { fetchBeerLists } from "../services";
import { BeerListItem } from "../components/items";

type Props = {}

function BeerLists(props: Props) {
    const {
        status,
        data,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(
        ['beers'],
        ({ pageParam = 1 }) =>
            fetchBeerLists(pageParam),
        {
            getNextPageParam: (lastPage, pages) => {
                const morePagesExist = lastPage?.length === 10
                if (!morePagesExist) return undefined;
                return pages.length + 1
            },
        },
    )

    return (
        <div className="w-full py-6 px-10 lg:py-12 lg:px-20 flex flex-col">
            {status === "loading" && <div className="loader self-center"/>}
            {status === "error" && <h1 className="self-center">Error:</h1>}

            {status !== "loading" && <h2 className="text-xl text-gray-500 font-medium mb-4">Beers</h2>}
            <div className="grid grid-cols-6 gap-8">
                {data?.pages?.map((page, index) => (
                    <Fragment key={index}>
                        {page.map(({ id, name, tagline, image_url, description, ingredients }: BeerListItems) => (
                            <BeerListItem
                                key={id}
                                id={id}
                                name={name}
                                tagline={tagline}
                                image_url={image_url}
                                description={description}
                                ingredients={ingredients}
                            />
                        ))}
                    </Fragment>
                ))}
            </div>

            <div className="mt-6 self-center">
                {isFetchingNextPage && <div className="loader"/>}
                {(hasNextPage && !isFetchingNextPage) && (
                    <button
                        className="text-blue-600 text-base font-medium flex items-center"
                        onClick={() => fetchNextPage()}
                    >
                        <span className="mr-2">load more</span>
                        <DownArrowIcon className="w-3 h-3 fill-blue-600 mt-1" />
                    </button>
                )}
            </div>
        </div>
    )
}

export default BeerLists;