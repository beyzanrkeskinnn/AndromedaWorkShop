import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Digital Art Gallery",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr10kjh8drqk9zna6ddauffaqfq2qkhsflq9u0f0zuaawp6vuqeyvfsm4gheg",
            cw721: "andr1vuzd4qretc03zzndgnqyhxd4czx6v5rz5eqrmednmvqkyyglqj9s5zrrnr",
            name: "NFT Gallery",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
            featured: "ANDR1"
        },

    ],
};

export default CONFIG;
